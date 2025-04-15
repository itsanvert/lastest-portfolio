"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locale/en.json";
import km from "@/locale/km.json";
import zh from "@/locale/zh.json"; // Corrected import for Chinese

i18n.use(initReactI18next).init({
  lng: "km",
  fallbackLng: "km",
  resources: {
    en: { translation: en },
    km: { translation: km },
    zh: { translation: zh },
  },
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

// Function to change language from anywhere
export const changeLanguage = (language: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  }
};

export default i18n;
