import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import CryptoJS from "crypto-js";
import { useRouter } from "next/router";

// COMPONENT IMPORTS
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { FiRefreshCw } from "react-icons/fi";
import { Oval } from "react-loader-spinner";
import { useTranslation } from "react-i18next";
import Context from "../context/context";

const OnlineComplaint = () => {
  const router = useRouter();
  const [records, setrecords] = useState([]);
  const [otpScreen, setOtpScreen] = useState(false);
  // FORM STATES
  const [fullName, setFullName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPincode] = useState("");
  const [policeStation, setPoliceStation] = useState("");
  const [complaint, setComplaint] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [files, setfiles] = useState(null);
  const [fileErr, setfileErr] = useState(false);

  const [isloading, setisloading] = useState(false);
  const Ctx = useContext(Context);
  const { t } = useTranslation();

  //otp screen

  const [otpinput, setotpinput] = useState("");

  const [hashedOtp, sethashedOtp] = useState("");

  //captcha

  const [svg, setSvg] = useState(null);
  const [text, settext] = useState("");

  const [captchaInput, setcapchaInput] = useState("");

  const handleFileChange = (e) => {
    setfileErr(false);
    const files = e.target.files;
    let totalSize = 0;

    // Check if number of files exceeds 5
    if (files.length > 5) {
      setfileErr(true);
      e.target.value = ""; // Clear the input field
      return;
    }

    // Iterate through each selected file
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      totalSize += file.size;

      // Check if individual file size exceeds 5MB
      if (file.size > 5 * 1024 * 1024) {
        setfileErr(true);
        e.target.value = ""; // Clear the input field
        return;
      }
    }

    // Check if total size of selected files exceeds 5MB
    if (totalSize > 5 * 1024 * 1024) {
      setfileErr(true);
      e.target.value = ""; // Clear the input field
      return;
    }

    // If all checks pass, set the selected files
    setfileErr(false);
    setfiles(files);
  };

  // FORM HANDLERS

  const formSubmitHandlerPre = async (e) => {
    e.preventDefault();
    if (
      !fullName ||
      !contactNo ||
      !email ||
      !policeStation ||
      !complaint ||
      !isChecked
    ) {
      return;
    }

    if (contactNo.length !== 10) {
      notifyPopUp("10 digit Contact no required !");
      return;
    }

    if (captchaInput !== text) {
      notifycaptcha();
      return;
    }

    if (files) {
      const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".pdf"]; // Add your allowed extensions here
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileExtension = file.name
          .toLowerCase()
          .substring(file.name.lastIndexOf("."));
        if (allowedExtensions.includes(fileExtension)) {
        } else {
          notifyPopUp("Opps invalid file extension!");
          return;
        }
      }
    }
    sendOTP();

    setOtpScreen(true);
  };

  const formSubmitHandler = async (e) => {
    setisloading(true);
    if (!fullName || !contactNo || !email || !policeStation || !complaint) {
      return;
    }
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("contactNo", contactNo);
    formData.append("email", email);
    formData.append("street", street);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("country", country);
    formData.append("pinCode", pinCode);
    formData.append("complaint", complaint);
    formData.append("psId", policeStation);

    // if (files) {
    //   for (let i = 0; i < files.length; i++) {
    //     formData.append("files", files[i]);
    //   }
    // }

    if (files) {
      const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".pdf"]; // Add your allowed extensions here
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileExtension = file.name
          .toLowerCase()
          .substring(file.name.lastIndexOf("."));
        if (allowedExtensions.includes(fileExtension)) {
          formData.append("files", file);
        } else {
          notifyPopUp("Opps invalid file extension!");
        }
      }
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/add-complaint`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setisloading(false);
        notifySuccess();
        router.push(`/online-complaint-form/${data.id}`);
        // resetHandler();
      } else {
        notifyWarn();
        setisloading(false);
      }
    } catch (error) {
      notifyWarn();
      setisloading(false);
    }
  };

  const sendOTP = async () => {
    // const otp = generateOTP();
    // setcode(otp);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/generate-otp?phonenumber=${contactNo}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      sethashedOtp(data.data);

      if (data) {
      } else {
        //   notifyWarn();
      }
    } catch (error) {
      // notifyWarn();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const hashedData = CryptoJS.SHA256(otpinput).toString(CryptoJS.enc.Hex);

    if (hashedData === hashedOtp) {
      //   console.log("now submitting form");
      formSubmitHandler();
    } else {
      notifyWrongOtp();
    }
  };

  const resetHandler = () => {
    setFullName("");
    setContactNo("");
    setEmail("");
    setStreet("");
    setAddress("");
    setCity("");
    setState("");
    setCountry("");
    setPincode("");
    setPoliceStation("");
    setComplaint("");
    setfiles("");
    setIsChecked(false);
    setcapchaInput("");
    document.getElementById("fileUpload").value = "";
    refreshCaptcha();
  };

  const fetchrecords = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-stations`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data.stations) {
        // console.log(data.records);
        setrecords(data.stations);
      } else {
        //   notifyWarn();
      }
    } catch (error) {
      // notifyWarn();
    }
  };

  const fetchCaptcha = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/captcha`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data.captcha) {
        setSvg(data.captcha.svg);
        settext(data.captcha.text);
      } else {
        //   notifyWarn();
      }
    } catch (error) {
      // notifyWarn();
    }
  };

  useEffect(() => {
    fetchrecords();
    fetchCaptcha();
  }, []);

  const refreshCaptcha = () => {
    fetchCaptcha();
  };

  const notifycaptcha = () => {
    toast.error("wrong captcha !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  const notifyWrongOtp = () => {
    toast.error("wrong OTP !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  const notifySuccess = () => {
    toast.success("Complaint Submitted successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  const notifyWarn = () => {
    toast.warn("oops something went wrong!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const notifyPopUp = (text) => {
    toast.warn(text, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/logo-new.jpg" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Welcome to the official website of Dhule Police. Stay informed and connected with our community-focused initiatives and safety measures."
        />
        <meta property="og:title" content="Dhule Police" />
        <meta
          property="og:description"
          content="Official website of Dhule Police"
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/dmafmaoif/image/upload/v1735280919/logo-new_thddod.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Official website of Dhule Police"
        />
        <meta name="twitter:title" content="Dhule Police" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dmafmaoif/image/upload/v1735280919/logo-new_thddod.png"
        />

        <title>Online complaint | Dhule Police</title>
      </Head>
      <main className="min-h-screen">
        {/* NAVBAR */}
        <Navbar />
        <ToastContainer autoClose={2000} />

        <div className=" font-nunito">
          <h1 className="text-center text-4xl text-gray-700 mt-10">
            {t("online_complaint")}
          </h1>
          <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>

          {!otpScreen && (
            <div className="font-nunito w-4/5 sm:w-[70%] xl:w-3/5 mt-10 mx-auto">
              <form onSubmit={formSubmitHandlerPre}>
                {/* USER INFORMATION */}
                <div className="flex flex-col lg:flex-row lg:justify-between">
                  <div className="w-full lg:w-1/3 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="fullName"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("full_name")} *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                      value={fullName}
                      onChange={(e) => {
                        const input = e.target.value;
                        if (input.length <= 250) {
                          setFullName(input);
                        } else {
                          // Truncate the input to 300 characters
                          setFullName(input.slice(0, 250));
                        }
                      }}
                      placeholder={t("full_name_ex")}
                      required={true}
                    />
                  </div>
                  <div className="w-full lg:w-1/3 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="contactNo"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("contact_no")} *
                    </label>
                    <input
                      type="tel"
                      id="contactNo"
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                      value={contactNo}
                      onChange={(e) => {
                        const input = e.target.value;
                        const regex = /^[0-9]*$/; // Regular expression to allow only numeric characters
                        if (regex.test(input) || input === "") {
                          // If input matches the regex or is empty, update state
                          setContactNo(input);
                        }
                      }}
                      placeholder="9899999999"
                      required={true}
                      inputMode="numeric"
                      maxLength="10"
                    />
                  </div>

                  <div className="w-full lg:w-1/3 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="email"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("email_id")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                      value={email}
                      onChange={(e) => {
                        const input = e.target.value;
                        if (input.length <= 250) {
                          setEmail(input);
                        } else {
                          // Truncate the input to 300 characters
                          setEmail(input.slice(0, 250));
                        }
                      }}
                      placeholder="example@gmail.com"
                      required={true}
                    />
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
                  <div className="w-full lg:w-1/3 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="street"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("flat_street")}
                    </label>
                    <input
                      type="text"
                      id="street"
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      placeholder="1209"
                    />
                  </div>
                  <div className="w-full lg:w-1/3 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="address"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("address")}
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                      value={address}
                      onChange={(e) => {
                        const input = e.target.value;
                        if (input.length <= 250) {
                          setAddress(input);
                        } else {
                          // Truncate the input to 300 characters
                          setAddress(input.slice(0, 250));
                        }
                      }}
                      placeholder={t("address_ex")}
                    />
                  </div>

                  <div className="w-full lg:w-1/3 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="city"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("city")}
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                      value={city}
                      onChange={(e) => {
                        const input = e.target.value;
                        if (input.length <= 250) {
                          setCity(input);
                        } else {
                          // Truncate the input to 300 characters
                          setCity(input.slice(0, 250));
                        }
                      }}
                      placeholder={t("city_ex")}
                    />
                  </div>
                </div>

                <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
                  <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="state"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("state")}
                    </label>
                    <input
                      type="text"
                      id="state"
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                      value={state}
                      onChange={(e) => {
                        const input = e.target.value;
                        if (input.length <= 250) {
                          setState(input);
                        } else {
                          // Truncate the input to 300 characters
                          setState(input.slice(0, 250));
                        }
                      }}
                      placeholder={t("state_ex")}
                    />
                  </div>

                  <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="country"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("country")}
                    </label>
                    <input
                      type="text"
                      id="country"
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                      value={country}
                      onChange={(e) => {
                        const input = e.target.value;
                        if (input.length <= 250) {
                          setCountry(input);
                        } else {
                          // Truncate the input to 300 characters
                          setCountry(input.slice(0, 250));
                        }
                      }}
                      placeholder={t("country_ex")}
                    />
                  </div>
                </div>

                <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
                  <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="pincode"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("pin_code")}
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                      value={pinCode}
                      onChange={(e) => {
                        const input = e.target.value;
                        const regex = /^[0-9]*$/; // Regular expression to allow only numeric characters
                        if (regex.test(input) || input === "") {
                          // If input matches the regex or is empty, update state
                          setPincode(input);
                        }
                      }}
                      placeholder="400010"
                      inputMode="numeric"
                      maxLength="6"
                    />
                  </div>

                  <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="policeStation"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("select_police_station")} *
                    </label>
                    <select
                      id="policeStation"
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                      value={policeStation}
                      onChange={(e) => setPoliceStation(e.target.value)}
                      required={true}
                    >
                      <option value="">{t("select_police_station")}</option>

                      {records.map((record) => {
                        return (
                          <option value={record._id} key={record._id}>
                            {Ctx.lang === "en" && <>{record.name}</>}
                            {Ctx.lang === "mr" && <>{record.name_in_marathi}</>}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                {/* COMPLAINT DESCRIPTION */}
                <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
                  <div className="w-full flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="complaint"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("complaint")} *
                    </label>
                    <textarea
                      type="text"
                      id="complaint"
                      rows="5"
                      className="px-3 py-2 border border-slate-400 focus:border-blue-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm max-h-48"
                      value={complaint}
                      onChange={(e) => {
                        const input = e.target.value;
                        if (input.length <= 3000) {
                          setComplaint(input);
                        } else {
                          // Truncate the input to 300 characters
                          setComplaint(input.slice(0, 3000));
                        }
                      }}
                      placeholder=""
                      required={true}
                    />
                  </div>
                </div>

                {/* FILE UPLOAD */}
                <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
                  <div className="w-full flex flex-col mx-0 lg:mx-2">
                    <span className="text-sm italic text-slate-700">
                      Max 5 MB
                    </span>
                    <label
                      htmlFor="fileUpload"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      Select Files to Upload
                    </label>
                    <input
                      type="file"
                      id="fileUpload"
                      multiple
                      accept=".pdf,.webp,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange(e)}
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm max-h-48"
                    />

                    {fileErr && (
                      <p className="text-red-600 text-sm">
                        File size exceeds the limit (5MB). Please choose a
                        smaller file
                      </p>
                    )}
                  </div>
                </div>

                {/* CONFIRMATION CHECK */}
                <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
                  <div className="w-full flex">
                    <div className="w-[5%] mx-2">
                      <input
                        type="checkbox"
                        className="w-5 h-5"
                        checked={isChecked}
                        required={true}
                        onClick={() => {
                          setIsChecked((prevState) => !prevState);
                          // console.log(isChecked);
                        }}
                      />
                    </div>
                    <div className="w-[95%] text-slate-700 leading-relaxed mx-2 text-justify">
                      <p className="text-lg">{t("complaint_p1")}</p>
                      <span className="text-2xl font-semibold my-2 inline-block">
                        {t("disclaimer_form")} :
                      </span>
                      <p className="text-lg">{t("complaint_p2")}</p>
                      <p className="text-lg mt-3">{t("complaint_p3")}</p>
                    </div>
                  </div>
                </div>

                {/* CAPTCHA */}
                <div className="py-5 my-5 flex flex-col ">
                  <div className="">
                    <div className="flex flex-row items-center space-x-5">
                      <div dangerouslySetInnerHTML={{ __html: svg }} />
                      <div
                        className="w-8 h-8 text-center justify-center flex items-center border cursor-pointer"
                        onClick={refreshCaptcha}
                      >
                        <FiRefreshCw className="font-bold text-xl text-blue-600" />
                      </div>
                    </div>

                    <input
                      type="text"
                      id=""
                      required={true}
                      value={captchaInput}
                      onChange={(e) => setcapchaInput(e.target.value)}
                      placeholder={t("enter_captcha")}
                      className="text-base mt-2  border border-slate-400 px-3 py-2 rounded-sm outline-none focus:border-slate-500 focus:shadow-md"
                    />
                  </div>
                  <div className="my-2 flex justify-end">
                    <button
                      onClick={resetHandler}
                      className="bg-[#0245A7] text-white px-3 py-2 rounded-md"
                    >
                      {t("reset")}
                    </button>
                    <input
                      type="submit"
                      value={t("submit")}
                      className="px-3 py-2 bg-[#0245A7] text-white rounded-md ml-5 cursor-pointer"
                    />
                    {isloading && (
                      <div className="flex justify-center items-center ml-3">
                        <Oval
                          height={40}
                          width={40}
                          color="#3B82F6"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                          ariaLabel="oval-loading"
                          secondaryColor="#b5d1ff"
                          strokeWidth={3}
                          strokeWidthSecondary={3}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          )}

          {otpScreen && (
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
                  <label
                    htmlFor="person1Name"
                    className="my-1 font-semibold text-lg text-slate-700"
                  >
                    {t("enter_otp")} *
                  </label>
                  <input
                    type="text"
                    id="person1Name"
                    className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                    value={otpinput}
                    required
                    onChange={(e) => {
                      const input = e.target.value;
                      const regex = /^[0-9]*$/; // Regular expression to allow only numeric characters
                      if (regex.test(input) || input === "") {
                        // If input matches the regex or is empty, update state
                        setotpinput(input);
                      }
                    }}
                    placeholder={t("otp")}
                    inputMode="numeric"
                    maxLength="10"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-48 px-5 py-2 mx-2 border border-[#0245A7] bg-[#0245A7] hover:bg-white text-white hover:text-[#0245A7] transition duration-300 rounded-sm"
                  //   onClick={() => setStep(1)}
                >
                  {t("submit")}
                </button>
                {isloading && (
                  <div className="flex justify-center items-center ml-3">
                    <Oval
                      height={40}
                      width={40}
                      color="#3B82F6"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      ariaLabel="oval-loading"
                      secondaryColor="#b5d1ff"
                      strokeWidth={3}
                      strokeWidthSecondary={3}
                    />
                  </div>
                )}
              </div>
            </form>
          )}
        </div>

        {/* FOOTER */}
      </main>
      <Footer />
    </div>
  );
};

export default OnlineComplaint;
