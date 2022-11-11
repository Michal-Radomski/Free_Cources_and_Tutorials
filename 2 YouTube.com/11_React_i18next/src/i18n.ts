import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      // Translation files path
      loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
    },
    fallbackLng: "en",
    // Logs in console
    debug: true,
    // You can have multiple namespaces, in case you want to divide a huge translation into smaller pieces and load them on demand
    ns: ["common", "home", "profile"],
    interpolation: {
      espaceValue: false,
      formatSeparator: ",",
    },
    react: {
      // wait: true, //* old option
      useSuspense: true,
    },
  } as any);

export default i18n;