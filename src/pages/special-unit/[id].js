import Head from "next/head";
import React, { useState, useEffect, useContext } from "react";
import Navbar from "@/components/Navbar";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import Context from "../../context/context";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import "react-quill/dist/quill.core.css";

const index = ({ id, groupdata }) => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const [records, setrecords] = useState([]);

  const titlenew = groupdata.name + " | " + t("police_station_name");

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

        <title>{titlenew}</title>
      </Head>

      <main className="min-h-screen">
        <Navbar />
        <div className="flex flex-col lg:flex-row bg-gray-50 border-b border-gray-100">
          <div className="w-full lg:w-1/3 flex items-center  justify-center lg:justify-end pr-0 lg:pr-10">
            <div className="flex flex-col items-center lg:items-end">
              <h1 className="text-4xl text-center lg:text-right text-gray-600 py-7 lg:py-0">
                {Ctx.lang === "en" && <>{groupdata.name}</>}
                {Ctx.lang === "mr" && <>{groupdata.name_in_marathi}</>}
              </h1>
              <Link href={`/unit-officer/${id}`} className="">
                <button className="px-3 py-2 border border-[#0245A7] text-[#0245A7] my-5">
                  {t("officers")} {t("portfolio")}
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="w-full">
              <img
                src={groupdata.photo}
                alt=""
                className="w-full h-[290px] lg:h-[390px] object-cover"
                style={{
                  clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-center text-4xl text-gray-700 mt-10">
            {t("about_us")}
          </h2>
          <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>

          <div className="max-w-4xl mx-auto pb-10">
            {Ctx.lang === "en" && (
              <div
                dangerouslySetInnerHTML={{ __html: groupdata.info }}
                className="prose  view ql-editor"
              />
            )}
            {Ctx.lang === "mr" && (
              <div
                dangerouslySetInnerHTML={{ __html: groupdata.info_in_marathi }}
                className="prose  view ql-editor"
              />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default index;

export async function getServerSideProps(context) {
  const { id } = context.params;
  let groupdata = null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/unit-detail?Id=${id}`
    );

    const data = await res.json();

    if (data.group) {
      groupdata = data.group || null;
    }

    return { props: { id, groupdata } };
  } catch (error) {
    return { props: { id, groupdata: null } };
  }
}
