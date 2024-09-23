import { motion } from "framer-motion";
import React from "react";
import { t } from "i18next";
import { transferIllustration } from "../../../constants/appConstants";

export const Relatives: React.FC<any> = ({}) => {
  const goToWebApp = () => {
    window.location.href = "https://web.payqin.com";
  };
  return (
    <section className="my-14 w-full h-full bg-no-repeat relative">
      <>
        <div className="md:h-72 md:w-[24rem] lg:h-96 lg:w-[30rem] xl:w-[45rem] xl:h-[35rem] bg-gradient-to-br from-payqinGradientGreenLeft to-payqinGradientGreenRight md:absolute top-5 left-6 md:rounded-xl block p-5 xl:p-28">
          <h1 className="font-bold text-xl md:text-2xl lg:text-5xl text-center md:text-start">
            {t("index.relative")}
          </h1>
          <p className="text-xs my-10 text-center md:text-sm md:text-start">
            {t("index.relativeSub")}
          </p>
          <div className="flex justify-center md:justify-end">
            <motion.button
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="h-auto w-auto bg-payqinBlue p-4 text-white rounded-full px-3 md:px-6 py-3 text-center text-xs lg:text-sm"
              onClick={goToWebApp}
            >
              {t("index.relativeButton")}
            </motion.button>
          </div>
        </div>
        <img
          src={transferIllustration}
          alt="chatting_woman"
          className="w-full"
        />
      </>
    </section>
  );
};
