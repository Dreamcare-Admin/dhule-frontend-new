import React, { useState, useEffect, useContext } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Head from "next/head";
import { FiExternalLink } from "react-icons/fi";
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

        <title>Disclaimer | Dhule Police</title>
      </Head>
      <main className="min-h-screen">
        <Navbar />

        <h1 className="text-center text-4xl text-gray-700 mt-28">
          {t("disclaimer")}
        </h1>
        <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>

        <div className="max-w-4xl mx-auto text-justify mt-10 px-5">
          <h2 className="text-2xl my-5 text-gray-600">General</h2>

          <p className="text-lg my-5 text-gray-600">
            Information displayed on this website is informative in nature.
            Dhule Police or any agency connected with them or
            employed by them assumes no responsibility for the accuracy or
            reliability of any information, reproduction or record published
            herein. Information / records in the officical documents / sources
            shall prevail in case of any in discrepancy. Viewers are adviced to
            kindly refer the original texts of various laws, rules, judgements
            and amendments in connection with legislative material provided on
            this site before relying thereupon.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default index;
