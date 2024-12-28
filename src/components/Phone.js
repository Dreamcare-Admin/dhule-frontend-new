import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Phone = () => {
  const [phonelist, setphonelist] = useState(false);

  // LANGUAGE CHANGE
  const { t } = useTranslation();

  const closeHandler = () => {
    if (phonelist) {
      setphonelist(false);
    } else {
      setphonelist(true);
    }
  };

  return (
    <div>
      {!phonelist && (
        <div
          onClick={closeHandler}
          className="bg-[#0245A7] w-14 h-14 z-50 rounded-full justify-center items-center block fixed bottom-10 lg:bottom-20 right-10 lg:right-14 cursor-pointer"
        >
          <div className="w-14 h-14 flex justify-center items-center">
            {/* <img src="/phone.png" alt="phone" className="w-5 h-5" /> */}
            <FaPhone className="w-5 h-5 text-3xl text-white" />
          </div>
        </div>
      )}

      {phonelist && (
        <div
          onClick={closeHandler}
          className="bg-[#0245A7] w-14 h-14 z-50 rounded-full flex justify-center items-center fixed bottom-10 lg:bottom-20 right-10 lg:right-14 cursor-pointer"
        >
          <AiOutlineClose className="w-5 h-5 text-3xl text-white " />
        </div>
      )}

      {phonelist && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0245A7] text-white w-[300px] h-[350px] z-50 rounded-md flex justify-center items-center fixed bottom-28 lg:bottom-36 right-7 lg:right-14"
        >
          <div className="text-center py-5 flex flex-col justify-around space-y-3">
            <div>
              <div className="text-base"> {t("emergency_phone")}</div>
              <div className="text-base font-semibold text-orange-500">
                <a
                  href="tel:112"
                  className="hover:underline hover:decoration-orange-500"
                >
                  112
                </a>
              </div>
            </div>
            <div>
              <div className="text-base">{t("for_people_cp")}</div>
              <div className="text-base font-semibold text-orange-500">
                <a
                  href="https://wa.me/8767659331"
                  className="hover:underline hover:decoration-orange-500"
                  target="_blank"
                >
                  <div className="flex flex-row items-center justify-center space-x-2">
                    <span>8767659331</span>

                    <IoLogoWhatsapp className="text-green-500 text-lg bg-white rounded-full" />
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="text-base">{t("control_room_phone")}</div>
              <div className="text-base font-semibold text-orange-500">
                <a
                  href="https://wa.me/8767659331"
                  className="hover:underline hover:decoration-orange-500"
                  target="_blank"
                >
                  <div className="flex flex-row items-center justify-center space-x-2">
                    <span> 8767659331</span>

                    <IoLogoWhatsapp className="text-green-500 text-lg bg-white rounded-full" />
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="text-base">{t("traffic_control")}</div>
              <div className="text-base font-semibold text-orange-500">
                <a
                  href="https://wa.me/9529681078"
                  className="hover:underline hover:decoration-orange-500"
                  target="_blank"
                >
                  <div className="flex flex-row items-center justify-center space-x-2">
                    <span> 9529681078</span>
                    <IoLogoWhatsapp className="text-green-500 text-lg bg-white rounded-full" />
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="text-base">
                {t("destitute_psychiatric_helpline")}
              </div>
              <div className="text-base font-semibold text-orange-500">
                <a
                  href="tel:020-26209124"
                  className="hover:underline hover:decoration-orange-500"
                >
                  020-26209124
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Phone;
