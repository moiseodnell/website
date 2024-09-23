import axios, { AxiosError } from "axios";
import i18next from "i18next";

const prodUrl = "http://localhost:8080/api";
const Axios = axios.create({
  baseURL: `http://localhost:8080/api`,
});

Axios.interceptors.request.use(async (request) => {
  request.headers["Accept-Language"] = i18next.language;
  request.headers["mode"] = "no-cors";

  return request;
});

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export const httpService = { Axios };
