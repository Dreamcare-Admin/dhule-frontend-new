import React from "react";
import Footer from "@/components/Footer";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useTranslation } from "react-i18next";

const Notfound = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon-3.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>404 | Page Not Found</title>
      </Head>

      <main className="min-h-screen ">
        <Navbar />
        <h1 className="text-center text-4xl mt-32 text-gray-600 font-bold">
          404 Page Not Found
        </h1>
      </main>

      <Footer />
    </>
  );
};

export default Notfound;
