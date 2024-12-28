import React from "react";

const ResetButton = ({ title = "Reset", resetHandler }) => {
  return (
    <>
      <button
        onClick={resetHandler}
        className="w-48 px-5 py-2 mx-2 border border-[#0245A7] bg-white hover:bg-[#0245A7] text-primary hover:text-white transition duration-300 rounded-sm"
      >
        {title}
      </button>
    </>
  );
};

export default ResetButton;
