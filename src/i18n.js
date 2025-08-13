import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importer les fichiers de traduction
import translationEN from "./locales/en/translation.json";
import translationIT from "./locales/it/translation.json";
import translationFR from "./locales/fr/translation.json";

const resources = {
  it: { translation: translationIT },
  fr: { translation: translationFR },
  en: { translation: translationEN },
};

i18n
  .use(LanguageDetector) // Détection automatique de la langue
  .use(initReactI18next) // Liaison avec React
  .init({
    resources,
    fallbackLng: "fr", // Langue de secours mise sur FR pour test
    supportedLngs: ["en", "it", "fr"], // Langues prises en charge
    debug: process.env.NODE_ENV === "development",
    interpolation: { escapeValue: false },
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
    },
  });

// Vérification du chargement des ressources
console.log("Langue détectée :", i18n.language);
console.log(
  "Ressources i18n chargées :",
  i18n.getResourceBundle(i18n.language, "translation")
);

export default i18n;
