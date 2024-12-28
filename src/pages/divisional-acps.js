import Head from "next/head";
import React, { useState, useEffect, useContext } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import Context from "../context/context";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

const ACP = () => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const [records, setRecords] = useState([]);

  const fetchADG = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-acp`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data.Data) {
        setRecords(data.Data);
      } else {
        //   notifyWarn();
      }
    } catch (error) {
      // notifyWarn();
    }
  };

  useEffect(() => {
    fetchADG();
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

        <title>Divisional ACP | Dhule Police</title>
      </Head>

      <main className="min-h-screen">
        <Navbar />
        <h2 className="text-center font-semibold text-2xl text-gray-700 pt-10 px-5">
          {t("divisional")} <span className="text-orange-500">{t("acp")}</span>
        </h2>
        <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>

        <div className="my-10 grid grid-cols-1 lg:grid-cols-4 gap-5 max-w-7xl mx-auto text-gray-600 justify-items-center">
          {records.map((record) => {
            return (
              <div
                className="border rounded-xl shadow-xl w-72 p-5 text-center"
                key={record._id}
              >
                <div className="flex items-center justify-center">
                  {record.photo && (
                    <img
                      src={record.photo}
                      alt=""
                      className="w-40 h-48 object-cover border rounded-lg"
                    />
                  )}
                  {!record.photo && (
                    <img
                      src="/logo-new.jpg"
                      alt=""
                      className="w-40 h-48 object-contain border rounded-lg"
                    />
                  )}
                </div>

                <div className="font-semibold text-gray-900 mt-3">
                  {Ctx.lang === "en" && <div>{record.name}</div>}
                  {Ctx.lang === "mr" && <div>{record.name_in_marathi}</div>}
                </div>
                <div className="text-sm mt-2 pb-2 border-b">
                  {Ctx.lang === "en" && <div>{record.designation}</div>}
                  {Ctx.lang === "mr" && (
                    <div>{record.designation_in_marathi}</div>
                  )}
                </div>

                <div className="flex space-x-2 text-xs mt-5">
                  <div>
                    <FaMobileAlt className="text-base" />
                  </div>
                  {record.mobile && (
                    <a href={`tel:${record.mobile}`}>{record.mobile}</a>
                  )}
                </div>

                <div className="flex space-x-2 text-xs mt-5">
                  <div>
                    <FaPhone className="text-base" />
                  </div>
                  {record.phone && (
                    <a href={`tel:${record.phone}`}>{record.phone}</a>
                  )}
                </div>

                <div className="flex space-x-2 text-xs mt-5">
                  <div>
                    <MdOutlineEmail className="text-lg" />
                  </div>
                  {record.email && (
                    <a href={`mailto:${record.email}`}>{record.email}</a>
                  )}
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

export default ACP;
