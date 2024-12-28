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
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-feedback-data?Id=${id}`,
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

        <title>Feedback Form</title>
      </Head>
      <main className="min-h-screen">
        {records && (
          <div className="max-w-5xl mx-auto p-5" id="toPrint">
            <div className="flex items-center justify-center pt-10">
              <img src="/logo-new.jpg" alt="" className="w-[100px] h-auto" />
            </div>

            <div className="w-full border-b-2 mt-2"></div>

            <div className="text-lg font-semibold py-3">
              <div className="flex flex-row justify-between justify-items-start">
                <div>Information Report</div>
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
                Information Details / माहितीचा तपशील:-
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
                  <div className="w-1/3">Subject / विषय</div>
                  <div className="w-2/3"> : {records.subject}</div>
                </div>

                <div className="flex flex-row">
                  <div className="w-1/3">Description / वर्णन</div>
                  <div className="w-2/3 whitespace-pre-wrap">
                    : {records.description}
                  </div>
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
                  Authority issuing duplicate document/article may obtain proof
                  of identity.
                </li>
              </ul>

              <h2 className="font-semibold text-lg mt-3">
                Disclaimer / अस्वीकरण:
              </h2>

              <ul className="list-decimal ml-10 mt-3">
                <li>
                  As per the prevailing laws, FIR of a major crime (′cognizable
                  crimes like theft, burglary, motor vehicle theft, accident,
                  chain-snatching, assault, rape, murder, attempt to commit
                  murder, robbery, dacoity, extortion etc) can only be
                  registered at a Police Station. Please contact your nearest
                  Police Station for the same. / प्रचलित कायद्यांनुसार एखाद्या
                  मोठ्या गुन्ह्याबद्दल तक्रार/प्रथम खबरी अहवाल संबंधित पोलीस
                  ठाणे येथे नोंदणी करावी. (उदा. चोरी, घरफोडी करून चोरी, मोटर
                  वाहन चोरी, अपघात, सोन-साखळी चोरणे, मारहाण, बलात्कार, खून, खून
                  करण्याचा प्रयत्न, दरोडा, डकैती, खंडणी वगैरे) यासाठी आपल्या
                  जवळच्या पोलीस ठाणेशी संपर्क साधावा.
                </li>
                <li>
                  Report non-cognizable complaint on online complaint portal.
                  [Online Complaint] / अ-दखलपात्र स्वरूपाच्या तक्रारी ई- तक्रार
                  या पोर्टल वर नोंदवा. [ Online Complaint ]
                </li>
                <li>
                  Report here feedback of experience about police. /
                  पोलिसांबद्दलच्या अनुभवाचा अभिप्राय येथे नोंदवा.
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
