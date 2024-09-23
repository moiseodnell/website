import React from "react";
import { t } from "i18next";
import { ImagesFont } from "../../../constants/appConstants";

export const FlexAccount: React.FC<any> = ({}) => {
     
  const {mobile} = ImagesFont;

  return (
    <div className="relative py-12 my-20 md:py-10 lg:py-0">
  <div className="absolute inset-0 bg-lightcyan/[.38] transform -skew-y-3 rounded-lg"></div>
  
  <div className="relative container mx-auto flex flex-col p-10 items-center md:flex-row lg:justify-center">
    <div className="flex flex-col space-y-12 lg:space-y-10 lg:space-x-8 lg:flex-col lg:items-center">
      <div className="space-y-4 text-center lg:text-left bg-white p-5 rounded-xl lg:max-w-xs">
        <h2 className="text-lg font-bold text-textNewApp">{t("index.instantTransactionTitle")}</h2>
        <p className="text-sm text-textNewApp">{t("index.instantTransactionDescription")}</p>
      </div>
      <div className="space-y-4 text-center lg:text-left bg-white p-5 rounded-xl lg:max-w-xs">
        <h2 className="text-lg font-bold text-textNewApp">{t("index.virtualCardTitle")}</h2>
        <p className="text-sm text-textNewApp">{t("index.virtualCardDescription")}</p>
      </div>
    </div>

    <div className="relative my-12 lg:mt-0">
      <img src={mobile} alt="Phone" className="mx-auto max-w-xs" />
      <div className="absolute inset-0 flex items-center justify-center">
      </div>
    </div>

    <div className="flex flex-col space-y-12 lg:space-y-10 lg:space-x-8 lg:flex-col lg:items-center">
      <div className="space-y-4 text-center lg:text-left bg-white p-5 rounded-xl lg:max-w-xs">
        <h2 className="text-lg font-bold text-textNewApp">{t("index.confidentialDataTitle")}</h2>
        <p className="text-sm text-textNewApp">{t("index.confidentialDataDescription")}</p>
      </div>
      <div className="space-y-4 text-center lg:text-left bg-white p-5 rounded-xl lg:max-w-xs">
        <h2 className="text-lg font-bold text-textNewApp">{t("index.contactLessTitle")}</h2>
        <p className="text-sm text-textNewApp">{t("index.contactLessDescription")}</p>
      </div>
    </div>
  </div>
</div>
  );
};
