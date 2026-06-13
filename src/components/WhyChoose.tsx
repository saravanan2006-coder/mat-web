"use client"

import { motion } from "framer-motion"
import { Wind, Leaf, Thermometer, Heart, Shield, Star } from "lucide-react"
import { useLanguage } from "@/lib/LanguageContext"

const benefits = [
  { icon: Wind, titleKey: "why.benefit1.title", descKey: "why.benefit1.desc", gradient: "from-blue-100 to-cyan-50" },
  { icon: Leaf, titleKey: "why.benefit2.title", descKey: "why.benefit2.desc", gradient: "from-green-100 to-emerald-50" },
  { icon: Thermometer, titleKey: "why.benefit3.title", descKey: "why.benefit3.desc", gradient: "from-amber-100 to-orange-50" },
  { icon: Heart, titleKey: "why.benefit4.title", descKey: "why.benefit4.desc", gradient: "from-rose-100 to-pink-50" },
  { icon: Shield, titleKey: "why.benefit5.title", descKey: "why.benefit5.desc", gradient: "from-purple-100 to-violet-50" },
  { icon: Star, titleKey: "why.benefit6.title", descKey: "why.benefit6.desc", gradient: "from-yellow-100 to-amber-50" },
]

export default function WhyChoose() {
  const { t } = useLanguage()

  return (
    <section id="benefits" className="section-padding bg-cream">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">{t("why.section")}</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mt-4 mb-6">
            {t("why.title")}
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto font-light">
            {t("why.desc")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="group relative"
            >
              <div className="relative p-8 md:p-10 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 card-hover">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">{t(benefit.titleKey as any)}</h3>
                <p className="text-text-light leading-relaxed">{t(benefit.descKey as any)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
