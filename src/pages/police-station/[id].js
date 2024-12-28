import Head from "next/head";
import React, { useState, useEffect, useContext } from "react";
import Navbar from "@/components/Navbar";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import Context from "../../context/context";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const index = ({ id, groupdata, officerdata, divisiondata, zonedata }) => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const [records, setrecords] = useState([]);

  const titlenew = t(groupdata.name) + " | " + t("police_station_name");

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
        <div className="flex flex-col lg:flex-row bg-gray-50">
          <div className="w-full lg:w-1/3 flex items-center  justify-center lg:justify-end">
            <h1 className="text-4xl text-center lg:text-right text-gray-600 py-7 lg:py-0">
              {Ctx.lang === "en" && <>{groupdata.name} Police Station</>}
              {Ctx.lang === "mr" && (
                <>{groupdata.name_in_marathi} पोलिस स्टेशन</>
              )}
            </h1>
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
        {groupdata && (
          <div>
            {/* <h1 className="text-4xl text-center pt-10 pb-10 text-gray-600">
              {Ctx.lang === "en" && <>{groupdata.name} Police Station</>}
              {Ctx.lang === "mr" && (
                <>{groupdata.name_in_marathi} पोलिस स्टेशन</>
              )}
            </h1>

            <div className="w-full mb-10">
              <div className="w-full h-[300px] lg:h-[500px] relative">
                <img
                  src={groupdata.photo}
                  alt=""
                  className="w-full  h-[300px] lg:h-[500px] object-cover border-b border-[#003071]"
                />
              </div>
            </div> */}

            <div className="flex flex-col lg:flex-row border max-w-4xl mx-auto mb-10 mt-20 border-gray-400">
              <div className="w-full lg:w-1/3 flex flex-col justify-center items-center p-5 lg:border-r border-gray-400">
                {officerdata[0] && officerdata[0].officer_photo && (
                  <img
                    src={officerdata[0].officer_photo}
                    alt={officerdata[0].name}
                    className="w-40 h-40 object-cover border border-gray-400 rounded-lg shadow-lg"
                  />
                )}

                {officerdata[0] && !officerdata[0].officer_photo && (
                  <img
                    src="/logo-new.jpg"
                    alt={officerdata[0].name}
                    className="w-40 h-40 object-cover border border-gray-400 rounded-lg shadow-lg"
                  />
                )}

                {officerdata[0] && (
                  <div className="font-semibold text-gray-900 mt-3 text-center">
                    {Ctx.lang === "en" && <>{officerdata[0].name}</>}
                    {Ctx.lang === "mr" && <>{officerdata[0].name_in_marathi}</>}
                  </div>
                )}

                {officerdata[0] && (
                  <div className=" text-gray-900 mt-1 text-center">
                    {Ctx.lang === "en" && <>{officerdata[0].post}</>}
                    {Ctx.lang === "mr" && <>{officerdata[0].post_in_marathi}</>}
                  </div>
                )}
                {officerdata[0] && (
                  <div className="text-sm mt-1">
                    <a
                      href={`mailto:${officerdata[0].email}`}
                      className="hover:underline"
                    >
                      {officerdata[0].email}
                    </a>
                  </div>
                )}

                {officerdata[0] && (
                  <div className="text-sm mt-1">
                    <a
                      href={`tel:+${officerdata[0].contact_no}`}
                      className="hover:underline"
                    >
                      {officerdata[0].contact_no}
                    </a>
                  </div>
                )}
              </div>
              <div className="w-full lg:w-2/3 flex flex-col h-full">
                <div className="flex flex-row border-b border-gray-400 flex-grow">
                  <div className="p-5  border-gray-400 w-full">
                    <span className="font-semibold">
                      {t("official_landline")}
                    </span>{" "}
                    :{" "}
                    {groupdata.contact_no && (
                      <a
                        href={`tel:${groupdata.contact_no}`}
                        className="mr-5 hover:underline"
                      >
                        {groupdata.contact_no}
                      </a>
                    )}
                    {groupdata.contact_no2 && (
                      <a
                        href={`tel:${groupdata.contact_no2}`}
                        className="mr-5  hover:underline"
                      >
                        {groupdata.contact_no2}
                      </a>
                    )}
                    {groupdata.contact_no3 && (
                      <a
                        href={`tel:${groupdata.contact_no3}`}
                        className=" hover:underline"
                      >
                        {groupdata.contact_no3}
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex flex-row border-b border-gray-400 p-5 flex-grow">
                  <span className="font-semibold">{t("email_id")}</span> :
                  {groupdata && (
                    <a
                      href={`mailto:${groupdata.email}`}
                      className="ml-2 hover:underline"
                    >
                      {groupdata.email}
                    </a>
                  )}
                </div>
                <div className="flex flex-row border-b border-gray-400">
                  <div className="w-1/2 border-r border-gray-400 p-5">
                    <span className="font-semibold">{t("division")}</span> :{" "}
                    {divisiondata && (
                      <span className="ml-1">
                        {Ctx.lang === "en" && <>{divisiondata.name}</>}
                        {Ctx.lang === "mr" && (
                          <>{divisiondata.name_in_marathi}</>
                        )}
                      </span>
                    )}
                  </div>
                  <div className="w-1/2 p-5">
                    <span className="font-semibold">{t("zone")}</span> :{" "}
                    {zonedata && (
                      <span className="ml-1">
                        {Ctx.lang === "en" && <>{zonedata.name}</>}
                        {Ctx.lang === "mr" && <>{zonedata.name_in_marathi}</>}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-row p-5 flex-grow">
                  <span className="font-semibold">{t("address")}</span> :{" "}
                  {Ctx.lang === "en" && <>{groupdata.address}</>}
                  {Ctx.lang === "mr" && <>{groupdata.address_in_marathi}</>}
                </div>
              </div>
            </div>

            {groupdata.maplink && (
              <div className="max-w-4xl mx-auto my-20">
                <iframe
                  src={groupdata.maplink}
                  width="800"
                  height="600"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64"
                ></iframe>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default index;

export async function getServerSideProps(context) {
  const { id } = context.params;
  let groupdata = null;
  let officerdata = null;
  let divisiondata = null;
  let zonedata = null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/station-detail?Id=${id}`
    );

    const data = await res.json();

    if (data.group) {
      groupdata = data.group || null;
    }
    if (data.group.division) {
      divisiondata = data.group.division || null;
    }
    if (data.group.zone) {
      zonedata = data.group.zone || null;
    }
    if (data.officers) {
      officerdata = data.officers || null;
    }

    return { props: { id, groupdata, officerdata, divisiondata, zonedata } };
  } catch (error) {
    return {
      props: {
        id,
        groupdata: null,
        officerdata: null,
        divisiondata: null,
        zonedata: null,
      },
    };
  }
}
