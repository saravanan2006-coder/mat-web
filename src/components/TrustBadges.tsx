"use client"

import { motion } from "framer-motion"
import { Shield, Leaf, Heart, TreePine, Wind, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/LanguageContext"

const badges = [
  { icon: Leaf, labelKey: "trust.1.label", descKey: "trust.1.desc" },
  { icon: Heart, labelKey: "trust.2.label", descKey: "trust.2.desc" },
  { icon: Shield, labelKey: "trust.3.label", descKey: "trust.3.desc" },
  { icon: TreePine, labelKey: "trust.4.label", descKey: "trust.4.desc" },
  { icon: Wind, labelKey: "trust.5.label", descKey: "trust.5.desc" },
  { icon: Sparkles, labelKey: "trust.6.label", descKey: "trust.6.desc" },
]

export default function TrustBadges() {
  const { t } = useLanguage()

  return (
    <section className="relative z-20 px-6 md:px-12 lg:px-20 mt-8 pb-8 md:pb-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-2xl rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/5 border border-white/30"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.labelKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl hover:bg-primary/5 transition-all duration-300 group cursor-default"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <badge.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-semibold text-sm text-text">{t(badge.labelKey as any)}</span>
                <span className="text-xs text-text-light">{t(badge.descKey as any)}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
