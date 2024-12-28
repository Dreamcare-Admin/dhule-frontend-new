import Head from "next/head";
import React, { useState, useEffect, useContext } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import Context from "../../context/context";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const PSOfficers = ({ id }) => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const [records, setrecords] = useState([]);
  const [name, setname] = useState("");
  const [name_in_marathi, setname_in_marathi] = useState("");

  const fetchPSOfficers = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/officer-by-unit?Id=${id}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data) {
        // console.log(data.records);
        setrecords(data.Officers);
        setname(data.name);
        setname_in_marathi(data.name_in_marathi);
      } else {
        //   notifyWarn();
      }
    } catch (error) {
      // notifyWarn();
    }
  };

  useEffect(() => {
    fetchPSOfficers();
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

        <title>Unit Officer | Dhule Police</title>
      </Head>

      <main className="min-h-screen">
        <Navbar />
        <h1 className="text-center font-semibold text-2xl text-gray-700 pt-10 px-5">
          {Ctx.lang === "en" && <>{name}</>}
          {Ctx.lang === "mr" && <>{name_in_marathi}</>}{" "}
          <span className="text-orange-500">{t("officers")}</span>
        </h1>
        <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>

        <div className="my-10 grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-4xl mx-auto text-gray-600 justify-items-center">
          {records &&
            records.map((record) => {
              return (
                <div
                  className="border rounded-xl shadow-xl w-72 p-5 text-center"
                  key={record._id}
                >
                  <div className="flex items-center justify-center">
                    {record.officer_photo && (
                      <img
                        src={record.officer_photo}
                        alt=""
                        className="w-40 h-48 object-cover border rounded-lg"
                      />
                    )}
                    {!record.officer_photo && (
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
                    {Ctx.lang === "en" && <div>{record.post}</div>}
                    {Ctx.lang === "mr" && <div>{record.post_in_marathi}</div>}
                  </div>

                  <div className="flex space-x-2 text-xs mt-5">
                    <div>
                      <FaPhone className="text-base" />
                    </div>
                    {record.contact_no && (
                      <a href={`tel:+${record.contact_no}`}>
                        {record.contact_no}
                      </a>
                    )}
                  </div>

                  <div className="flex space-x-2 text-xs mt-3">
                    <div>
                      <MdOutlineEmail className="text-lg" />
                    </div>
                    {record.email !== "undefined" && (
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

export default PSOfficers;

export async function getServerSideProps(context) {
  const { id } = context.params;

  return { props: { id } };
}
