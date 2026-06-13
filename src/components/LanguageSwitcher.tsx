"use client"

import { useLanguage } from "@/lib/LanguageContext"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { lang, toggleLang, t } = useLanguage()

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-sm font-medium text-text/70 hover:text-primary"
      aria-label={t("lang.switchTo")}
      title={t("lang.switchTo")}
    >
      <Globe className="w-4 h-4" />
      <span>{t("lang.label")}</span>
    </button>
  )
}
