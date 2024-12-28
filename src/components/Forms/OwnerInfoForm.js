import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Context from "../../context/context";

const OwnerInfoForm = (props) => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const {
    fullName,
    setFullName,
    ownerPhoto,
    setOwnerPhoto,
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
    policeStation,
    setPoliceStation,
    pcpcPoliceStations,
    setStep,
    file1,
    setfile1,
    fileErr1,
    setfileErr1,
    handleFileChange1,
    policeStationName,
    setPoliceStationName,
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any additional validation or submission logic here

    if (!policeStation || !file1 || !fullName || !email) {
      return;
    }

    if (contactNo.length !== 10) {
      return;
    }

    setStep(1);
  };

  const policestationHandler = (e) => {
    setPoliceStation(e.target.value);

    const record = pcpcPoliceStations.find(
      (record) => record._id === e.target.value
    );

    if (record) {
      setPoliceStationName(record.name);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
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
            onChange={(e) => policestationHandler(e)}
            required
          >
            <option value="">Select Police Station</option>

            {pcpcPoliceStations.map((ps) => (
              <option value={ps._id} key={ps._id}>
                {Ctx.lang === "en" && <>{ps.name}</>}
                {Ctx.lang === "mr" && <>{ps.name_in_marathi}</>}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
          <label
            htmlFor="fileUpload"
            className="my-1 font-semibold text-lg text-slate-700"
          >
            {t("property_owner_photo")} *{" "}
            <span className="italic text-xs">(Max size 2 MB)</span>
          </label>
          <input
            type="file"
            id="fileUpload"
            accept=".jpg, .jpeg, .png, .webp"
            onChange={(e) => handleFileChange1(e)}
            required
            className="px-3 py-1 border border-slate-400 focus:border-slate-500 focus:shadow-md text-lg text-slate-700 outline-none rounded-sm"
          />
        </div>
      </div>

      <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full flex flex-col mx-0 lg:mx-2">
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
            required
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
          />
        </div>
      </div>

      <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
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
            required
            onChange={(e) => {
              const input = e.target.value;
              const regex = /^[0-9]*$/; // Regular expression to allow only numeric characters
              if (regex.test(input) || input === "") {
                // If input matches the regex or is empty, update state
                setContactNo(input);
              }
            }}
            placeholder="9899999999"
            inputMode="numeric"
            maxLength="10"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
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
            required
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
          />
        </div>
      </div>

      {/* ADDRESS */}
      <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
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

        <div className="w-full lg:w-1/2 flex flex-col mx-0 lg:mx-2">
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
            placeholder="400614"
            inputMode="numeric"
            maxLength="6"
          />
        </div>
      </div>

      <div className="flex justify-end">
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

export default OwnerInfoForm;
