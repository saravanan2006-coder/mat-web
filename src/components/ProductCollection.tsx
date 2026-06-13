"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, X } from "lucide-react"
import { products, type Product } from "@/lib/data"
import { cn } from "@/lib/utils"
import { formatPrice } from "@/lib/utils"
import { useLanguage } from "@/lib/LanguageContext"

const WHATSAPP_NUMBER = "916383986265"

export default function ProductCollection() {
  const { t } = useLanguage()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedVar, setSelectedVar] = useState("")
  const [activeImage, setActiveImage] = useState(0)

  const openModal = (product: Product) => {
    setSelectedProduct(product)
    setSelectedVar(product.variations[0].id)
    setActiveImage(0)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedProduct(null)
    document.body.style.overflow = ""
  }

  const inquireOnWhatsApp = (product: Product, varId: string) => {
    const variation = product.variations.find((v) => v.id === varId)
    const msg = `Hi! I'm interested in the "${product.name}" (${variation?.colorName || ""}) priced at ₹${product.price}. Can you share more details about availability, sizes, and delivery?`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank")
  }

  const currentVar = selectedProduct?.variations.find((v) => v.id === selectedVar)

  return (
    <section id="products" className="section-padding bg-cream">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">{t("products.section")}</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mt-4 mb-6">
            {t("products.title")}
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto font-light">
            {t("products.desc")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, i) => {
            const firstVar = product.variations[0]
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                onClick={() => openModal(product)}
                className="group cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`View ${product.name}`}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(product) } }}
              >
                <div className="relative rounded-3xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 card-hover">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-primary text-white shadow-lg">
                      {product.badge}
                    </span>
                  </div>

                  <div className="aspect-square overflow-hidden bg-cream-dark">
                    <img
                      src={firstVar?.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                      width={400}
                      height={400}
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className={cn("w-3.5 h-3.5", j < Math.round(product.rating) ? "text-accent fill-accent" : "text-gray-200")}
                        />
                      ))}
                      <span className="text-xs text-text-light ml-1">{product.rating}</span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-primary mb-1">{product.name}</h3>
                    <p className="text-text-light text-sm mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xl text-primary">{formatPrice(product.price)}</span>
                      {product.variations.length > 1 && (
                        <div className="flex gap-1.5">
                          {product.variations.map((v) => (
                            <div
                              key={v.id}
                              className="w-5 h-5 rounded-full border border-border"
                              style={{ backgroundColor: v.colorHex }}
                              title={v.colorName}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label={`Product details for ${selectedProduct.name}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative p-6 md:p-10">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cream flex items-center justify-center hover:bg-cream-dark transition-colors z-10"
                  aria-label="Close product details"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="aspect-square rounded-2xl overflow-hidden bg-cream-dark mb-4">
                      {currentVar && (
                        <img
                          src={currentVar.images[activeImage] || currentVar.images[0]}
                          alt={`${selectedProduct.name} - ${currentVar.colorName}`}
                          className="w-full h-full object-cover"
                          width={500}
                          height={500}
                        />
                      )}
                    </div>
                    {currentVar && currentVar.images.length > 1 && (
                      <div className="flex gap-2" role="tablist" aria-label="Image thumbnails">
                        {currentVar.images.map((img, j) => (
                          <button
                            key={j}
                            onClick={() => setActiveImage(j)}
                            className={cn(
                              "w-16 h-16 rounded-xl overflow-hidden border-2 transition-all",
                              j === activeImage ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                            )}
                            aria-label={`View image ${j + 1}`}
                          >
                            <img src={img} alt="" role="presentation" width={64} height={64} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col justify-center">
                    <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">
                      {selectedProduct.badge}
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                      {selectedProduct.name}
                    </h2>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star
                            key={j}
                            className={cn("w-4 h-4", j < Math.round(selectedProduct.rating) ? "text-accent fill-accent" : "text-gray-200")}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-text-light">{selectedProduct.rating}</span>
                    </div>
                    <p className="text-3xl font-bold text-primary mb-6">{formatPrice(selectedProduct.price)}</p>
                    <p className="text-text-light leading-relaxed mb-8">{selectedProduct.description}</p>

                    <div className="mb-8">
                      <span className="text-sm font-semibold text-text block mb-3">
                        Color: <span className="text-accent">{currentVar?.colorName}</span>
                      </span>
                      <div className="flex gap-3" role="radiogroup" aria-label="Color options">
                        {selectedProduct.variations.map((v) => (
                          <button
                            key={v.id}
                            onClick={() => { setSelectedVar(v.id); setActiveImage(0) }}
                            className={cn(
                              "w-10 h-10 rounded-full border-2 transition-all",
                              selectedVar === v.id ? "border-primary scale-110 shadow-lg" : "border-gray-200"
                            )}
                            style={{ backgroundColor: v.colorHex }}
                            title={v.colorName}
                            aria-label={v.colorName}
                            role="radio"
                            aria-checked={selectedVar === v.id}
                          />
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => inquireOnWhatsApp(selectedProduct, selectedVar)}
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] text-white rounded-full font-semibold hover:bg-[#1ebe5d] transition-all shadow-lg shadow-[#25D366]/20 text-lg"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      {t("products.inquire")}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
