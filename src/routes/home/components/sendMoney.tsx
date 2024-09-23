import React from "react";
import { t } from "i18next";
import { ImagesFont } from "../../../constants/appConstants";

export const SendMoney: React.FC<any> = ({}) => {
     
  const {sendmoney} = ImagesFont;
  const lang = localStorage.getItem("language") || "fr";

  return (
    <div className="bg-white py-12 px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
    {/* Section texte */}
    <div className="text-center w-full xl:w-6/12 md:w-1/2 lg:text-left mx-10">
        {lang == "fr" && <h2 className="text-2xl w-full sm:w-full md:w-full font-semibold lg:w-10/12 xl:w-10/12 2xl:w-7/12 text-textNewApp mb-6">{t("index.sendMoneyTitle1")}  <span className="text-payqinBlueNew">{t("index.sendMoneyTitle2")}</span></h2>}
        {lang == "en" && <h2 className="text-2xl w-full sm:w-full md:w-full font-semibold lg:w-10/12 xl:w-10/12 2xl:w-7/12 text-textNewApp mb-6">{t("index.sendMoneyTitle1")}  <span className="text-payqinBlueNew">{t("index.sendMoneyTitle2")}</span> {t("index.sendMoneyTitle3")} </h2>}
        <p className="mb-4 text-md w-full md:w-7/12 text-textNewApp">{t("index.sendMoneyDescription")}</p>
        <a href="#" className="inline-block bg-payqinBlueNew text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-600 mb-12">{t("index.sendMoney")}</a>

    </div>
    {/* Section image */}

    <div className="relative w-1/2 xl:w-7/12 sm:w-2/3 lg:w-5/12 mb-8 lg:mb-0">
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-64 h-64 bg-purple-100 rounded-full"></div> */}
        <img src={sendmoney} alt="send Money" className="relative mx-auto lg:mx-0 lg:mr-8" />
    </div>
</div>
  );
};
