import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import en from "./locales/en/common.json";
import fr from "./locales/fr/common.json";
import App from "./App";

const lang = localStorage.getItem("language") || "fr";

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: fr,
    },
    en: {
      translation: en,
    },
  },
  lng: lang,
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
