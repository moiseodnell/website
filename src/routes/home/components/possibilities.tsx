import React from "react";
import { t } from "i18next";
import  CardOpportunities  from "../../../shared/CardOpportunities";
import { ImagesFont } from "../../../constants/appConstants";


export const Possibilities: React.FC<any> = ({}) => {

  const {opportunities1,opportunities2,opportunities3} = ImagesFont;
  const lang = localStorage.getItem("language") || "fr";
  return (
    <div className="bg-white py-12">
      <div className="text-center mb-8">
        {lang == "en" && <h2 className="text-2xl font-semibold text-gray-900">{t("index.oppTitle1")} <span className="text-payqinBlueNew">{t("index.oppTitle2")}</span> </h2>}
        {lang == "fr" && <h2 className="text-2xl font-semibold text-gray-900">{t("index.oppTitle1")} <span className="text-payqinBlueNew">{t("index.oppTitle2")}</span> {t("index.oppTitle3")} </h2>}
        <p className="mt-2 text-gray-600">{t("index.oppDescription")}</p>
      </div>
      <div className="grid grid-cols-1 bg-transparent md:grid-cols-3 gap-20 lg:gap-10 xl:gap-20 md:gap-6 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Payqin for Individual */}
        <CardOpportunities 
        title={t("index.individualTitle")}
        description={t("index.individualDescription")}
        link="#"
        imageUrl={opportunities1}
        />
        {/* Payqin Money Transfer */}
        <CardOpportunities 
        title={t("index.moneyTransferTitle")}
        description={t("index.moneyTransferDecription")}
        link="#"
        imageUrl={opportunities2}
        />
        {/* Payqin for Business */}
        <CardOpportunities 
        title={t("index.businessTitle")}
        description={t("index.businessDecription")}
        link="#"
        imageUrl={opportunities3}
        />
    </div>
</div>
  );
};
