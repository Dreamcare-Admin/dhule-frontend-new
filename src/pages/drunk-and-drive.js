import React, { useState, useEffect, useContext } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import Context from "../context/context";

import Link from "next/link";

const index = () => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const [records, setrecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchrecords = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/records-by-tag?tag=drunk_and_drive_cases&page=${currentPage}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data.records) {
        // console.log(data.records);
        setrecords(data.records);
        setTotalPages(data.totalPages);
      } else {
        //   notifyWarn();
      }
    } catch (error) {
      // notifyWarn();
    }
  };

  useEffect(() => {
    fetchrecords();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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

        <title>Drunk and Drive Cases | Dhule Police</title>
      </Head>
      <main className="min-h-screen">
        <Navbar />

        <h1 className="text-center text-4xl text-gray-700 mt-10">
          {t("drunk_and_drive_cases")}
        </h1>
        <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>

        <div className="overflow-x-auto max-w-4xl mx-auto my-10">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="flex flex-row p-2 py-3 border bg-slate-200">
                <th className="w-2/12 text-start"> {t("date")}</th>
                <th className="w-9/12 text-start"> {t("title")}</th>
                <th className="w-1/12 text-start"> {t("info")}</th>
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
                      <td className="w-2/12 text-start">{record.date}</td>
                      <td className="w-9/12 text-start">
                        {Ctx.lang === "en" && <>{record.title}</>}
                        {Ctx.lang === "mr" && <>{record.titleInMarathi}</>}
                      </td>
                      <td className="w-1/12 text-start">
                        <Link href={record.pdflink} target="_blank">
                          <img src="/pdf.svg" className="w-8 h-8" alt="pdf" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        {records.length > 0 && (
          <div className="mt-4 flex justify-center gap-2 items-center mx-auto">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-1 bg-blue-400 text-white rounded disabled:bg-gray-300 hover:bg-blue-600 transition-colors"
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-1 bg-blue-400 text-white rounded disabled:bg-gray-300 hover:bg-blue-600 transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default index;
