import React from "react";

const SubmitButton = ({ title = "Submit", submitHandler }) => {
  return (
    <>
      <button
        onClick={submitHandler}
        className="w-48 px-5 py-2 mx-2 border border-[#0245A7] bg-[#0245A7] hover:bg-white text-white hover:text-[#0245A7] transition duration-300 rounded-sm"
      >
        {title}
      </button>
    </>
  );
};

export default SubmitButton;
