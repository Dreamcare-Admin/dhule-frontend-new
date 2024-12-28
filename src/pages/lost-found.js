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

const Lostfound = () => {
  const router = useRouter();
  const [records, setrecords] = useState([]);
  const [otpScreen, setOtpScreen] = useState(false);
  // FORM STATES
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPincode] = useState("");
  const [policeStation, setPoliceStation] = useState("");

  const [reportType, setReportType] = useState("");
  const [articleType, setArticleType] = useState("");
  const [article_address, setArticle_address] = useState("");
  const [article_pincode, setArticle_pincode] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [articleDesc, setArticleDesc] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [isloading, setisloading] = useState(false);

  //otp screen

  const [otpinput, setotpinput] = useState("");

  const [hashedOtp, sethashedOtp] = useState("");

  //captcha

  const [svg, setSvg] = useState(null);
  const [text, settext] = useState("");

  const [captchaInput, setcapchaInput] = useState("");

  const resetHandler = () => {
    setFullName("");
    setContactNo("");
    setEmail("");
    setReportType("");
    setArticleType("");
    setStreet("");
    setAddress("");
    setCity("");
    setState("");
    setPincode("");
    setPoliceStation("");
    setArticleDesc("");
    setIsChecked(false);
    setDateTime("");
    setArticle_address("");
    setArticle_pincode("");
    setcapchaInput("");

    refreshCaptcha();
  };

  // FORM HANDLERS

  const formSubmitHandlerPre = async (e) => {
    e.preventDefault();
    if (
      !fullName ||
      !contactNo ||
      !email ||
      !address ||
      !pinCode ||
      !policeStation ||
      !reportType ||
      !articleType ||
      !dateTime ||
      !article_address ||
      !city ||
      !articleDesc ||
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

    sendOTP();

    setOtpScreen(true);
  };

  const formSubmitHandler = async (e) => {
    // e.preventDefault();
    setisloading(true);
    if (
      !fullName ||
      !contactNo ||
      !email ||
      !address ||
      !pinCode ||
      !policeStation ||
      !reportType ||
      !articleType ||
      !dateTime ||
      !article_address ||
      !city ||
      !articleDesc
    ) {
      return;
    }

    setisloading(true);

    const bodydata = {
      fullName: fullName,
      email: email,
      contactNo: contactNo,
      address: address,
      pinCode: pinCode,
      psId: policeStation,

      report_type: reportType,
      article_type: articleType,
      article_address: article_address,
      datetime: dateTime,
      street: street,
      city: city,
      state: state,
      article_pincode: article_pincode,

      description: articleDesc,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/add-lost-found`,
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
        // resetHandler();
        router.push(`/lost-found-form/${data.id}`);
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
    toast.success("Application Submitted successfully!", {
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

        <title>Lost and Found | Dhule Police</title>
      </Head>
      <main className="min-h-screen">
        {/* NAVBAR */}
        <Navbar />
        <ToastContainer autoClose={2000} />

        <div className="font-nunito">
          <h1 className="text-center text-4xl text-gray-700 mt-10">
            {t("lost_found")}
          </h1>
          <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>

          {!otpScreen && (
            <div className="font-nunito w-4/5 sm:w-[70%] xl:w-3/5 mt-10 mx-auto">
              <p className="text-slate-700 text-justify text-base lg:text-lg">
                {t("lost_found_p1")}
              </p>

              <p className="mt-10 text-slate-700 text-justify text-base lg:text-lg">
                {t("lost_found_p2")}&nbsp;
                <Link
                  href="https://www.ceir.gov.in/Home/index.jsp"
                  target="_blank"
                  className="text-amber-500 underline"
                >
                  {t("here")}
                </Link>
                &nbsp; {t("lost_found_p3")}
              </p>

              <div className="bg-[#0245A7] py-2 my-5 text-center text-xl text-white font-serif">
                {t("applicant_details")}
              </div>

              <form onSubmit={formSubmitHandlerPre}>
                {/* USER INFORMATION */}
                <div className="flex flex-col lg:flex-row lg:justify-between">
                  <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
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

                  <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="email"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("email_id_form")} *
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

                <div className="my-5 flex flex-col lg:flex-row lg:justify-start">
                  <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
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
                    />
                  </div>
                  <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="address"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("address")} *
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
                      required={true}
                    />
                  </div>
                </div>

                <div className="my-5 flex flex-col lg:flex-row lg:justify-start">
                  <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="pincode"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("pin_code")} *
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
                      placeholder="410221"
                      inputMode="numeric"
                      maxLength="6"
                      required={true}
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
                </div>

                <div className="bg-[#0245A7] py-2 my-5 text-center text-xl text-white font-serif">
                  {t("article_details")}
                </div>

                <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
                  <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="reportType"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("report_type")} *
                    </label>
                    <select
                      id="reportType"
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                      value={reportType}
                      onChange={(e) => setReportType(e.target.value)}
                      required={true}
                    >
                      <option value="">{t("select_report_type")}</option>
                      <option value="Lost Item Report">
                        {t("lost_item_report")}
                      </option>
                      <option value="Found Item Report">
                        {t("found_item_report")}
                      </option>
                    </select>
                  </div>

                  <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="articleType"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("article_type")} *
                    </label>
                    <select
                      id="articleType"
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                      value={articleType}
                      onChange={(e) => setArticleType(e.target.value)}
                      required={true}
                    >
                      <option value=""> {t("select_article_type")}</option>
                      <option value="Aadhaar Card">{t("aadhar_card")}</option>
                      <option value="Driving License">
                        {t("driving_license")}
                      </option>
                      <option value="PAN Card"> {t("pan_card")}</option>
                      <option value="Voter ID"> {t("voter_id")}</option>
                      <option value="Ration Card">{t("ration_card")}</option>
                      <option value="Educational Document">
                        {t("educational_document")}
                      </option>
                      <option value="Mobile"> {t("mobile")}</option>
                      <option value="Other document">
                        {t("other_document")}
                      </option>
                    </select>
                  </div>
                </div>

                <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
                  <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="dateTime"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("lost_found_date_time")} *
                    </label>
                    <input
                      id="dateTime"
                      type="datetime-local"
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                      value={dateTime}
                      onChange={(e) => setDateTime(e.target.value)}
                      placeholder=""
                      required={true}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="lostAddress"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("address_of_lost_found")} *
                    </label>
                    <input
                      type="text"
                      id="lostAddress"
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                      value={article_address}
                      onChange={(e) => {
                        const input = e.target.value;
                        if (input.length <= 250) {
                          setArticle_address(input);
                        } else {
                          // Truncate the input to 300 characters
                          setArticle_address(input.slice(0, 250));
                        }
                      }}
                      placeholder={t("address_ex")}
                      required={true}
                    />
                  </div>
                </div>

                <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
                  <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="street"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("lost_found_area_street")}
                    </label>
                    <input
                      type="text"
                      id="street"
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                      value={street}
                      onChange={(e) => {
                        const input = e.target.value;
                        if (input.length <= 250) {
                          setStreet(input);
                        } else {
                          // Truncate the input to 300 characters
                          setStreet(input.slice(0, 250));
                        }
                      }}
                      placeholder="Indrayani Nagar"
                      // required={true}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="city"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("lost_found_city_district")} *
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
                      required={true}
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
                      htmlFor="pincode"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("pin_code")}
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
                      value={article_pincode}
                      onChange={(e) => {
                        const input = e.target.value;
                        const regex = /^[0-9]*$/; // Regular expression to allow only numeric characters
                        if (regex.test(input) || input === "") {
                          // If input matches the regex or is empty, update state
                          setArticle_pincode(input);
                        }
                      }}
                      placeholder="410221"
                      inputMode="numeric"
                      maxLength="6"
                    />
                  </div>
                </div>

                {/* ARTICLE DESCRIPTION */}
                <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
                  <div className="w-full flex flex-col mx-0 lg:mx-2">
                    <label
                      htmlFor="articleDesc"
                      className="my-1 font-semibold text-lg text-slate-700"
                    >
                      {t("article_description")} *
                    </label>
                    <textarea
                      id="articleDesc"
                      rows="5"
                      className="px-3 py-2 border border-slate-400 focus:border-blue-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm max-h-48"
                      value={articleDesc}
                      onChange={(e) => {
                        const input = e.target.value;
                        if (input.length <= 3000) {
                          setArticleDesc(input);
                        } else {
                          // Truncate the input to 300 characters
                          setArticleDesc(input.slice(0, 3000));
                        }
                      }}
                      placeholder=""
                      required={true}
                    />
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
                          //   console.log(isChecked);
                        }}
                      />
                    </div>
                    <div className="w-[95%] text-slate-700 leading-relaxed mx-2 text-justify">
                      <p className="text-lg">{t("lost_found_p4")}</p>
                      <span className="text-2xl font-semibold my-2 inline-block">
                        {t("note")} :
                      </span>
                      <div className="text-lg">
                        <ul className="list-decimal pl-5 sm:pl-10">
                          <li>{t("lost_found_p5")}</li>
                          <li>{t("lost_found_p6")}</li>
                          <li>{t("lost_found_p7")}</li>
                          <li>{t("lost_found_p8")}</li>
                        </ul>
                      </div>
                      <span className="text-2xl font-semibold my-2 inline-block">
                        {t("disclaimer_form")} :
                      </span>
                      <div className="text-lg mt-3">
                        <ul className="list-decimal pl-5 sm:pl-10">
                          <li>{t("lost_found_p9")}</li>
                          <li>{t("lost_found_p10")}</li>
                          <li>{t("lost_found_p11")}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CAPTCHA */}
                <div className="py-5 my-5 flex flex-col">
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

                  <div className="my-2 flex justify-end items-center">
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

export default Lostfound;
