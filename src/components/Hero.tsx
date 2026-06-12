"use client"

import { motion } from "framer-motion"
import { ArrowRight, Leaf, Star, Shield } from "lucide-react"

const stats = [
  { value: "5000+", label: "Happy Customers", icon: Star },
  { value: "100%", label: "Natural Material", icon: Leaf },
  { value: "20+", label: "Years Heritage", icon: Shield },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-primary-dark">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark opacity-90" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[80px]" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-screen max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-16">
        <div className="flex-1 flex flex-col justify-center lg:pr-16 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-secondary text-sm font-medium mb-8">
              <Leaf className="w-4 h-4" />
              Handcrafted in Tamil Nadu
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.9] mb-6"
          >
            Sleep
            <br />
            <span className="text-secondary">Naturally.</span>
            <br />
            Live Comfortably.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-white/70 text-lg md:text-xl max-w-lg mb-10 mx-auto lg:mx-0 font-light leading-relaxed"
          >
            Experience the timeless comfort of handcrafted Korai Mats woven by skilled artisans in Tamil Nadu using centuries-old techniques.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-16"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-semibold text-base hover:bg-accent-light transition-all duration-300 shadow-xl shadow-accent/20"
            >
              Shop Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#heritage"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-semibold text-base hover:bg-white/10 transition-all duration-300"
            >
              Discover Heritage
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex flex-wrap gap-8 justify-center lg:justify-start"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-white font-bold text-xl font-heading">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex-1 hidden lg:flex items-center justify-center relative"
        >
          <div className="relative w-full max-w-[550px] aspect-square">
            <div className="absolute inset-0 animate-float-slow">
              <div className="w-full h-full rounded-[40px] bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl">
                <img
                  src="/images/180-2.jpg"
                  alt="Premium handwoven Korai Mat"
                  className="w-full h-full object-cover opacity-90"
                  width={550}
                  height={550}
                />
              </div>
            </div>
            <div className="absolute -inset-12 rounded-full border border-white/5 animate-float" />
            <div className="absolute -inset-20 rounded-full border border-white/[0.03] animate-float-delayed" />
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-accent/20 backdrop-blur-md border border-white/10 flex items-center justify-center animate-float">
              <Leaf className="w-7 h-7 text-secondary" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-primary-light/30 backdrop-blur-md border border-white/10 flex items-center justify-center animate-float-delayed">
              <Star className="w-5 h-5 text-accent" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-secondary"
          />
        </div>
      </motion.div>
    </section>
  )
}
