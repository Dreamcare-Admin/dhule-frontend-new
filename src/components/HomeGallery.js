import React, { useState, useEffect, useContext } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useTranslation } from "react-i18next";
import Context from "../context/context";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
];
const HomeGallery = () => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const [records, setrecords] = useState("");
  const [images, setimages] = useState([]);

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

  const fetchrecords = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-homepage-gallery`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data.success === true) {
        console.log(data.images);
        setrecords(data.images);
        setimages(data.images);
      } else {
        setrecords([]);
        setimages([]);
      }
    } catch (error) {
      setrecords([]);
      setimages([]);
    }
  };

  useEffect(() => {
    fetchrecords();
  }, []);
  return (
    <div className="w-full">
      {records && (
        <Slide
        slidesToScroll={1}
        slidesToShow={2}
        indicators={false}
        autoplay={true}
        responsive={responsiveSettings}
        duration={1000}
          
        >
          {records.map((record, index) => {
            const { _id, imagelink } = record;
            return (
              <div
                className="text-center m-4 cursor-pointer"
                key={_id}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={imagelink}
                  alt=""
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            );
          })}
        </Slide>
      )}

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
          imageCaption={""}
        />
      )}
    </div>
  );
};

export default HomeGallery;
