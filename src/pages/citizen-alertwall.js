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
  const [records, setrecords] = useState([]);

  function convertToEmbedUrl(youtubeUrl) {
    // Use a regular expression to extract the video ID
    const regex =
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|.*[?&]vi=)|youtu\.be\/)([^"&?/ ]{11})/;
    const liveRegex = /youtube\.com\/live\/([^?&]+)/;

    const match = youtubeUrl.match(regex);
    const liveMatch = youtubeUrl.match(liveRegex);

    if (match && match[1]) {
      const videoId = match[1];
      // Create the embed URL
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      return embedUrl;
    } else if (liveMatch && liveMatch[1]) {
      const liveStreamId = liveMatch[1];
      // Create the embed URL for live streams
      const embedUrl = `https://www.youtube.com/embed/${liveStreamId}`;
      return embedUrl;
    } else {
      return null; // Invalid YouTube URL
    }
  }

  const fetchrecords = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-alertwall-data?tag=citizen`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data.records) {
        // console.log(data.records);
        setrecords(data.records);
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

        <title>Citizen Alert Wall | Dhule Police</title>
      </Head>
      <main className="min-h-screen">
        <Navbar />

        <h1 className="text-center text-4xl text-gray-700 mt-10">
          {t("citizen_wall")}
        </h1>
        <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>

        <div className="w-auto sm:w-[560px] mx-auto my-10 mb-20 px-3 lg:px-0">
          {records.map((record) => {
            const { title, title_in_marathi, file_type, value, _id } = record;

            let embedUrl;
            if (file_type === "youtube") {
              embedUrl = convertToEmbedUrl(value);
            }

            return (
              <div className="my-10" key={_id}>
                <div className="flex">
                  <div className="w-1/12">
                    <img
                      src="/logo-new.jpg"
                      alt=""
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <p className="text-base lg:text-lg p-5 bg-gray-100 w-11/12 font-semibold text-gray-600">
                    {Ctx.lang === "en" && <>{title}</>}
                    {Ctx.lang === "mr" && <>{title_in_marathi}</>}
                  </p>
                </div>

                <div className="flex">
                  <div className="w-1/12"></div>
                  <div className="text-base lg:text-lg p-5 pt-0 bg-gray-100 w-11/12 font-semibold text-gray-600">
                    {file_type === "youtube" && (
                      <iframe
                        width="560"
                        height="315"
                        src={embedUrl}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                        className="mx-auto w-[250px] h-[150px] lg:w-[480px] lg:h-[290px]"
                        // className="w-full h-auto"
                      ></iframe>
                    )}

                    {file_type === "image" && (
                      <img src={value} alt="" className="w-full h-auto" />
                    )}

                    {file_type === "pdf" && (
                      <Link
                        href={value}
                        target="_blank"
                        className="inline-block"
                      >
                        <img src="/pdf.svg" className="w-8 h-8" alt="pdf" />
                      </Link>
                    )}

                    {file_type === "link" && (
                      <Link
                        href={value}
                        target="_blank"
                        className="inline-block"
                      >
                        {value}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default index;
