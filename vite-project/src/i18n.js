import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// ✅ Import JSON using ES6 import
import enTranslation from "./locales/en/translation.json";
import hiTranslation from "./locales/hi/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      hi: { translation: hiTranslation },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: { escapeValue: false },
  });

export default i18n;
