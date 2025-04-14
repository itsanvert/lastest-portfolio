"use client";
import { useTranslation } from "react-i18next";

export default function GuestbookPage() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{t("guestbook.title")}</h1>
      <p className="text-lg text-muted-foreground">
        {t("guestbook.description")}
      </p>
    </div>
  );
}
