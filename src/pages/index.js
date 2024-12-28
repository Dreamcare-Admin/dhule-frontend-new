import React, { useContext, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import VerticalMar from "@/components/VerticalMar";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaImages, FaVideo, FaRegUser } from "react-icons/fa6";
// import Martyrs from "@/components/Martyrs";
import Footer from "@/components/Footer";
import Headline from "@/components/Headline";
import Groupselect from "@/components/Groupselect";
import { useTranslation } from "react-i18next";
import Context from "../context/context";
import Head from "next/head";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaPerson } from "react-icons/fa6";
import { IoMdBody } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";
import { MdChecklist } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaDesktop } from "react-icons/fa6";
import { AiFillQuestionCircle } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import { FaLink } from "react-icons/fa";
import { FiAward } from "react-icons/fi";
import { FaImage } from "react-icons/fa6";
import { GiHandcuffs } from "react-icons/gi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { TbWorldSearch } from "react-icons/tb";
import { GiHandcuffed } from "react-icons/gi";
import { SiInternetexplorer } from "react-icons/si";
import { MdLocalPolice } from "react-icons/md";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { GiFilmProjector } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiOutlineDocumentText } from "react-icons/hi2";
import HomeGallery from "@/components/HomeGallery";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

const onlineServicesAndForms = [
  {
    icon: <MdOutlineCurrencyRupee className="text-orange-500 text-lg" />,
    title: "echallan_payment",
    link: "https://mahatrafficechallan.gov.in/payechallan/PaymentService.htm?_qc=394b48c0ac472078ffbc1bda62f51712",
  },
  {
    icon: <MdDashboard className="text-orange-500 text-lg" />,
    title: "National Cyber Crime Reporting Portal",
    link: "https://cybercrime.gov.in/",
  },
  {
    icon: <FaPerson className="text-orange-500 text-lg" />,
    title: "missing_person",
    link: "https://citizen.mahapolice.gov.in/Citizen/MH/SearchView.aspx",
  },
  {
    icon: <HiOutlineDocumentText className="text-orange-500 text-lg" />,
    title: "prohibitory_order",
    link: "/prohibitory-order",
  },
  {
    icon: <IoMdBody className="text-orange-500 text-lg" />,
    title: "unidentified_dead_bodies",
    link: "https://citizen.mahapolice.gov.in/Citizen/MH/SearchDeadBodyList.aspx",
  },
  {
    icon: <MdLocalPolice className="text-orange-500 text-lg" />,
    title: "published_firs",
    link: "https://citizen.mahapolice.gov.in/Citizen/MH/PublishedFIRs.aspx",
  },
  {
    icon: <GiPoliceOfficerHead className="text-orange-500 text-lg" />,
    title: "police_clearance_service",
    link: "https://pcs.mahaonline.gov.in/Forms/Home.aspx",
  },
  {
    icon: <GiHandcuffed className="text-orange-500 text-lg" />,
    title: "arrested_accused",
    link: "https://citizen.mahapolice.gov.in/Citizen/MH/SearcgAccusedArrest.aspx",
  },
  {
    icon: <MdGroups className="text-orange-500 text-lg" />,
    title: "citizen_portal",
    link: "https://citizen.mahapolice.gov.in/Citizen/MH/index.aspx",
  },
];

const popularInformation = [
  {
    icon: <AiFillSafetyCertificate className="text-orange-500 text-base" />,
    title: "safety_tips",
    link: "/safety-tips",
  },
  {
    icon: <FaDesktop className="text-orange-500 text-base" />,
    title: "cyber_alert_wall",
    link: "cyber-alertwall",
  },
  {
    icon: <AiFillQuestionCircle className="text-orange-500 text-base" />,
    title: "faqs",
    link: "/faqs",
  },
  {
    icon: <TiContacts className="text-orange-500 text-base" />,
    title: "important_contacts",
    link: "/imp-contacts",
  },
  {
    icon: <HiOutlineSpeakerphone className="text-orange-500 text-base" />,
    title: "tenders_info",
    link: "/tenders",
  },
  {
    icon: <MdGroups className="text-orange-500 text-base" />,
    title: "police_recruitment",
    link: "/recruitment",
  },
  {
    icon: <FaLink className="text-orange-500 text-base" />,
    title: "useful_websites_info",
    link: "/useful-websites",
  },
  {
    icon: <TbWorldSearch className="text-orange-500 text-base" />,
    title: "mh_police_units_website",
    link: "https://citizen.mahapolice.gov.in/Citizen/MH/unit_websites.aspx",
  },
];

