import React from "react";
import { t } from "i18next";
import { ImagesFont } from "../../../constants/appConstants";

export const DownloadApp: React.FC<any> = ({}) => {
     
  const {appstore, playstore} = ImagesFont;
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:my-10 px-6 md:px-20 py-10 bg-white">
    <div className="text-center md:text-left mb-8 md:mb-0">
      <h2 className="text-2xl md:text-4xl font-bold text-textNewApp">{t("index.getAppTitle")}</h2>
      <p className="text-lg md:text-xl w-full md:w-2/3 text-textNewApp mt-2">{t("index.getAppDescription")}</p>
    </div>
    <div className="flex space-x-4">
    <a href="#"><img src={appstore} alt="Download on the App Store" className="w-40 md:w-48" /></a>
    <a href="#"><img src={playstore} alt="Get it on Google Play" className="w-40 md:w-48" /></a>
    </div>
  </div>
  );
};
