import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Context from "../../context/context";
const TenantInfoForm = (props) => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const {
    tenantName,
    setTenantName,
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
    numberOfMale,
    setNumberOfMale,
    numberOfFemale,
    setNumberOfFemale,
    numberOfChild,
    setNumberOfChild,
    tenantIdentityProofDoc,
    setTenantIdentityProofDoc,
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
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any additional validation or submission logic here
    if (
      !tenantName ||
      !file2 ||
      !tenantPermanentAddress ||
      !tenantCity ||
      !tenantState ||
      !tenantPincode ||
      !tenantIdentityProof ||
      !tenantIdentityProofNo ||
      !file3
    ) {
      return;
    }

    setStep(3);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="tenantName"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("tenant_name")} *
          </label>
          <input
            type="text"
            id="tenantName"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={tenantName}
            required
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= 250) {
                setTenantName(input);
              } else {
                // Truncate the input to 300 characters
                setTenantName(input.slice(0, 250));
              }
            }}
            placeholder=""
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="tenantPhoto"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("tenant_photo")} *{" "}
            <span className="italic text-xs">(Max size 2 MB)</span>
          </label>
          <input
            type="file"
            id="tenantPhoto"
            required
            accept=".jpg, .jpeg, .png"
            onChange={(e) => handleFileChange2(e)}
            className="px-3 py-1 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
          />
        </div>
      </div>

      <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="tPermanentAdd"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("tenant_address")} *
          </label>
          <input
            type="text"
            id="tPermanentAdd"
            required
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={tenantPermanentAddress}
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= 250) {
                setTenantPermanentAddress(input);
              } else {
                // Truncate the input to 300 characters
                setTenantPermanentAddress(input.slice(0, 250));
              }
            }}
            placeholder=""
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="tPermanentcity"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("tenant_city")} *
          </label>
          <input
            type="text"
            id="tPermanentcity"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={tenantCity}
            required
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= 250) {
                setTenantCity(input);
              } else {
                // Truncate the input to 300 characters
                setTenantCity(input.slice(0, 250));
              }
            }}
            placeholder=""
          />
        </div>
      </div>

      <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="tstate"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("state")} *
          </label>
          <input
            type="text"
            id="tstate"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={tenantState}
            required
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= 250) {
                setTenantState(input);
              } else {
                // Truncate the input to 300 characters
                setTenantState(input.slice(0, 250));
              }
            }}
            placeholder=""
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="tpincode"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("pin_code")} *
          </label>
          <input
            type="text"
            id="tpincode"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={tenantPincode}
            required
            onChange={(e) => {
              const input = e.target.value;
              const regex = /^[0-9]*$/; // Regular expression to allow only numeric characters
              if (regex.test(input) || input === "") {
                // If input matches the regex or is empty, update state
                setTenantPincode(input);
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
            htmlFor="identityProof"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("tenant_identity_proof")} *
          </label>
          <select
            id="identityProof"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={tenantIdentityProof}
            required
            onChange={(e) => setTenantIdentityProof(e.target.value)}
          >
            <option value="selectArticleType">
              {t("select_article_type")}
            </option>
            <option value="Aadhaar Card"> {t("aadhar_card")}</option>
            <option value="Driving License"> {t("driving_license")}</option>
            <option value="PAN Card">{t("pan_card")}</option>
            <option value="Voter ID">{t("voter_id")}</option>
            <option value="Ration Card">{t("ration_card")}</option>
            <option value="Other document">{t("other_document")}</option>
          </select>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="tenantIdentityNo"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("tenant_proof_no")} *
          </label>
          <input
            type="text"
            id="tenantIdentityNo"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={tenantIdentityProofNo}
            required
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= 250) {
                setTenantIdentityProofNo(input);
              } else {
                // Truncate the input to 300 characters
                setTenantIdentityProofNo(input.slice(0, 250));
              }
            }}
          />
        </div>
      </div>

      <p className="my-1 font-semibold text-lg text-slate-700">Co-resident</p>

      <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-[30%] flex flex-col mx-0 lg:mx-2 my-1">
          <input
            type="number"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={numberOfMale}
            min={0}
            onChange={(e) => setNumberOfMale(e.target.value)}
            placeholder={t("no_of_male")}
          />
        </div>

        <div className="w-full lg:w-[30%] flex flex-col mx-0 lg:mx-2 my-1">
          <input
            type="number"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={numberOfFemale}
            min={0}
            onChange={(e) => setNumberOfFemale(e.target.value)}
            placeholder={t("no_of_female")}
          />
        </div>

        <div className="w-full lg:w-[30%] flex flex-col mx-0 lg:mx-2 my-1">
          <input
            type="number"
            className="px-3 py-2 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
            value={numberOfChild}
            min={0}
            onChange={(e) => setNumberOfChild(e.target.value)}
            placeholder={t("no_of_child")}
          />
        </div>
      </div>

      <div className="my-5 border-2 border-dashed border-slate-400 rounded-md">
        <div className="flex justify-center mt-5 mb-1 text-slate-700 text-center text-xl font-semibold">
          {t("upload_identity_proof")} *
        </div>
        <div className="flex justify-center text-slate-700 text-center text-lg">
          Maximum file size of image format is 4MB (*.jpeg, *.png)
        </div>
        <div className="flex flex-col mx-2 my-5">
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            required
            onChange={(e) => handleFileChange3(e)}
            className="px-3 py-1 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <button
          className="w-48 px-5 py-2 mx-2 border border-green-500 bg-green-500 hover:bg-white text-white hover:text-green-500 transition duration-300 rounded-sm"
          onClick={() => setStep(1)}
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

export default TenantInfoForm;