import Phone from "@/components/Phone";

const index = () => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();

  const imageUrls = ["/blank.jpeg"];
  const [images, setimages] = useState(imageUrls);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [spPhoto, setspPhoto] = useState("");
  const [spName, setspName] = useState("");
  const [spName_in_marathi, setspName_in_marathi] = useState("");
  const [spMessage, setspMessage] = useState("");
  const [spMessage_in_marathi, setspMessage_in_marathi] = useState("");
  const [spPost, setspPost] = useState("");
  const [spPost_in_marathi, setspPost_in_marathi] = useState("");
  const [officer, setOfficer] = useState("sp");
  const [igpPhoto, setIgpPhoto] = useState("");
  const [igpName, setIgpName] = useState("");
  const [igpName_in_marathi, setIgpName_in_marathi] = useState("");
  const [igpMessage, setIgpMessage] = useState("");
  const [igpMessage_in_marathi, setIgpMessage_in_marathi] = useState("");
  const [igpPost, setIgpPost] = useState("");
  const [igpPost_in_marathi, setIgpPost_in_marathi] = useState("");
  const [dgpPhoto, setDgpPhoto] = useState("");
  const [dgpName, setDgpName] = useState("");
  const [dgpName_in_marathi, setDgpName_in_marathi] = useState("");
  const [dgpMessage, setDgpMessage] = useState("");
  const [dgpMessage_in_marathi, setDgpMessage_in_marathi] = useState("");
  const [dgpPost, setDgpPost] = useState("");
  const [dgpPost_in_marathi, setDgpPost_in_marathi] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [images]);



  const fetchsliderImages = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-slider-all`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data.success === true) {
        // console.log(data.records);
        if (data.imageLinks.length > 0) {
          setimages(data.imageLinks);
        }
      } else {
        //   notifyWarn();
      }
    } catch (error) {
      // notifyWarn();
    }
  };




  const fetchOfficerMessage = async (officerType) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-${officerType}-message?tag=${officerType}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data.data) {
        switch (officerType) {
          case 'sp':
            setspName(data.data.name);
            setspName_in_marathi(data.data.name_in_marathi);
            setspPhoto(data.data.photo);
            setspMessage(data.data.message);
            setspMessage_in_marathi(data.data.message_in_marathi);
            setspPost(data.data.post);
            setspPost_in_marathi(data.data.post_in_marathi);
            break;
          case 'igp':
            setIgpName(data.data.name);
            setIgpName_in_marathi(data.data.name_in_marathi);
            setIgpPhoto(data.data.photo);
            setIgpMessage(data.data.message);
            setIgpMessage_in_marathi(data.data.message_in_marathi);
            setIgpPost(data.data.post);
            setIgpPost_in_marathi(data.data.post_in_marathi);
            break;
          case 'dgp':
            setDgpName(data.data.name);
            setDgpName_in_marathi(data.data.name_in_marathi);
            setDgpPhoto(data.data.photo);
            setDgpMessage(data.data.message);
            setDgpMessage_in_marathi(data.data.message_in_marathi);
            setDgpPost(data.data.post);
            setDgpPost_in_marathi(data.data.post_in_marathi);
            break;
        }
      }
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    fetchsliderImages();
    fetchOfficerMessage('sp');
    fetchOfficerMessage('igp');
    fetchOfficerMessage('dgp');
  }, []);

  const getCurrentOfficerData = () => {
    switch (officer) {
      case 'sp':
        return {
          photo: spPhoto,
          name: Ctx.lang === "en" ? spName : spName_in_marathi,
          message: Ctx.lang === "en" ? spMessage : spMessage_in_marathi,
          post: Ctx.lang === "en" ? spPost : spPost_in_marathi,
        };
      case 'igp':
        return {
          photo: igpPhoto,
          name: Ctx.lang === "en" ? igpName : igpName_in_marathi,
          message: Ctx.lang === "en" ? igpMessage : igpMessage_in_marathi,
          post: Ctx.lang === "en" ? igpPost : igpPost_in_marathi,
        };
      case 'dgp':
        return {
          photo: dgpPhoto,
          name: Ctx.lang === "en" ? dgpName : dgpName_in_marathi,
          message: Ctx.lang === "en" ? dgpMessage : dgpMessage_in_marathi,
          post: Ctx.lang === "en" ? dgpPost : dgpPost_in_marathi,
        };
    }
  };

  const currentOfficer = getCurrentOfficerData();

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

        <title>Home | Dhule Police</title>

        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </Head>
      <main>
        <Navbar />
        <Phone />

        <div className="relative w-full h-[80vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full">
              <img
                src={images[currentIndex]}
                alt="Background Slider"
                className="w-full h-full object-cover animate-fade"
              />
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/30 z-10"></div>

          <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center text-white px-6 lg:px-16">
            <div className="flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-xl space-y-6">
              <div className="flex items-center space-x-8">
                <img
                  src="/national-emblem.webp"
                  alt="National emblem"
                  className="h-28 lg:h-36 w-auto block drop-shadow-lg"
                />
                <img
                  src="/logo-new.jpg"
                  alt="Logo image"
                  className="h-28 lg:h-36 w-auto drop-shadow-lg"
                  title={t("police_station_name")}
                />
              </div>

              <p className="text-lg lg:text-xl leading-relaxed max-w-4xl">
                {t("indexp1")} {t("dial")}{" "}
                <a href="tel:112" className="text-blue-500 font-bold underline ">112</a>
                <br />
                {t("indexp2")}
              </p>

              <p className="text-lg lg:text-xl leading-relaxed max-w-4xl">
                {t("indexp3")} {t("dial")}{" "}
                <a href="tel:1930" className="text-blue-500 font-bold underline ">1930</a>
                <br />
                {t("indexp4")}
              </p>

              <div className="mt-8">
                <Groupselect />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-t border-gray-200 relative  h-8">
          <div
            className="absolute left-0 top-0 bg-orange-500 px-2 py-1  text-white z-20"
            title="Headlines"
          >
            {t("headlines")}
          </div>
          <Headline />
        </div>




        <div className="bg-gray-50">

          <div className="flex flex-col lg:flex-row items-stretch gap-6 max-w-7xl mx-auto p-6">
            {/* SP Message */}
            <div className="w-full lg:w-1/3 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl transform transition-transform group-hover:scale-[1.02] duration-300"></div>
              <div className="relative bg-gradient-to-br from-[#4B5FAC] to-[#3b4c8c] text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-md transform group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="w-24 h-24 rounded-full border-4 border-white/50 overflow-hidden relative z-10 shadow-lg">
                      <img
                        src={spPhoto || "/default-profile.jpg"}
                        alt="SP"
                        className="w-full h-full object-cover transform transition-transform group-hover:scale-110 duration-300"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow space-y-2">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-white/90 tracking-tight">
                        {Ctx.lang === "en" ? "SP" : "पोलीस अधीक्षक"}
                      </h3>
                      <h4 className="text-lg text-white/80 font-medium">
                        {Ctx.lang === "en" ? spName : spName_in_marathi}
                      </h4>
                    </div>
                    <button
                      onClick={() => setOfficer("sp")}
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full font-medium transition-all duration-300 group/btn text-sm backdrop-blur-sm"
                    >
                      <span>View Message</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mb-20 blur-3xl"></div>
              </div>
            </div>

            {/* IGP Message */}
            <div className="w-full lg:w-1/3 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl transform transition-transform group-hover:scale-[1.02] duration-300"></div>
              <div className="relative bg-gradient-to-br from-[#29ABE2] to-[#1a8ab8] text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-md transform group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="w-24 h-24 rounded-full border-4 border-white/50 overflow-hidden relative z-10 shadow-lg">
                      <img
                        src={igpPhoto || "/default-profile.jpg"}
                        alt="IGP"
                        className="w-full h-full object-cover transform transition-transform group-hover:scale-110 duration-300"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow space-y-2">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-white/90 tracking-tight">
                        {Ctx.lang === "en" ? "IGP" : "पोलीस महानिरीक्षक"}
                      </h3>
                      <h4 className="text-lg text-white/80 font-medium">
                        {Ctx.lang === "en" ? igpName : igpName_in_marathi}
                      </h4>
                    </div>
                    <button
                      onClick={() => setOfficer("igp")}
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full font-medium transition-all duration-300 group/btn text-sm backdrop-blur-sm"
                    >
                      <span>View Message</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mb-20 blur-3xl"></div>
              </div>
            </div>

            {/* DGP Message */}
            <div className="w-full lg:w-1/3 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-800 rounded-2xl transform transition-transform group-hover:scale-[1.02] duration-300"></div>
              <div className="relative bg-gradient-to-br from-[#2B577C] to-[#1e3d57] text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-md transform group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="w-24 h-24 rounded-full border-4 border-white/50 overflow-hidden relative z-10 shadow-lg">
                      <img
                        src={dgpPhoto || "/default-profile.jpg"}
                        alt="DGP"
                        className="w-full h-full object-cover transform transition-transform group-hover:scale-110 duration-300"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow space-y-2">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-white/90 tracking-tight">
                        {Ctx.lang === "en" ? "DGP" : "पोलिस महासंचालक"}
                      </h3>
                      <h4 className="text-lg text-white/80 font-medium">
                        {Ctx.lang === "en" ? dgpName : dgpName_in_marathi}
                      </h4>
                    </div>
                    <button
                      onClick={() => setOfficer("dgp")}
                      className="inline-flex items-center w-full gap-2 bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full font-medium transition-all duration-300 group/btn text-sm backdrop-blur-sm"
                    >
                      <span>View Message</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mb-20 blur-3xl"></div>
              </div>
            </div>
          </div>
          <section className="flex flex-col lg:flex-row-reverse items-stretch max-w-7xl mx-auto py-16 px-4 gap-8">
            {/* Latest Updates Panel */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
                {/* Header */}
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-pattern opacity-10"></div>
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>

                  <div className="relative z-10 flex items-center justify-center space-x-3">
                    <HiOutlineSpeakerphone className="text-2xl text-white" />
                    <h2 className="text-2xl font-bold text-white">
                      {t("latest")}{" "}
                      <span className="text-2xl font-bold text-white opacity-90">
                        {t("update")}
                      </span>
                    </h2>
                  </div>

                </div>

                {/* Content */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-orange-50/80 via-orange-50/20 to-transparent"></div>
                  <div className="relative z-10 p-6">
                    <VerticalMar />
                  </div>
                </div>
              </div>
            </div>

            {/* Officer Message Panel */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-full transform transition-all duration-300 hover:shadow-2xl border border-gray-100">
                {/* Header */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-pattern opacity-5"></div>
                  <div className="absolute -right-8 -top-8 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl"></div>

                  <div className="relative z-10 flex items-center justify-center space-x-2">
                    <h2 className="text-2xl font-bold text-white">
                      {t(officer.toUpperCase())}
                      {Ctx.lang === "en" && "'s"}
                    </h2>
                    <span className="text-2xl font-medium text-orange-400">
                      {t("message")}
                    </span>
                  </div>

                </div>

                <div className="p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-gray-50/20 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      {/* Officer Photo */}
                      <div className="w-full lg:w-1/3">
                        <div className="relative group">
                          <div className="absolute -inset-1 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
                          <div className="relative bg-white p-1.5 rounded-2xl">
                            <img
                              src={currentOfficer.photo || "/default-profile.jpg"}
                              width={192}
                              height={192}
                              title={`${officer.toUpperCase()} photo`}
                              alt={`${officer.toUpperCase()} photo`}
                              loading="lazy"
                              className="rounded-xl object-cover w-full h-64 shadow-lg transform transition duration-300 group-hover:scale-[1.02]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message Content */}
                      <div className="w-full lg:w-2/3 space-y-6">
                        <div className="relative bg-gradient-to-br from-orange-50/80 to-orange-50/40 rounded-2xl p-7 shadow-sm">
                          <BiSolidQuoteAltLeft className="absolute -top-3 -left-3 text-4xl text-orange-400 opacity-30" />
                          <div className="text-gray-700 text-lg leading-relaxed font-light italic relative z-10 whitespace-pre-wrap">
                            {currentOfficer.message}
                          </div>
                          <BiSolidQuoteAltRight className="absolute -bottom-3 -right-3 text-4xl text-orange-400 opacity-30" />
                        </div>

                        {/* Officer Details */}
                        <div className="border-t border-gray-100 pt-6">
                          <div className="text-end">
                            <div className="font-bold text-xl text-gray-800 tracking-tight">
                              {currentOfficer.name}
                            </div>
                            <div className="text-orange-600 font-medium mt-1.5">
                              {currentOfficer.post}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="max-w-7xl mx-auto my-20 px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl underline decoration-orange-500 decoration-2 underline-offset-4 font-bold text-gray-900">
              {t("online")}
            </h2>
            <div className="mt-4 text-gray-600">{t("services_and_forms")}</div>
          </div>

          {/* Cards Container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Online Services Card */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <FaDesktop className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{t("online")} {t("services_and_forms")}</h3>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-2">
                  {onlineServicesAndForms.map((item, idx) => (
                    <Link
                      href={item.link}
                      target="_blank"
                      key={idx}
                      className="block group"
                      title={t(item.title)}
                    >
                      <li className="flex items-center space-x-3 p-3 rounded-xl hover:bg-orange-50 transition-all duration-200">
                        <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
                          {item.icon}
                        </div>
                        <span className="text-gray-700 group-hover:text-orange-600 font-medium transition-colors">
                          {t(item.title)}
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>

            {/* Popular Information Card */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <AiFillSafetyCertificate className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{t("popular")} {t("information")}</h3>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-2">
                  {popularInformation.map((item, idx) => (
                    <Link
                      href={item.link}
                      key={idx}
                      className="block group"
                      title={t(item.title)}
                    >
                      <li className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-200">
                        <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                          {React.cloneElement(item.icon, { className: "text-blue-600" })}
                        </div>
                        <span className="text-gray-700 group-hover:text-blue-600 font-medium transition-colors">
                          {t(item.title)}
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>

            {/* What's New Card */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <HiOutlineSpeakerphone className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{t("whats")} {t("new")}</h3>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-2">
                  <Link href={"/rti"} className="block group">
                    <li className="flex items-center space-x-3 p-3 rounded-xl hover:bg-purple-50 transition-all duration-200">
                      <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                        <AiFillSafetyCertificate className="text-purple-600" />
                      </div>
                      <span className="text-gray-700 group-hover:text-purple-600 font-medium transition-colors">
                        {t("right_to_info")}
                      </span>
                    </li>
                  </Link>
                  {/* Add other links similarly */}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-50">
          <section className="py-16 px-4">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("report_to_station")}
                <span className="text-orange-500 ml-2">{t("station_name")}</span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 text-lg">Choose from our various reporting services to help keep our community safe and secure</p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {/* Report Crime Card */}
              <Link href="/online-complaint" className="group">
                <div className="relative h-72 rounded-2xl overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02] shadow-lg">
                  <img
                    src="/report.webp"
                    alt="Report Crime"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-300 group-hover:from-black/95"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {t("report_crime_online")}
                    </h3>
                    

                    <div className="flex items-center mt-4 text-orange-400">
                      <span className="text-sm font-medium">Report Now</span>
                      <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Similar structure for other cards - showing one more as example */}
              <Link href="/tenant-info" className="group">
                <div className="relative h-72 rounded-2xl overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02] shadow-lg">
                  <img
                    src="/tenant.webp"
                    alt="Tenant Information"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-300 group-hover:from-black/95"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {t("report_tenant_info")}
                    </h3>
                    
                    <div className="flex items-center mt-4 text-orange-400">
                      <span className="text-sm font-medium">Register Now</span>
                      <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                  href="https://citizen.mahapolice.gov.in/Citizen/MH/MobileMissingForm.aspx"
                  target="_blank"
                >
                  

                <div className="relative h-72 rounded-2xl overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02] shadow-lg">
                <img
                    src="/phone.webp"
                    alt="rewards"
                    width={100}
                    loading="lazy"
                    height={100}
                    title="phone"
                    className="object-cover w-full h-full rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-300 group-hover:from-black/95"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {t("report_lost_mobile")}
                    </h3>
                    <div className="flex items-center mt-4 text-orange-400">
                      <span className="text-sm font-medium">Report Now</span>
                      <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/lost-found" className="group">
                <div className="relative h-72 rounded-2xl overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02] shadow-lg">
                <img
                    src="/lostandfound.webp"
                    alt="rewards"
                    width={100}
                    height={100}
                    loading="lazy"
                    title="lost&found"
                    className="object-cover w-full h-full rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-300 group-hover:from-black/95"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {t("report_lost_found")}
                    </h3>
                    <div className="flex items-center mt-4 text-orange-400">
                      <span className="text-sm font-medium">Register Now</span>
                      <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                  href={
                    "https://www.ceir.gov.in/Request/CeirUserBlockRequestDirect.jsp"
                  } className="group">
                <div className="relative h-72 rounded-2xl overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02] shadow-lg">
                <img
                    src="/phonelost.webp"
                    alt="phone lost image"
                    width={100}
                    height={100}
                    title="phone lost image"
                    loading="lazy"
                    className="object-cover w-full h-full rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-300 group-hover:from-black/95"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {t("report_block")}
                    </h3>
                    <div className="flex items-center mt-4 text-orange-400">
                      <span className="text-sm font-medium">Register Now</span>
                      <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                  href={"https://cybercrime.gov.in/Webform/Accept.aspx"}
                  className="group"
                >
                <div className="relative h-72 rounded-2xl overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02] shadow-lg">
                <img
                    src="/childwomem.webp"
                    alt="childwomen image"
                    width={100}
                    height={100}
                    title="childwomen image"
                    loading="lazy"
                    className="object-cover w-full h-full rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-300 group-hover:from-black/95"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <h3 className="text-xl font-semibold text-white mb-2">
                    {t("report_childwoman")}
                    </h3>
                    <div className="flex items-center mt-4 text-orange-400">
                      <span className="text-sm font-medium">Register Now</span>
                      <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                  href={"https://cybercrime.gov.in/Webform/Accept.aspx"}
                  className="group"
                >
                <div className="relative h-72 rounded-2xl overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02] shadow-lg">
                <img
                    src="/cyber2.webp"
                    alt="cyber image"
                    width={100}
                    height={100}
                    title="cyber image"
                    loading="lazy"
                    className="object-cover w-full h-full rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-300 group-hover:from-black/95"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <h3 className="text-xl font-semibold text-white mb-2">
                    {t("report_financial")}
                    </h3>
                    <div className="flex items-center mt-4 text-orange-400">
                      <span className="text-sm font-medium">Register Now</span>
                      <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                  href={"https://cybercrime.gov.in/Webform/Accept.aspx"} className="group">
                <div className="relative h-72 rounded-2xl overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02] shadow-lg">
                <img
                    src="/othercybercrime.webp"
                    alt="cyber crime image"
                    width={100}
                    height={100}
                    title="cyber crime image"
                    loading="lazy"
                    className="object-cover w-full h-full rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-300 group-hover:from-black/95"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <h3 className="text-xl font-semibold text-white mb-2">
                    {t("report_other_cyber")}
                    </h3>
                    <div className="flex items-center mt-4 text-orange-400">
                      <span className="text-sm font-medium">Register Now</span>
                      <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Continue with the same pattern for other cards... */}
            </div>
          </section>

          <section className="bg-gray-50 py-14">
  <h2 className="text-center font-bold text-3xl text-gray-800">
    <span className="text-orange-500">{t("gallery")}</span>
  </h2>
  <div className="w-36 mt-3 mb-8 border-b-4 border-orange-500 mx-auto"></div>
  <HomeGallery />
</section>

<section className="bg-white py-16">
  <div className="container mx-auto px-6 lg:px-12">
    <h2
      className="text-center font-bold text-3xl text-gray-800 mb-6"
      title="Social Media Feed & Updates"
    >
      {t("social_media_updates")}{" "}
      <span className="text-orange-500">{t("update")}</span>
    </h2>
    <div className="w-36 mb-10 border-b-4 border-orange-500 mx-auto"></div>

    <div className="flex flex-wrap justify-center items-center gap-8">
      {/* Twitter Feed */}
      <div className="w-[22rem] h-[52vh] shadow-lg rounded-xl bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <a
          className="twitter-timeline"
          loading="lazy"
          href="https://twitter.com/SpDhule?ref_src=twsrc%5Etfw"
          target="_blank"
          title="Tweets by Dhule Police"
        >
          Tweets by Dhule Police
        </a>
      </div>

      {/* Facebook Feed */}
      <div className="w-[22rem] h-[52vh] shadow-lg rounded-xl bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdhulepolice%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="100%"
          height="100%"
          loading="lazy"
          title="Facebook Timeline"
          className="rounded-xl"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  </div>
</section>



        </div>
      </main>
      <Footer />
    </>
  );
};

export default index;
