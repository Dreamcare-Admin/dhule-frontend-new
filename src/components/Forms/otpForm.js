import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Context from "../../context/context";
import CryptoJS from "crypto-js";
import { Oval } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const OtpForm = (props) => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const {
    otpinput,
    setotpinput,
    hashedOtp,
    sendOTP,
    contactNo,
    setStep,
    formSubmitHandler,
    isloading,
    setisloading,
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const hashedData = CryptoJS.SHA256(otpinput).toString(CryptoJS.enc.Hex);

    if (hashedData === hashedOtp) {
      //   console.log("now submitting form");
      formSubmitHandler();
    } else {
      otpWarn();
    }
  };

  const otpWarn = () => {
    toast.warn("oops wrong OTP !", {
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
    <form onSubmit={handleSubmit}>
      <ToastContainer autoClose={2000} />
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
  );
};

export default OtpForm;
