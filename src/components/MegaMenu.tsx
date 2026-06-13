"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Package, Heart, Users } from "lucide-react"
import { useLanguage } from "@/lib/LanguageContext"

const menuSections = [
  {
    labelKey: "mega.products",
    icon: Package,
    items: [
      { labelKey: "nav.collection", href: "#products" },
      { labelKey: "nav.gallery", href: "#gallery" },
    ],
  },
  {
    labelKey: "mega.story",
    icon: Heart,
    items: [
      { labelKey: "nav.heritage", href: "#heritage" },
      { labelKey: "nav.artisans", href: "#how-its-made" },
    ],
  },
  {
    labelKey: "mega.community",
    icon: Users,
    items: [
      { labelKey: "nav.reviews", href: "#reviews" },
      { labelKey: "nav.contact", href: "#contact" },
    ],
  },
]

export default function MegaMenu() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-text/80 hover:text-primary rounded-lg hover:bg-black/5 dark:text-white/70 dark:hover:text-secondary dark:hover:bg-white/5 transition-all"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {t("nav.explore")}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="absolute top-full left-0 mt-2 w-[400px] glass dark:bg-primary-dark/90 rounded-3xl p-6 shadow-2xl border border-black/5 grid grid-cols-3 gap-4"
          >
            {menuSections.map((section) => (
              <div key={section.labelKey}>
                <div className="flex items-center gap-2 mb-3 text-primary dark:text-secondary font-semibold text-sm">
                  <section.icon className="w-4 h-4" />
                  {t(section.labelKey as any)}
                </div>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.labelKey}>
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block text-sm text-text-light dark:text-white/60 hover:text-primary dark:hover:text-secondary hover:translate-x-1 transition-all py-1"
                      >
                        {t(item.labelKey as any)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
