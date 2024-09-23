import React from "react";
import { t } from "i18next";
import { ImagesFont } from "../../../constants/appConstants";

export const NewApp: React.FC<any> = ({}) => {
     
  const {newapp, appstore, playstore} = ImagesFont;

  return (
    <div className="bg-white py-12 px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
    {/* Section image */}
    <div className="relative w-2/3 xl:w-5/12 sm:w-2/3 lg:w-5/12 mb-8 lg:mb-0">
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-64 h-64 bg-purple-100 rounded-full"></div> */}
        <img src={newapp} alt="Mobile App Screens" className="relative mx-auto lg:mx-0 lg:mr-8" />
    </div>

    {/* Section texte */}
    <div className="text-center xl:w-1/3 lg:w-1/3 lg:text-left md:mx-10">
        <h2 className="text-2xl font-semibold text-textNewApp mb-6">{t("index.newAppTitle")}</h2>

        <p className="mb-12 text-lg lg:w-10/12 xl:w-10/12 text-textNewApp">{t("index.newAppDescription")}</p>

        <a href="#" className="inline-block bg-payqinBlueNew text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-600 mb-12">{t("index.learnMore")}</a>

        <p className="mb-4 text-md lg:w-3/4 xl:w-3/4 text-textNewApp">{t("index.downloadText")}</p>

        <div className="flex justify-center md:justify-center lg:justify-start flex-row xl:flex-row gap-x-4 xl:flex lg:flex md:flex sm:flex lg:flex-row sm:flex-row md:flex-row">
          <a href="#"><img src={appstore} alt="App Store" className="h-12"/></a>
          <a href="#"><img src={playstore} alt="Google Play" className="h-12"/></a>
        </div>
    </div>
</div>
  );
};
