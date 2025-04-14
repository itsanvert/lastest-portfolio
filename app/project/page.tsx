"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Page() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">{t("project.title")}</h1>
      <p className="text-lg text-muted-foreground">
        {t("project.description")}
      </p>
    </div>
  );
}
