import React from "react";
import { CustomLang } from "../assets/customLangFlag";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { CustomRSIcon } from "../assets/customRSIcons";
import { IoIosTrendingUp } from "react-icons/io";
import {
  facebookLogo,
  instagramLogo,
  linkedinLogo,
  payqinLogo,
  pciLogo,
  twitterLogo,
} from "../constants/appConstants";

export const Footer: React.FC<any> = ({}) => {


  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto lg:px-10">
        <div className="flex md:flex-row justify-center flex-col">
          <div className="w-full lg:w-3/6 mb-6 p-10">
            <img
              src={payqinLogo} // Change this to your PayQin logo path
              alt="PayQin Logo"
              className="h-8"
            />
            <p className="text-textNewApp mt-4 text-sm">
                {t("footer.payqin")}
            </p>
            <p className="text-sm text-textNewApp mt-4">&copy; 2024 PayQin Inc.</p>
          </div>
          <div className="w-full lg:w-1/4 mb-6 p-10">
            <h5 className="text-lg font-bold text-textNewApp mb-4">{t("footer.visit")}</h5>
            <p className="text-sm text-textNewApp text-sm">
              2261 Market street
              <br />
              #10331
              <br />
              San Francisco, CA 94114
            </p>
          </div>
          <div className="w-full lg:w-1/4 mb-6 p-10">
            <h5 className="text-lg font-bold text-textNewApp mb-4">{t("footer.contact")}</h5>
            <p className="text-sm text-textNewApp">
              <a href="mailto:hello@payqin.com">hello@payqin.com</a>
            </p>
          </div>
          <div className="w-full lg:w-1/4 mb-6 p-10">
            <h5 className="text-lg font-bold text-textNewApp mb-4">{t("footer.follow")}</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm flex flex-row text-textNewApp">
                  Instagram &nbsp; <IoIosTrendingUp color="blue" />
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex flex-row text-textNewApp">
                  Linkedin &nbsp; &nbsp; <IoIosTrendingUp color="blue" />
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex flex-row text-textNewApp">
                  WhatsApp &nbsp; &nbsp; <IoIosTrendingUp color="blue" />
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex flex-row text-textNewApp">
                  Facebook &nbsp; &nbsp; <IoIosTrendingUp color="blue" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center md:flex hidden mb-8 text-textNewApp text-sm">
          <a href="#" target="_blank" className="mx-4">
          {t("index.terms_conditions")}
          </a>
          <a href="#" target="_blank" className="mx-4">
          {t("footer.privacy")}
          </a>
          <a href="#" target="_blank" className="mx-4">
          {t("footer.cookies")}
          </a>
          <a href="#" target="_blank" className="mx-4">
          {t("footer.refunds")}
          </a>
          <a href="#" target="_blank" className="mx-4">
          {t("footer.license")}
          </a>
        </div>
      </div>
    </footer>
  );
};
