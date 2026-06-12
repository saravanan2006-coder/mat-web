"use client"

import { motion } from "framer-motion"
import { Wind, Leaf, Thermometer, Heart, Shield, Star } from "lucide-react"

const benefits = [
  {
    icon: Wind,
    title: "Cool & Breathable",
    desc: "Natural air circulation keeps you comfortable all night long.",
    gradient: "from-blue-100 to-cyan-50",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    desc: "100% biodegradable and sustainably harvested from nature.",
    gradient: "from-green-100 to-emerald-50",
  },
  {
    icon: Thermometer,
    title: "Temperature Control",
    desc: "Stays cool in summer, warm in winter — naturally.",
    gradient: "from-amber-100 to-orange-50",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    desc: "Promotes spinal alignment and restful, natural sleep.",
    gradient: "from-rose-100 to-pink-50",
  },
  {
    icon: Shield,
    title: "Hypoallergenic",
    desc: "Naturally resists dust mites, mold, and allergens.",
    gradient: "from-purple-100 to-violet-50",
  },
  {
    icon: Star,
    title: "Handwoven Heritage",
    desc: "Each mat carries generations of Tamil Nadu craftsmanship.",
    gradient: "from-yellow-100 to-amber-50",
  },
]

export default function WhyChoose() {
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
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Why Choose</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mt-4 mb-6">
            The Korai Mat Difference
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto font-light">
            Every mat is a testament to nature&apos;s wisdom and generations of artisanal mastery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
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
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">{benefit.title}</h3>
                <p className="text-text-light leading-relaxed">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
