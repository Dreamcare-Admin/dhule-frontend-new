import React, { useState, useEffect, useContext } from "react";

import { useRouter } from "next/router";

import Head from "next/head";

import Link from "next/link";
import moment from "moment";

function printDiv() {
  window.print();
}

const index = ({ id }) => {
  const [records, setrecords] = useState("");
  const [policestation, setPoliceStation] = useState("");
  const [datetime, setDatetime] = useState("");

  const fetchrecords = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-lost-found-data?Id=${id}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data.record) {
        setPoliceStation(data.record.psId.name);
        setrecords(data.record);

        const formattedCreated = moment(data.record.createdAt).format(
          "MMMM Do YYYY, h:mm:ss a"
        );
        setDatetime(formattedCreated);
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

        <title>Lost and Found Form</title>
      </Head>
      <main className="min-h-screen">
        {records && (
          <div className="max-w-5xl mx-auto p-5" id="toPrint">
            <div className="flex items-center justify-center pt-10">
              <img src="/logo-new.jpg" alt="" className="w-[100px]  h-auto" />
            </div>

            <div className="w-full border-b-2 mt-2"></div>

            <div className="text-lg font-semibold py-3">
              <div className="flex flex-row justify-between justify-items-start">
                <div>{records.report_type} in Dhule City</div>
                <div>Register Id.: {records.reg_id}</div>
              </div>
              <div className="flex flex-row justify-between justify-items-start mt-3">
                <div>Police Station / पोलीस ठाणे: {policestation}</div>
                <div>Date : {datetime}</div>
              </div>
            </div>

            <div className="w-full border-b-2 mt-2"></div>

            <div className="py-3">
              <h2 className="font-semibold text-lg underline">
                Complaint Details / तक्रार तपशील:-
              </h2>

              <div className="mt-5">
                <div className="flex flex-row">
                  <div className="w-1/3">Full Name / पूर्ण नाव</div>
                  <div className="w-2/3"> : {records.fullName}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">Contact Number / संपर्क क्रमांक</div>
                  <div className="w-2/3"> : {records.contactNo}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">E-mail ID / ई-मेल आयडी</div>
                  <div className="w-2/3"> : {records.email}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">Address / पत्ता</div>
                  <div className="w-2/3"> : {records.address}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">Article Type / लेख प्रकार</div>
                  <div className="w-2/3"> : {records.article_type}</div>
                </div>

                <div className="flex flex-row">
                  <div className="w-1/3">Article Description / लेख वर्णन</div>
                  <div className="w-2/3 whitespace-pre-wrap">
                    {" "}
                    : {records.description}
                  </div>
                </div>

                <div className="flex flex-row">
                  <div className="w-1/3">
                    Address of Lost / Found Article / हरवलेले/सापडलेले दस्तऐवजचे
                    स्थान
                  </div>
                  <div className="w-2/3">
                    {" "}
                    : {records.article_address} {records.street} {records.state}{" "}
                    {records.country} - {records.pinCode}
                  </div>
                </div>

                <div className="flex flex-row">
                  <div className="w-1/3">
                    Date And Time of Lost / गमावलेली तारीख आणि वेळ
                  </div>
                  <div className="w-2/3"> : {records.datetime}</div>
                </div>
              </div>
            </div>

            <div className="w-full border-b-2 mt-2"></div>

            <div className="py-3">
              <h2 className="font-semibold text-lg">Note / टीप:</h2>

              <ul className="list-decimal ml-10 mt-3">
                <li>
                  This is a digitally signed document and requires no
                  signatureas per IT Act 2008.
                </li>
                <li>
                  If required approach the concerned Police Station for Police
                  Stamp/Signature.
                </li>
                <li>
                  This application is for lodging report of Articles Lost in
                  Dhule City only.
                </li>
                <li>
                  Authority issuing duplicate document/article may obtain proof
                  of identity.
                </li>
              </ul>

              <h2 className="font-semibold text-lg mt-3">
                Disclaimer / अस्वीकरण:
              </h2>

              <ul className="list-decimal ml-10 mt-3">
                <li>
                  Report lodged with this application is not a subject matter of
                  enquiry/investigation.
                </li>
                <li>
                  In case loss is due to theft or any other crime, contact
                  nearest police station.
                </li>
                <li>
                  False report to police is a punishable offence as per IPC & IT
                  Act.
                </li>
              </ul>
            </div>

            <div className="w-full border-b-2 mt-2"></div>

            <h2 className="mt-2 font-semibold text-center pb-5">
              Issued By : Dhule Police
            </h2>

            <div className="flex items-center justify-center print:hidden">
              <button
                className="py-2 px-3 text-lg bg-[#0245A7] text-white rounded-md"
                onClick={printDiv}
              >
                Print this Page
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default index;

export async function getServerSideProps(context) {
  const { id } = context.params;

  return { props: { id } };
}
