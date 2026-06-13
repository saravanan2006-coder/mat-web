"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from "lucide-react"
import { useLanguage } from "@/lib/LanguageContext"

const galleryImages = [
  { src: "/images/floor.jpg", alt: "Korai mat in modern bedroom" },
  { src: "/images/classic plain.jpg", alt: "Artisan weaving korai grass mat" },
  { src: "/images/classic1.jpg", alt: "Traditional Tamil home with korai mats" },
  { src: "/images/Patterned.jpg", alt: "Premium korai mat display" },
  { src: "/images/Special colored.png", alt: "Classic plain korai mat" },
  // { src: "/images/img1.png", alt: "Colorful handwoven korai mat" },
  { src: "/images/Artisian.jpg", alt: "Patterned korai mat" },
  { src: "/images/Eco.jpg", alt: "Eco-friendly korai mat" },
  { src: "/images/Prem1.jpg", alt: "Special green korai mat" },
  { src: "/images/Prem.jpg", alt: "Special green korai mat" },
]

export default function Gallery() {
  const { t } = useLanguage()
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null)
    }
    if (lightbox) {
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEsc)
      if (lightbox) document.body.style.overflow = ""
    }
  }, [lightbox])

  return (
    <section id="gallery" className="section-padding bg-cream">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">{t("gallery.section")}</span>
          <h2 className="font-heading text-4xl md:text-5xl text-primary mt-4 mb-6">{t("gallery.title")}</h2>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width={600}
                height={800}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close image"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={lightbox}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
