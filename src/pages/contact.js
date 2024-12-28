import React, { useState, useRef, useEffect } from "react";
import Footer from "@/components/Footer";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { GrDocumentPdf } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephonePlus } from "react-icons/bs";
import { MdOutlineFax } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Contact = () => {
  const { t } = useTranslation();

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

        <title>Contact Us | Dhule Police</title>
      </Head>

      <main className="min-h-screen">
        <Navbar />
        <h1 className="text-center font-semibold text-2xl text-gray-700 pt-10 px-5">
          {t("contact")} <span className="text-orange-500">{t("us")}</span>
        </h1>
        <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>

        <div className="mt-5 flex flex-col-reverse lg:flex-row px-10 lg:px-20 justify-center mb-24 max-w-6xl mx-auto">
          <div className="w-full lg:w-2/3 flex justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30244.492198685977!2d73.77732700917696!3d18.638781655265177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e42d42c703%3A0x276241c200ea4463!2sCommissioner%20Office%20PCMC!5e0!3m2!1sen!2sin!4v1718344658560!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[200px] lg:w-[580px] lg:h-[580px]"
            ></iframe>
          </div>

          <div className="w-full lg:w-1/3 p-0 py-10  text-base lg:text-base text-gray-600">
            <div>
              <div className="mb-5 font-bold text-gray-800">Emergency -</div>
              <ul className="flex flex-col space-y-2">
                <li className="flex space-x-2 items-center">
                  <div>
                    <BsTelephonePlus className="text-2xl text-black" />
                  </div>
                  <div className="flex flex-row space-x-2">
                    <span>112</span>
                    <span>1190</span>
                  </div>
                </li>

                <li className="flex flex-row items-center space-x-2">
                  <div>
                    <HiOutlineMail className="text-2xl text-black" />
                  </div>
                  <div>cro.pcpc-mh@gov.in</div>
                </li>
              </ul>
            </div>

            <div className="mt-7">
              <div className="mb-5 font-bold text-gray-800">Help Line -</div>
              <ul className="flex flex-col space-y-2">
                <li className="flex space-x-2 items-center">
                  <div>
                    <BsTelephonePlus className="text-2xl text-black" />
                  </div>
                  <div className="flex flex-row space-x-2">
                    <span>02027352500</span>
                    <span>02027352600</span>
                  </div>
                </li>

                <li className="flex flex-row items-center space-x-2">
                  <div>
                    <HiOutlineMail className="text-2xl text-black" />
                  </div>
                  <div>cro.pcpc-mh@gov.in</div>
                </li>
              </ul>
            </div>

            <div className="mt-7">
              <div className="mb-5 font-bold text-gray-800">
                Nirbhaya Help Line -
              </div>
              <ul className="flex flex-col space-y-2">
                <li className="flex space-x-2 items-center">
                  <div>
                    <BsTelephonePlus className="text-2xl text-black" />
                  </div>
                  <div className="flex flex-row space-x-2">
                    <span>1091</span>
                    <span>7066446655</span>
                  </div>
                </li>

                <li className="flex flex-row items-center space-x-2">
                  <div>
                    <HiOutlineMail className="text-2xl text-black" />
                  </div>
                  <div>cro.pcpc-mh@gov.in</div>
                </li>
              </ul>
            </div>

            <div className="mt-7">
              <div className="mb-5 font-bold text-gray-800">
                Psychiatric Helpline -
              </div>
              <ul className="flex flex-col space-y-2">
                <li className="flex space-x-2 items-center">
                  <div>
                    <BsTelephonePlus className="text-2xl text-black" />
                  </div>
                  <div className="flex flex-row space-x-2">
                    <span>02026209124</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-7">
              <div>
                Dhule POLICE COMMISSIONERATE ALL POLICE STATION AND
                CHOWKI OFFICER NAME AND MO.NO -
              </div>

              <div className="mt-2">
                <Link href={"/imp-contact.pdf"} target="_blank">
                  <img src="/pdf.svg" alt="" className="w-8 h-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
