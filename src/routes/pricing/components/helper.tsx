import React from "react";
import { EmailSVG, LocationSVG } from "../../../assets/customSvg";
import { t } from "i18next";

export const Helper: React.FC<any> = () => {
  return (
    <div className="bg-payqinViolet w-full block lg:flex gap-x-14 px-10 rounded-xl py-4 md:py-10 mb-10 md:mb-20">
      <div className="block md:grow my-4 lg:my-0">
        <h3 className="text-white text-3xl font-normal">
          {t("pricing.title")}
        </h3>
        <p className="text-white text-sm md:text-lg font-light mt-3">
          {t("pricing.text")}
        </p>
      </div>
      <div className="block my-8 lg:my-0">
        <li className="flex gap-x-4 ">
          <LocationSVG color="white" size="40px" />
          <div className="block text-white">
            <p className="text-xs md:text-base my-1">PayQin , Inc.</p>
            <p className="font-light text-sm ">
              400, Relia Blvd Ste 207-298, Montebello , NY 10901 USA
            </p>
            <p className="font-light text-sm md:text-xl"></p>
          </div>
        </li>
      </div>

      <div className="block">
        <li className="flex gap-x-4 ">
          <EmailSVG color="white" size="40px" />
          <div className="block text-white">
            <p className="text-xs md:text-base my-1">hello@payqin.com</p>
            <p className="font-light text-sm ">Support email</p>
          </div>
        </li>
      </div>
    </div>
  );
};
