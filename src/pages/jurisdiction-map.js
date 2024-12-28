import Head from "next/head";
import React, { useState, useEffect, useContext } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import Context from "../context/context";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const PSOfficers = () => {
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

        <title>Juridiction Map | Dhule Police</title>
      </Head>

      <main className="min-h-screen">
        <Navbar />
        <h1 className="text-center font-semibold text-2xl text-gray-700 pt-10 px-5">
          {t("jurisdiction")}{" "}
          <span className="text-orange-500">{t("map")}</span>
        </h1>
        <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>

        <div className="max-w-7xl mx-auto px-5 py-5">
          <img
            src="/mapnew.jpeg"
            alt="Jurisdiction Map"
            className="w-full h-auto"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PSOfficers;
