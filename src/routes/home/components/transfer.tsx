import React, { ChangeEvent, useEffect, useState } from "react";
import { currenciesReception, currenciesSend } from "../../../assets/countries";
import { Spinner } from "../../../utils/spinner";
import { t } from "i18next";
import { expandDownImg, expandUpImg } from "../../../constants/appConstants";
import { websiteService } from "../../../services/website.service";

export const Transfer: React.FC<any> = ({}) => {
  const [amount, setAmount] = useState<string>("");
  const [rate, setRate] = useState<string | "">("");
  const [fee, setFee] = useState<string | "">("");
  const [convertedAmount, setConvertedAmount] = useState<string | "">("");
  const [from, setFrom] = useState<any>(currenciesSend[0]);
  const [to, setTo] = useState<any>(currenciesReception[0]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [expandSend, setExpandSend] = useState<boolean>(false);
  const [expandReception, setExpandReception] = useState<boolean>(false);
  const [sendCurrencies, setSendCurrencies] = useState<any>();
  const [receptionCurrencies, setReceptionCurrencies] = useState<any>();

  const [sendCurrency, setSendCurrency] = useState({
    currency: currenciesSend[0].currency,
    flag: currenciesSend[0].flag,
    country: currenciesSend[0].country,
    countryCode: currenciesSend[0].countryCode,
  });

  const [receptionCurrency, setReceptionCurrency] = useState({
    currency: currenciesReception[0].currency,
    flag: currenciesReception[0].flag,
    country: currenciesReception[0].country,
    countryCode: currenciesReception[0].countryCode,
  });

  const getSendData = () => {
    setSendCurrencies(currenciesSend);
  };

  const getReceptionData = () => {
    const divSelected = document.getElementById("reception_currency_selector");

    const currency = divSelected?.dataset?.currencyselected;

    const filters = currenciesReception.filter(
      (item) => !currency || item.currency !== "DNF"
    );

    setReceptionCurrencies(filters);
  };

  const convertData = async (amount: string) => {
    try {
      setIsLoading(true);
      if (amount === "") {
        setIsLoading(false);
        setConvertedAmount("0");
        setRate("0");
        setFee("0");

        return;
      }

      if (+amount < 5000) {
        setIsLoading(false);
        setError(t("index.errorMinTransfer"));
        setConvertedAmount("0");
        setRate("0");
        setFee("0");
        return;
      }

      if (+amount > 10000000) {
        setIsLoading(false);
        setError(t("index.errorMaxTransfer"));
        setConvertedAmount("0");
        setRate("0");
        setFee("0");
        return;
      }

      const { data } = await websiteService.getTransferFees(
        amount,
        from?.currency,
        to?.currency,
        to?.countryCode
      );

      setConvertedAmount(data.amount);
      setError("");
      setRate(data.rate);
      setFee(data.fee);
      setIsLoading(false);
    } catch (err) {
      console.log("Error getting fees ", err);
    }
  };

  const handleChangeAmount = async (e: ChangeEvent<HTMLInputElement>) => {
    let amountWithoutSpace = `${e.target.value}`.replace(/[^0-9.]/g, "");

    let newAmount = (+amountWithoutSpace).toLocaleString("fr-FR");

    setAmount(newAmount);

    let amount = amountWithoutSpace;
    await convertData(amount);
  };

  const goToWebApp = () => {
    window.location.href = "https://web.payqin.com";
  };

  useEffect(() => {
    getSendData();
    getReceptionData();
  }, []);
  return (
    <section className="mt-16 h-auto lg:h-[57rem] pb-2 md:pb-4 lg:pb-0 block lg:grid lg:grid-cols-2 md:px-16 lg:px-5 xl:px-40 p-4 justify-items-center rounded-xl lg:rounded-none bg-gradient-to-r from-payqinGradiantGreenLeft to-payqinGradiantGreenRight bg-opacity-50">
      <div className="my-auto">
        <h1 className="font-bold text-xl md:text-4xl lg:text-5xl">
          {t("index.transferTitle")}
        </h1>
        <p className="font-light md:font-normal text-xs md:text-sm mt-10">
          {t("index.transferSub")}
        </p>
      </div>
      <div className="my-auto pt-4 md:pt-3 lg:pt-0 shadow-xl">
        <div className="h-auto xl:h-auto bg-white w-auto xl:w-[31rem] rounded-xl p-4 lg:p-10 py-10">
          {/* SEND CURRENCY  */}
          <div className="mb-8">
            <label
              htmlFor="amount"
              className="md:hidden font-extralight text-xs md:text-sm"
            >
              {t("index.youSend")}
            </label>
            <div className="flex border h-14 w-full bg-white rounded-md">
              <div className="relative group w-full">
                <label
                  htmlFor="amount"
                  className="hidden md:block absolute top-[-0.7rem] left-2 xl:top-[-0.9rem] xl:left-3 bg-white px-2 font-extralight text-xs md:text-sm"
                >
                  {t("index.youSend")}
                </label>
                <input
                  type="text"
                  className="h-full md:text-lg rounded-l-md pl-2 basis-2/3 w-full focus:outline-none"
                  disabled={false}
                  value={amount}
                  onChange={(e) => {
                    handleChangeAmount(e);
                  }}
                />
              </div>
              <div
                className="bg-payqinLightBlue h-full w-full flex items-center justify-center md:basis-1/3 cursor-pointer"
                onClick={() => setExpandSend(!expandSend)}
              >
                <div
                  id="send_currency_selector"
                  data-currencyselected={sendCurrency.currency}
                  data-currencyflag={sendCurrency.flag}
                  data-currencycountry={sendCurrency.country}
                  data-currencycountrycode={sendCurrency.countryCode}
                  className="flex gap-x-2"
                >
                  <img
                    src={sendCurrency.flag}
                    alt="default_country_img"
                    className="w-10 h-6 md:w-8 md:h-6 rounded-md"
                  />
                  <span className="font-medium">{sendCurrency.currency}</span>
                </div>
                <div className="cursor-pointer">
                  {expandSend ? (
                    <img
                      src={expandUpImg}
                      alt="selector_icon"
                      className="h-6"
                    />
                  ) : (
                    <img
                      src={expandDownImg}
                      alt="selector_icon"
                      className="h-6"
                    />
                  )}
                </div>
              </div>
            </div>
            {expandSend && (
              <div className="w-[15rem] md:w-[38rem] lg:w-[24rem] xl:w-[26rem] h-[10rem] bg-payqinExtraLightBlue mt-2 rounded-md overflow-auto p-4 z-40 absolute shadow-md">
                <ul>
                  {sendCurrencies.map((currency: any, index: number) => (
                    <li
                      className="flex gap-x-4 items-center cursor-pointer py-3 hover:bg-slate-100"
                      id="currency_line"
                      key={index}
                      onClick={() => {
                        setSendCurrency({
                          currency: currency.currency,
                          flag: currency.flag,
                          country: currency.country,
                          countryCode: currency.countryCode,
                        });
                        setFrom({
                          currency: currency.currency,
                          flag: currency.flag,
                          country: currency.country,
                          countryCode: currency.countryCode,
                        });

                        setExpandSend(false);
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
          </div>
          {/* RECEPTION CURRENCY  */}
          <div className="mb-6">
            <label
              htmlFor="amount"
              className="md:hidden font-extralight text-xs md:text-sm"
            >
              {t("index.receiverGets")}
            </label>
            <div className="flex border h-14 w-full bg-white rounded-md">
              <div className="relative group w-full">
                <label
                  htmlFor="amount"
                  className="hidden md:block absolute top-[-0.7rem] left-2 xl:top-[-0.9rem] xl:left-3 bg-white px-2 font-extralight text-xs md:text-sm"
                >
                  {t("index.receiverGets")}
                </label>

                <input
                  type="text"
                  className="h-full md:text-lg rounded-l-md pl-2 basis-2/3 w-full"
                  disabled={true}
                  value={convertedAmount && Number(convertedAmount).toFixed(3)}
                />
              </div>
              <div
                className="bg-payqinLightBlue h-full w-full flex items-center justify-center md:basis-1/3 cursor-pointer"
                onClick={() => setExpandReception(!expandReception)}
              >
                <div
                  id="reception_currency_selector"
                  data-currencyselected={receptionCurrency.currency}
                  data-currencyflag={receptionCurrency.flag}
                  data-currencycountry={receptionCurrency.country}
                  data-currencycountrycode={receptionCurrency.countryCode}
                  className="flex gap-x-2"
                >
                  <img
                    src={receptionCurrency.flag}
                    alt="default_country_img"
                    className="w-10 h-6 md:w-8 md:h-6 rounded-md"
                  />
                  <span className="font-medium">
                    {receptionCurrency.currency}
                  </span>
                </div>
                <div className="cursor-pointer">
                  {expandReception ? (
                    <img
                      src={expandUpImg}
                      alt="selector_icon"
                      className="h-6"
                    />
                  ) : (
                    <img
                      src={expandDownImg}
                      alt="selector_icon"
                      className="h-6"
                    />
                  )}
                </div>
              </div>
            </div>
            {expandReception && (
              <div className="w-[15rem] md:w-[38rem] lg:w-[24rem] xl:w-[26rem] h-[10rem] bg-payqinExtraLightBlue mt-2 rounded-md overflow-auto p-4 z-40 absolute shadow-md">
                <ul>
                  {receptionCurrencies.map((currency: any, index: number) => (
                    <li
                      className="flex gap-x-4 items-center cursor-pointer py-3 hover:bg-slate-100"
                      id="currency_line"
                      key={index}
                      onClick={async () => {
                        // if (rate !== "") {
                        //   console.log(
                        //     "Reception changée pour : ",
                        //     currency.country
                        //   );

                        //   handleChangeReception(amount);
                        // }
                        setReceptionCurrency({
                          currency: currency.currency,
                          flag: currency.flag,
                          country: currency.country,
                          countryCode: currency.countryCode,
                        });
                        setTo({
                          currency: currency.currency,
                          flag: currency.flag,
                          country: currency.country,
                          countryCode: currency.countryCode,
                        });

                        setExpandReception(false);
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
          </div>
          <div className="bg-gray-100  rounded-xl p-4 text-sm mb-10">
            <div className="flex justify-between">
              <p className="text-gray-500">{t("index.currentRate")}</p>
              {isLoading ? (
                <div className="flex justify-end">
                  <Spinner color={"payqinBlue"} />
                </div>
              ) : (
                rate && (
                  <p className="text-right">
                    1 {from?.currency} = {rate} {to?.currency}
                  </p>
                )
              )}
            </div>
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="grid grid-cols-2">
              <p className="text-gray-500">{t("index.feeTransfer")}</p>

              {isLoading ? (
                <div className="flex justify-end">
                  <Spinner color={"payqinBlue"} />
                </div>
              ) : (
                fee && (
                  <p className="text-right">
                    {Number(fee).toFixed(3)} {receptionCurrency.currency}
                  </p>
                )
              )}
            </div>
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>
          <div className="my-5 text-center">
            {error && <p className="text-xs text-red-400">{error}</p>}
          </div>
          <button
            className="h-auto w-full bg-payqinBlue p-4 text-white rounded-full px-3 md:px-6 py-3 text-center text-xs md:text-sm"
            onClick={goToWebApp}
          >
            {t("index.transferButton")} {amount} {sendCurrency.currency}
          </button>
        </div>
      </div>
    </section>
  );
};
