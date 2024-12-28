import Head from "next/head";
import React, { useState, useEffect, useContext } from "react";
import Navbar from "@/components/Navbar";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import Context from "../../context/context";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const index = ({ id, groupdata }) => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const [records, setrecords] = useState([]);

  const imageUrls = [];
  const [images, setimages] = useState(groupdata.photo);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [images]); // Added 'images' as a dependency

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

        <title>Initiatives | Dhule Police</title>
      </Head>

      <main className="min-h-screen">
        <Navbar />
        <h1 className="text-2xl lg:text-4xl text-center text-gray-600 mt-10 max-w-3xl mx-auto">
          {Ctx.lang === "en" && <>{groupdata.title}</>}
          {Ctx.lang === "mr" && <>{groupdata.title_in_marathi}</>}
        </h1>

        <div className="max-w-3xl mx-auto my-8 px-5">
          <img
            src={images[currentIndex]}
            alt=""
            className="w-full  h-[250px] lg:h-[350px] rounded-lg object-cover"
          />
        </div>

        <div className="max-w-3xl mx-auto my-8 whitespace-pre-wrap text-justify leading-8 px-5 text-gray-700">
          {Ctx.lang === "en" && <>{groupdata.about}</>}
          {Ctx.lang === "mr" && <>{groupdata.about_in_marathi}</>}
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
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-wellfare-by-id?Id=${id}`
    );

    const data = await res.json();

    if (data.Data) {
      groupdata = data.Data || null;
    }

    return { props: { id, groupdata } };
  } catch (error) {
    return {
      props: { id, groupdata: null },
    };
  }
}
