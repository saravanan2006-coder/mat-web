"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Package, Heart, Users } from "lucide-react"

const menuItems = [
  {
    label: "Products",
    icon: Package,
    items: [
      { label: "Collection", href: "#products" },
      { label: "Gallery", href: "#gallery" },
    ],
  },
  {
    label: "Our Story",
    icon: Heart,
    items: [
      { label: "Heritage", href: "#heritage" },
      { label: "Artisans", href: "#how-its-made" },
    ],
  },
  {
    label: "Community",
    icon: Users,
    items: [
      { label: "Reviews", href: "#reviews" },
      { label: "Contact", href: "#contact" },
    ],
  },
]

export default function MegaMenu() {
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
        Explore
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
            {menuItems.map((section) => (
              <div key={section.label}>
                <div className="flex items-center gap-2 mb-3 text-primary dark:text-secondary font-semibold text-sm">
                  <section.icon className="w-4 h-4" />
                  {section.label}
                </div>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block text-sm text-text-light dark:text-white/60 hover:text-primary dark:hover:text-secondary hover:translate-x-1 transition-all py-1"
                      >
                        {item.label}
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
