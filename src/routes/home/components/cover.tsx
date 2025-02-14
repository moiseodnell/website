import React from "react";
import { motion } from "framer-motion";
import { t } from "i18next";
import { ImagesFont } from "../../../constants/appConstants";
import { useLocation } from 'react-router-dom';

export const Cover: React.FC<any> = ({}) => {


const goToWebApp = () => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent);

   if (isMobile) { // Redirection  vers l'application mobile
    // const appStoreUrl = 'https://apps.apple.com/app/id123456789';
    // const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.yourcompany.app';
    const appUrl = "https://onelink.to/wgx597";
    const deepLink = `${appUrl}`;
    window.location.href = deepLink;
    // setTimeout(() => {
    //   window.location.href = navigator.userAgent.match(/android/i) ? playStoreUrl : appStoreUrl;
    // }, 1000);
  }
    else { // Redirection vers l'application web
      window.location.href = 'https://web.payqin.com';
    }
  };

  const {globe, stellar, moneygram, blockchain, visa, appstore, playstore, map} = ImagesFont;
  return (
    <>
    <section className="relative flex flex-col lg:flex-row items-center justify-between p-10 lg:p-20 bg-transparent">
      {/* Rectangle bleu oblique */}

      {/* Texte et boutons à gauche */}
      <div className="relative lg:w-2/3 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          {t("index.titleText1")} <br /> {t("index.titleText2")}
        </h1>
        <p className="text-gray-600 mt-4 mb-8">
        {t("index.subTitletext")}
        </p>
        <div className="flex flex-row md:flex-row mb-6 items-center justify-center gap-x-4 lg:justify-start md:space-y-0 md:space-x-4">
          <a href="https://apps.apple.com/fr/app/payqin/id1397872810" target="_blank"><img src={appstore} alt="App Store" className="h-12"/></a>
          <a href="https://play.google.com/store/search?q=payqin&c=apps" target="_blank"><img src={playstore} alt="Google Play" className="h-12"/></a>
      </div>
      </div>

      {/* Image à droite */}
      <div className="relative lg:w-1/2 flex justify-center mt-10 lg:mt-0 z-0">
        <img
          src={globe}
          alt="Globe"
          className="w-80 h-auto"
        />
      </div>
    </section>
    <section className="relative mt-4 flex lg:bottom-20 xl:bottom-24 flex-row lg:flex-row items-center justify-center w-full bg-transparent">
    <div className="flex flex-col items-center">
      <div className="flex space-x-4 mt-4 top-10">
        <img src={stellar} alt="Sponsor 1" className="w-20 lg:w-20 md:w-20 xl:w-20 object-contain w" />
        <img src={moneygram} alt="Sponsor 2" className="w-20 lg:w-24 md:w-24 xl:w-24 object-contain" />
        <img src={blockchain} alt="Sponsor 3" className="w-20 lg:w-24 md:w-24 xl:w-24 object-contain" />
        <img src={visa} alt="Sponsor 4" className="w-20 lg:w-20 md:w-20 xl:w-20 object-contain" />
      </div>
    </div>
  </section>
  </>
  );
};
