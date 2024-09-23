import {
  doubleMoneyTransacImg,
  moneyTransacImg,
  payinTransacImg,
  physicalCardImg,
  wifiTransacImg,
} from "../../../constants/appConstants";
import { Item } from "../../../utils/item";
import { t } from "i18next";

export const PhysicalCard: React.FC<any> = ({}) => {
  const data = [
    {
      title: t("index.ceilings"),
      text: t("index.ceilingsSub"),
      img: moneyTransacImg,
    },
    {
      title: t("index.maintenance"),
      text: t("index.maintenanceSub"),
      img: doubleMoneyTransacImg,
    },
    {
      title: t("index.easyWithdraw"),
      text: t("index.easyWithdrawSub"),
      img: payinTransacImg,
    },
    {
      title: t("index.purchase"),
      text: t("index.purchaseSub"),
      img: wifiTransacImg,
    },
  ];
  return (
    <section className="lg:grid grid-cols-2 mt-16 md:mt-24">
      <div className="mx-auto flex justify-center lg:block">
        <img
          src={physicalCardImg}
          alt="assets_image"
          className="w-64 md:w-80 lg:w-96 xl:w-auto"
        />
      </div>
      <div>
        <h1 className="font-bold mt-4 text-xl text-center md:mt-6 lg:mt-0 lg:text-start md:text-4xl lg:text-5xl xl:leading-snug">
          {t("index.physicalCardEvenMore")}
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
