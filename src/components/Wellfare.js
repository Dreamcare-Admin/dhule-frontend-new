import React, { useState, useEffect, useContext } from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Context from "../context/context";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { TbPointFilled } from "react-icons/tb";

const Wellfare = () => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const [records, setrecords] = useState([]);

  const fetchrecords = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-booking-all`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data.records) {
        // console.log(data.records);
        setrecords(data.records);
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
    <Marquee pauseOnHover={true} className="h-6">
      {records.map((record) => {
        return (
          <div key={record._id}>
            {(record.file_type === "link" || record.file_type === "pdf") && (
              <Link href={record.value} target="_blank">
                <div className="ml-5 flex flex-row items-center gap-1">
                  <VscDebugBreakpointLog className="text-[#003071]" />
                  {Ctx.lang === "en" && <>{record.title}</>}
                  {Ctx.lang === "mr" && <>{record.title_in_marathi}</>}
                </div>
              </Link>
            )}
            {record.file_type === "text" && (
              <div className="ml-5 flex flex-row items-center gap-1">
                <VscDebugBreakpointLog className="text-[#003071]" />
                {Ctx.lang === "en" && <>{record.title}</>}
                {Ctx.lang === "mr" && <>{record.title_in_marathi}</>}
              </div>
            )}
          </div>
        );
      })}
    </Marquee>
  );
};

export default Wellfare;
