import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const HomeSubMenu = () => {
  const { t } = useTranslation();
  return (
    <div className="block lg:hidden w-full mx-auto pt-10 bg-[#272727] text-sm">
      <div className="flex flex-row justify-center items-center space-x-5">
        <Link href="/#director-message">
          <div className="flex w-full justify-center items-center">
            <button className=" bg-[#F9B808] rounded-full p-2 px-1 font-medium w-36 h-12 text-black hover:bg-white transition-colors">
              {t("director_message")}
            </button>
          </div>
        </Link>
        <Link href="/services">
          <div className="flex w-full justify-center items-center">
            <button className=" bg-[#F9B808] rounded-full p-2 px-1 font-medium w-36 h-12 text-black hover:bg-white transition-colors">
              {t("our_services")}
            </button>
          </div>
        </Link>
      </div>

      <div className="flex flex-row justify-center items-center space-x-5 mt-5">
        <Link href="/training">
          <div className="flex w-full justify-center items-center">
            <button className=" bg-[#F9B808] rounded-full p-2 px-1 font-medium w-36 h-12 text-black hover:bg-white transition-colors">
              {t("training")}
            </button>
          </div>
        </Link>
        <Link href="/#whymssc">
          <div className="flex w-full justify-center items-center">
            <button className=" bg-[#F9B808] rounded-full p-2 px-1 font-medium w-36 h-12 text-black hover:bg-white transition-colors">
              {t("why_mssc")}
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeSubMenu;
