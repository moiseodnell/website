import React from "react";
import { QA } from "../../../utils/qa";
import { t } from "i18next";
import { qaIllustration } from "../../../constants/appConstants";

export const Question: React.FC<any> = ({}) => {
  const data = [
    {
      question: t("index.firstQ"),
      responses: [
        t("index.firstQAnswer1"),
        t("index.firstQAnswer2"),
        t("index.firstQAnswer3"),
        t("index.firstQAnswer4"),
      ],
    },
    {
      question: t("index.secondQ"),
      responses: [
        t("index.secondQAnswer1"),
        t("index.secondQAnswer2"),
        t("index.secondQAnswer3"),
      ],
    },
    {
      question: t("index.fourthQ"),
      responses: [
        t("index.fourthQAnswer1"),
        t("index.fourthQAnswer2"),
        t("index.fourthQAnswer3"),
      ],
    },
    {
      question: t("index.fifthQ"),
      responses: [
        t("index.fifthQAnswer1"),
        t("index.fifthQAnswer2"),
        t("index.fifthQAnswer3"),
        t("index.fifthQAnswer4"),
      ],
    },
  ];
  return (
    <section className="lg:grid lg:grid-cols-2 mt-16 lg:mt-20 xl:mt-32">
      <div className="mx-auto ">
        <img
          src={qaIllustration}
          alt="assets_image"
          className="hidden lg:block w-64 md:w-80 lg:w-96 xl:w-[40rem] rounded-xl"
        />
      </div>
      <div className="block">
        <h1 className="font-bold text-xl md:text-4xl lg:text-5xl lg:leading-snug px-4 md:px-0">
          {t("index.questionLabel")} {t("index.payqin")}?
        </h1>
        <div className="block px-4 md:px-0">
        {data.map((item, index) => (
          <QA question={item.question} responses={item.responses} key={index} />
        ))}
        </div>
      </div>
    </section>
  );
};
