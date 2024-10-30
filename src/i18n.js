import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import ar from "./locales/ar/translation.json";

i18n
  .use(initReactI18next) // Connects i18next to React
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language if the selected one is unavailable
    // backend: {
    //   loadPath: "/locales/{{lng}}/translation.json", // Path to the JSON files
    // },
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
  });

export default i18n;
