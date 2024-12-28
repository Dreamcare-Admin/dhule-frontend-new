import React from "react";
import Footer from "@/components/Footer";
import Head from "next/head";
import Navbar from "@/components/Navbar";

import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const DocumentDependentComponent = dynamic(
  () => import("../components/Orgchart"),
  { ssr: false } // Disable server-side rendering for this component
);

const Org = () => {
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

        <title>Organizational Structure | Dhule Police</title>
      </Head>

      <main className="min-h-screen">
        <Navbar />

        <h1 className="text-center text-4xl text-gray-700 mt-10">
          {t("organizational_structure")}
        </h1>
        <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>

        {typeof window !== "undefined" && <DocumentDependentComponent />}
      </main>

      <Footer />
    </>
  );
};

export default Org;
