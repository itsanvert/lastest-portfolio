"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/181n"; // Ensure this path is correct

export const LanguageSwitcher = () => {
  const router = useRouter();
  const [lang, setLang] = useState("en"); // Default language
  const { t } = useTranslation();

  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, []);

  const handleLanguageChange = (lng: string) => {
    setLang(lng);

    // Check if window is available (client-side only)
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lng);
    }

    // Reload to apply language change
    window.location.reload(); // Or use custom reload logic
  };

  // Define the language logos
  const languageLogos = {
    en: "/img/logo/united-kingdom.png", // Corrected path to the English logo
    km: "/img/logo/cambodia.png", // Corrected path to the Khmer logo
    zh: "/img/logo/china.png", // Corrected path to the Chinese logo
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
          <img src={languageLogos.en} alt="English" className="w-5 h-5 mr-2" />
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("km")}>
          <img src={languageLogos.km} alt="Khmer" className="w-5 h-5 mr-2" />
          ភាសាខ្មែរ
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("zh")}>
          <img src={languageLogos.zh} alt="Chinese" className="w-5 h-5 mr-2" />
          中文
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
