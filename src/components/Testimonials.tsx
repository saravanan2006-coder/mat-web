"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { reviews } from "@/lib/data"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/LanguageContext"

const stats = [
  { value: "4.8", labelKey: "testi.stat1", subKey: "testi.stat1sub" },
  { value: "98%", labelKey: "testi.stat2", subKey: "testi.stat2sub" },
  { value: "5000+", labelKey: "testi.stat3", subKey: "testi.stat3sub" },
]

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="reviews" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -translate-x-1/2" />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">{t("testi.section")}</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mt-4 mb-6">
            {t("testi.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="font-semibold text-sm text-text">{t(stat.labelKey as any)}</div>
              <div className="text-xs text-text-light">{t(stat.subKey as any)}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative p-8 rounded-3xl bg-cream border border-black/5 card-hover"
            >
              <Quote className="w-8 h-8 text-secondary/40 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={cn(
                      "w-4 h-4",
                      j < review.rating ? "text-accent fill-accent" : "text-gray-200"
                    )}
                  />
                ))}
              </div>
              <p className="text-text leading-relaxed mb-6 italic">&ldquo;{review.text}&rdquo;</p>
              <div className="font-semibold text-primary">{review.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
