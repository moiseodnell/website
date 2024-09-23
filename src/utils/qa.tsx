import { useState } from "react";
import { closeFillImg, openFillImg } from "../constants/appConstants";

export const QA = ({
  question,
  responses,
}: {
  question: string;
  responses: Array<string>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid grid-cols-6 xl:grid-cols-4 my-5">
      <div className="col-span-5 xl:col-span-3">
        <h3 className="font-medium text-xs md:text-lg">{question}</h3>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        {isOpen ? (
          <ul>
            {responses.map((response, index) => (
              <li key={index} className="my-3 flex gap-x-5">
                <span className="h-6 w-6 md:h-8 md:w-8 rounded-full flex items-center justify-center p-2 text-xs text-payqinBlue bg-payqinLightBlue">
                  {index + 1}
                </span>{" "}
                <p className="text-payqinGrayText text-xs md:text-base">
                  {response}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>{""}</p>
        )}
      </div>
      <div className="h-4 w-4 ml-11 md:ml-0">
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <img src={closeFillImg} alt="close_button" className="h-4 w-4" />
          ) : (
            <img src={openFillImg} alt="open_button" className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
};
