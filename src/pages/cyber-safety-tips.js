import React, { useState, useEffect, useContext } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import Context from "../context/context";

import Link from "next/link";
// import StickyAction from "@/components/StickyAction";
import { FaCloudDownloadAlt } from "react-icons/fa";

const safetyTips = [
  {
    title: "A Handbook For Students on Cyber Safety in (Hindi)",
    link: "https://cybercrime.gov.in/UploadMedia/CyberSafetyHindi.pdf",
  },
  {
    title: "A Handbook For Students on Cyber Safety in (English)",
    link: "https://cybercrime.gov.in/UploadMedia/CyberSafetyEng.pdf",
  },
  {
    title: "Handbook for Tackling Cyber Crimes",
    link: "https://cybercrime.gov.in/UploadMedia/TSWSW-HandbookforTacklingCyberCrimes.pdf",
  },
  {
    title: "For Students on Cyber Safety",
    link: "https://cybercrime.gov.in/UploadMedia/index.html",
  },
];

const cyberSafetyTips = () => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/logo-new.jpg" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Welcome to the official website of Dhule Police. Stay informed and connected with our community-focused initiatives and safety measures."
        />
        <meta property="og:title" content="Dhule Police" />
        <meta
          property="og:description"
          content="Official website of Dhule Police"
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/dmafmaoif/image/upload/v1735280919/logo-new_thddod.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Official website of Dhule Police"
        />
        <meta name="twitter:title" content="Dhule Police" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dmafmaoif/image/upload/v1735280919/logo-new_thddod.png"
        />

        <title>Cyber Safety Tips | Dhule Police</title>
      </Head>
      <main className="min-h-screen">
        <Navbar />
        {/* <StickyAction /> */}
        <div className="py-5 w-full flex flex-col">
          <div className="w-full max-w-5xl min-h-[10vh] mx-auto px-4">
            <h1 className="text-center text-4xl text-gray-700 mt-10">
              {t("cyber_safety_tips")}
            </h1>
            <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>
            <br />
            <div className="w-full flex flex-col justify-center items-center gap-4">
              {safetyTips.map((item, idx) => (
                <Link
                  href={item.link}
                  target="_blank"
                  className="w-full flex justify-start items-center max-w-md mx-auto gap-4 cursor-pointer"
                  key={idx}
                >
                  <div className="flex">
                    <FaCloudDownloadAlt size={30} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-left">{t(item.title)}</p>
                  </div>
                </Link>
              ))}
            </div>
            <br />

            <h2 className="text-left text-primary">{t("p1")}</h2>
            <br />
            <p className="text-left ">{t("p2")}</p>

            <br />

            <h2 className=" text-gray-700 font-bold bg-gray-50 text-center py-2">
              {t("pp1")}
            </h2>

            <div className="flex w-full flex-col gap-4 py-4">
              <p className="text-left">
                <span className="font-bold">{t("p3-1")}</span> {t("p3")}
              </p>
              <p className="text-left">
                <span className="font-bold">{t("p4-1")} </span>
                {t("p4")}
              </p>
              <p className="text-left">
                <span className="font-bold">{t("p5-1")} </span>
                {t("p5")}
              </p>

              <p className="text-left">{t("p6")}</p>

              <p className="text-left">
                <span className="font-bold">{t("p7-1")} </span>
                {t("p7")}
              </p>

              <p className="text-left">
                <span className="font-bold">{t("p8-1")} </span>
                {t("p8")}
              </p>

              <p className="text-left">
                <span className="font-bold">{t("p9-1")} </span>
                {t("p9")}
              </p>

              <p className="text-left">
                <span className="font-bold">{t("p10-1")}</span>
                {t("p10")}
              </p>

              <p className="text-left">
                <span className="font-bold">{t("p11-1")} </span>
                {t("p11")}
              </p>
            </div>

            <h2 className=" text-gray-700 font-bold bg-gray-50 text-center py-2">
              {t("pp2")}
            </h2>

            <div className="flex w-full flex-col gap-4 py-4">
              <p className="text-left">
                <span className="font-bold">{t("p12-1")} </span> {t("p12")}
              </p>
              <p className="text-left">{t("p13")}</p>
              <p className="text-left">{t("p14")}</p>

              <p className="text-left">{t("p15")}</p>
              <p className="text-left">{t("p16")}</p>

              <p className="text-left">{t("p17")}</p>
              <p className="text-left">{t("p18")}</p>

              <p className="text-left">{t("p19")}</p>

              <p className="text-left">
                <span className="font-bold">{t("p20")}</span>
              </p>

              <p className="text-left">{t("p21")}</p>

              <p className="text-left">{t("p22")}</p>

              <p className="text-left">{t("p23")}</p>

              <p className="text-left font-bold">{t("p24")}</p>

              <p className="text-left">{t("p25")}</p>

              <p className="text-left">{t("p26")}</p>

              <p className="text-left">
                <span className="font-bold">{t("p27-1")} </span>
                {t("p27")}
              </p>

              <p className="text-left">{t("p28")}</p>

              <p className="text-left">{t("p29")}</p>

              <p className="text-left">{t("p30")}</p>

              <p className="text-left font-bold">{t("p31")}</p>

              <p className="text-left">{t("p-32")}</p>

              <p className="text-left font-bold">{t("p33")}</p>

              <p className="text-left">{t("p34")}</p>

              <p className="text-left font-bold">{t("p35")}</p>

              <p className="text-left">
                <span className="font-bold">{t("p36-1")} </span>
                {t("p36")}
              </p>

              <p className="text-left">
                <span className="font-bold">{t("p37-1")}</span>
                {t("p37")}
              </p>

              <p className="text-left font-bold">{t("p38")}</p>

              <p className="text-left">{t("p39")}</p>

              <p className="text-left">{t("p40")}</p>

              <p className="text-left">
                {t("p41")}{" "}
                <Link
                  href="https://www.cybercrime.gov.in/"
                  target="_blank"
                  className="font-bold"
                >
                  (www.cybercrime.gov.in)
                </Link>
              </p>
            </div>
            <h2 className=" text-gray-700 font-bold bg-gray-50 text-center py-2">
              {t("pp3")}
            </h2>

            <div className="flex w-full flex-col gap-4 py-4">
              <p className="text-left font-bold">{t("p42")}</p>

              <p className="text-left">{t("p43")}</p>

              <p className="text-left">{t("p44")}</p>

              <p className="text-left">{t("p45")}</p>

              <p className="text-left">{t("p46")}</p>

              <p className="text-left">{t("p47")}</p>

              <p className="text-left">
                {t("p48")}{" "}
                <Link
                  href="https://www.cybercrime.gov.in/"
                  target="_blank"
                  className="font-bold"
                >
                  (www.cybercrime.gov.in).
                </Link>
              </p>

              <p className=" text-left font-bold">{t("p49")}</p>

              <p className="text-left">{t("p50")}</p>

              <p className="text-left">{t("p51")}</p>

              <p className="font-bold border-2 p-4 border-gray-700 text-center">
                {t("p52")}
              </p>
            </div>
          </div>
        </div>
      </main>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default cyberSafetyTips;
