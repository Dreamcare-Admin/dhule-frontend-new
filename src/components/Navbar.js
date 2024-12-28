import React, { useState, useEffect, useContext } from "react";
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { BsArrowRight, BsYoutube } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import Context from "../context/context";
import { FiRefreshCw } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import Cookies from "js-cookie";

const Navbar = () => {
  const router = useRouter();
  const Ctx = useContext(Context);

  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    if (globalLang === "en") {
      i18n.changeLanguage("mr");
      setGlobalLang("mr");
      Ctx.changelang("mr");
      Cookies.set("lang", "mr", {
        expires: 30,
        path: "/",
        secure: true,
        sameSite: "Strict",
      });
    } else {
      setGlobalLang("en");
      i18n.changeLanguage("en");
      Ctx.changelang("en");
      Cookies.set("lang", "en", {
        expires: 30,
        path: "/",
        secure: true,
        sameSite: "Strict",
      });
    }

    // i18n.changeLanguage(lng);
  };

  const [globalLang, setGlobalLang] = useState("en");

  const [open, setOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const onOpenModal = () => {
    setOpen(true);
    fetchCaptcha();
  };
  const onCloseModal = () => setOpen(false);

  const variants = {
    hidden: { y: "-100%", opacity: 1 },
    visible: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 1 },
  };

  useEffect(() => {
    // Check if the user has a valid token
    const token = Cookies.get("lang");

    if (token === "mr") {
      Ctx.changelang("mr");
      i18n.changeLanguage("mr");
      //   setGlobalLang("mr");
    } else {
      Ctx.changelang("en");
      i18n.changeLanguage("en");
      //   setGlobalLang("en");
    }
  }, []);

  const specialBranches = [
    { title: t("police_headquarter"), id: "676d30078cd6e91ddaae26f5" },
    { title: t("police_welfare_branch"), id: "676d30fe8cd6e91ddaae2715" },
    { title: t("anti_terrorism_cell"), id: "676d323f8cd6e91ddaae2722" },
    { title: t("anti_narcotics_cell"), id: "676d32b08cd6e91ddaae2725" },
    // { title: t("quick_response_team"), id: "6655cb62c5d01a1dc8cd6852" },
    // { title: t("control_room_s"), id: "6655cbd5c5d01a1dc8cd6855" },
    // { title: t("cyber_crime_cell"), id: "6655cc9ec5d01a1dc8cd6858" },
    // { title: t("women_help_cell"), id: "6655cd6ac5d01a1dc8cd685b" },
    { title: t("CCTNS"), id: "676d37438cd6e91ddaae2774" },
    // { title: t("economic_offence_wing"), id: "6655ce04c5d01a1dc8cd6861" },
    // { title: t("special_branch"), id: "6656b089c5d01a1dc8cd6864" },
    // { title: t("special_juvenile_unit"), id: "6656b122c5d01a1dc8cd6867" },
    // { title: t("special_investigation_team"), id: "6656b34bc5d01a1dc8cd686a" },
    // { title: t("traffic_branch"), id: "6656b478c5d01a1dc8cd686d" },
    // { title: t("crime_branch"), id: "6656b516c5d01a1dc8cd6870" },
    // { title: t("special_branch_2"), id: "6656b622c5d01a1dc8cd6873" },
    // { title: t("motor_transport_branch"), id: "6656b6efc5d01a1dc8cd6876" },
    // { title: t("wireless_branch"), id: "6656b7dcc5d01a1dc8cd6879" },
    // { title: t("senior_citizens_branch"), id: "6656ba42c5d01a1dc8cd687c" },
    { title: t("local_crime_branch"), id: "676bcef576fea58d621a1a1e" },
    { title: t("district_special_branch"), id: "676bcf9d76fea58d621a1a21" },
    { title: t("traffic_branch"), id: "676bcfe476fea58d621a1a24" },
    { title: t("bharosa_cell"), id: "676bd05076fea58d621a1a27" },
    { title: t("control_room"), id: "676bd0bf76fea58d621a1a2a" },
    { title: t("wireless_branch"), id: "676bf84223bddf3117eb8076" },
    { title: t("economic_offence_wing"), id: "676bf8c923bddf3117eb8079" },
    { title: t("BDDS"), id: "676bf93323bddf3117eb807c" },
    { title: t("motor_transport_branch"), id: "676bfa1923bddf3117eb8082" },
  ];

  return (
    <>
      <nav className="flex flex-row px-2 lg:px-24 lg:pr-0 justify-between bg-gray-50 py-2 sticky top-0 items-center z-50 shadow-md lg:shadow-none">
        <div className="absolute top-0 left-0 lg:left-2 bg-gray-50  overflow-hidden shadow-md lg:shadow-none">
          <Link href="/">
            <img
              src="/logo-new.jpg"
              alt={t("police_station_name")}
              className="w-14 lg:w-24 "
              width={100}
              height={100}
              title={t("police_station_name")}
            />
          </Link>
        </div>

        <h1 className="block font-bold text-sm lg:text-2xl ml-14 lg:ml-4 text-[#444243] w-full lg:w-1/3">
          <Link href="/" title={t("police_station_name")}>
            {t("police_station_name")}
          </Link>
        </h1>

        <div className="hidden lg:flex space-x-3 py-1 bg-gray-50 px-5 rounded-md w-2/3 justify-end items-center">
          {/* <div>
            <button className="rounded-md p-2 text-black hover:text-[#F9B808]">
              <Link href="/">{t("home")}</Link>
            </button>
          </div> */}

          <div className="group relative cursor-pointer">
            <div className="flex items-center">
              <button
                className=" text-black hover:text-[#F9B808] rounded-md p-2 px-0 flex justify-center items-center"
                title={t("about_us")}
              >
                {t("about_us")}
                <IoMdArrowDropdown className="text-xl" />
              </button>
            </div>
            <div className="invisible absolute z-50 flex w-56 flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
              <Link
                href="/mission"
                title={t("our_mission")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("our_mission")}
              </Link>
              <Link
                href="/senior-officers"
                title={t("senior_officer")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("senior_officer")}
              </Link>
              {/* <Link
                href="/divisional-acps"
                title={t("divisional_acp")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("divisional_acp")}
              </Link> */}
              <Link
                href="/"
                title={t("organizational_structure")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("organizational_structure")}
              </Link>
              <Link
                href="/"
                title={t("jurisdiction_map")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("jurisdiction_map")}
              </Link>
              <Link
                href="/initiatives"
                title={t("initiatives")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("initiatives")}
              </Link>
              <Link
                href="/gallery"
                title={t("photo_gallery")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("photo_gallery")}
              </Link>
              <Link
                href="/police-station-incharge"
                title={t("police_station_incharge")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("police_station_incharge")}
              </Link>
              <Link
                href="/imp-contacts"
                title={t("important_contact")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("important_contact")}
              </Link>
              <Link
                href="/"
                title={t("contact_us")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("contact_us")}
              </Link>
              <Link
                href="/feedback"
                title={t("feedback")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("feedback")}
              </Link>
              <Link
                href="/martyrs"
                title={t("martyrs")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("martyrs")}
              </Link>
            </div>
          </div>

          <div className="group relative cursor-pointer">
            <div className="flex items-center">
              <button
                className=" text-black hover:text-[#F9B808] rounded-md p-2 px-0 flex justify-center items-center"
                title={t("report_us")}
              >
                {t("report_us")}
                <IoMdArrowDropdown className="text-xl" />
              </button>
            </div>
            <div className="invisible absolute z-50 flex w-56 flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
              <Link
                href="/online-complaint"
                title={t("online_complaint")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("online_complaint")}
              </Link>
              <Link
                href="/lost-found"
                title={t("lost_found")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("lost_found")}
              </Link>
              <Link
                href="/tenant-info"
                title={t("tenant_information")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("tenant_information")}
              </Link>
              <Link
                href="/feedback"
                title={t("confidential_information")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("confidential_information")}
              </Link>
              <Link
                href="https://citizen.mahapolice.gov.in/Citizen/MH/MobileMissingForm.aspx"
                target="_blank"
                title={t("lost_mobile_intimation")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("lost_mobile_intimation")}
              </Link>
              <Link
                href="https://www.ceir.gov.in/Request/CeirUserBlockRequestDirect.jsp"
                target="_blank"
                title="Block Stolen/lost Mobile"
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("block_stolen_mobile")}
              </Link>
              <Link
                href="https://cybercrime.gov.in/Webform/Accept.aspx"
                target="_blank"
                title="Woman/Children Related Crime"
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("woman_children_crime")}
              </Link>
              <Link
                href="https://cybercrime.gov.in/Webform/Accept.aspx"
                target="_blank"
                title="Financial Fraud"
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("financial_fraud")}
              </Link>
              <Link
                href="https://cybercrime.gov.in/Webform/Accept.aspx"
                target="_blank"
                title="Woman/Children Related Crime"
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("other_cyber_crimes")}
              </Link>
            </div>
          </div>

          <div className="group relative cursor-pointer">
            <div className="flex items-center">
              <button
                className=" text-black hover:text-[#F9B808] rounded-md p-2 px-0 flex justify-center items-center"
                title={t("special_units")}
              >
                {t("special_units")}
                <IoMdArrowDropdown className="text-xl" />
              </button>
            </div>
            <div className="invisible absolute z-50 flex w-64 flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
              {specialBranches.map((branch) => {
                return (
                  <a
                    href={`/special-unit/${branch.id}`}
                    title={branch.title}
                    key={branch.id}
                    className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
                  >
                    {branch.title}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="group relative cursor-pointer">
            <div className="flex items-center">
              <button
                className=" text-black hover:text-[#F9B808] rounded-md p-2 px-0 flex justify-center items-center"
                title={t("citizen_corner")}
              >
                {t("citizen_corner")}
                <IoMdArrowDropdown className="text-xl" />
              </button>
            </div>
            <div className="invisible absolute z-50 flex w-56 flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
              <Link
                href="/cyber-safety-tips"
                title={t("cyber_safety_tips")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("cyber_safety_tips")}
              </Link>
              <Link
                href="/cyber-awareness"
                title={t("cyber_awareness")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("cyber_awareness")}
              </Link>
              <Link
                href="/recruitment"
                title={t("police_recruitments")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("police_recruitments")}
              </Link>
              <Link
                href="/press-release"
                title={t("press_release")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("press_release")}
              </Link>
              <Link
                href="/accident-compensation"
                title={t("accident_compensation")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("accident_compensation")}
              </Link>
              <Link
                href="/rti"
                title={t("right_to_information")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("right_to_information")}
              </Link>
              <Link
                href="https://portal2.passportindia.gov.in/AppOnlineProject/statusTracker/trackStatusInpNew"
                title={t("passport_status")}
                target="_blank"
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("passport_status")}
              </Link>
              <Link
                href="/useful-websites"
                title={t("useful_website")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("useful_website")}
              </Link>
              <Link
                href="/citizen-alertwall"
                title={t("citizen_wall")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("citizen_wall")}
              </Link>
              <Link
                href="/safety-tips"
                title={t("safety_tip")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("safety_tip")}
              </Link>
              <Link
                href="/tenders"
                title={t("tenders")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("tenders")}
              </Link>
              <Link
                href="/faqs"
                title={t("faqs")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("faqs")}
              </Link>
              <Link
                href="/rts"
                title={t("rts")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("rts")}
              </Link>
              <Link
                href="/nagrikanchi-sanad"
                title={t("nagrikanchi_sanad")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("nagrikanchi_sanad")}
              </Link>
            </div>
          </div>

          <div className="group relative cursor-pointer">
            <div className="flex items-center">
              <button
                className=" text-black hover:text-[#F9B808] rounded-md p-2 px-0 flex justify-center items-center"
                title={t("police_corner")}
              >
                {t("police_corner")}
                <IoMdArrowDropdown className="text-xl" />
              </button>
            </div>
            <div className="invisible absolute right-0  z-50 flex w-56 flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
              <Link
                href="/circular"
                title={t("circular")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("circular")}
              </Link>
              <Link
                href="/welfare-activities"
                title={t("welfare_activities")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("welfare_activities")}
              </Link>
              <Link
                href="/media-coverage"
                title={t("media_coverage")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("media_coverage")}
              </Link>
              <Link
                href="/crime-review"
                title={t("crime_reviews")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("crime_reviews")}
              </Link>
              <Link
                href="/good-work"
                title={t("good_work")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("good_work")}
              </Link>
              <Link
                href="/info-for-police"
                title={t("info_for_police")}
                className="my-1 mt-2 mx-2 block text-gray-500 hover:text-black border-b"
              >
                {t("info_for_police")}
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              title="language Change Button"
              onClick={() => changeLanguage("mr")}
              className="px-2 py-1 text-sm text-black hover:bg-[#F9B808] border border-[#F9B808]"
            >
              {t("langbutton")}
            </button>
          </div>

          <Link
            target="_blank"
            title="facebook"
            href="https://www.facebook.com/dhulepolice"
            className="cursor-pointer hover:scale-110 ease-in-out duration-300"
          >
            <FaFacebook size={20} className="text-[#1877F2]" />
          </Link>
          {/* <Link
            href="https://wa.me/9371021930"
            target="_blank"
            title="whatsapp"
            className="cursor-pointer hover:scale-110 ease-in-out duration-300"
          >
            <IoLogoWhatsapp size={20} className="text-[#25D366]" />
          </Link> */}
          <Link
            target="_blank"
            title="x"
            href="https://x.com/SpDhule"
            className="cursor-pointer hover:scale-110 ease-in-out duration-300"
          >
            <RiTwitterXFill size={20} className="text-slate-800" />
          </Link>
          {/* <Link
            target="_blank"
            title="instagram"
            href="https://www.instagram.com/sp_ch.sambhajnager.rofficial/?igsh=NHl6cW11bjZiYmk1"
            className="cursor-pointer hover:scale-110 ease-in-out duration-300"
          >
            <RiInstagramFill size={20} className="text-[#405DE6]" />
          </Link> */}
          {/* <Link
            target="_blank"
            title="youtube"
            href="https://www.youtube.com/channel/UCu30NstTkLfUAK8YIq9odbg"
            className="cursor-pointer hover:scale-110 ease-in-out duration-300"
          >
            <BsYoutube size={20} className="text-red-400" />
          </Link> */}
        </div>

        <div className="flex lg:hidden justify-end">
          <div
            className="flex flex-row relative items-center -space-x-1 cursor-pointer"
            onClick={toggleNavbar}
          >
            <div className="text-sm text-black"> {t("menu")}</div>
            {!isOpen && (
              <div className="text-black text-xl p-1">
                <BiMenu />
              </div>
            )}
            {isOpen && (
              <div className="text-black text-xl p-1">
                <AiOutlineClose />
              </div>
            )}
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-full bg-gray-100 z-30 opacity-95 overflow-y-auto"
          >
            <div className="pt-20 pb-10 px-10 text-yellow-600 text-base">
              <ul className="">
                <li className="py-3 cursor-pointer">
                  <button
                    title="language change button"
                    onClick={() => changeLanguage("mr")}
                    className="px-2 py-1 text-sm text-black hover:bg-[#F9B808] border border-[#F9B808]"
                  >
                    {t("langbutton")}
                  </button>
                </li>
              </ul>
              <ul className="flex gap-4">
                <Link
                  target="_blank"
                  title="facebook"
                  href="https://www.facebook.com/dhulepolice/"
                  className="cursor-pointer hover:scale-110 ease-in-out duration-300"
                >
                  <FaFacebook size={30} className="text-[#1877F2]" />
                </Link>
                {/* <Link
                  target="_blank"
                  title="whatsapp"
                  href="https://wa.me/9371021930"
                  className="cursor-pointer hover:scale-110 ease-in-out duration-300"
                >
                  <IoLogoWhatsapp size={30} className="text-[#25D366]" />
                </Link> */}
                <Link
                  target="_blank"
                  title="x"
                  href="https://x.com/SpDhule"
                  className="cursor-pointer hover:scale-110 ease-in-out duration-300"
                >
                  <RiTwitterXFill size={30} className="text-slate-800" />
                </Link>
                {/* <Link
                  target="_blank"
                  title="instagram"
                  href="https://www.instagram.com/sp_ch.sambhajnager.rofficial/?igsh=NHl6cW11bjZiYmk1"
                  className="cursor-pointer hover:scale-110 ease-in-out duration-300"
                >
                  <RiInstagramFill size={30} className="text-[#405DE6]" />
                </Link> */}
                {/* <Link
                  target="_blank"
                  title="youtube"
                  href="https://www.youtube.com/channel/UCu30NstTkLfUAK8YIq9odbg"
                  className="cursor-pointer hover:scale-110 ease-in-out duration-300"
                >
                  <BsYoutube size={30} className="text-red-400" />
                </Link> */}
              </ul>
              <br />
              <ul className="border-b border-gray-300">
                <li className="py-2 text-yellow-600 text-xl font-semibold" title={t("home")}>
                  <Link href="/"> {t("home")}</Link>
                </li>
              </ul>

              <div className="border-b border-gray-300 pb-3">
                <div className="py-2 text-yellow-600 text-xl font-semibold" title={t("about_us")}>
                  {t("about_us")}
                </div>

                <ul className="ml-8 list-disc">
                  <li className="py-1" title={t("our_mission")}>
                    <Link href="/mission">{t("our_mission")}</Link>
                  </li>
                  <li className="py-1" title={t("senior_officer")}>
                    <Link href="/senior-officers">{t("senior_officer")}</Link>
                  </li>
                  <li className="py-1" title={t("divisional_acp")}>
                    <Link href="/divisional-acps">{t("divisional_acp")}</Link>
                  </li>
                  <li className="py-1" title={t("organizational_structure")}>
                    <Link href="/organizational-structure">
                      {t("organizational_structure")}
                    </Link>
                  </li>
                  <li className="py-1" title={t("jurisdiction_map")}>
                    <Link href="/jurisdiction-map">
                      {t("jurisdiction_map")}
                    </Link>
                  </li>
                  <li className="py-1" title={t("initiatives")}>
                    <Link href="/initiatives">{t("initiatives")}</Link>
                  </li>
                  <li className="py-1" title={t("photo_gallery")}>
                    <Link href="/gallery">{t("photo_gallery")}</Link>
                  </li>
                  <li className="py-1" title={t("police_station_incharge")}>
                    <Link href="/police-station-incharge">
                      {t("police_station_incharge")}
                    </Link>
                  </li>
                  <li className="py-1" title={t("important_contact")}>
                    <Link href="/imp-contacts">{t("important_contact")}</Link>
                  </li>
                  <li className="py-1" title={t("contact_us")}>
                    <Link href="/contact">{t("contact_us")}</Link>
                  </li>
                  <li className="py-1" title={t("feedback")}>
                    <Link href="/feedback">{t("feedback")}</Link>
                  </li>
                  <li className="py-1" title={t("martyrs")}>
                    <Link href="/martyrs">{t("martyrs")}</Link>
                  </li>
                </ul>
              </div>

              <div className="border-b border-gray-300 pb-3">
                <div className="py-2 text-yellow-600 text-xl font-semibold" title={t("report_us")}>
                  {t("report_us")}
                </div>

                <ul className="ml-8 list-disc">
                  <li className="py-1" title={t("online_complaint")}>
                    <Link
                      href="https://citizen.mahapolice.gov.in/Citizen/MH/index.aspx"
                      target="_blank"
                    >
                      {t("online_complaint")}
                    </Link>
                  </li>
                  <li className="py-1" title={t("lost_found")}>
                    <Link
                      href="https://citizen.mahapolice.gov.in/Citizen/MH/index.aspx"
                      target="_blank"
                    >
                      {t("lost_found")}
                    </Link>
                  </li>
                  <li className="py-1" title={t("tenant_information")}>
                    <Link
                      href="https://citizen.mahapolice.gov.in/Citizen/MH/index.aspx"
                      target="_blank"
                    >
                      {t("tenant_information")}
                    </Link>
                  </li>
                  <li className="py-1" title={t("confidential_information")}>
                    <Link href="/feedback">
                      {t("confidential_information")}
                    </Link>
                  </li>
                  <li className="py-1" title={t("lost_mobile_intimation")}>
                    <Link
                      href="https://citizen.mahapolice.gov.in/Citizen/MH/MobileMissingForm.aspx"
                      target="_blank"
                    >
                      {t("lost_mobile_intimation")}
                    </Link>
                  </li>
                  <li className="py-1" title="">
                    <Link
                      href="https://www.ceir.gov.in/Request/CeirUserBlockRequestDirect.jsp"
                      target="_blank"
                    >
                      {t("block_stolen_mobile")}
                    </Link>
                  </li>
                  <li className="py-1" title="">
                    <Link
                      href="https://cybercrime.gov.in/Webform/Accept.aspx"
                      target="_blank"
                    >
                      {t("woman_children_crime")}
                    </Link>
                  </li>
                  <li className="py-1" title="">
                    <Link
                      href="https://cybercrime.gov.in/Webform/Accept.aspx"
                      target="_blank"
                    >
                      {t("financial_fraud")}
                    </Link>
                  </li>
                  <li className="py-1" title="">
                    <Link
                      href="https://cybercrime.gov.in/Webform/Accept.aspx"
                      target="_blank"
                    >
                      {t("other_cyber_crimes")}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="border-b border-gray-300 pb-3">
                <div className="py-2 text-yellow-600 text-xl font-semibold" title={t("special_units")}>
                  {t("special_units")}
                </div>

                <ul className="ml-8 list-disc">
                  {specialBranches.map((branch) => {
                    return (
                      <li className="py-1" title={branch.title} key={branch.id}>
                        <a href={`/special-unit/${branch.id}`}>
                          {branch.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="border-b border-gray-300 pb-3">
                <div className="py-2 text-yellow-600 text-xl font-semibold" title={t("citizen_corner")}>
                  {t("citizen_corner")}
                </div>

                <ul className="ml-8 list-disc">
                  <li className="py-1" title={t("cyber_safety_tips")}>
                    <Link href="/cyber-safety-tips">
                      {t("cyber_safety_tips")}
                    </Link>
                  </li>
                  <li className="py-1" title={t("cyber_awareness")}>
                    <Link href="/cyber-awareness">{t("cyber_awareness")}</Link>
                  </li>
                  <li className="py-1" title={t("police_recruitments")}>
                    <Link href="/recruitment">{t("police_recruitments")}</Link>
                  </li>
                  <li className="py-1" title={t("press_release")}>
                    <Link href="/press-release">{t("press_release")}</Link>
                  </li>
                  <li className="py-1" title={t("accident_compensation")}>
                    <Link href="/accident-compensation">
                      {t("accident_compensation")}
                    </Link>
                  </li>
                  <li className="py-1" title={t("right_to_information")}>
                    <Link href="/rti">{t("right_to_information")}</Link>
                  </li>
                  <li className="py-1" title={t("passport_status")}>
                    <Link href="https://portal2.passportindia.gov.in/AppOnlineProject/statusTracker/trackStatusInpNew">
                      {t("passport_status")}
                    </Link>
                  </li>
                  <li className="py-1" title={t("useful_website")}>
                    <Link href="/useful-websites">{t("useful_website")}</Link>
                  </li>
                  <li className="py-1" title={t("citizen_wall")}>
                    <Link href="/citizen-alertwall">{t("citizen_wall")}</Link>
                  </li>
                  <li className="py-1" title={t("safety_tip")}>
                    <Link href="/safety-tips">{t("safety_tip")}</Link>
                  </li>
                  <li className="py-1" title={t("tenders")}>
                    <Link href="/tenders">{t("tenders")}</Link>
                  </li>
                  <li className="py-1" title={t("faq")}>
                    <Link href="/faqs">{t("faq")}</Link>
                  </li>
                  <li className="py-1" title={t("rts")}>
                    <Link href="/rts">{t("rts")}</Link>
                  </li>
                  <li className="py-1" title={t("nagrikanchi_sanad")}>
                    <Link href="/nagrikanchi-sanad">
                      {t("nagrikanchi_sanad")}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="border-b border-gray-300 pb-3">
                <div className="py-2 text-yellow-600 text-xl font-semibold" title={t("police_corner")}>
                  {t("police_corner")}
                </div>

                <ul className="ml-8 list-disc">
                  <li title={t("circular")}>
                    <Link href="/circular">{t("circular")}</Link>
                  </li>
                  <li className="py-1" title={t("welfare_activities")}>
                    <Link href="/welfare-activities">
                      {t("welfare_activities")}
                    </Link>
                  </li>
                  <li className="py-1" title={t("media_coverage")}>
                    <Link href="/media-coverage">{t("media_coverage")}</Link>
                  </li>
                  <li className="py-1" title={t("crime_reviews")}>
                    <Link href="/crime-review">{t("crime_reviews")}</Link>
                  </li>
                  <li className="py-1" title={t("good_work")}>
                    <Link href="/good-work">{t("good_work")}</Link>
                  </li>
                  <li className="py-1" title={t("info_for_police")}>
                    <Link href="/info-for-police">{t("info_for_police")}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
