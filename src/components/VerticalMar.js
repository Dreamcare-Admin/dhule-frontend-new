import Link from "next/link";
import React, { useRef, useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import Context from "../context/context";

const VerticalMar = () => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

  const [records, setRecords] = useState([]);

  const fetchLatestRecords = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-latest-three`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      debugger;

      if (data.records) {
        // console.log(data);
        setRecords(data.records);
      } else {
        //   notifyWarn();
      }
    } catch (error) {
      // notifyWarn();
    }
  };

  useEffect(() => {
    fetchLatestRecords();
  }, []);
  return (
    <marquee
      ref={marqueeRef}
      behavior=""
      direction="up"
      scrollamount="3"
      className="h-52"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {records.map((rec) => {
        const { title, titleInMarathi, pdflink, _id } = rec;
        return (
          <Link href={pdflink} target="_blank" key={_id}>
            <div className="p-4 my-5 shadow border-y border-y-gray-300  border-l-8 border-r  border-l-[#19447F] rounded-l-xl">
              {Ctx.lang === "en" && <>{title}</>}
              {Ctx.lang === "mr" && <>{titleInMarathi}</>}
            </div>
          </Link>
        );
      })}
      {/* <div className="p-4 my-5 shadow border-y border-y-gray-300  border-l-8 border-r  border-l-[#19447F] rounded-l-xl">
        {Ctx.lang === "en" && <>Latest Updates</>}
        {Ctx.lang === "mr" && <>ताज्या घडामोडी</>}
      </div> */}
    </marquee>
  );
};

export default VerticalMar;
