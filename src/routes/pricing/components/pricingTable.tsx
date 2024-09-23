import { useState, useEffect } from "react";
import { t } from "i18next";
import { websiteService } from "../../../services/website.service";
import { closeFillImg, openFillImg } from "../../../constants/appConstants";

interface IDataRequest {
  country: string;
  accountType: string;
}

export interface IPricing {
  fees: {
    value: number;
    sign: string;
  };
  transaction: string;
  country: string;
  accountType: string;
  _id: string;
  __v: number;
}

interface ITransfer {
  fees: {
    value: number;
    sign: string;
  };
  name: String;
}

const assignedValues = (transaction: string) => {
  let name;

  switch (transaction) {
    case "top-up":
      name = t("pricing.topup");
      break;
    case "withdraw":
      name = t("pricing.withdraw");
      break;
    case "transfer":
      name = t("pricing.transfer");
      break;
    case "subscription-payment":
      name = t("pricing.monthlySub");
      break;
    case "physical-card-order":
      name = t("pricing.physicalCard");
      break;
    case "physical-card-fund":
      name = t("pricing.physicalCardFund");
      break;
    case "card-payment":
      name = t("pricing.cardAdd");
      break;
    case "card-fund":
      name = t("pricing.cardFund");
      break;
    case "airtime-transfer":
      name = t("pricing.airtime");
      break;
    case "mobile-money-transfer":
      name = t("pricing.mobileMoneyTransfer");
      break;
    default:
      name = "operation";
      break;
  }

  return name;
};

const assignCountry = (country: String) => {
  let name;

  switch (country) {
    case "ML":
      name = t("pricing.ml");
      break;
    case "CI":
      name = t("pricing.ci");
      break;
    case "BJ":
      name = t("pricing.bj");
      break;
    case "SN":
      name = t("pricing.sn");
      break;
    case "BF":
      name = t("pricing.bf");
      break;
    case "CM":
      name = t("pricing.cm");
      break;
    case "TG":
      name = t("pricing.tg");
      break;

    default:
      name = "Country";
      break;
  }

  return name;
};

