import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Context from "../../context/context";

const WorkplaceInfoForm = (props) => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const {
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
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any additional validation or submission logic here
    if (
      !tenantMobNo ||
      !tenantEmail ||
      !tenantOccupation ||
      !tenantPlaceOfWork ||
      !tenantPlaceOfWorkCity ||
      !tenantPlaceOfWorkState ||
      !tenantPlaceOfWorkPincode
    ) {
      return;
    }
    setStep(4);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="tenantContactNo"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("tenant_mobile_no")} *
          </label>
          <input
            type="tel"
            id="tenantContactNo"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={tenantMobNo}
            onChange={(e) => {
              const input = e.target.value;
              const regex = /^[0-9]*$/; // Regular expression to allow only numeric characters
              if (regex.test(input) || input === "") {
                // If input matches the regex or is empty, update state
                setTenantMobNo(input);
              }
            }}
            placeholder="9899999999"
            required
            maxLength={10}
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="tenantEmail"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("email_id")} *
          </label>
          <input
            type="email"
            id="tenantEmail"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={tenantEmail}
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= 250) {
                setTenantEmail(input);
              } else {
                // Truncate the input to 300 characters
                setTenantEmail(input.slice(0, 250));
              }
            }}
            placeholder="example@gmail.com"
            required
          />
        </div>
      </div>

      <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="tenantOccupation"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("tenant_occupation")} *
          </label>
          <input
            type="text"
            id="tenantOccupation"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={tenantOccupation}
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= 250) {
                setTenantOccupation(input);
              } else {
                // Truncate the input to 300 characters
                setTenantOccupation(input.slice(0, 250));
              }
            }}
            placeholder={t("occupation_ex")}
            required
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="placeOfWork"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("tenant_work_address")} *
          </label>
          <input
            type="text"
            id="placeOfWork"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={tenantPlaceOfWork}
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= 250) {
                setTenantPlaceOfWork(input);
              } else {
                // Truncate the input to 300 characters
                setTenantPlaceOfWork(input.slice(0, 250));
              }
            }}
            placeholder=""
            required
          />
        </div>
      </div>

      <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="powCity"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("tenant_city")} *
          </label>
          <input
            type="text"
            id="powCity"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={tenantPlaceOfWorkCity}
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= 250) {
                setTenantPlaceOfWorkCity(input);
              } else {
                // Truncate the input to 300 characters
                setTenantPlaceOfWorkCity(input.slice(0, 250));
              }
            }}
            placeholder=""
            required
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="powState"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("state")} *
          </label>
          <input
            type="text"
            id="powState"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={tenantPlaceOfWorkState}
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= 250) {
                setTenantPlaceOfWorkState(input);
              } else {
                // Truncate the input to 300 characters
                setTenantPlaceOfWorkState(input.slice(0, 250));
              }
            }}
            placeholder={t("state_ex")}
            required
          />
        </div>
      </div>

      <div className="my-5 lg:mr-8">
        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="powPincode"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("pin_code")} *
          </label>
          <input
            type="text"
            id="powPincode"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={tenantPlaceOfWorkPincode}
            onChange={(e) => {
              const input = e.target.value;
              const regex = /^[0-9]*$/; // Regular expression to allow only numeric characters
              if (regex.test(input) || input === "") {
                // If input matches the regex or is empty, update state
                setTenantPlaceOfWorkPincode(input);
              }
            }}
            placeholder="400614"
            inputMode="numeric"
            maxLength="6"
            required
          />
        </div>
      </div>
      <div className="flex justify-between">
        <button
          className="w-48 px-5 py-2 mx-2 border border-green-500 bg-green-500 hover:bg-white text-white hover:text-green-500 transition duration-300 rounded-sm"
          onClick={() => setStep(2)}
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

export default WorkplaceInfoForm;
