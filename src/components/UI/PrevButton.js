import React from "react";

const PrevButton = ({ setStep }) => {
  return (
    <>
      <button
        className="w-48 px-5 py-2 mx-2 border border-green-500 bg-green-500 hover:bg-white text-white hover:text-green-500 transition duration-300 rounded-sm"
        onClick={() => setStep(prevState => prevState-1)}
      >
        Previous
      </button>
    </>
  );
};

export default PrevButton;
