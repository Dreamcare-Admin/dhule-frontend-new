import React, { useState, useEffect, useContext } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Head from "next/head";
import { FiExternalLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import Context from "../../context/context";

import Link from "next/link";

const index = () => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const [records, setrecords] = useState([]);

  const fetchrecords = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-all-wellfare?tag=initiative`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data.Data) {
        // console.log(data.records);
        setrecords(data.Data);
      } else {
        //   notifyWarn();
      }
    } catch (error) {
      // notifyWarn();
    }
  };

  useEffect(() => {
    fetchrecords();
  }, []);

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

        <title>Initiatives | Dhule Police</title>
      </Head>
      <main className="min-h-screen">
        <Navbar />

        <h1 className="text-center text-4xl text-gray-700 mt-10">
          {t("initiatives")}
        </h1>
        <div className="w-28 mt-5 border-b border-orange-400 mx-auto mb-14"></div>

        {records.map((record) => {
          const {
            title,
            title_in_marathi,
            photo,
            about,
            about_in_marathi,
            _id,
          } = record;
          // const concateAbout = about.substring(0, 300);
          // const concateAbout_in_marathi = about_in_marathi.substring(0, 300);

          return (
            <Link href={`/initiatives/${_id}`} key={_id}>
              <div className="w-[300px] lg:w-[900px] border flex flex-col lg:flex-row max-h-[590px] lg:h-52 shadow-lg mx-auto my-8">
                <div className="w-full lg:w-1/3">
                  <img
                    src={photo[0]}
                    alt=""
                    className="w-full h-52 sm:h-auto lg:h-full lg:w-full object-cover"
                  />
                </div>
                <div className="p-5 w-full lg:w-2/3 leading-8">
                  <h2 className="py-2 font-semibold text-lg">
                    {Ctx.lang === "en" && <>{title}</>}
                    {Ctx.lang === "mr" && <>{title_in_marathi}</>}
                  </h2>
                  <p className="text-gray-600 line-clamp-5 sm:line-clamp-3">
                    {Ctx.lang === "en" && <>{about}</>}
                    {Ctx.lang === "mr" && <>{about_in_marathi}</>}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </main>
      <Footer />
    </>
  );
};

export default index;
