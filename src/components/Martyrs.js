import React, { useState, useEffect, useContext } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useTranslation } from "react-i18next";
import Context from "../context/context";
import Image from "next/image";

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 6,
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
const Martyrs = () => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const [records, setrecords] = useState("");

  const fetchrecords = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-martyrs`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data.Data) {
        // console.log(data.Data);
        setrecords(data.Data);
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
    <div className="w-full">
      {records && (
        <Slide
          slidesToScroll={1}
          slidesToShow={2}
          indicators={false}
          autoplay={true}
          responsive={responsiveSettings}
          duration={1000}
          className="w-full"
        >
          {records.map((record) => {
            const { _id, photo, name, name_in_marathi, martyrs_date } = record;
            return (
              <div className="w-36 text-center" key={_id}>
                {/* <img src={photo} alt={name} className="h-36 w-auto" /> */}
                <Image src={photo} width={140} height={140} alt={name} />
                <div className="mt-2 font-semibold text-xs lg:text-sm">
                  {Ctx.lang === "en" && <>{name}</>}
                  {Ctx.lang === "mr" && <>{name_in_marathi}</>}
                </div>
                <div className="mt-1 text-xs">{martyrs_date}</div>
              </div>
            );
          })}
          {/* <div className="w-32 lg:w-36 text-center">
          <img src="/1.png" alt="" className="h-36 w-auto" />
          <div className="mt-2 font-semibold text-xs lg:text-sm">
            Shri. Shailesh Sampat Kamane.
          </div>
          <div className="mt-1 text-xs">12-Nov-2007</div>
        </div>
        <div className="w-32 lg:w-36 text-center">
          <img src="/2.png" alt="" className="h-36 w-auto" />
          <div className="mt-2 font-semibold text-xs lg:text-sm">
            Shri. Laxman Jhamluji Lonarkar.
          </div>
          <div className="mt-1 text-xs">20-Apr-1993</div>
        </div>
        <div className="w-32 lg:w-36 text-center">
          <img src="/3.png" alt="" className="h-36 w-auto" />
          <div className="mt-1 font-semibold text-xs lg:text-sm">
            Shri. Vasudev Nari Shirsat.
          </div>
          <div className="mt-1 text-xs">20-Apr-1993</div>
        </div>
        <div className="w-32 lg:w-36 text-center">
          <img src="/4.png" alt="" className="h-36 w-auto" />
          <div className="mt-2 font-semibold text-xs lg:text-sm">
            Shri. Lalbabu Sing.
          </div>
          <div className="mt-1 text-xs">07-Aug-1988</div>
        </div>
        <div className="w-32 lg:w-36 text-center">
          <img src="/5.png" alt="" className="h-36 w-auto" />
          <div className="mt-2 font-semibold text-xs lg:text-sm">
            Shri. R. R. Paydhune.
          </div>
          <div className="mt-1 text-xs">01-Aug-1988</div>
        </div>
        <div className="w-32 lg:w-36 text-center">
          <img src="/6.png" alt="" className="h-36 w-auto" />
          <div className="mt-2 font-semibold text-xs lg:text-sm">
            Shri. Ramakbal Ramadvar Pandey.
          </div>
          <div className="mt-1 text-xs">19-Apr-2012</div>
        </div> */}
        </Slide>
      )}
    </div>
  );
};

export default Martyrs;
