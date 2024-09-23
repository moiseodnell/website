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

  const {smImg1, smImg2,smImg3, smImg4, woman, bankTansfer, topUp, qrCode, stellar, moneygram, blockchain, visa} = ImagesFont;

  return (
    <>
    <section className="relative flex flex-col lg:flex-row items-center justify-between p-10 lg:p-20 bg-transparent">
      {/* Rectangle bleu oblique */}

      {/* Texte et boutons à gauche */}
      <div className="relative lg:w-2/3 text-center lg:text-left">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight">
          {t("index.titleText1")} <br /> {t("index.titleText2")}
        </h1>
        <p className="text-gray-600 mt-4 mb-8">
        {t("index.subTitletext")}
        </p>
        <div className="flex flex-row md:flex-row items-center justify-center gap-x-4 lg:justify-start md:space-y-0 md:space-x-4">
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="flex justify-center items-center text-white px-3 md:px-6 py-3 bg-payqinBlueNew text-center text-xs md:text-sm border border-payqinBlue"
            onClick={goToWebApp}
            style={{ borderRadius: 10 }}
          >
            {t("index.openAccount")}
          </motion.button>
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="flex justify-center items-center text-black px-3 md:px-6 py-3 bg-white text-center text-xs md:text-sm border border-payqinBlue"
            onClick={goToWebApp}
            style={{ borderRadius: 10 }}
          >
            {t("index.transferMoney")}
          </motion.button>
      </div>
      </div>

      {/* Image à droite */}
      <div className="relative lg:w-1/2 flex justify-center mt-10 lg:mt-0 z-0">
        <img
          src={woman}
          alt="Person holding phone"
          className="w-80 h-auto rounded-md shadow-lg"
        />
        <div className="absolute -top-8 -left-5 bg-white p-4 rounded-lg shadow-lg">
          <ul className="space-y-2">
            <a href="https://web.payqin.com" className="flex items-center space-x-2">
            <li className="flex flex-row">
              <img src={bankTansfer} alt="" className="mr-2 w-5 h-5"/>
              <span>{t("index.bankTransfer")}</span>
            </li>
            </a>
            <a href="https://web.payqin.com" className="flex items-center space-x-2">
            <li className="flex flex-row">
              <img src={topUp} alt="" className="mr-2 w-5 h-5"/>
                <span>{t("index.topUpCard")}</span>
              </li>
            </a>
            <a href="https://web.payqin.com" className="flex items-center space-x-2">
              <li className="flex flex-row">
                <img src={qrCode} alt="" className="mr-2 w-5 h-5"/>
                <span>{t("index.scanQrCode")}</span>
              </li>
            </a>
          </ul>
        </div>
        <div className="absolute text-center p-4 -bottom-10 -right-10 lg:-bottom-16 md:-right-20 lg:-right-2 xl:right-6 bg-white lg:p-4 rounded-lg shadow-lg">
          <span className="text-xl font-bold">2M+</span>
          <p>{t("index.totalClients")}</p>
          <div style={{display: "flex", flexDirection:"row", width:"95%"}}>
            <img src={smImg1} alt="" className="rounded-full w-8 h-8"/>
            <img src={smImg2} alt="" className="rounded-full w-8 h-8"/>
            <img src={smImg3} alt="" className="rounded-full w-8 h-8"/>
            <img src={smImg4} alt="" className="rounded-full w-8 h-8"/>
          </div>
        </div>
        <div className="absolute text-center invisible sm:-right-20 sm:top-20 sm:visible lg:visible md:visible lg:top-20 lg:-right-8 xl:right-12 md:-right-16 p-4 rounded-lg shadow-lg">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9804 8.00002C23.5872 8.35579 23.174 8.68884 22.7429 8.99752C21.9979 9.49752 21.1604 9.84252 20.2804 10.0175C19.8979 10.0925 19.4979 10.125 18.7004 10.1875C16.6979 10.3475 15.6954 10.4275 14.8604 10.7225C13.9056 11.0596 13.0384 11.6062 12.3225 12.3221C11.6065 13.0381 11.0599 13.9053 10.7229 14.86C10.4279 15.695 10.3479 16.6975 10.1879 18.7C10.1606 19.2294 10.1038 19.7569 10.0179 20.28C9.84285 21.16 9.49785 21.9975 8.99785 22.7425C8.78035 23.0675 8.52035 23.3725 8.00035 23.98C6.69785 25.51 6.04535 26.275 5.66285 27.075C4.78035 28.925 4.78035 31.075 5.66285 32.925C6.04535 33.725 6.69785 34.49 8.00035 36.02C8.52035 36.6275 8.78035 36.9325 8.99785 37.2575C9.49785 38.0025 9.84285 38.84 10.0179 39.72C10.0929 40.1025 10.1254 40.5025 10.1879 41.3C10.3479 43.3025 10.4279 44.305 10.7229 45.14C11.0599 46.0948 11.6065 46.9619 12.3225 47.6779C13.0384 48.3939 13.9056 48.9404 14.8604 49.2775C15.6954 49.5725 16.6979 49.6525 18.7004 49.8125C19.4979 49.875 19.8979 49.9075 20.2804 49.9825C21.1604 50.1575 21.9979 50.505 22.7429 51.0025C23.0679 51.22 23.3729 51.48 23.9804 52C25.5104 53.3025 26.2754 53.955 27.0754 54.3375C28.9254 55.22 31.0754 55.22 32.9254 54.3375C33.7254 53.955 34.4904 53.3025 36.0204 52C36.6279 51.48 36.9329 51.22 37.2579 51.0025C38.0029 50.5025 38.8404 50.1575 39.7204 49.9825C40.1029 49.9075 40.5029 49.875 41.3004 49.8125C43.3029 49.6525 44.3054 49.5725 45.1404 49.2775C46.0951 48.9404 46.9623 48.3939 47.6782 47.6779C48.3942 46.9619 48.9408 46.0948 49.2779 45.14C49.5729 44.305 49.6529 43.3025 49.8129 41.3C49.8754 40.5025 49.9079 40.1025 49.9829 39.72C50.1579 38.84 50.5053 38.0025 51.0028 37.2575C51.2203 36.9325 51.4804 36.6275 52.0004 36.02C53.3028 34.49 53.9554 33.725 54.3379 32.925C55.2204 31.075 55.2204 28.925 54.3379 27.075C53.9554 26.275 53.3028 25.51 52.0004 23.98C51.6446 23.5868 51.3115 23.1737 51.0028 22.7425C50.5033 21.9972 50.1566 21.1602 49.9829 20.28C49.8969 19.7569 49.8402 19.2294 49.8129 18.7C49.6529 16.6975 49.5729 15.695 49.2779 14.86C48.9408 13.9053 48.3942 13.0381 47.6782 12.3221C46.9623 11.6062 46.0951 11.0596 45.1404 10.7225C44.3054 10.4275 43.3029 10.3475 41.3004 10.1875C40.7709 10.1603 40.2435 10.1035 39.7204 10.0175C38.8401 9.84374 38.0031 9.49705 37.2579 8.99752C36.8272 8.68818 36.4141 8.35517 36.0204 8.00002C34.4904 6.69752 33.7254 6.04502 32.9254 5.66252C32.0121 5.22597 31.0126 4.99939 30.0004 4.99939C28.9881 4.99939 27.9886 5.22597 27.0754 5.66252C26.2754 6.04502 25.5104 6.69752 23.9804 8.00002ZM40.9328 24.6575C41.2862 24.2708 41.4768 23.7627 41.465 23.239C41.4532 22.7153 41.2399 22.2163 40.8695 21.8459C40.4991 21.4755 40.0001 21.2622 39.4764 21.2504C38.9527 21.2386 38.4446 21.4292 38.0578 21.7825L25.9329 33.9075L21.9429 29.92C21.5561 29.5667 21.048 29.3761 20.5243 29.3879C20.0006 29.3997 19.5017 29.613 19.1312 29.9834C18.7608 30.3538 18.5475 30.8528 18.5357 31.3765C18.5239 31.9002 18.7145 32.4083 19.0679 32.795L24.4929 38.22C24.8744 38.6008 25.3914 38.8146 25.9304 38.8146C26.4694 38.8146 26.9863 38.6008 27.3679 38.22L40.9328 24.6575Z" fill="url(#paint0_linear_2901_341)"/>
          <defs>
          <linearGradient id="paint0_linear_2901_341" x1="27.8209" y1="7.16171" x2="29.5647" y2="17.203" gradientUnits="userSpaceOnUse">
          <stop stop-color="#AF82DD"/>
          <stop offset="1" stop-color="#7599E7"/>
          </linearGradient>
          </defs>
        </svg>
        <p style={{fontFamily:"Fuzzy Bubbles", fontSize:16, fontStyle:"italic"}}>Verified</p>
        </div>
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
