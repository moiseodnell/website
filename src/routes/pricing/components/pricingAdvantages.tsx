import {
  instantTransacImg,
  personTransacImg,
  pricingCardImg,
  worldTransacImg,
} from "../../../constants/appConstants";
import { Item } from "../../../utils/item";
import { t } from "i18next";

export const PricingAdvantages: React.FC<any> = () => {
  const data = [
    {
      img: instantTransacImg,
      title: t("pricing.withoutFeeTitle"),
      text: t("pricing.withoutFeeTitleSub"),
    },
    {
      img: personTransacImg,
      title: t("pricing.oneAccount"),
      text: t("pricing.oneAccountSub"),
    },
    {
      img: worldTransacImg,
      title: t("pricing.connectionTitle"),
      text: t("pricing.connectionTitleSub"),
    },
  ];
  return (
    <section className="lg:grid grid-cols-2 md:mt-32 xl:mt-40">
      <div className="mx-auto flex justify-center lg:block">
        <img
          src={pricingCardImg}
          alt="assets_image"
          className="w-64 md:w-80 lg:w-96 xl:w-auto"
        />
      </div>
      <div className="block lg:flex justify-center items-center">
        <ul className="mt-10">
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
