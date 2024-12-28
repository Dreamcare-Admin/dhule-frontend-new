import React from "react";
import { useTranslation } from "react-i18next";

const Stepper = ({ activeStep = 0, stepsData }) => {
  const { t } = useTranslation();
  return (
    <>
      <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 text-base sm:text-sm lg:text-base">
        {stepsData.map((step, index) => (
          <li
            className="flex items-center space-x-1 lg:space-x-2.5"
            key={step.id}
          >
            <span
              className={`${
                index < activeStep
                  ? "bg-[#0245A7] border border-[#0245A7] text-white"
                  : "border border-slate-500 text-slate-700"
              } flex items-center text-lg justify-center w-8 h-8 rounded-full shrink-0`}
            >
              {index + 1}
            </span>
            <span>
              <h3 className="font-medium leading-tight">{step.stepTitle}</h3>
            </span>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Stepper;
