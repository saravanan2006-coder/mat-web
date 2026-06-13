"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import MegaMenu from "./MegaMenu"
import ThemeToggle from "./ThemeToggle"
import LanguageSwitcher from "./LanguageSwitcher"
import { useLanguage } from "@/lib/LanguageContext"

const navKeys = [
  { key: "nav.home", href: "#home" },
  { key: "nav.heritage", href: "#heritage" },
  { key: "nav.collection", href: "#products" },
  { key: "nav.benefits", href: "#benefits" },
  { key: "nav.reviews", href: "#reviews" },
  { key: "nav.contact", href: "#contact" },
]

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const mobileLinks = [
    ...navKeys,
    { key: "nav.artisans", href: "#how-its-made" },
    { key: "nav.gallery", href: "#gallery" },
    { key: "nav.sustainability", href: "#sustainability" },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-6 md:px-10 lg:px-16 transition-all duration-500",
          scrolled
            ? "bg-white/75 backdrop-blur-2xl border-b border-black/5 shadow-lg shadow-black/5 dark:bg-primary-dark/80 dark:border-white/5"
            : "bg-transparent"
        )}
      >
        <nav className="flex items-center justify-between h-20 max-w-[1400px] mx-auto" aria-label="Main navigation">
          <div className="flex items-center gap-8">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full overflow-hidden group-hover:scale-110 transition-transform flex-shrink-0">
                <img src="/images/Logo.png" alt="Thenmozhi Korai Mats" className="w-full h-full object-cover" width={40} height={40} />
              </div>
              <span className="font-heading text-lg font-bold text-primary hidden sm:block group-hover:text-accent transition-colors dark:text-secondary leading-tight">
                Thenmozhi<br />Korai Mats
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              <MegaMenu />
              {navKeys.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-text/80 hover:text-primary rounded-lg hover:bg-black/5 dark:text-white/70 dark:hover:text-secondary dark:hover:bg-white/5 transition-all duration-300"
                >
                  {t(link.key as any)}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white dark:bg-primary-dark pt-20"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col p-8 gap-2">
              {mobileLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 px-4 text-lg font-medium text-text/80 dark:text-white/80 hover:text-primary border-b border-black/5 dark:border-white/10 hover:bg-cream dark:hover:bg-white/5 rounded-xl transition-all"
                >
                  {t(link.key as any)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
