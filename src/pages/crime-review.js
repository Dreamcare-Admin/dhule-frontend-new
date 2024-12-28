import React, { useState, useEffect, useContext } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import Context from "../context/context";

import Link from "next/link";

const index = () => {
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

        <title>Crime Review | Dhule Police</title>
      </Head>
      <main className="min-h-screen">
        <Navbar />

        <h1 className="text-center text-4xl text-gray-700 mt-10">
          {t("crime_review")}
        </h1>
        <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-stretch gap-5  mx-auto max-w-xs lg:max-w-4xl mt-20">
          <Link href={"/absconder-list"}>
            <div className="py-3 px-4 bg-white border border-[#0245A7] text-[#0245A7] w-full text-center">
              {t("absconder_list")}
            </div>
          </Link>
          <Link href={"/atrocity-cases"}>
            <div className="py-3 px-4 bg-white border border-[#0245A7] text-[#0245A7] w-full text-center">
              {t("atrocity_cases")}
            </div>
          </Link>
          <Link href={"/crime-statistics"}>
            <div className="py-3 px-4 bg-white border border-[#0245A7] text-[#0245A7] w-full text-center">
              {t("crime_statistics")}
            </div>
          </Link>
          <Link href={"/drunk-and-drive"}>
            <div className="py-3 px-4 bg-white border border-[#0245A7] text-[#0245A7] w-full text-center">
              {t("drunk_and_drive_cases")}
            </div>
          </Link>
          <Link href={"/externee"}>
            <div className="py-3 px-4 bg-white border border-[#0245A7] text-[#0245A7] w-full text-center">
              {t("externee")}
            </div>
          </Link>
          <Link href={"/ncrb"}>
            <div className="py-3 px-4 bg-white border border-[#0245A7] text-[#0245A7] w-full text-center">
              {t("ncrb")}
            </div>
          </Link>
          <Link
            href={
              "http://www.mhpolice.maharashtra.gov.in/Citizen/MH/PublishedFIRs.aspx"
            }
            target="_blank"
          >
            <div className="py-3 px-4 bg-white border border-[#0245A7] text-[#0245A7] w-full text-center">
              {t("registered_firs")}
            </div>
          </Link>
          <Link href={"/bandifarari"}>
            <div className="py-3 px-4 bg-white border border-[#0245A7] text-[#0245A7] w-full text-center">
              {t("bandifarari")}
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default index;
