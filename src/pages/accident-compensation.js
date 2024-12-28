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

  const [years, setYears] = useState([]);

  const [psId, setPsId] = useState("");
  const [year, setYear] = useState("");
  const [cr_no, setCr_no] = useState("");

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

  const fetchYears = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-year`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data) {
        setYears(data.years);
      } else {
        //   notifyWarn();
      }
    } catch (error) {
      // notifyWarn();
    }
  };

  const fetchrecords = async () => {
    if (psId || year || cr_no) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-ac-by-filter?psId=${psId}&year=${year}&cr_no=${cr_no}`,
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
    }
  };

  useEffect(() => {
    fetchStations();
    fetchYears();
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

        <title>Accident Compensation | Dhule Police</title>
      </Head>
      <main className="min-h-screen">
        <Navbar />

        <h1 className="text-center text-4xl text-gray-700 mt-10">
          {t("accident_compensation")}
        </h1>
        <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>

        <div className="max-w-4xl mx-auto my-10 px-5">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex flex-col my-1 space-y-1 w-full md:w-1/3">
              <label htmlFor="title" className="mb-1 text-base text-gray-800">
                Police Station
              </label>
              <select
                id="locationSelect"
                name="location"
                value={psId}
                onChange={(e) => setPsId(e.target.value)}
                className="text-base border border-gray-600 px-3 py-2  outline-none"
              >
                <option value="">Select Police Station</option>
                {stations.map((record) => {
                  const { name, _id } = record;

                  return (
                    <option key={_id} value={_id}>
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex flex-col my-1 space-y-1 w-full md:w-1/3">
              <label htmlFor="title" className="mb-1 text-base text-gray-800">
                Cr No
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="text-base border border-gray-600 px-3 py-2  outline-none "
                placeholder=""
                value={cr_no}
                onChange={(e) => setCr_no(e.target.value)}
              />
            </div>

            <div className="flex flex-col my-1 space-y-1 w-full md:w-1/3">
              <label htmlFor="title" className="mb-1 text-base text-gray-800">
                Year
              </label>
              <select
                id="locationSelect"
                name="location"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="text-base border border-gray-600 px-3 py-2  outline-none"
              >
                <option value="">Select Year</option>
                {years.map((record) => {
                  const { year, _id } = record;

                  return (
                    <option key={_id} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="flex justify-end my-5">
            <button
              onClick={() => fetchrecords()}
              className="px-10 py-2 text-white bg-[#0245A7]"
            >
              Submit
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-[896px] lg:w-full">
              <thead>
                <tr className="flex flex-row border bg-slate-200">
                  <th className="w-[20%] text-start border-r p-3">
                    Police Station
                  </th>
                  <th className="w-[20%] text-start border-r p-3">CR No</th>
                  <th className="w-[20%] text-start border-r p-3">Year</th>
                  <th className="w-[20%] text-start border-r p-3">
                    COMP. AA File
                  </th>
                  <th className="w-[20%] text-start p-3"> Copy of FIR</th>
                </tr>
              </thead>
              <tbody>
                {records &&
                  records.map((record) => {
                    const { _id, psId, cr_no, year, comm_aa, fir_file } =
                      record;
                    return (
                      <tr className="flex flex-row border border-t-0" key={_id}>
                        <td className="w-[20%] text-start border-r p-3">
                          {psId.name}
                        </td>
                        <td className="w-[20%] text-start border-r p-3">
                          {cr_no}
                        </td>
                        <td className="w-[20%] text-start border-r p-3">
                          {year}
                        </td>
                        <td className="w-[20%] text-start border-r p-3">
                          <Link href={comm_aa} target="_blank">
                            <img src="/pdf.svg" className="w-8 h-8" alt="pdf" />
                          </Link>
                        </td>
                        <td className="w-[20%] text-start  p-3">
                          <Link href={fir_file} target="_blank">
                            <img src="/pdf.svg" className="w-8 h-8" alt="pdf" />
                          </Link>
                        </td>
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
