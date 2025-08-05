import React from "react";
import { t } from "i18next";

interface FaqItem {
  question: string;
  sentence: string;
  responses: string[];
}

const OrderNumber: React.FC<{ order: number }> = ({ order }) => (
  <span className="h-6 w-6 md:h-8 md:w-8 rounded-full flex items-center justify-center p-2 text-xs text-payqinBlue bg-payqinLightBlue">
    {order}
  </span>
);

interface FaqListProps {
  data: FaqItem[];
}

const FaqList: React.FC<FaqListProps> = ({ data }) => {
  return (
    <div className="max-w-md w-full z-0">
      <div className="space-y-4 sm:mt-20">
        {data.map((faq, index) => (
          <div key={index} className="bg-white p-2 border-2 rounded-md">
            <details className="cursor-pointer">
              <summary className="font-semibold text-gray-800">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-600">{faq.sentence}</p>
              <div className="mt-4 space-y-3">
                {faq.responses.map((response, idx) => (
                  <p key={idx} className="flex gap-x-2 items-start">
                    <OrderNumber order={idx + 1} />
                    <span>{response}</span>
                  </p>
                ))}
              </div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqList;