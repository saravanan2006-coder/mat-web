"use client"

import { motion } from "framer-motion"
import { processSteps } from "@/lib/data"

export default function HowItsMade() {
  return (
    <section id="how-its-made" className="section-padding bg-cream-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">The Process</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mt-4 mb-6">
            How It&apos;s Made
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto font-light">
            From wetland to bedroom — each mat undergoes a meticulous journey of craftsmanship.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-secondary to-primary/20 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step number */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-2 border-secondary shadow-xl flex items-center justify-center z-10">
                  <span className="font-heading text-2xl font-bold text-primary">{step.step}</span>
                </div>

                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-20" : "md:text-left md:pl-20"} pl-24 md:pl-0`}>
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-black/5 card-hover">
                    <h3 className="font-heading text-2xl font-semibold text-primary mb-3">{step.title}</h3>
                    <p className="text-text-light leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
