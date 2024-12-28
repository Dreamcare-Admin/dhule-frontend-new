import React, { useContext, useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Image from "next/image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useTranslation } from "react-i18next";
import Context from "../../context/context";

const Gallery = ({ id }) => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [key1, setKey1] = useState(false);
  useEffect(() => {
    setTimeout(() => setKey1(key1 + 1));
  }, [isOpen]);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const [images, setImages] = useState([]);
  const [title, settitle] = useState("");
  const [titleInMarathi, settitleInMarathi] = useState("");

  const fetchrecords = async () => {
    if (id.length !== 24) {
      return;
    }
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-images-by-album?albumId=${id}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data) {
        // console.log(data.records);
        settitle(data.title);
        settitleInMarathi(data.titleInMarathi);
        setImages(data.images);
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

        <title>Gallery | Dhule Police</title>
      </Head>

      <main className="min-h-screen">
        <Navbar />

        <h1 className="text-center max-w-5xl text-2xl lg:text-4xl text-gray-700 mt-10 mx-auto px-5">
          {Ctx.lang === "en" && <>{title}</>}
          {Ctx.lang === "mr" && <>{titleInMarathi}</>}
        </h1>
        <div className="w-28 mt-5 mb-5 border-b border-orange-400 mx-auto"></div>

        {images && (
          <div className="container max-w-5xl mx-auto mt-5 mb-20 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-5 lg:px-0 justify-items-center">
              {images.map((item, index) => {
                const { _id, description, descriptionInMarathi, imagelink } =
                  item;

                return (
                  <div
                    key={_id}
                    className="bg-white rounded-lg shadow-lg max-w-sm cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative aspect-w-3 aspect-h-4">
                      <Image
                        src={imagelink}
                        alt={description}
                        width={400}
                        height={300}
                        quality={80}
                        className=" h-60 object-cover"
                      />
                    </div>
                    {description && (
                      <div className="p-4">
                        <p className="text-gray-600">
                          <div>
                            {Ctx.lang === "en" && <>{description}</>}
                            {Ctx.lang === "mr" && <>{descriptionInMarathi}</>}
                          </div>
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {isOpen && (
        <Lightbox
          key={key1}
          mainSrc={images[photoIndex].imagelink}
          nextSrc={images[(photoIndex + 1) % images.length].imagelink}
          prevSrc={
            images[(photoIndex + images.length - 1) % images.length].imagelink
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageCaption={images[photoIndex].description}
        />
      )}

      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  return {
    props: {
      id,
    },
  };
}

export default Gallery;
// fdf
