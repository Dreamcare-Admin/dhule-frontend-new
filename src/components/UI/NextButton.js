import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Context from "../../context/context";
const NextButton = ({ setStep }) => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  return (
    <button
      className="w-48 px-5 py-2 mx-2 border border-[#0245A7] bg-[#0245A7] hover:bg-white text-white hover:text-[#0245A7] transition duration-300 rounded-sm"
      onClick={() => setStep((prevState) => prevState + 1)}
    >
      Next
    </button>
  );
};

export default NextButton;
