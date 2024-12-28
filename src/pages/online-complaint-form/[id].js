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
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-complaint-data?Id=${id}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data.record) {
        // console.log(data.record);

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

        <title>Online Complaint Form</title>
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
                <div>Online Complaint</div>
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
                Complaint Details:-
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
                  <div className="w-1/3">
                    Room No. / Street Name /दरवाजा क्र. / मार्गाचे नाव
                  </div>
                  <div className="w-2/3"> : {records.street}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">Address / पत्ता</div>
                  <div className="w-2/3"> : {records.address}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">City / शहर</div>
                  <div className="w-2/3"> : {records.city}</div>
                </div>

                <div className="flex flex-row">
                  <div className="w-1/3">State / राज्य</div>
                  <div className="w-2/3"> : {records.state}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">Country / देश</div>
                  <div className="w-2/3"> : {records.country}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">Pin code / पिनकोड</div>
                  <div className="w-2/3"> : {records.pinCode}</div>
                </div>

                <div className="flex flex-row">
                  <div className="w-1/3">Complaint / तक्रार</div>
                  <div className="w-2/3 whitespace-pre-wrap">
                    {records.complaint}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-b-2 mt-2"></div>

            <div className="py-3">
              <h2 className="font-semibold text-lg">Note / टीप:</h2>

              <ul className="list-decimal ml-10 mt-3">
                <li>
                  This is a computer-generated document. No signature is
                  required.(हे संगणक व्युत्पन्न दस्तऐवज आहे. स्वाक्षरीची
                  आवश्यकता नाही.)
                </li>
                <li>
                  False report to police is a punishable offence as per IPC & IT
                  Act. (पोलिसांना खोटे अहवाल / तक्रार देणे म्हणजे भादंवि आणि
                  तंत्रज्ञान कायद्यानुसार दंडनीय गुन्हा आहे.)
                </li>
                <li>
                  As per the prevailing laws, FIR of a major crime can only be
                  registered at a Police Station. ( Cognizable Crimes like
                  theft, burglary, motor vehicle theft, accident,
                  chain-snatching, assault, rape, murder, attempt to commit
                  murder, robbery, dacoity, extortion etc )(प्रचलित
                  कायद्यानुसार, एखाद्या मोठ्या गुन्ह्याची (दखलपात्र गुन्हा)
                  एफआयआर (F.I.R.)फक्त पोलीस ठाण्यामध्येच नोंदविली जाऊ
                  शकते.(दखलपात्र गुन्हे - चोरी, घरफोडी, मोटार वाहन चोरी, अपघात,
                  साखळी स्नॅचिंग, प्राणघातक हल्ला, बलात्कार, खून, खुनाचा
                  प्रयत्न, जबरी चोरी, दरोडा, खंडणी इ.)
                </li>
                <li>
                  For Lodging an FIR the traditional system of lodging it at the
                  police station prevails.(F.I.R. दाखल करण्यासाठी पोलिस ठाण्यात
                  दाखल करण्याची पारंपारिक यंत्रणा प्रचलित आहे.)
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
                  Police Station for the same. (प्रचलित कायद्यांनुसार एखाद्या
                  मोठ्या गुन्ह्याबद्दल तक्रार/प्रथम खबरी अहवाल संबंधित पोलीस
                  ठाणे येथे नोंदणी करावी. (उदा. चोरी, घरफोडी करून चोरी, मोटर
                  वाहन चोरी, अपघात, सोन-साखळी चोरणे, मारहाण, बलात्कार, खून, खून
                  करण्याचा प्रयत्न, दरोडा, डकैती, खंडणी वगैरे) यासाठी आपल्या
                  जवळच्या पोलीस ठाणेशी संपर्क साधावा. )
                </li>
                <li>
                  This site shall only entertain complaints about minor crimes
                  (′non-cognizable crimes′).Your complaint shall be referred to
                  the concerned Police Station, where you may be called for
                  further clarification and/or to give statement. (येथे कमी
                  गांभीर्याच्या गुन्ह्यांबद्दलच्या तक्रारींची दखल घेतली जाईल
                  (′अ-दखलपात्र गुन्हा′). तुमची तक्रार संबंधित पोलीस ठाणेकडे
                  पाठविली जाईल, जिथे तुम्हाला अधिक स्पष्टीकरणासाठी आणि / किंवा
                  निवेदनासाठी बोलावले जाऊ शकते.)
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
