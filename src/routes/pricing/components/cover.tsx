import React from "react";
import { t } from "i18next";

export const Cover: React.FC<any> = () => {
  return (
    <section className="flex flex-col pt-10 md:pt-24 lg:pt-30 xl:pt-44">
      <div className="text-center px-10 md:px-30 2xl:px-56">
        <h1 className="text-2xl md:text-6xl lg:text-8xl font-bold leading-normal">
          {t("pricing.welcome")}
        </h1>
        <p className="mt-8 text-gray-800 font-extralight md:font-light text-sm md:text-base lg:text-lg">
          {t("pricing.welcomeSub")}
        </p>
      </div>
    </section>
  );
};
