import React, { useContext } from "react";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useTranslation } from "react-i18next";
import Context from "../context/context";
import Link from "next/link";
import { WebsiteCarbonBadge } from "react-websitecarbon-badge";

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
];

const Footer = () => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  return (
    <footer className="border-t-2">
      <div className="py-5 max-w-6xl mx-auto">
        <Slide
          slidesToScroll={1}
          slidesToShow={2}
          indicators={false}
          autoplay={true}
          responsive={responsiveSettings}
          duration={4000}
        >
          <div className="flex items-center px-10">
            <Link href={"https://acbmaharashtra.gov.in/"} target="_blank">
              <img
                src="/footer/1.webp"
                alt="ANTI-CORRUPTION BUREAU, MAHARASHTRA STATE"
                className="w-16 h-auto"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className=" flex items-center px-10">
            <Link href={"https://mpanashik.gov.in/"} target="_blank">
              <img
                src="/footer/2.webp"
                alt="MAHARASHTRA POLICE ACADEMY"
                className="w-32 h-auto"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="flex items-center px-10">
            <Link
              href={"https://aaplesarkar.mahaonline.gov.in/"}
              target="_blank"
            >
              <img
                src="/footer/3.webp"
                alt="Aaple Sarkar"
                className="w-20 h-auto"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="flex items-center px-10">
            <Link href={"https://www.mahapolice.gov.in/"} target="_blank">
              <img
                src="/footer/4.webp"
                alt="Maharastra Police"
                className="w-16 h-auto"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="flex items-center px-10">
            <Link href={"https://www.startupindia.gov.in/"} target="_blank">
              <img
                src="/footer/5.webp"
                alt="Startup India"
                className="w-20 h-auto"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="flex items-center justify-center px-10">
            <Link href={"https://digitalindia.gov.in/"} target="_blank">
              <img
                src="/footer/6.webp"
                alt="Digital India"
                className="w-20 h-auto"
                width={100}
                height={100}
              />
            </Link>
          </div>
        </Slide>
      </div>
      <div className="bg-[#003071] text-gray-200 p-4 lg:px-32 space-y-2 md:space-y-0 flex flex-col md:flex-row items-center md:justify-between">
        <div className="text-sm" title={t("copyright")}>
          {" "}
          {t("copyright")}
        </div>
        <div className="text-sm flex flex-row space-x-5">
          <div>
            <Link href={"/"} title="Sitemap">
              Sitemap
            </Link>
          </div>
          <div>
            <Link href={"/"} title="Disclaimer">
              Disclaimer
            </Link>
          </div>
        </div>

        {/* <div className="text-sm" title="Developed By Dreamcare Developers">
          Developed By :{" "}
          <a
            href="https://dreamcaredevelopers.com/"
            target="_blank"
            className="hover:text-white"
          >
            Dreamcare Developers
          </a>
        </div>
        <div>
          <WebsiteCarbonBadge
            url="https://maharashtrasrpf.gov.in/"
            co2="0.13"
            percentage="87"
            dark={true}
          />
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
