import React from "react";
import { t } from "i18next";
import { Item } from "../../../utils/item";
import {
  confidentialDataImg,
  instantTransacImg,
  mobileAppImg,
  virtualCardImg,
  wifiTransacImg,
} from "../../../constants/appConstants";

export const Assets: React.FC<any> = ({}) => {
  const data = [
    {
      img: instantTransacImg,
      title: t("index.pay"),
      text: t("index.paySub"),
    },
    {
      img: confidentialDataImg,
      title: t("index.pci"),
      text: t("index.pciSub"),
    },
    {
      img: virtualCardImg,
      title: t("index.virtual"),
      text: t("index.virtualSub"),
    },
    {
      img: wifiTransacImg,
      title: t("index.noNeed"),
      text: t("index.noNeedSub"),
    },
  ];

  return (
    <section className="lg:grid grid-cols-2 xl:mt-44">
      <div className="mx-auto flex justify-center lg:block">
        <img
          src={mobileAppImg}
          alt="assets_image"
          className="w-64 md:w-80 lg:w-96 xl:w-auto"
        />
      </div>
      <div>
        <h1 className="font-bold text-xl text-center lg:text-start md:text-4xl lg:text-5xl lg:tracking-wider lg:leading-snug">
          {t("index.multiplePossibilities")}
        </h1>
        <ul className="mt-10 pr-4 pl-2 md:px-0">
          {data.map((item, index) => (
            <Item
              img={item.img}
              text={item.text}
              title={item.title}
              key={index}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
