import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useTranslation } from "react-i18next";
import Context from "../context/context";
import Link from "next/link";
import { WebsiteCarbonBadge } from "react-websitecarbon-badge";
import { MdOutlineLocalPolice } from "react-icons/md";

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
  const [count, setCount] = useState(" ");

  const fetchrecords = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-visitors`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data.count) {
        setCount(data.count);
      } else {
        setCount(0);
      }
    } catch (error) {
      setCount(0);
    }
  };

  useEffect(() => {
    fetchrecords();
  }, []);
  return (
    <footer className="">
      <div className="w-full flex justify-center items-center mt-14 mb-5">
        <p className="uniqueFont text-center text-4xl sm:text-7xl  justify-center items-center  z-20 text-[#80B341] uppercase px-4 flex gap-1 bg-gradient-to-r from-[#b92b27] to-[#1565c0] text-transparent bg-clip-text">
          <MdOutlineLocalPolice className="text-blue-900" />
          Keeping You Safe
          <MdOutlineLocalPolice className="text-blue-900" />
        </p>
      </div>
      <div>
        <img
          src="/dhule-illustration.jpg"
          alt="illustration"
          className="w-full h-auto object-contain"
          width={100}
          height={100}
          loading="lazy"
        />
      </div>
      <div className="py-3 max-w-6xl mx-auto">
        <Slide
          slidesToScroll={1}
          slidesToShow={2}
          indicators={false}
          autoplay={true}
          responsive={responsiveSettings}
          duration={1000}
        >
          <div className="flex items-center px-10">
            <Link href={"https://acbmaharashtra.gov.in/"} target="_blank">
              <img
                src="/footer/1.webp"
                alt="ANTI-CORRUPTION BUREAU, MAHARASHTRA STATE"
                className="w-16 h-auto"
                width={100}
                height={100}
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
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
            <Link href={"/sitemap.xml"} title="Sitemap">
              {t("sitemap")}
            </Link>
          </div>
          <div>
            <Link href={"/disclaimer"} title="Disclaimer">
              {t("disclaimer")}
            </Link>
          </div>
        </div>

        <div className="text-sm">
          {t("visitors")} : {count}
        </div>
        {/* <div>
          <WebsiteCarbonBadge
            url="https://maharashtrasrpf.gov.in/"
            co2="0.13"
            percentage="87"
            dark={true}
          />
        </div>  */}
      </div>
    </footer>
  );
};

export default Footer;
