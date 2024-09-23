import { httpService } from "./http.service";

const sendMessageToPayQinSupport = (
  email: string,
  message: string,
  fullName: string,
  phoneNumber: string
) => {
  const body = {
    fullName,
    email,
    message,
    phoneNumber,
  };
  return httpService.Axios.post("/resources/website-send-message", body);
};

const getTransferFees = (
  amount: string,
  currencyFrom: string,
  currencyTo: string,
  countryTo: string
) => {
  return httpService.Axios.get(
    `/wallets/transfer/currency-rate?amount=${amount}&currencyFrom=${currencyFrom}&currencyTo=${currencyTo}&countryTo=${countryTo}`
  );
};

const getPricingValues = (country: string, accountType: string) => {
  return httpService.Axios.get(
    `/resources/website-pricing?accountType=${accountType}&country=${country}`
  );
};

export const websiteService = {
  sendMessageToPayQinSupport,
  getTransferFees,
  getPricingValues,
};
