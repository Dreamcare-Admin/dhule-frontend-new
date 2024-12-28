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
  const [stations, setStations] = useState([]);
  const [psId, setpsId] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchrecords = async (page) => {
    if (!psId) {
      return;
    }
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-entry?psId=${psId}&page=${page}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data) {
        // console.log(data.results);
        setrecords(data.entries);
        setTotalPages(data.totalPages);
      } else {
        // notifyWarn();
      }
    } catch (error) {
      //   notifyWarn();
    }
  };

  const fetchrecordsAll = async (page) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-all-entry?page=${page}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data) {
        setrecords(data.entries);
        setTotalPages(data.totalPages);
      } else {
        //   notifyWarn();
      }
    } catch (error) {
      // notifyWarn();
    }
  };

  const fetchStations = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-stations`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data) {
        setStations(data.stations);
      } else {
        //   notifyWarn();
      }
    } catch (error) {
      // notifyWarn();
    }
  };

  useEffect(() => {
    fetchrecordsAll();
    fetchStations();
  }, []);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (psId) {
      fetchrecords(currentPage);
    } else {
      fetchrecordsAll(currentPage);
    }
  }, [currentPage]);

  const resethandler = () => {
    setpsId("");
    setCurrentPage(1);
    setTotalPages(1);
    fetchrecordsAll();
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

        <title>DCP Visit | Dhule Police</title>
      </Head>
      <main className="min-h-screen">
        <Navbar />

        <h1 className="text-center text-4xl text-gray-700 mt-10">
          {t("dcp_visit")}
        </h1>
        <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>

        <p className="text-gray-600 text-center text-lg mt-10">{t("dcp1")}</p>

        <div className="max-w-5xl mx-auto mb-20">
          <div className="flex flex-col lg:flex-row space-y-5 lg:space-x-10 items-center lg:items-baseline mt-10">
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="std"
                className="mb-1 text-base text-gray-800 hidden"
              >
                * Police station
              </label>
              <select
                id="locationSelect"
                name="location"
                value={psId}
                onChange={(e) => setpsId(e.target.value)}
                className="text-base border border-black p-3  outline-none focus:border-purple-700 w-72 rounded"
              >
                <option value="">{t("select_group")}</option>
                {stations.map((record) => {
                  const { name, name_in_marathi, _id } = record;

                  return (
                    <option key={_id} value={_id}>
                      {Ctx.lang === "en" && <>{name}</>}
                      {Ctx.lang === "mr" && <>{name_in_marathi}</>}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex items-end">
              <button
                className="border border-[#003071] bg-white text-[#003071] p-3 w-72 hover:bg-[#003071] hover:text-white rounded"
                onClick={fetchrecords}
              >
                {t("select")}
              </button>
            </div>

            <div className="flex items-end">
              <button
                className="border border-[#003071] bg-white text-[#003071] p-3 w-72 hover:bg-[#003071] hover:text-white rounded"
                onClick={resethandler}
              >
                {t("reset")}
              </button>
            </div>
          </div>

          <table className="w-full mx-auto mt-10 text-left">
            <thead>
              <tr className="border flex flex-row justify-between border-gray-400 bg-gray-200">
                <th className="p-4 w-4/12 border-r border-gray-400">
                  {t("zone")}
                </th>
                <th className="p-4 w-4/12 border-r border-gray-400">
                  {t("police_station_dcp")}
                </th>
                <th className="p-4 w-4/12 border-r border-gray-400">
                  {t("first_date")}
                </th>
                <th className="p-4 w-4/12  border-gray-400">
                  {t("second_date")}
                </th>
              </tr>
            </thead>

            <tbody>
              {records.map((record) => {
                const { _id, psId, first_date, second_date } = record;
                return (
                  <tr
                    className="border border-t-0 flex flex-row justify-between border-gray-400"
                    key={_id}
                  >
                    <td className="p-4 w-4/12 border-r border-gray-400">
                      {Ctx.lang === "en" && <>{psId.zone.name}</>}
                      {Ctx.lang === "mr" && <>{psId.zone.name_in_marathi}</>}
                    </td>
                    <td className="p-4 w-4/12 border-r border-gray-400">
                      {Ctx.lang === "en" && <>{psId.name}</>}
                      {Ctx.lang === "mr" && <>{psId.name_in_marathi}</>}
                    </td>
                    <td className="p-4 w-4/12 border-r border-gray-400">
                      {first_date}
                    </td>
                    <td className="p-4 w-4/12  border-gray-400">
                      {second_date}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="mt-5">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="mr-2 border rounded-md p-2 py-1 bg-gray-100 shadow-md"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="ml-2 border rounded-md p-2 py-1 bg-gray-100 shadow-md"
            >
              Next
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default index;
