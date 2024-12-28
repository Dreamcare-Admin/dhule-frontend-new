import React, { useContext, useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Context from "../../context/context";

const Gallery = () => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const [records, setrecords] = useState([]);

  const fetchrecords = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-gallery?tag=media`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data) {
        // console.log(data.records);
        setrecords(data);
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

        <title>Media Coverage | Dhule Police</title>
      </Head>

      <main className="min-h-screen">
        <Navbar />

        <h1 className="text-center text-4xl text-gray-700 mt-10">
          {t("media_coverage")}
        </h1>
        <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>

        {records && (
          <div className="container max-w-5xl mx-auto mt-5 mb-20 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-5 lg:px-0 justify-items-center">
              {records.map((item) => {
                const { title, titleInMarathi, image, _id } = item;

                return (
                  <a key={_id} href={`/media-coverage/${_id}`}>
                    <div
                      key={_id}
                      className="bg-white rounded-lg shadow-lg max-w-sm "
                    >
                      <div className="relative aspect-w-3 aspect-h-4">
                        <Image
                          src={image.imagelink}
                          alt={title}
                          width={400}
                          height={300}
                          className="rounded-t-lg h-60 object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-gray-600">
                          <div>
                            {Ctx.lang === "en" && <>{title}</>}
                            {Ctx.lang === "mr" && <>{titleInMarathi}</>}
                          </div>
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Gallery;
