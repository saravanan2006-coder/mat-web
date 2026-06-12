"use client"

import { useState } from "react"
import { Globe } from "lucide-react"

const translations: Record<string, Record<string, string>> = {
  en: {
    shop: "Shop Collection",
    heritage: "Our Heritage",
    contact: "Contact",
  },
  ta: {
    shop: "கடைக்குச் செல்லுங்கள்",
    heritage: "எங்கள் பாரம்பரியம்",
    contact: "தொடர்பு கொள்ள",
  },
}

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<"en" | "ta">("en")

  const toggle = () => {
    const next = lang === "en" ? "ta" : "en"
    setLang(next)
    document.documentElement.lang = next === "ta" ? "ta" : "en"
  }

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-sm font-medium text-text/70 hover:text-primary"
      aria-label={lang === "en" ? "Switch to Tamil" : "Switch to English"}
      title={lang === "en" ? "தமிழுக்கு மாற" : "Switch to English"}
    >
      <Globe className="w-4 h-4" />
      <span>{lang === "en" ? "EN" : "தமிழ்"}</span>
    </button>
  )
}
