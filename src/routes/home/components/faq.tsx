import React, { useState, useEffect } from "react";
import { t } from "i18next";
import { ImagesFont } from "../../../constants/appConstants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FaqList from "../../../utils/FaqList"; // Assure-toi du bon chemin d'import

export const Faq: React.FC<any> = () => {
  const { airbnb, star, profil, formbleu, formrose, user } = ImagesFont;
  const lang = localStorage.getItem("language") || "fr";

  const testimonials = [
    {
      text: t("index.testimonial1"),
      name: "Tchoundjang Yannick",
      title: "",
    },
    {
      text: t("index.testimonial2"),
      name: "SOLANGE KOBLAN",
      title: "",
    },
    {
      text: t("index.testimonial3"),
      name: "Mvam Dorcas",
      title: "",
    },
  ];

  const data = [
    {
      question: t("index.firstQ"),
      sentence: t("index.firstQAnswer1"),
      responses: [
        t("index.firstQAnswer2"),
        t("index.firstQAnswer3"),
        t("index.firstQAnswer4"),
      ],
    },
    {
      question: t("index.secondQ"),
      sentence: t("index.secondQAnswer1"),
      responses: [
        t("index.secondQAnswer2"),
        t("index.secondQAnswer3"),
        t("index.secondQAnswer4"),
        t("index.secondQAnswer5"),
      ],
    },
    {
      question: t("index.thirdQ"),
      sentence: t("index.thirdQAnswer1"),
      responses: [
        t("index.thirdQAnswer2"),
        t("index.thirdQAnswer3"),
        t("index.thirdQAnswer4"),
        t("index.thirdQAnswer5"),
        t("index.thirdQAnswer6"),
        t("index.thirdQAnswer7"),
      ],
    },
    {
      question: t("index.fourthQ"),
      sentence: t("index.fourthQAnswer1"),
      responses: [
        t("index.fourthQAnswer2"),
        t("index.fourthQAnswer3"),
        t("index.fourthQAnswer4"),
        t("index.fourthQAnswer5"),
      ],
    },
    {
      question: t("index.fifthQ"),
      sentence: t("index.fifthQAnswer1"),
      responses: [
        t("index.fifthQAnswer2"),
        t("index.fifthQAnswer3"),
        t("index.fifthQAnswer4"),
        t("index.fifthQAnswer5"),
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto my-4 md:my-14 p-10 md:p-20 bg-gradient-to-t from-faq to-white">
      <div className="text-center">
        {lang === "fr" ? (
          <h2 className="text-3xl font-bold text-textNewApp">
            <span className="text-blue-400">{t("index.faqTitle1")}</span> {t("index.faqTitle2")}
          </h2>
        ) : (
          <h2 className="text-3xl font-bold text-textNewApp">
            {t("index.faqTitle1")} <span className="text-blue-400">{t("index.faqTitle2")}</span>
          </h2>
        )}
        <p className="text-textNewApp text-xl mt-2">
          {t("index.faqDescription1")} <br /> {t("index.faqDescription2")}
        </p>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        <div className="relative max-w-sm w-full z-0">
          <img src={formbleu} alt="Latest News" className="absolute -left-8 -top-8 w-18 -z-10" />
          <h6 className="text-xs bg-white rounded-md font-bold inline p-1 mb-6">{t("index.latNews")}</h6>
          <h3 className="text-xl font-bold text-gray-900">{t("index.clientsSays")}</h3>
          <p className="text-textNewApp mt-2 w-1/2">{t("index.clientsSaysDesc")}</p>
          <div className="mt-20 flex space-x-2">
            <button onClick={prevTestimonial} className="p-2 bg-blue-500 text-white rounded-lg">
              <FaChevronLeft />
            </button>
            <button onClick={nextTestimonial} className="p-2 bg-blue-500 text-white rounded-lg">
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="relative p-6 w-full md:w-xl rounded-lg z-0">
          <img src={formrose} className="absolute -bottom-20 -left-8 w-80 transform -z-10" />
          <div className="relative bg-white shadow-lg p-4 sm:w-1/2 md:w-full xl:w-2/3 lg:w-full rounded-lg z-0">
            <p className="text-gray-800 text-xs">{testimonials[currentIndex].text}</p>
            <div className="flex items-center mt-4">
              <img src={user} alt={testimonials[currentIndex].name} className="w-10 h-10 rounded-full" />
              <div className="ml-3">
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={star} alt="star" className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-gray-900 font-semibold">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600 text-sm">{testimonials[currentIndex].title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ list component */}
        <FaqList data={data} />
      </div>
    </div>
  );
};
