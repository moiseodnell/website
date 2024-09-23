import { t } from "i18next";
import React from 'react';
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const CardOpportunities: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="flex flex-col items-center bg-transparent rounded-lg">
      <img src={imageUrl} alt={title} className="rounded-xl h-80 object-cover w-full" />
      <div className="py-6 text-left">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-3 text-gray-600">{description}</p>
        <a href={link} className="mt-4 underline inline-block text-payqinBlueNew">{t("index.explore")} </a>
      </div>
    </div>
  );
};

export default CardOpportunities;