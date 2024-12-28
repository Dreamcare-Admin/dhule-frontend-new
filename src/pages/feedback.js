import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
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

const Feedback = () => {
  const router = useRouter();
  const [records, setrecords] = useState([]);
  const [otpScreen, setOtpScreen] = useState(false);
  // FORM STATES
  const [category, setCategory] = useState("");
  const [policeStation, setPoliceStation] = useState("");
  const [fullName, setFullName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const [isloading, setisloading] = useState(false);

  //otp screen

  const [otpinput, setotpinput] = useState("");

  const [hashedOtp, sethashedOtp] = useState("");

  //captcha

  const [svg, setSvg] = useState(null);
  const [text, settext] = useState("");

  const [captchaInput, setcapchaInput] = useState("");

  // FORM HANDLERS

  const resetHandler = () => {
    setCategory("");
    setPoliceStation("");
    setFullName("");
    setContactNo("");
    setEmail("");
    setSubject("");
    setAddress("");
    setDescription("");

    setcapchaInput("");

    refreshCaptcha();
  };

  // FORM HANDLERS

  const formSubmitHandlerPre = async (e) => {
    e.preventDefault();
    if (
      !category ||
      !description ||
      !fullName ||
      !contactNo ||
      !email ||
      !policeStation
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

    sendOTP();

    setOtpScreen(true);
  };

  const formSubmitHandler = async (e) => {
    // e.preventDefault();
    if (
      !category ||
      !description ||
      !fullName ||
      !contactNo ||
      !email ||
      !address ||
      !policeStation
    ) {
      return;
    }

    setisloading(true);

    const bodydata = {
      category: category,
      psId: policeStation,
      fullName: fullName,
      contactNo: contactNo,
      email: email,
      subject: subject,
      address: address,
      description: description,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/add-feedback`,
        {
          method: "POST",
          body: JSON.stringify(bodydata),
          headers: headers,
        }
      );

      const data = await response.json();

      if (data.success) {
        setisloading(false);
        notifySuccess();
        router.push(`/feedback-form/${data.id}`);
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
    toast.success("Feedback Submitted successfully!", {
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

  const Ctx = useContext(Context);
  const { t } = useTranslation();

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

        <title>Feedback | Dhule Police</title>
      </Head>
      <main className="min-h-screen">
        {/* NAVBAR */}
        <Navbar />

        <ToastContainer autoClose={2000} />

        <h1 className="text-center text-4xl text-gray-700 mt-10">
          {t("feedbackPage")}
        </h1>
        <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>

        {!otpScreen && (
          <div className=" font-nunito">
            <div className="w-4/5 p-5 sm:w-[70%] xl:w-3/5 my-10 mx-auto shadow-md rounded-md border border-slate-300">
              <h4 className="mb-2 text-xl text-slate-700 font-semibold">
                {t("disclaimer_form")}
              </h4>
              <p className=" text-slate-700 text-justify">{t("feedback_p1")}</p>
            </div>

            <div className="w-4/5 sm:w-[70%] xl:w-3/5 mt-5 mx-auto">
              <form onSubmit={formSubmitHandlerPre}>
                {/* USER INFORMATION */}
                <div className="flex flex-col lg:flex-row lg:justify-between my-2">
                  <div className="w-full lg:w-1/3 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="category"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("select_category")} *
                    </label>
                    <select
                      id="category"
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required={true}
                    >
                      <option value="">{t("select_category")}</option>

                      <option value="inform-us">{t("inform_us")}</option>
                      <option value="feedback">{t("give_feedback")}</option>
                    </select>
                  </div>

                  <div className="w-full lg:w-1/3 flex flex-col mx-0 lg:mx-2">
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
                      <option value=""> {t("select_police_station")} </option>

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
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between">
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
                      maxLength={10}
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

                  <div className="w-full lg:w-1/3 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="subject"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("subject")} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                      value={subject}
                      onChange={(e) => {
                        const input = e.target.value;
                        if (input.length <= 250) {
                          setSubject(input);
                        } else {
                          // Truncate the input to 300 characters
                          setSubject(input.slice(0, 250));
                        }
                      }}
                      placeholder=""
                      required={true}
                    />
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
                  <div className="w-full flex flex-col mx-0 lg:mx-2">
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
                </div>

                <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
                  <div className="w-full flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="description"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("description")} *
                    </label>
                    <textarea
                      id="description"
                      rows="5"
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                      value={description}
                      onChange={(e) => {
                        const input = e.target.value;
                        if (input.length <= 3000) {
                          setDescription(input);
                        } else {
                          // Truncate the input to 300 characters
                          setDescription(input.slice(0, 3000));
                        }
                      }}
                      placeholder={t("enter_description")}
                      required={true}
                    />
                  </div>
                </div>

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

        {/* FOOTER */}
      </main>
      <Footer />
    </div>
  );
};

export default Feedback;
