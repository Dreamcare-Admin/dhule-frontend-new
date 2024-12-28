import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className="py-5">
      <h2 className="text-3xl font-playflair text-center font-bold text-[#413d4a]">
        {heading}
      </h2>
      <div className="w-12 h-1 bg-primary-dark rounded-full mx-auto mt-2"></div>
    </div>
  );
};

export default Heading;
