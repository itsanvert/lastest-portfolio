"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locale/en.json";
import km from "@/locale/km.json";
import zh from "@/locale/zh.json";

let initialized = false; // Prevent multiple inits during HMR in Next.js

if (!initialized && typeof window !== "undefined") {
  const language = localStorage.getItem("language") || "en";

  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      km: { translation: km },
      zh: { translation: zh },
    },
    lng: language,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

  initialized = true;
}

// Function to change language from anywhere
export const changeLanguage = (language: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  }
};

export default i18n;