export const PricingTable: React.FC<any> = () => {
  const [country, setCountry] = useState<string>("CI");
  const [accountType, setAccountType] = useState<string>("");
  const [standard, setStandard] = useState<IPricing[]>([]);
  const [premium, setPremium] = useState<IPricing[]>([]);
  const [business, setBusiness] = useState<IPricing[]>([]);
  const [mobilePricing, setMobilePricing] = useState<IPricing[]>([]);
  const [mobileTransfer, setMobileTransfer] = useState<ITransfer[]>([]);
  const [mobileMMoney, setMobileMMoney] = useState<ITransfer[]>([]);
  const [type, setType] = useState<string>("standard");
  const [openTransfer, setOpenTransfer] = useState<Boolean>(false);
  const [openMobileMoney, setOpenMobileMoney] = useState<Boolean>(false);
  const [transferStandard, setTransferStandard] = useState<ITransfer[]>([]);
  const [transferPremium, setTransferPremium] = useState<ITransfer[]>([]);
  const [transferBusiness, setTransferBusiness] = useState<ITransfer[]>([]);
  const [mobileMoneyStandard, setMobileMoneyStandard] = useState<ITransfer[]>(
    []
  );
  const [mobileMoneyPremium, setMobileMoneyPremium] = useState<ITransfer[]>([]);
  const [mobileMoneyBusiness, setMobileMoneyBusiness] = useState<ITransfer[]>(
    []
  );

  const submitData = async ({ country, accountType }: IDataRequest) => {
    try {
      const { data } = await websiteService.getPricingValues(
        country,
        accountType
      );

      if (data.type) {
        setMobilePricing(data.data);
        setMobileTransfer(data.dataTransfer);
        setMobileMMoney(data.dataMobileMoney);
        setType(data.type);
      } else {
        setStandard(data.standard);
        setPremium(data.premium);
        setBusiness(data.business);
        setTransferStandard(data.transferStandard);
        setTransferPremium(data.transferPremium);
        setTransferBusiness(data.transferBusiness);
        setMobileMoneyStandard(data.mobileMoneyStandard);
        setMobileMoneyPremium(data.mobileMoneyPremium);
        setMobileMoneyBusiness(data.mobileMoneyBusiness);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDefaultPricing = async () => {
    try {
      const { data } = await websiteService.getPricingValues(country, "");

      setMobilePricing(data.standard);
      setMobileTransfer(data.transferStandard);
      setMobileMMoney(data.mobileMoneyStandard);
      setStandard(data.standard);
      setPremium(data.premium);
      setBusiness(data.business);
      setTransferStandard(data.transferStandard);
      setTransferPremium(data.transferPremium);
      setTransferBusiness(data.transferBusiness);
      setMobileMoneyStandard(data.mobileMoneyStandard);
      setMobileMoneyPremium(data.mobileMoneyPremium);
      setMobileMoneyBusiness(data.mobileMoneyBusiness);
    } catch (error) {
      console.log(error);
    }
  };

  const translateFreeTransaction = (transactionValue: any) => {
    let name;

    switch (transactionValue) {
      case "Gratuit":
        name = t("pricing.free");
        break;

      default:
        name = transactionValue;
        break;
    }

    return name;
  };

  useEffect(() => {
    getDefaultPricing();
  }, []);
  return (
    <section className="bg-gradient-to-tr from-payqinGradientBL to-payqinGradientTR rounded-none md:rounded-3xl py-10 my-20">
      {/* Laptop */}
      <div className="mx-auto hidden lg:flex justify-around px-10 xl:px-24">
        <h1 className="text-xl md:text-4xl font-bold">
          {t("pricing.transactionFee")}
        </h1>
        <div className="relative mt-10 lg:mt-0">
          <label
            htmlFor="country_selection"
            className="absolute text-xs text-payqinGrayText top-[-0.5rem] left-[0.5rem] bg-white"
          >
            {t("pricing.selectCountry")}
          </label>
          <div className="bg-gradient-to-b from-[#2B91FF] to-[#9065F4] h-10 w-[15rem] md:w-[20rem] xl:w-[27rem] p-[2px] rounded-lg">
            <select
              name="country_selection"
              id="country_selection"
              className="h-full w-full px-2 focus:outline-none rounded-md"
              onChange={(e) => {
                setCountry(e.target.value);
                submitData({ country: e.target.value, accountType: "" });
              }}
            >
              <option value="CI">{t("pricing.ci")}</option>
              <option value="SN">{t("pricing.sn")}</option>
              <option value="BJ">{t("pricing.bj")}</option>
              <option value="ML">{t("pricing.ml")}</option>
              <option value="CM">{t("pricing.cm")}</option>
              <option value="TG">{t("pricing.tg")}</option>
              <option value="BF">{t("pricing.bf")}</option>
            </select>
          </div>
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-5 px-10 xl:px-24 gap-x-10 pt-16">
        <div className="col-span-2">
          <h1 className="text-3xl font-light pt-4">Services</h1>
          <ul className="mt-10 text-payqinGrayText">
            {standard.map((d, index) => (
              <li className="my-5 text-sm" key={index}>
                <div className="flex items-center gap-x-4">
                  <span className="h-1 w-1 rounded-full bg-payqinGrayText"></span>
                  <p>{assignedValues(d.transaction)}</p>
                </div>
                <hr className="mt-3 bg-payqinGrayText text-payqinGrayText" />
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-payqinGreen pt-4 text-center rounded-lg">
          <h1 className="text-xl xl:text-2xl font-normal">Standard</h1>
          <ul className="mt-10 text-payqinGrayText font-bold">
            {standard.map((d, index) => (
              <li className="my-5 text-sm" key={index}>
                <div>
                  <p>
                    {translateFreeTransaction(d.fees.value)} {d.fees.sign}
                  </p>
                </div>
                <hr className="mt-3 bg-payqinGrayText text-payqinGrayText" />
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-payqinYellow pt-4 text-center rounded-lg">
          <h1 className="text-xl xl:text-2xl font-normal">Premium</h1>
          <ul className="mt-10 text-payqinGrayText font-bold">
            {premium.map((d, index) => (
              <li className="my-5 text-sm" key={index}>
                <div>
                  <p>
                    {translateFreeTransaction(d.fees.value)} {d.fees.sign}
                  </p>
                </div>
                <hr className="mt-3 bg-payqinGrayText text-payqinGrayText" />
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-payqinViolet pt-4 text-center rounded-lg">
          <h1 className="text-xl xl:text-2xl font-normal ">Business</h1>
          <ul className="mt-10 text-payqinGrayText font-bold">
            {business.map((d, index) => (
              <li className="my-5 text-sm" key={index}>
                <div>
                  <p>
                    {translateFreeTransaction(d.fees.value)} {d.fees.sign}
                  </p>
                </div>
                <hr className="mt-3 bg-payqinGrayText text-payqinGrayText" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-5 px-10 xl:px-24 gap-x-10 pt-16">
        <div className="col-span-2">
          <h1 className="text-xl font-medium pt-4 col-span-2">
            <button
              type="button"
              onClick={() => setOpenTransfer(!openTransfer)}
              className="mr-4"
            >
              {openTransfer ? (
                <img
                  src={closeFillImg}
                  alt="close_button"
                  className="h-5 w-5"
                />
              ) : (
                <img src={openFillImg} alt="open_button" className="h-5 w-5" />
              )}
            </button>
            {t("pricing.localToPayqinLocal")}
          </h1>
          {openTransfer && (
            <ul className="mt-10 text-payqinGrayText">
              {transferStandard.map((d, index) => (
                <li className="my-5 text-sm" key={index}>
                  <div className="flex items-center gap-x-4">
                    <span className="h-1 w-1 rounded-full bg-payqinGrayText"></span>
                    <p>{assignCountry(d.name)}</p>
                  </div>
                  <hr className="mt-3 bg-payqinGrayText text-payqinGrayText" />
                </li>
              ))}
            </ul>
          )}
        </div>
        {openTransfer && (
          <>
            <div className="bg-payqinGreen pt-[4.5rem] xl:pt-10 text-center rounded-lg ">
              <ul className="mt-10 text-payqinGrayText font-bold">
                {transferStandard.map((d, index) => (
                  <li className="my-5 text-sm" key={index}>
                    <div>
                      <p>
                        {translateFreeTransaction(d.fees.value)} {d.fees.sign}
                      </p>
                    </div>
                    <hr className="mt-3 bg-payqinGrayText text-payqinGrayText" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-payqinYellow pt-[4.5rem] xl:pt-10 text-center rounded-lg ">
              <ul className="mt-10 text-payqinGrayText font-bold">
                {transferPremium.map((d, index) => (
                  <li className="my-5 text-sm" key={index}>
                    <div>
                      <p>
                        {translateFreeTransaction(d.fees.value)} {d.fees.sign}
                      </p>
                    </div>
                    <hr className="mt-3 bg-payqinGrayText text-payqinGrayText" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-payqinViolet pt-[4.5rem] xl:pt-10 text-center rounded-lg ">
              <ul className="mt-10 text-payqinGrayText font-bold">
                {transferBusiness.map((d, index) => (
                  <li className="my-5 text-sm" key={index}>
                    <div>
                      <p>
                        {translateFreeTransaction(d.fees.value)} {d.fees.sign}
                      </p>
                    </div>
                    <hr className="mt-3 bg-payqinGrayText text-payqinGrayText" />
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
      <div className="hidden lg:grid grid-cols-5 px-10 xl:px-24 gap-x-10 pt-10">
        <div className="col-span-2">
          <h1 className="text-xl font-medium pt-4 col-span-2">
            <button
              type="button"
              onClick={() => setOpenMobileMoney(!openMobileMoney)}
              className="mr-4"
            >
              {openMobileMoney ? (
                <img
                  src={closeFillImg}
                  alt="close_button"
                  className="h-5 w-5"
                />
              ) : (
                <img src={openFillImg} alt="open_button" className="h-5 w-5" />
              )}
            </button>
            {t("pricing.localToMobileMoneyLocal")}
          </h1>
          {openMobileMoney && (
            <ul className="mt-10 text-payqinGrayText">
              {mobileMoneyStandard.map((d, index) => (
                <li className="my-5 text-sm" key={index}>
                  <div className="flex items-center gap-x-4">
                    <span className="h-1 w-1 rounded-full bg-payqinGrayText"></span>
                    <p>{assignCountry(d.name)}</p>
                  </div>
                  <hr className="mt-3 bg-payqinGrayText text-payqinGrayText" />
                </li>
              ))}
            </ul>
          )}
        </div>
        {openMobileMoney && (
          <>
            <div className="bg-payqinGreen pt-[4.5rem] xl:pt-10 text-center rounded-lg ">
              <ul className="mt-10 text-payqinGrayText font-bold">
                {mobileMoneyStandard.map((d, index) => (
                  <li className="my-5 text-sm" key={index}>
                    <div>
                      <p>
                        {translateFreeTransaction(d.fees.value)} {d.fees.sign}
                      </p>
                    </div>
                    <hr className="mt-3 bg-payqinGrayText text-payqinGrayText" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-payqinYellow pt-[4.5rem] xl:pt-10 text-center rounded-lg ">
              <ul className="mt-10 text-payqinGrayText font-bold">
                {mobileMoneyPremium.map((d, index) => (
                  <li className="my-5 text-sm" key={index}>
                    <div>
                      <p>
                        {translateFreeTransaction(d.fees.value)} {d.fees.sign}
                      </p>
                    </div>
                    <hr className="mt-3 bg-payqinGrayText text-payqinGrayText" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-payqinViolet pt-[4.5rem] xl:pt-10 text-center rounded-lg ">
              <ul className="mt-10 text-payqinGrayText font-bold">
                {mobileMoneyBusiness.map((d, index) => (
                  <li className="my-5 text-sm" key={index}>
                    <div>
                      <p>
                        {translateFreeTransaction(d.fees.value)} {d.fees.sign}
                      </p>
                    </div>
                    <hr className="mt-3 bg-payqinGrayText text-payqinGrayText" />
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>

      {/* Mobile et Tablette */}
      <div className="block lg:hidden px-4 md:px-10">
        <h1 className="text-2xl font-bold text-center">
          {t("pricing.transactionFee")}
        </h1>
        <div className="block md:flex justify-around mt-5 gap-x-5">
          <div className="relative mt-6 md:mt-0">
            <label
              htmlFor="country_selection"
              className="absolute text-xs text-payqinGrayText top-[-0.5rem] left-[0.5rem] bg-white"
            >
              {t("pricing.selectCountry")}
            </label>
            <div className="bg-gradient-to-b from-[#2B91FF] to-[#9065F4] h-10 md:w-[15rem] p-[2px] rounded-lg">
              <select
                name="country_selection"
                id="country_selection"
                className="h-full w-full px-2 focus:outline-none rounded-md"
                onChange={(e) => {
                  setCountry(e.target.value);
                  submitData({
                    country: e.target.value,
                    accountType: accountType,
                  });
                }}
              >
                <option value="CI">{t("pricing.ci")}</option>
                <option value="SN">{t("pricing.sn")}</option>
                <option value="BJ">{t("pricing.bj")}</option>
                <option value="ML">{t("pricing.ml")}</option>
                <option value="CM">{t("pricing.cm")}</option>
                <option value="TG">{t("pricing.tg")}</option>
                <option value="BF">{t("pricing.bf")}</option>
              </select>
            </div>
          </div>

          <div className="relative mt-6 md:mt-0">
            <label
              htmlFor="country_selection"
              className="absolute text-xs text-payqinGrayText top-[-0.5rem] left-[0.5rem] bg-white"
            >
              {t("pricing.accountTypeChoice")}
            </label>
            <div className="bg-gradient-to-b from-[#2B91FF] to-[#9065F4] h-10 md:w-[15rem] p-[2px] rounded-lg">
              <select
                name="country_selection"
                id="country_selection"
                className="h-full w-full px-2 focus:outline-none rounded-md"
                onChange={(e) => {
                  setAccountType(e.target.value);
                  submitData({ country: country, accountType: e.target.value });
                }}
              >
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="business">Business</option>
              </select>
            </div>
          </div>
        </div>

        <div
          className={`block ${
            type === "standard"
              ? "bg-payqinGreen"
              : type === "premium"
              ? "bg-payqinYellow"
              : "bg-payqinViolet"
          } w-full px-4 py-2 mt-10 rounded-lg`}
        >
          <h1 className="text-xl font-normal text-center capitalize">{type}</h1>
          <ul className="mt-4 text-payqinGrayText">
            {mobilePricing.map((d, index) => (
              <li className="my-3" key={index}>
                <div className="flex justify-between text-xs md:text-sm">
                  <p>{assignedValues(d.transaction)}</p>
                  <p className="font-bold">
                    {translateFreeTransaction(d.fees.value)} {d.fees.sign}
                  </p>
                </div>
                <hr className="mt-2 bg-payqinGrayText text-payqinGrayText" />
              </li>
            ))}
          </ul>
          <>
            <div className="flex justify-between text-xs md:text-sm mt-4 text-payqinGrayText">
              <p>{t("pricing.localToPayqinLocal")}</p>
              <button
                type="button"
                onClick={() => setOpenTransfer(!openTransfer)}
              >
                {openTransfer ? (
                  <img
                    src={closeFillImg}
                    alt="close_button"
                    className="h-5 w-5"
                  />
                ) : (
                  <img
                    src={openFillImg}
                    alt="open_button"
                    className="h-5 w-5"
                  />
                )}
              </button>
            </div>
            {openTransfer && (
              <ul className="mx-6 mt-4 text-payqinGrayText">
                {mobileTransfer.map((value, index) => (
                  <li className="my-3" key={index}>
                    <div className="flex justify-between text-xs md:text-sm">
                      <p>{assignCountry(value.name)}</p>
                      <p className="font-bold">
                        {value.fees.value}
                        {value.fees.sign}{" "}
                      </p>
                    </div>
                    <hr className="mt-2 bg-payqinGrayText text-payqinGrayText" />
                  </li>
                ))}
              </ul>
            )}
          </>
          <hr className="mt-2 bg-payqinGrayText text-payqinGrayText" />
          <>
            <div className="flex justify-between text-xs md:text-sm mt-4 text-payqinGrayText">
              <p>{t("pricing.localToMobileMoneyLocal")}</p>
              <button
                type="button"
                onClick={() => setOpenMobileMoney(!openMobileMoney)}
              >
                {openMobileMoney ? (
                  <img
                    src={closeFillImg}
                    alt="close_button"
                    className="h-5 w-5"
                  />
                ) : (
                  <img
                    src={openFillImg}
                    alt="open_button"
                    className="h-5 w-5"
                  />
                )}
              </button>
            </div>
            {openMobileMoney && (
              <ul className="mx-6 mt-4 text-payqinGrayText">
                {mobileMMoney.map((value, index) => (
                  <li className="my-3" key={index}>
                    <div className="flex justify-between text-xs md:text-sm">
                      <p>{assignCountry(value.name)}</p>
                      <p className="font-bold">
                        {value.fees.value}
                        {value.fees.sign}{" "}
                      </p>
                    </div>
                    <hr className="mt-2 bg-payqinGrayText text-payqinGrayText" />
                  </li>
                ))}
              </ul>
            )}
          </>
        </div>
      </div>
    </section>
  );
};
