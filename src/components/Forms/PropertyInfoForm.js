import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Context from "../../context/context";

const PropertyInfoForm = (props) => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const {
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
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any additional validation or submission logic here
    if (!rentPropertyAddress) {
      return;
    }

    setStep(2);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ADDRESS */}
      <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="raddress"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("address")} *
          </label>
          <input
            type="text"
            id="raddress"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={rentPropertyAddress}
            required
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= 250) {
                setRentPropertyAddress(input);
              } else {
                // Truncate the input to 300 characters
                setRentPropertyAddress(input.slice(0, 250));
              }
            }}
            placeholder={t("address_ex")}
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="rcity"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("city")}
          </label>
          <input
            type="text"
            id="rcity"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={rentPropertyCity}
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= 250) {
                setRentPopertyCity(input);
              } else {
                // Truncate the input to 300 characters
                setRentPopertyCity(input.slice(0, 250));
              }
            }}
            placeholder={t("city_ex")}
          />
        </div>
      </div>

      <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="rstate"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("state")}
          </label>
          <input
            type="text"
            id="rstate"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={rentPropertyState}
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= 250) {
                setRentPropertyState(input);
              } else {
                // Truncate the input to 300 characters
                setRentPropertyState(input.slice(0, 250));
              }
            }}
            placeholder={t("state_ex")}
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="rpincode"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("pin_code")}
          </label>
          <input
            type="text"
            id="rpincode"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={rentPropertyPincode}
            onChange={(e) => {
              const input = e.target.value;
              const regex = /^[0-9]*$/; // Regular expression to allow only numeric characters
              if (regex.test(input) || input === "") {
                // If input matches the regex or is empty, update state
                setRentPropertyPincode(input);
              }
            }}
            placeholder="400614"
            inputMode="numeric"
            maxLength="6"
          />
        </div>
      </div>

      <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="rstartDate"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("agreement_start_date")} *
          </label>
          <input
            type="date"
            id="rstartDate"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={agreementStartDate}
            required
            onChange={(e) => setAgreementStartDate(e.target.value)}
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="rEndDate"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("agreement_end_date")} *
          </label>
          <input
            type="date"
            id="rEndDate"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={agreementEndDate}
            required
            onChange={(e) => setAgreementEndDate(e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <button
          className="w-48 px-5 py-2 mx-2 border border-green-500 bg-green-500 hover:bg-white text-white hover:text-green-500 transition duration-300 rounded-sm"
          onClick={() => setStep(0)}
        >
          {t("previous")}
        </button>
        <button
          type="submit"
          className="w-48 px-5 py-2 mx-2 border border-[#0245A7] bg-[#0245A7] hover:bg-white text-white hover:text-[#0245A7] transition duration-300 rounded-sm"
          //   onClick={() => setStep(1)}
        >
          {t("next")}
        </button>
      </div>
    </form>
  );
};

export default PropertyInfoForm;
