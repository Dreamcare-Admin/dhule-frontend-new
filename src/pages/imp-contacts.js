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

  const fetchrecords = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-imp-contact`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data.contacts) {
        // console.log(data.records);
        setrecords(data.contacts);
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

        <title>Important Contacts | Dhule Police</title>
      </Head>
      <main className="min-h-screen">
        <Navbar />

        <h1 className="text-center text-4xl text-gray-700 mt-10">
          {t("imp_contacts")}
        </h1>
        <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>

        <div className="mx-auto my-10">
          <div className="overflow-x-auto">
            <table className="w-[1200px] mx-auto">
              <thead>
                <tr className="flex flex-row p-2 py-3 border bg-slate-200">
                  <th className="w-1/12 text-start">{t("sr_no")}</th>
                  <th className="w-4/12 text-start">
                    {t("office_name_address")}
                  </th>
                  <th className="w-2/12 text-start">Mobile No</th>
                  <th className="w-2/12 text-start">{t("telephone_no")}</th>
                  <th className="w-3/12 text-start"> {t("email_id")}</th>
                </tr>
              </thead>
              <tbody>
                {records &&
                  records.map((record) => {
                    return (
                      <tr
                        className="flex flex-row p-2 py-3 border border-t-0"
                        key={record._id}
                      >
                        <td className="w-1/12 text-start">{record.sr_no}</td>
                        <td className="w-4/12 text-start">
                          {Ctx.lang === "en" && <>{record.address}</>}
                          {Ctx.lang === "mr" && (
                            <>{record.address_in_marathi}</>
                          )}
                        </td>
                        <td className="w-2/12 text-start">{record.mobile}</td>
                        <td className="w-2/12 text-start">
                          {record.telephone}
                        </td>
                        <td className="w-3/12 text-start">{record.email}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default index;
