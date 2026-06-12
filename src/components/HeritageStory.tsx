"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { timelineSteps } from "@/lib/data"

export default function HeritageStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section id="heritage" ref={containerRef} className="relative section-padding bg-white overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Story</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mt-4 mb-6">
            A Tradition Woven<br />Through Generations
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto font-light">
            For over two millennia, Tamil artisans have woven korai grass into mats that cool the body and soothe the soul.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="/images/img2.jpg"
                alt="Traditional Korai mat weaving in Tamil Nadu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 shadow-xl max-w-[200px]"
            >
              <div className="font-heading text-3xl font-bold text-primary">2000+</div>
              <div className="text-sm text-text-light">Years of tradition</div>
            </motion.div>
          </motion.div>

          {/* Right - Timeline */}
          <div className="space-y-12">
            {timelineSteps.map((step, i) => {
              const progress = useTransform(
                scrollYProgress,
                [i / timelineSteps.length, (i + 1) / timelineSteps.length],
                [0, 1]
              )
              const opacity = useTransform(progress, [0, 0.3, 1], [0.3, 1, 1])
              const x = useTransform(progress, [0, 0.5, 1], [40, 0, 0])

              return (
                <motion.div
                  key={step.title}
                  style={{ opacity, x }}
                  className="relative pl-10 border-l-2 border-secondary/30 last:border-transparent pb-4"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-5 h-5 rounded-full bg-secondary border-4 border-white shadow-md" />

                  <span className="text-accent text-sm font-semibold tracking-wider uppercase">{step.year}</span>
                  <h3 className="font-heading text-2xl font-semibold text-primary mt-1 mb-2">{step.title}</h3>
                  <p className="text-text-light leading-relaxed">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
