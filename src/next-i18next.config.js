// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import engTrans from "../src/locales/en.json";
import marTrans from "../src/locales/mr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: engTrans,
    },
    mr: {
      translation: marTrans,
    },
  },
  lng: "en",
  fallbackLng: "mr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
