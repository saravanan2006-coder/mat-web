"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Lang = "en" | "ta"

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.home": { en: "Home", ta: "முகப்பு" },
  "nav.heritage": { en: "Our Heritage", ta: "எங்கள் பாரம்பரியம்" },
  "nav.collection": { en: "Collection", ta: "தொகுப்பு" },
  "nav.benefits": { en: "Benefits", ta: "நன்மைகள்" },
  "nav.reviews": { en: "Reviews", ta: "விமர்சனங்கள்" },
  "nav.contact": { en: "Contact", ta: "தொடர்பு" },
  "nav.artisans": { en: "Artisans", ta: "கைவினைஞர்கள்" },
  "nav.gallery": { en: "Gallery", ta: "கேலரி" },
  "nav.sustainability": { en: "Sustainability", ta: "நிலைத்தன்மை" },
  "nav.explore": { en: "Explore", ta: "ஆராயுங்கள்" },

  // MegaMenu
  "mega.products": { en: "Products", ta: "தயாரிப்புகள்" },
  "mega.story": { en: "Our Story", ta: "எங்கள் கதை" },
  "mega.community": { en: "Community", ta: "சமூகம்" },

  // Language switcher
  "lang.switchTo": { en: "Switch to Tamil", ta: "ஆங்கிலத்திற்கு மாற" },
  "lang.label": { en: "EN", ta: "தமிழ்" },

  // Hero
  "hero.badge": { en: "Handcrafted in Tamil Nadu", ta: "தமிழ்நாட்டில் கைவினைத்திறனுடன்" },
  "hero.title1": { en: "Sleep", ta: "தூங்குங்கள்" },
  "hero.title2": { en: "Naturally.", ta: "இயற்கையாக." },
  "hero.title3": { en: "Live Comfortably.", ta: "வசதியாக வாழுங்கள்." },
  "hero.desc": { en: "Experience the timeless comfort of handcrafted Korai Mats woven by skilled artisans in Tamil Nadu using centuries-old techniques.", ta: "தமிழ்நாட்டில் பல நூற்றாண்டுகள் பழமையான நுட்பங்களுடன் கைவினைஞர்களால் நெய்யப்படும் கோரைப் பாய்களின் காலமற்ற இனிமையை அனுபவியுங்கள்." },
  "hero.cta1": { en: "Shop Collection", ta: "தொகுப்பைப் பார்வையிட" },
  "hero.cta2": { en: "Discover Heritage", ta: "பாரம்பரியத்தை அறிய" },
  "hero.stat1": { en: "Happy Customers", ta: "மகிழ்ச்சியான வாடிக்கையாளர்கள்" },
  "hero.stat2": { en: "Natural Material", ta: "இயற்கை பொருள்" },
  "hero.stat3": { en: "Years Heritage", ta: "ஆண்டு பாரம்பரியம்" },
  "hero.scroll": { en: "Scroll", ta: "கீழே செல்ல" },

  // TrustBadges
  "trust.1.label": { en: "100% Natural", ta: "100% இயற்கை" },
  "trust.1.desc": { en: "Pure korai grass", ta: "தூய கோரைப் புல்" },
  "trust.2.label": { en: "Handwoven Heritage", ta: "கைநெய்த பாரம்பரியம்" },
  "trust.2.desc": { en: "Skilled artisans", ta: "திறமையான கைவினைஞர்கள்" },
  "trust.3.label": { en: "Made in Tamil Nadu", ta: "தமிழ்நாட்டில் தயாரிக்கப்பட்டது" },
  "trust.3.desc": { en: "Authentic craft", ta: "உண்மையான கைவினை" },
  "trust.4.label": { en: "Eco Friendly", ta: "சூழல் நட்பு" },
  "trust.4.desc": { en: "Sustainable choice", ta: "நிலையான தேர்வு" },
  "trust.5.label": { en: "Chemical Free", ta: "இரசாயனமில்லா" },
  "trust.5.desc": { en: "No toxins", ta: "நச்சுகள் இல்லை" },
  "trust.6.label": { en: "Hypoallergenic", ta: "ஒவ்வாமையற்ற" },
  "trust.6.desc": { en: "Safe for all", ta: "அனைவருக்கும் பாதுகாப்பானது" },

  // WhyChoose
  "why.section": { en: "Why Choose", ta: "ஏன் தேர்வு செய்ய வேண்டும்" },
  "why.title": { en: "The Korai Mat Difference", ta: "கோரைப் பாயின் சிறப்பு" },
  "why.desc": { en: "Every mat is a testament to nature's wisdom and generations of artisanal mastery.", ta: "ஒவ்வொரு பாயும் இயற்கையின் ஞானத்திற்கும் தலைமுறை கைவினைத் திறனுக்கும் சான்றாகும்." },
  "why.benefit1.title": { en: "Cool & Breathable", ta: "குளிர்ச்சியும் காற்றோட்டமும்" },
  "why.benefit1.desc": { en: "Natural air circulation keeps you comfortable all night long.", ta: "இயற்கையான காற்றோட்டம் இரவு முழுவதும் உங்களை வசதியாக வைத்திருக்கும்." },
  "why.benefit2.title": { en: "Eco Friendly", ta: "சூழல் நட்பு" },
  "why.benefit2.desc": { en: "100% biodegradable and sustainably harvested from nature.", ta: "100% மக்கும் தன்மை கொண்டது, இயற்கையிலிருந்து நிலையான முறையில் சேகரிக்கப்பட்டது." },
  "why.benefit3.title": { en: "Temperature Control", ta: "வெப்பநிலை கட்டுப்பாடு" },
  "why.benefit3.desc": { en: "Stays cool in summer, warm in winter — naturally.", ta: "கோடையில் குளிர்ச்சியும், குளிர்காலத்தில் வெப்பமும் — இயற்கையாக." },
  "why.benefit4.title": { en: "Health Benefits", ta: "ஆரோக்கிய நன்மைகள்" },
  "why.benefit4.desc": { en: "Promotes spinal alignment and restful, natural sleep.", ta: "முதுகெலும்பு சீரமைப்பை ஊக்குவித்து அமைதியான இயற்கை தூக்கத்தை அளிக்கிறது." },
  "why.benefit5.title": { en: "Hypoallergenic", ta: "ஒவ்வாமையற்ற" },
  "why.benefit5.desc": { en: "Naturally resists dust mites, mold, and allergens.", ta: "இயற்கையாகவே தூசிப் பூச்சிகள், பூஞ்சை மற்றும் ஒவ்வாமைகளை எதிர்க்கிறது." },
  "why.benefit6.title": { en: "Handwoven Heritage", ta: "கைநெய்த பாரம்பரியம்" },
  "why.benefit6.desc": { en: "Each mat carries generations of Tamil Nadu craftsmanship.", ta: "ஒவ்வொரு பாயும் தமிழ்நாட்டின் தலைமுறை கைவினைத்திறனைக் கொண்டுள்ளது." },

  // Heritage
  "heritage.section": { en: "Our Story", ta: "எங்கள் கதை" },
  "heritage.title1": { en: "A Tradition Woven", ta: "தலைமுறைகளாக" },
  "heritage.title2": { en: "Through Generations", ta: "நெய்யப்பட்ட பாரம்பரியம்" },
  "heritage.desc": { en: "For over two millennia, Tamil artisans have woven korai grass into mats that cool the body and soothe the soul.", ta: "இரண்டாயிரம் ஆண்டுகளுக்கும் மேலாக, தமிழ் கைவினைஞர்கள் உடலைக் குளிர்விக்கும் மற்றும் ஆன்மாவை ஆற்றும் பாய்களாக கோரைப் புல்லை நெய்து வருகின்றனர்." },
  "heritage.floating": { en: "Years of tradition", ta: "ஆண்டு பாரம்பரியம்" },

  // HowItsMade
  "process.section": { en: "The Process", ta: "செயல்முறை" },
  "process.title": { en: "How It's Made", ta: "எப்படி தயாரிக்கப்படுகிறது" },
  "process.desc": { en: "From wetland to bedroom — each mat undergoes a meticulous journey of craftsmanship.", ta: "சதுப்பு நிலத்திலிருந்து படுக்கையறை வரை — ஒவ்வொரு பாயும் கைவினைத்திறனின் கவனமான பயணத்தை மேற்கொள்கிறது." },

  // Products
  "products.section": { en: "Collection", ta: "தொகுப்பு" },
  "products.title": { en: "Featured Products", ta: "சிறப்பு தயாரிப்புகள்" },
  "products.desc": { en: "Each mat is a unique piece of art, handcrafted with love and tradition.", ta: "ஒவ்வொரு பாயும் அன்பு மற்றும் பாரம்பரியத்துடன் கைவினை செய்யப்பட்ட ஒரு தனித்துவமான கலைப் படைப்பு." },
  "products.inquire": { en: "Inquire on WhatsApp", ta: "WhatsApp இல் விசாரிக்க" },

  // Gallery
  "gallery.section": { en: "Gallery", ta: "கேலரி" },
  "gallery.title": { en: "Life With Korai", ta: "கோரையுடன் வாழ்க்கை" },

  // Testimonials
  "testi.section": { en: "Testimonials", ta: "வாடிக்கையாளர் கருத்துகள்" },
  "testi.title": { en: "What Our Customers Say", ta: "எங்கள் வாடிக்கையாளர்கள் கூறுவது" },
  "testi.stat1": { en: "Average Rating", ta: "சராசரி மதிப்பீடு" },
  "testi.stat1sub": { en: "from 500+ reviews", ta: "500+ மதிப்புரைகளிலிருந்து" },
  "testi.stat2": { en: "Recommend Us", ta: "பரிந்துரைக்கின்றனர்" },
  "testi.stat2sub": { en: "would buy again", ta: "மீண்டும் வாங்குவார்கள்" },
  "testi.stat3": { en: "Happy Customers", ta: "மகிழ்ச்சியான வாடிக்கையாளர்கள்" },
  "testi.stat3sub": { en: "across Tamil Nadu", ta: "தமிழ்நாடு முழுவதும்" },

  // Sustainability
  "sustain.section": { en: "Sustainability", ta: "நிலைத்தன்மை" },
  "sustain.title1": { en: "Kind to Nature,", ta: "இயற்கைக்கு அன்பான," },
  "sustain.title2": { en: "Kind to You", ta: "உங்களுக்கு அன்பான" },
  "sustain.desc": { en: "Every Korai mat is a promise to the planet — 100% natural, biodegradable, and made with love.", ta: "ஒவ்வொரு கோரைப் பாயும் பூமிக்கு கொடுக்கப்பட்ட வாக்குறுதி — 100% இயற்கை, மக்கும் தன்மை, மற்றும் அன்புடன் தயாரிக்கப்பட்டது." },

  // CTA Banner
  "cta.badge": { en: "Bring Nature Home", ta: "இயற்கையை வீட்டிற்கு கொண்டு வாருங்கள்" },
  "cta.title1": { en: "Bring Nature Into", ta: "இயற்கையை உங்கள்" },
  "cta.title2": { en: "Your Home", ta: "வீட்டிற்கு கொண்டு வாருங்கள்" },
  "cta.desc": { en: "Experience authentic handcrafted comfort from Tamil Nadu. Premium quality, eco-friendly, and delivered to your doorstep.", ta: "தமிழ்நாட்டின் உண்மையான கைவினை இனிமையை அனுபவியுங்கள். உயர்தரம், சூழல் நட்பு, உங்கள் வீட்டு வாசலுக்கு வழங்கப்படுகிறது." },
  "cta.cta": { en: "Shop Now", ta: "இப்போது வாங்க" },

  // FAQ
  "faq.section": { en: "FAQ", ta: "கேள்விகள்" },
  "faq.title": { en: "Frequently Asked Questions", ta: "அடிக்கடி கேட்கப்படும் கேள்விகள்" },
  "faq.placeholder": { en: "Search questions...", ta: "கேள்விகளைத் தேடுங்கள்..." },
  "faq.empty": { en: "No questions found. Try a different search term.", ta: "கேள்விகள் எதுவும் கிடைக்கவில்லை. வேறு தேடல் வார்த்தையை முயற்சிக்கவும்." },

  // Footer
  "footer.stayConnected": { en: "Stay Connected", ta: "இணைந்திருங்கள்" },
  "footer.subscribeDesc": { en: "Subscribe to receive updates on new collections, artisan stories, and exclusive offers.", ta: "புதிய தொகுப்புகள், கைவினைஞர் கதைகள் மற்றும் சிறப்பு சலுகைகள் குறித்த புதுப்பிப்புகளைப் பெற குழுசேரவும்." },
  "footer.placeholder": { en: "Enter your email", ta: "மின்னஞலை உள்ளிடவும்" },
  "footer.subscribe": { en: "Subscribe", ta: "குழுசேர்" },
  "footer.thanks": { en: "Thanks for subscribing!", ta: "குழுசேர்ந்ததற்கு நன்றி!" },
  "footer.quickLinks": { en: "Quick Links", ta: "விரைவு இணைப்புகள்" },
  "footer.contactUs": { en: "Contact Us", ta: "எங்களை தொடர்பு கொள்ள" },
  "footer.chat": { en: "Chat With Us", ta: "எங்களுடன் அரட்டை" },
  "footer.chatBtn": { en: "Chat on WhatsApp", ta: "WhatsApp இல் அரட்டை" },
  "footer.brand": { en: "Bringing you the finest handwoven korai mats from Tamil Nadu, crafted with tradition and care for generations.", ta: "தலைமுறைகளாக பாரம்பரியத்துடனும் அக்கறையுடனும் தயாரிக்கப்பட்ட தமிழ்நாட்டின் சிறந்த கைநெய்த கோரைப் பாய்களை உங்களுக்கு வழங்குகிறது." },
  "footer.rights": { en: "Thenmozhi Korai Mats. All rights reserved.", ta: "தென்மொழி கோரை மேட்ஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை." },
  "footer.madeIn": { en: "Made with", ta: "உடன் தயாரிக்கப்பட்டது" },
  "footer.inTamilNadu": { en: "in Tamil Nadu", ta: "தமிழ்நாட்டில்" },
}

type TranslationKey = keyof typeof translations

interface LanguageContextType {
  lang: Lang
  toggleLang: () => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "en" ? "ta" : "en"
      document.documentElement.lang = next
      return next
    })
  }

  const t = (key: TranslationKey): string => translations[key]?.[lang] ?? key

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
