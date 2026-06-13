"use client"

import { motion } from "framer-motion"
import { Leaf, Recycle, Wind, Droplets, TreePine, Sun } from "lucide-react"
import { useLanguage } from "@/lib/LanguageContext"

const facts = [
  { icon: Leaf, label: "100% Biodegradable", desc: "Returns to earth naturally", value: "100" },
  { icon: Wind, label: "Chemical Free", desc: "No toxins, no processing", value: "100" },
  { icon: Droplets, label: "Water Efficient", desc: "Minimal water in production", value: "90" },
  { icon: TreePine, label: "Sustainably Harvested", desc: "Eco-friendly cultivation", value: "100" },
  { icon: Recycle, label: "Zero Waste", desc: "Every part is utilized", value: "95" },
  { icon: Sun, label: "Solar Dried", desc: "Sun-powered processing", value: "100" },
]

export default function Sustainability() {
  const { t } = useLanguage()

  return (
    <section className="section-padding bg-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">{t("sustain.section")}</span>
          <h2 className="font-heading text-4xl md:text-5xl text-white mt-4 mb-6">
            {t("sustain.title1")}<br />{t("sustain.title2")}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            {t("sustain.desc")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 card-hover"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <fact.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="font-heading text-3xl font-bold text-secondary mb-1">{fact.value}%</div>
              <div className="font-semibold text-sm text-white mb-1">{fact.label}</div>
              <div className="text-xs text-white/50">{fact.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
