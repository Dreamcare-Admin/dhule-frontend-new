import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// COMPONENT IMPORTS
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Heading from "@/components/UI/Heading";
import OwnerInfoForm from "@/components/Forms/OwnerInfoForm";
import NextButton from "@/components/UI/NextButton";
import PrevButton from "@/components/UI/PrevButton";
import PropertyInfoForm from "@/components/Forms/PropertyInfoForm";
import TenantInfoForm from "@/components/Forms/TenantInfoForm";
import WorkplaceInfoForm from "@/components/Forms/WorkplaceInfoForm";
import PersonKnownTenantForm from "@/components/Forms/PersonKnownTenantForm";
import OtpForm from "@/components/Forms/otpForm";
import SubmitButton from "@/components/UI/SubmitButton";
import Stepper from "@/components/UI/Stepper";
import { useTranslation } from "react-i18next";
import Context from "../context/context";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { FiRefreshCw } from "react-icons/fi";
import { Oval } from "react-loader-spinner";

const TenantInfo = () => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const router = useRouter();
  const STEPS_DATA = [
    { id: "step1", stepTitle: t("step1") },
    { id: "step2", stepTitle: t("step2") },
    { id: "step3", stepTitle: t("step3") },
    { id: "step4", stepTitle: t("step4") },
    { id: "step5", stepTitle: t("step5") },
  ];
  const [records, setrecords] = useState([]);
  const [isloading, setisloading] = useState(false);
  // FORM STEP STATE
  const [step, setStep] = useState(0);
  const [stepsData, setStepsData] = useState(STEPS_DATA);

  // OWNERS INFO FORM STATE
  const [policeStation, setPoliceStation] = useState("");
  const [policeStationName, setPoliceStationName] = useState("");
  const [ownerPhoto, setOwnerPhoto] = useState("");
  const [fullName, setFullName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPincode] = useState("");

  const [file1, setfile1] = useState(null);
  const [fileErr1, setfileErr1] = useState(false);

  const handleFileChange1 = (e) => {
    setfileErr1(false);
    const file = e.target.files[0];

    // setfile(file);

    if (file) {
      // Check if the selected file size is within the limit (5MB)
      if (file.size <= 2 * 1024 * 1024) {
        // Check if the file extension is allowed
        const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp"];
        const fileExtension = file.name
          .toLowerCase()
          .substring(file.name.lastIndexOf("."));
        if (allowedExtensions.includes(fileExtension)) {
          setfile1(file);
        } else {
          // Invalid file extension
          setfileErr1(true);
          e.target.value = ""; // Clear the input field
          setfile1(null);
        }
      } else {
        // File size exceeds the limit
        setfileErr1(true);
        e.target.value = ""; // Clear the input field
        setfile1(null);
      }
    }
  };

  // PROPETY INFO FORM STATE
  const [rentPropertyAddress, setRentPropertyAddress] = useState("");
  const [rentPropertyCity, setRentPopertyCity] = useState("");
  const [rentPropertyState, setRentPropertyState] = useState("");
  const [rentPropertyPincode, setRentPropertyPincode] = useState("");
  const [agreementStartDate, setAgreementStartDate] = useState("");
  const [agreementEndDate, setAgreementEndDate] = useState("");

  // TENANT INFO FORM STATE
  const [tenantName, setTenantName] = useState("");
  const [tenantPhoto, setTenantPhoto] = useState("");
  const [tenantPermanentAddress, setTenantPermanentAddress] = useState("");
  const [tenantCity, setTenantCity] = useState("");
  const [tenantState, setTenantState] = useState("");
  const [tenantPincode, setTenantPincode] = useState("");
  const [tenantIdentityProof, setTenantIdentityProof] = useState("");
  const [tenantIdentityProofNo, setTenantIdentityProofNo] = useState("");
  const [tenantIdentityProofDoc, setTenantIdentityProofDoc] = useState("");
  const [numberOfMale, setNumberOfMale] = useState("");
  const [numberOfFemale, setNumberOfFemale] = useState("");
  const [numberOfChild, setNumberOfChild] = useState("");

  const [file2, setfile2] = useState(null);
  const [fileErr2, setfileErr2] = useState(false);

  const handleFileChange2 = (e) => {
    setfileErr2(false);
    const file = e.target.files[0];

    // setfile(file);

    if (file) {
      // Check if the selected file size is within the limit (5MB)
      if (file.size <= 2 * 1024 * 1024) {
        // Check if the file extension is allowed
        const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp"];
        const fileExtension = file.name
          .toLowerCase()
          .substring(file.name.lastIndexOf("."));
        if (allowedExtensions.includes(fileExtension)) {
          setfile2(file);
        } else {
          // Invalid file extension
          setfileErr2(true);
          e.target.value = ""; // Clear the input field
          setfile2(null);
        }
      } else {
        // File size exceeds the limit
        setfileErr2(true);
        e.target.value = ""; // Clear the input field
        setfile2(null);
      }
    }
  };

  const [file3, setfile3] = useState(null);
  const [fileErr3, setfileErr3] = useState(false);

  const handleFileChange3 = (e) => {
    setfileErr3(false);
    const file = e.target.files[0];

    // setfile(file);

    if (file) {
      // Check if the selected file size is within the limit (5MB)
      if (file.size <= 2 * 1024 * 1024) {
        // Check if the file extension is allowed
        const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp"];
        const fileExtension = file.name
          .toLowerCase()
          .substring(file.name.lastIndexOf("."));
        if (allowedExtensions.includes(fileExtension)) {
          setfile3(file);
        } else {
          // Invalid file extension
          setfileErr3(true);
          e.target.value = ""; // Clear the input field
          setfile3(null);
        }
      } else {
        // File size exceeds the limit
        setfileErr3(true);
        e.target.value = ""; // Clear the input field
        setfile3(null);
      }
    }
  };

  // TENANT PLACE OF WORK FORM STATE
  const [tenantMobNo, setTenantMobNo] = useState("");
  const [tenantEmail, setTenantEmail] = useState("");
  const [tenantOccupation, setTenantOccupation] = useState("");
  const [tenantPlaceOfWork, setTenantPlaceOfWork] = useState("");
  const [tenantPlaceOfWorkCity, setTenantPlaceOfWorkCity] = useState("");
  const [tenantPlaceOfWorkState, setTenantPlaceOfWorkState] = useState("");
  const [tenantPlaceOfWorkPincode, setTenantPlaceOfWorkPincode] = useState("");

  // PERSON KNOWN TENANT FORM STATE
  const [knownPerson1, setKnownPerson1] = useState("");
  const [knownPerson2, setKnownPerson2] = useState("");
  const [knownPerson1Contact, setKnownPerson1Contact] = useState("");
  const [knownPerson2Contact, setKnownPerson2Contact] = useState("");
  const [agentName, setAgentName] = useState("");
  const [agentDetails, setAgentDetails] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [confirmationCheck, setConfirmationCheck] = useState(false);

  //otp screen

  const [otpinput, setotpinput] = useState("");

  const [hashedOtp, sethashedOtp] = useState("");

  const [svg, setSvg] = useState(null);
  const [text, settext] = useState("");

  const [captchaInput, setcapchaInput] = useState("");

  const refreshCaptcha = () => {
    fetchCaptcha();
  };

  const sendOTP = async (phonenumber) => {
    // const otp = generateOTP();
    // setcode(otp);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/generate-otp?phonenumber=${phonenumber}`,
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

  const formSubmitHandler = async (e) => {
    //   e.preventDefault();
    //   if (
    //     !fullName ||
    //     !contactNo ||
    //     !email ||
    //     !policeStation ||
    //     !complaint ||
    //     !isChecked
    //   ) {
    //     return;
    //   }

    setisloading(true);

    const formData = new FormData();
    formData.append("psId", policeStation);

    formData.append("fullName", fullName);
    formData.append("contactNo", contactNo);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("pinCode", pinCode);

    formData.append("rentPropertyAddress", rentPropertyAddress);
    formData.append("rentPropertyCity", rentPropertyCity);
    formData.append("rentPropertyState", rentPropertyState);
    formData.append("rentPropertyPincode", rentPropertyPincode);
    formData.append("agreementStartDate", agreementStartDate);
    formData.append("agreementEndDate", agreementEndDate);

    formData.append("tenantName", tenantName);
    formData.append("tenantPermanentAddress", tenantPermanentAddress);
    formData.append("tenantCity", tenantCity);
    formData.append("tenantState", tenantState);
    formData.append("tenantPincode", tenantPincode);
    formData.append("tenantIdentityProof", tenantIdentityProof);
    formData.append("tenantIdentityProofNo", tenantIdentityProofNo);
    formData.append("numberOfMale", numberOfMale);
    formData.append("numberOfFemale", numberOfFemale);
    formData.append("numberOfChild", numberOfChild);

    formData.append("tenantMobNo", tenantMobNo);
    formData.append("tenantEmail", tenantEmail);
    formData.append("tenantOccupation", tenantOccupation);
    formData.append("tenantPlaceOfWork", tenantPlaceOfWork);
    formData.append("tenantPlaceOfWorkCity", tenantPlaceOfWorkCity);
    formData.append("tenantPlaceOfWorkState", tenantPlaceOfWorkState);
    formData.append("tenantPlaceOfWorkPincode", tenantPlaceOfWorkPincode);

    formData.append("knownPerson1", knownPerson1);
    formData.append("knownPerson2", knownPerson2);
    formData.append("knownPerson1Contact", knownPerson1Contact);
    formData.append("knownPerson2Contact", knownPerson2Contact);
    formData.append("agentName", agentName);
    formData.append("agentDetails", agentDetails);

    formData.append("f1", file1);
    formData.append("f2", file2);
    formData.append("f3", file3);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/add-tenant-info`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setisloading(false);
        notifySuccess();
        router.push(`/tenant-info-form/${data.id}`);
      } else {
        notifyWarn();
        setisloading(false);
      }
    } catch (error) {
      notifyWarn();
      setisloading(false);
    }
  };

  // OWNERS INFO
  const ownerInfo = {
    policeStation,
    setPoliceStation,
    ownerPhoto,
    setOwnerPhoto,
    fullName,
    setFullName,
    contactNo,
    setContactNo,
    email,
    setEmail,
    address,
    setAddress,
    city,
    setCity,
    state,
    setState,
    pinCode,
    setPincode,
    pcpcPoliceStations: records,
    setStep,
    file1,
    setfile1,
    fileErr1,
    setfileErr1,
    handleFileChange1,
    policeStationName,
    setPoliceStationName,
  };

  // PROPERTY INFO
  const propertyInfo = {
    rentPropertyAddress,
    setRentPropertyAddress,
    rentPropertyCity,
    setRentPopertyCity,
    rentPropertyState,
    setRentPropertyState,
    rentPropertyPincode,
    setRentPropertyPincode,
    agreementStartDate,
    setAgreementStartDate,
    agreementEndDate,
    setAgreementEndDate,
    setStep,
  };

  // TENANT INFO
  const tenantInfo = {
    tenantName,
    setTenantName,
    tenantPhoto,
    setTenantPhoto,
    tenantPermanentAddress,
    setTenantPermanentAddress,
    tenantCity,
    setTenantCity,
    tenantState,
    setTenantState,
    tenantPincode,
    setTenantPincode,
    tenantIdentityProof,
    setTenantIdentityProof,
    tenantIdentityProofNo,
    setTenantIdentityProofNo,
    tenantIdentityProofDoc,
    setTenantIdentityProofDoc,
    numberOfMale,
    setNumberOfMale,
    numberOfFemale,
    setNumberOfFemale,
    numberOfChild,
    setNumberOfChild,
    setStep,
    file2,
    setfile2,
    fileErr2,
    setfileErr2,
    handleFileChange2,
    file3,
    setfile3,
    fileErr3,
    setfileErr3,
    handleFileChange3,
  };

  // TENANT WORK PLACE INFO
  const tenantWorkPlaceInfo = {
    tenantMobNo,
    setTenantMobNo,
    tenantEmail,
    setTenantEmail,
    tenantOccupation,
    setTenantOccupation,
    tenantPlaceOfWork,
    setTenantPlaceOfWork,
    tenantPlaceOfWorkCity,
    setTenantPlaceOfWorkCity,
    tenantPlaceOfWorkState,
    setTenantPlaceOfWorkState,
    tenantPlaceOfWorkPincode,
    setTenantPlaceOfWorkPincode,
    setStep,
  };

  // PERSONS KNOWN TENANT INFO
  const personsKnownTenant = {
    knownPerson1,
    setKnownPerson1,
    knownPerson2,
    setKnownPerson2,
    knownPerson1Contact,
    setKnownPerson1Contact,
    knownPerson2Contact,
    setKnownPerson2Contact,
    agentName,
    setAgentName,
    agentDetails,
    setAgentDetails,
    captcha,
    setCaptcha,
    confirmationCheck,
    setConfirmationCheck,
    svg,
    text,
    captchaInput,
    setcapchaInput,
    refreshCaptcha,
    sendOTP,
    contactNo,
    setStep,
  };

  //otp screem

  const otpformdata = {
    otpinput,
    setotpinput,
    hashedOtp,
    sendOTP,
    contactNo,
    setStep,
    formSubmitHandler,
    isloading,
    setisloading,
  };

  //   // SUBMIT FORM HANDLER
  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     console.log(
  //       ownerInfo,
  //       propertyInfo,
  //       tenantInfo,
  //       tenantWorkPlaceInfo,
  //       personsKnownTenant
  //     );
  //   };

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
        // console.log("here is the value of text : ", data.captcha.text);
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

  const notifySuccess = () => {
    toast.success("Submitted successfully!", {
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

        <title>Tenant Information | Dhule Police</title>
      </Head>
      <main className="min-h-screen">
        {/* NAVBAR */}
        <Navbar />
        <ToastContainer autoClose={2000} />

        <div className=" mb-20 font-nunito">
          <h1 className="text-center text-4xl text-gray-700 mt-10">
            {t("tenant_information")}
          </h1>
          <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>

          <div className="font-nunito w-4/5 sm:w-[70%] xl:w-3/5 mt-5 mx-auto">
            <div className="text-xl text-slate-700 font-semibold">
              {t("general_information")}
            </div>
            <div className="ml-10 mt-2 text-justify">
              <ul className="text-slate-700 text-base leading-7 list-decimal">
                <li> {t("tenant_p1")}</li>
                <li>
                  <div>{t("tenant_p2")} - </div>
                  <ul className="list-disc pl-5">
                    <li>{t("tenant_p3")}</li>
                    <li>{t("tenant_p4")}</li>
                    <li>{t("tenant_p5")}</li>
                  </ul>
                </li>
                <li>{t("tenant_p6")}</li>
                <li>{t("tenant_p7")}</li>
                <li>{t("tenant_p8")}</li>
                <li>{t("tenant_p9")}</li>
                <li>{t("tenant_p10")}</li>
              </ul>
            </div>

            {/* FORM STEPPER */}
            <div className="xl:w-9/12 mx-auto my-10 px-5 py-5">
              <Stepper activeStep={step} stepsData={stepsData} />
            </div>

            <div className="mt-10 flex flex-col items-center">
              <div className="w-full lg:w-9/12 p-5 border border-slate-500 rounded-sm">
                {step === 0 ? (
                  <div className={`${step !== 0 ? "hidden" : ""}`}>
                    <OwnerInfoForm {...ownerInfo} />
                  </div>
                ) : step === 1 ? (
                  <PropertyInfoForm {...propertyInfo} />
                ) : step === 2 ? (
                  <TenantInfoForm {...tenantInfo} />
                ) : step === 3 ? (
                  <WorkplaceInfoForm {...tenantWorkPlaceInfo} />
                ) : step === 4 ? (
                  <PersonKnownTenantForm {...personsKnownTenant} />
                ) : step === 5 ? (
                  <OtpForm {...otpformdata} />
                ) : null}

                {/* <div
                  className={`flex ${
                    step === 0 ? "justify-end" : "justify-between"
                  }`}
                >
                  {step === 0 ? null : <PrevButton setStep={setStep} />}
                  {step !== 4 ? (
                    <NextButton setStep={setStep} />
                  ) : (
                    <SubmitButton submitHandler={submitHandler} />
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
      </main>
      <Footer />
    </div>
  );
};

export default TenantInfo;
