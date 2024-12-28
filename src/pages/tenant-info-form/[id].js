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
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-tenant-data?Id=${id}`,
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

        <title>Tenant Info Form</title>
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
                <div>Tenant Information / भाडेकरुची माहिती:</div>
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
                Owner Details / जागा मालकाचे तपशील:-
              </h2>

              <div className="mt-5">
                <div className="flex flex-row">
                  <div className="w-1/3">Owner Name / पूर्ण नाव</div>
                  <div className="w-2/3"> : {records.fullName}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">Owner Mobile / भ्रमणध्वनी क्रमांक</div>
                  <div className="w-2/3"> : {records.contactNo}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">Owner Email / ई-मेल आयडी</div>
                  <div className="w-2/3"> : {records.email}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">Owner Address / पत्ता</div>
                  <div className="w-2/3"> : {records.address}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">Owner City/District / शहर/जिल्हा</div>
                  <div className="w-2/3"> : {records.city}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">Owner State / राज्य</div>
                  <div className="w-2/3"> : {records.state}</div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <h2 className="font-semibold text-lg underline">
                Rented Property Details / भाड्याने दिलेल्या जागेचा तपशील:-
              </h2>

              <div className="mt-5">
                <div className="flex flex-row">
                  <div className="w-1/3">
                    Address of Rented Property / भाड्याने दिलेल्या मालमत्तेचा
                    पत्ता
                  </div>
                  <div className="w-2/3"> : {records.rentPropertyAddress}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">Rented Property Pin code / पिनकोड</div>
                  <div className="w-2/3"> : {records.rentPropertyPincode}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">
                    Rented Property Agreement Start Date / करार प्रारंभ तारीख
                  </div>
                  <div className="w-2/3"> : {records.agreementStartDate}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">
                    Agreement End Date / करार शेवटची तारीख
                  </div>
                  <div className="w-2/3"> : {records.agreementEndDate}</div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <h2 className="font-semibold text-lg underline">
                Tenant Details / भाडेकरुचा तपशील:-
              </h2>

              <div className="mt-5">
                <div className="flex flex-row">
                  <div className="w-1/3">Tenant's Name / पूर्ण नाव</div>
                  <div className="w-2/3"> : {records.tenantName}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">
                    Tenant Permanent Address / कायमचा पत्ता
                  </div>
                  <div className="w-2/3">
                    {" "}
                    : {records.tenantPermanentAddress}
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">Tenant City/District / शहर/जिल्हा</div>
                  <div className="w-2/3"> : {records.tenantCity}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">Tenant State / राज्य</div>
                  <div className="w-2/3"> : {records.tenantState}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">Pin code / पिनकोड</div>
                  <div className="w-2/3"> : {records.tenantPincode}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">
                    Identity Proof of Tenant / भाडेकरु ओळख पुरावा
                  </div>
                  <div className="w-2/3"> : {records.tenantIdentityProof}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">
                    Tenant's Identity Proof no / भाडेकरूचे ओळखपत्र क्रमांक
                  </div>
                  <div className="w-2/3">
                    {" "}
                    : {records.tenantIdentityProofNo}
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">No.of Male / पुरुष संख्या</div>
                  <div className="w-2/3"> : {records.numberOfMale}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">No of Female / स्त्री संख्या</div>
                  <div className="w-2/3"> : {records.numberOfFemale}</div>
                </div>

                <div className="flex flex-row">
                  <div className="w-1/3">No.of Child / लहान मुले संख्या</div>
                  <div className="w-2/3"> : {records.numberOfChild}</div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <h2 className="font-semibold text-lg underline">
                Tenants Work Place Details / भाडेकरुच्या कामाचे ठिकाण:-
              </h2>

              <div className="mt-5">
                <div className="flex flex-row">
                  <div className="w-1/3">
                    Tenants Occupation / भाडेकरूचा व्यवसाय
                  </div>
                  <div className="w-2/3"> : {records.tenantOccupation}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">
                    Tenants Mobile Number / भाडेकरूचा मोबाइल क्रमांक
                  </div>
                  <div className="w-2/3"> : {records.tenantMobNo}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">
                    Tenants email id / भाडेकरूची ई-मेल आयडी
                  </div>
                  <div className="w-2/3"> : {records.tenantEmail}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">
                    Address of Tenant Place Of Work / भाडेकरूची कामाचे ठिकाण
                  </div>
                  <div className="w-2/3"> : {records.tenantPlaceOfWork}</div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <h2 className="font-semibold text-lg underline">
                Persons Knowing Tenant / भाडेकरूला ओळखणारे लोक:-
              </h2>

              <div className="mt-5">
                <div className="flex flex-row">
                  <div className="w-1/3">
                    Person 1 Name / प्रथम व्यक्तीचे नाव
                  </div>
                  <div className="w-2/3"> : {records.knownPerson1}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">
                    Contact number1 / संपर्क क्रमांक १
                  </div>
                  <div className="w-2/3"> : {records.knownPerson1Contact}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">
                    Person 2 Name / दुस-या व्यक्तीचे नाव
                  </div>
                  <div className="w-2/3"> : {records.knownPerson2}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">
                    Contact number2 / संपर्क क्रमांक २
                  </div>
                  <div className="w-2/3"> : {records.knownPerson2Contact}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">Agent Name / एजन्टचे नाव</div>
                  <div className="w-2/3"> : {records.agentName}</div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">Agent Details / एजन्टची माहिती</div>
                  <div className="w-2/3"> : {records.agentDetails}</div>
                </div>
              </div>
            </div>

            <div className="w-full border-b-2 mt-2"></div>

            <div className="py-3">
              <h2 className="font-semibold text-lg">Note / टीप:</h2>

              <ul className="list-decimal ml-10 mt-3">
                <li>
                  The homeowner's address and the leased property address should
                  not be same. / घरमालकाचा पत्ता व भाडे तत्त्वावर दिलेल्या
                  मालमत्तेचा पत्ता हा एकच देऊ नये.
                </li>
                <li>
                  If the concerned police need to verify the information in the
                  application, applicant/ property owner should visit the police
                  station accordingly. / अर्जा मधील माहितीचे पडताळणी करिता
                  संबंधित पोलीस ठाण्यास आवश्यकता वाटल्यास त्याप्रमाणे अर्जदार /
                  घरमालक यांना पोलीस ठाण्यास भेट द्यावी लागेल.
                </li>
                <li>
                  If there is a discrepancy in the information in the
                  application, legal action can be taken against the applicant /
                  homeowner. / अर्जामधील माहिती मध्ये तफावत आढळल्यास संबंधित
                  अर्जदारावर/ घरमालकावर कायदेशीर कार्यवाही केली जाऊ शकते.
                </li>
              </ul>

              <h2 className="font-semibold text-lg mt-3">
                Disclaimer / अस्वीकरण:
              </h2>

              <ul className="list-decimal ml-10 mt-3">
                <li>
                  This application is for providing Information about renting a
                  house / place within the jurisdiction of Dhule City only is
                  to inform Dhule Police. / फक्त दुलेच्या हद्दीमध्ये
                  घर/जागा भाड्याने देण्याबाबतची माहिती धुळे पोलिसांना
                  देण्याकरिता येथे भेट द्या.
                </li>
                <li>
                  House/Property Owner and Tenant should confirm that above
                  mentioned Information is True. / येथे पुरविलेली माहिती सत्य
                  असल्याबाबत जागा/घर मालक आणि भाडेकरूने खात्री करावी.
                </li>
                <li>
                  False report to Police is a punishable offence. / पोलिसांना
                  खोटी माहिती पुरविणे हा दंडनीय अपराध आहे.
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
