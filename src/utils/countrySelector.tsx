import { useEffect, useState } from "react";
import { currenciesReception, currenciesSend } from "../assets/countries";
import { expandDownImg, expandUpImg } from "../constants/appConstants";

export default function CountrySelector({
  isSending,
  setSelected,
  convertedAmount,
  setAmount,
  isLocked,
  handleChange,
  labelSend,
  labelGet,
}: {
  handleChange?: any;
  isLocked: boolean;
  setAmount?: any;
  convertedAmount?: string;
  setSelected: any;
  isSending: boolean;
  labelSend: string;
  labelGet: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currencies, setCurrencies] = useState<any>();
  const [amount, getAmount] = useState();

  const defaultCurrency = isSending
    ? currenciesSend[0]
    : currenciesReception[0];

  const [baseCurrency, setBaseCurrency] = useState({
    currency: defaultCurrency.currency,
    flag: defaultCurrency.flag,
    country: defaultCurrency.country,
    countryCode: defaultCurrency.countryCode,
  });

  const getData = () => {
    const divSelected = document.getElementById("currency_selector");

    const currency = divSelected?.dataset?.currencyselected;

    const filters = !isSending
      ? currenciesReception.filter(
          (item) => !currency || item.currency !== "DNF"
        )
      : currenciesSend;

    setCurrencies(filters);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex border h-14 w-full bg-white rounded-md">
        {!isLocked ? (
          <div className="relative group w-full">
            <label
              htmlFor="amount"
              className="absolute top-[-0.7rem] left-2 xl:top-[-0.9rem] xl:left-3 bg-white px-2 font-extralight text-xs md:text-sm"
            >
              {labelSend}
            </label>
            <input
              type="number"
              className="h-full text-lg rounded-l-md pl-2 basis-2/3 focus:outline-none"
              disabled={isLocked}
              value={amount}
              onChange={(e) => {
                // setAmount(e.target.value);
                // console.log(e.target.value);
                handleChange(e.target.value);
              }}
            />
          </div>
        ) : (
          <div className="relative group w-full">
            <label
              htmlFor="amount"
              className="absolute top-[-0.7rem] left-2 xl:top-[-0.9rem] xl:left-3 bg-white px-2 font-extralight text-xs md:text-sm"
            >
              {labelGet}
            </label>
            <input
              type="text"
              className="h-full text-lg rounded-l-md pl-2 basis-2/3 w-full"
              disabled={isLocked}
              value={convertedAmount && convertedAmount}
            />
          </div>
        )}

        <div
          className="bg-payqinLightBlue h-full w-full flex items-center justify-center md:basis-1/3 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div
            id="currency_selector"
            data-currencyselected={baseCurrency.currency}
            data-currencyflag={baseCurrency.flag}
            data-currencycountry={baseCurrency.country}
            data-currencycountrycode={baseCurrency.countryCode}
            className="flex gap-x-2"
          >
            <img
              src={baseCurrency.flag}
              alt="default_country_img"
              className="w-10 h-6 md:w-8 md:h-6 rounded-md"
            />
            <span className="font-medium">{baseCurrency.currency}</span>
          </div>
          <div className="cursor-pointer">
            {isExpanded ? (
              <img src={expandUpImg} alt="selector_icon" className="h-6" />
            ) : (
              <img src={expandDownImg} alt="selector_icon" className="h-6" />
            )}
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="w-[20rem] md:w-[38rem] lg:w-max xl:w-[25rem] h-[10rem] bg-payqinExtraLightBlue mt-2 rounded-md overflow-auto p-4 z-40 absolute shadow-md">
          <ul>
            {currencies.map((currency: any, index: number) => (
              <li
                className="flex gap-x-4 items-center cursor-pointer py-3 hover:bg-slate-100"
                id="currency_line"
                key={index}
                onClick={() => {
                  setBaseCurrency({
                    currency: currency.currency,
                    flag: currency.flag,
                    country: currency.country,
                    countryCode: currency.countryCode,
                  });
                  setSelected({
                    currency: currency.currency,
                    flag: currency.flag,
                    country: currency.country,
                    countryCode: currency.countryCode,
                  });

                  setIsExpanded(false);
                }}
              >
                <img
                  src={currency.flag}
                  alt={`flag of :${currency.country}`}
                  className="w-10 rounded-md"
                />
                <span>{currency.country}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
