import { FiRefreshCw } from "react-icons/fi";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Context from "../../context/context";

const PersonKnownTenant = (props) => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const {
    knownPerson1,
    setKnownPerson1,
    knownPerson1Contact,
    setKnownPerson1Contact,
    knownPerson2,
    setKnownPerson2,
    knownPerson2Contact,
    setKnownPerson2Contact,
    agentName,
    setAgentName,
    agentDetails,
    setAgentDetails,
    confirmationCheck,
    setConfirmationCheck,
    captcha,
    setCaptcha,
    svg,
    text,
    captchaInput,
    setcapchaInput,
    refreshCaptcha,
    sendOTP,
    contactNo,
    setStep,
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !knownPerson1 ||
      !knownPerson2 ||
      !knownPerson1Contact ||
      !knownPerson2Contact
    ) {
      return;
    }
    if (captchaInput === text) {
      sendOTP(contactNo);
      setStep(5);
    } else {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="person1Name"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("person1")} *
          </label>
          <input
            type="text"
            id="person1Name"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={knownPerson1}
            required
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= 250) {
                setKnownPerson1(input);
              } else {
                // Truncate the input to 300 characters
                setKnownPerson1(input.slice(0, 250));
              }
            }}
            placeholder="Known Person"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="contactNo1"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("contact1")} *
          </label>
          <input
            type="tel"
            id="contactNo1"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={knownPerson1Contact}
            required
            onChange={(e) => {
              const input = e.target.value;
              const regex = /^[0-9]*$/; // Regular expression to allow only numeric characters
              if (regex.test(input) || input === "") {
                // If input matches the regex or is empty, update state
                setKnownPerson1Contact(input);
              }
            }}
            placeholder="9899999999"
            maxLength={10}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="person2Name"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("person2")} *
          </label>
          <input
            type="text"
            id="person2Name"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={knownPerson2}
            required
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= 250) {
                setKnownPerson2(input);
              } else {
                // Truncate the input to 300 characters
                setKnownPerson2(input.slice(0, 250));
              }
            }}
            placeholder="Known Person"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="contactNo2"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("contact2")} *
          </label>
          <input
            type="tel"
            id="contactNo2"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={knownPerson2Contact}
            required
            onChange={(e) => {
              const input = e.target.value;
              const regex = /^[0-9]*$/; // Regular expression to allow only numeric characters
              if (regex.test(input) || input === "") {
                // If input matches the regex or is empty, update state
                setKnownPerson2Contact(input);
              }
            }}
            placeholder="9899999999"
            maxLength={10}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="agentName"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("agent_name")}
          </label>
          <input
            type="text"
            id="agentName"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={agentName}
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= 250) {
                setAgentName(input);
              } else {
                // Truncate the input to 300 characters
                setAgentName(input.slice(0, 250));
              }
            }}
            placeholder=""
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="agentDetails"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("agent_details")}
          </label>
          <input
            type="text"
            id="agentDetails"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={agentDetails}
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= 250) {
                setAgentDetails(input);
              } else {
                // Truncate the input to 300 characters
                setAgentDetails(input.slice(0, 250));
              }
            }}
            placeholder=""
          />
        </div>
      </div>

      {/* CAPTCHA */}
      <div className="py-5 my-5 flex flex-col lg:flex-row lg:justify-between">
        <div className="mx-2 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-row space-x-2 items-center">
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
            id="captcha"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-sm lg:text-lg text-slate-700 outline-none rounded-sm"
            value={captchaInput}
            onChange={(e) => setcapchaInput(e.target.value)}
            placeholder={t("enter_captcha")}
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
              checked={confirmationCheck}
              onChange={() => {
                setConfirmationCheck((prevState) => !prevState);
              }}
            />
          </div>
          <div className="w-[95%] text-slate-700 leading-relaxed mx-2">
            <p className="text-lg">{t("tenant_p_cert")}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          className="w-48 px-5 py-2 mx-2 border border-green-500 bg-green-500 hover:bg-white text-white hover:text-green-500 transition duration-300 rounded-sm"
          onClick={() => setStep(3)}
        >
          {t("previous")}
        </button>
        <button
          type="submit"
          className="w-48 px-5 py-2 mx-2 border border-[#0245A7] bg-[#0245A7] hover:bg-white text-white hover:text-[#0245A7] transition duration-300 rounded-sm"
          //   onClick={() => setStep(1)}
        >
          {t("submit")}
        </button>
      </div>
    </form>
  );
};

export default PersonKnownTenant;
