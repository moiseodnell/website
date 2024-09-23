import React from "react";
import { PricingTable } from "../../../utils/pricingTable";
import { t } from "i18next";

export const PricingCards: React.FC<any> = ({}) => {
  return (
    <>
      <section className="mt-10">
        <h1 className="text-2xl text-center my-auto md:text-2xl md:text-center lg:text-4xl font-normal">
          {t("pricing.ci")}
        </h1>

        <article className="block lg:flex gap-x-14 justify-center mt-4 md:mt-10">
          <PricingTable title="Standard" country="CI" profile="standard" />
          <PricingTable title="Premium" country="CI" profile="premium" />
        </article>
      </section>

      <section className="my-10">
        <h1 className="text-2xl text-center my-auto md:text-2xl md:text-center lg:text-4xl font-normal">
          {t("pricing.cm")}
        </h1>

        <article className="block lg:flex gap-x-14 justify-center mt-4 md:mt-10">
          <PricingTable title="Standard" country="CM" profile="standard" />
          <PricingTable title="Premium" country="CM" profile="premium" />
        </article>
      </section>
      <section className="my-10">
        <h1 className="text-2xl text-center my-auto md:text-2xl md:text-center lg:text-4xl font-normal">
          {t("pricing.sn")}
        </h1>

        <article className="block lg:flex gap-x-14 justify-center mt-4 md:mt-10">
          <PricingTable title="Standard" country="SN" profile="standard" />
          <PricingTable title="Premium" country="SN" profile="premium" />
        </article>
      </section>
      <section className="my-10">
        <h1 className="text-2xl text-center my-auto md:text-2xl md:text-center lg:text-4xl font-normal">
          {t("pricing.bj")}
        </h1>

        <article className="block lg:flex gap-x-14 justify-center mt-4 md:mt-10">
          <PricingTable title="Standard" country="BJ" profile="standard" />
          <PricingTable title="Premium" country="BJ" profile="premium" />
        </article>
      </section>
      <section className="my-10">
        <h1 className="text-2xl text-center my-auto md:text-2xl md:text-center lg:text-4xl font-normal">
          {t("pricing.bf")}
        </h1>

        <article className="block lg:flex gap-x-14 justify-center mt-4 md:mt-10">
          <PricingTable title="Standard" country="BF" profile="standard" />
          <PricingTable title="Premium" country="BF" profile="premium" />
        </article>
      </section>
      <section className="my-10">
        <h1 className="text-2xl text-center my-auto md:text-2xl md:text-center lg:text-4xl font-normal">
          {t("pricing.ml")}
        </h1>

        <article className="block lg:flex gap-x-14 justify-center mt-4 md:mt-10">
          <PricingTable title="Standard" country="ML" profile="standard" />
          <PricingTable title="Premium" country="ML" profile="premium" />
        </article>
      </section>
      <section className="my-10">
        <h1 className="text-2xl text-center my-auto md:text-2xl md:text-center lg:text-4xl font-normal">
          {t("pricing.tg")}
        </h1>

        <article className="block lg:flex gap-x-14 justify-center mt-4 md:mt-10">
          <PricingTable title="Standard" country="TG" profile="standard" />
          <PricingTable title="Premium" country="TG" profile="premium" />
        </article>
      </section>
    </>
  );
};
