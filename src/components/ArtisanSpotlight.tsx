"use client"

import { motion } from "framer-motion"
import { Quote, MapPin, Clock, Award } from "lucide-react"

const artisans = [
  {
    name: "Muthulakshmi",
    age: "45 years",
    location: "Villupuram",
    experience: "30 years",
    story: "I learned weaving from my mother when I was 15. Every mat I make carries the love of generations.",
    image: "/images/trad1.JPG",
  },
  {
    name: "Saraswathi",
    age: "52 years",
    location: "Cuddalore",
    experience: "35 years",
    story: "Korai weaving is not just our livelihood — it's our identity. Each strand tells a story of our land.",
    image: "/images/img1.png",
  },
]

export default function ArtisanSpotlight() {
  return (
    <section className="section-padding bg-cream-dark relative overflow-hidden">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Meet the Makers</span>
          <h2 className="font-heading text-4xl md:text-5xl text-primary mt-4 mb-6">Artisan Spotlight</h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto font-light">
            Behind every mat is a story of dedication, skill, and generations of knowledge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {artisans.map((artisan, i) => (
            <motion.div
              key={artisan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm card-hover"
            >
              <div className="aspect-[4/3] overflow-hidden bg-cream-dark">
                <img
                  src={artisan.image || "/placeholder.svg"}
                  alt={artisan.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-primary">{artisan.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-text-light mt-1">
                      <MapPin className="w-3.5 h-3.5" /> {artisan.location}
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-secondary/30" />
                </div>
                <p className="text-text-light italic leading-relaxed mb-6">&ldquo;{artisan.story}&rdquo;</p>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-1.5 text-text-light">
                    <Clock className="w-4 h-4 text-accent" /> {artisan.experience}
                  </div>
                  <div className="flex items-center gap-1.5 text-text-light">
                    <Award className="w-4 h-4 text-accent" /> Master Weaver
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
