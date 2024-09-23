import React from "react";
import { t } from "i18next";
import { ImagesFont } from "../../../constants/appConstants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export const Faq: React.FC<any> = ({}) => {
     
  const {airbnb, star, profil, formbleu, formrose} = ImagesFont;
  const lang = localStorage.getItem("language") || "fr";
  return (
    <div className="mx-auto my-4 md:my-14 p-10 md:p-20 bg-gradient-to-t from-faq to-white">
      <div className="text-center">

        {lang == "fr" && <h2 className="text-3xl font-bold text-textNewApp">
          <span className="text-blue-400">{t("index.faqTitle1")}</span> {t("index.faqTitle2")}
        </h2>}

        {lang == "en" && <h2 className="text-3xl font-bold text-textNewApp">
          {t("index.faqTitle1")} <span className="text-blue-400">{t("index.faqTitle2")}</span>
        </h2>}

        <p className="text-textNewApp text-xl mt-2">
        {t("index.faqDescription1")} <br/> {t("index.faqDescription2")}
        </p>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        {/* Section Gauche */}
        <div className="relative max-w-sm w-full z-0">
          <img
            src={formbleu}
            alt="Latest News"
            className="absolute -left-8 -top-8 w-18 -z-10"
          />
          <h6 className="text-xs bg-white rounded-md font-bold inline p-1 mb-6">{t("index.latNews")}</h6>
          <h3 className="text-xl font-bold text-gray-900">{t("index.clientsSays")}</h3>
          <p className="text-textNewApp mt-2 w-1/2">
          {t("index.clientsSaysDesc")}
          </p>
          <div className="mt-20 flex space-x-2">
            <button className="p-2 bg-blue-500 text-white rounded-lg">
              <FaChevronLeft />
            </button>
            <button className="p-2 bg-blue-500 text-white rounded-lg">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Témoignage */}
        <div className="relative p-6 rounded-lg z-0">
          <img src={formrose} className="absolute -bottom-20 -left-8 w-80 transform -z-10"/>
          <div className="relative bg-white shadow-lg p-4 sm:w-1/2 md:w-full xl:w-2/3 lg:w-full rounded-lg z-0">
            <img
              src={airbnb}
              alt="Airbnb"
              className="w-16 mb-4"
            />
            <p className="text-gray-800 text-xs">
              Payqin makes international transfers easy and affordable. I love
              the transparency with no hidden fees!
            </p>
            <div className="flex items-center mt-4">
              <img
                src={profil}
                alt="Cecelia Payne"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                
                <div className="flex mt-2">
                  <img src={star} alt="star" className="w-4 h-4" />
                  <img src={star} alt="star" className="w-4 h-4" />
                  <img src={star} alt="star" className="w-4 h-4" />
                  <img src={star} alt="star" className="w-4 h-4" />
                  <img src={star} alt="star" className="w-4 h-4" />
                </div>
                <p className="text-gray-900 font-semibold">Cecelia Payne</p>
                <p className="text-gray-600 text-sm">CEO of Airbnb</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-md w-full z-0">
          <div className="space-y-4 sm:mt-20">
            <div className="bg-white p-2 border-2 rounded-md">
              <details className="cursor-pointer">
                <summary className="font-semibold text-gray-800">
                  How long does it take for a transfer to complete
                </summary>
                <p className="mt-2 text-gray-600">
                  Transfers typically complete within 1-2 business days.
                </p>
              </details>
            </div>
            <div className="bg-white p-2 border-2 rounded-md">
              <details className="cursor-pointer">
                <summary className="font-semibold text-gray-800">
                  How do I transfer money with Payqin
                </summary>
                <p className="mt-2 text-gray-600">
                  Simply log in to your account and follow the instructions on
                  the transfer page.
                </p>
              </details>
            </div>
            <div className="bg-white p-2 border-2 rounded-md">
              <details className="cursor-pointer">
                <summary className="font-semibold text-gray-800">
                  Are there any hidden fees for transactions
                </summary>
                <p className="mt-2 text-gray-600">
                  No, Payqin prides itself on transparency and there are no
                  hidden fees.
                </p>
              </details>
            </div>
            <div className="bg-white p-2 border-2 rounded-md">
              <details className="cursor-pointer">
                <summary className="font-semibold text-gray-800">
                  Is my financial information secure with Payqin
                </summary>
                <p className="mt-2 text-gray-600">
                  Yes, we use state-of-the-art encryption to ensure your
                  information is secure.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
