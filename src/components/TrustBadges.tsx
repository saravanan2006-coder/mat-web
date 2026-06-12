"use client"

import { motion } from "framer-motion"
import { Shield, Leaf, Heart, TreePine, Wind, Sparkles } from "lucide-react"

const badges = [
  { icon: Leaf, label: "100% Natural", desc: "Pure korai grass" },
  { icon: Heart, label: "Handwoven Heritage", desc: "Skilled artisans" },
  { icon: Shield, label: "Made in Tamil Nadu", desc: "Authentic craft" },
  { icon: TreePine, label: "Eco Friendly", desc: "Sustainable choice" },
  { icon: Wind, label: "Chemical Free", desc: "No toxins" },
  { icon: Sparkles, label: "Hypoallergenic", desc: "Safe for all" },
]

export default function TrustBadges() {
  return (
    <section className="relative z-20 px-6 md:px-12 lg:px-20 -mt-20 pb-8 md:pb-12">
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
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl hover:bg-primary/5 transition-all duration-300 group cursor-default"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <badge.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-semibold text-sm text-text">{badge.label}</span>
                <span className="text-xs text-text-light">{badge.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
