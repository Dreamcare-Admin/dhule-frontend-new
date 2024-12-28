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

const cyberAwarenessData = [
  {
    title: "Raju and 40 thieves-RBI Ombudsman Mumbai II_Mobile landscape",
    link: "https://www.cybercrime.gov.in/pdf/Raju_and_40_thieves_RBI_Ombudsman_Mumbai_II_Mobile_landscape.pdf",
  },
  {
    title: "Cyber Hygiene for cyber space (English)",
    link: "https://www.cybercrime.gov.in/pdf/Final_English_Manual_Basic.pdf",
  },
  {
    title: "Cyber Hygiene for cyber space (Hindi)",
    link: "https://www.cybercrime.gov.in/pdf/Final_Hindi_Manual_Basic.pdf",
  },
  {
    title: "Financial Fraud",
    link: "https://www.cybercrime.gov.in/pdf/Financial%20Fraud%20Brochures%20final.pdf",
  },
  {
    title: "Job Fraud",
    link: "https://www.cybercrime.gov.in/pdf/Job%20Fraud%20Brochure%20Final.pdf",
  },
  {
    title: "Matrimonial fraud",
    link: "https://www.cybercrime.gov.in/pdf/Matrimonial%20fraud%20brochure%20final.pdf",
  },
  {
    title: "Safe Use of social Media Platform",
    link: "https://www.cybercrime.gov.in/pdf/Safe%20Use%20of%20social%20Media%20Platform%20Brochure%20final.pdf",
  },
  {
    title: "Cyber Crime Awareness Booklet on Cyber Security Awareness",
    link: "https://www.cybercrime.gov.in/pdf/Cyber%20Security%20Awareness%20Booklet%20for%20Citizens.pdf",
  },
];

const cyberAwareness = () => {
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

        <title>Cyber Awareness | Dhule Police</title>
      </Head>
      <main className="min-h-screen">
        <Navbar />
        <div className="py-5 w-full flex flex-col">
          <div className="w-full max-w-5xl min-h-[10vh] mx-auto px-4">
            <h1 className="text-center text-4xl text-gray-700 mt-10">
              {t("cyber_awareness")}
            </h1>
            <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>
            <br />
            <div className="w-full flex flex-col justify-center items-center gap-4">
              {cyberAwarenessData.map((item, idx) => (
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
          </div>
        </div>
      </main>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default cyberAwareness;
