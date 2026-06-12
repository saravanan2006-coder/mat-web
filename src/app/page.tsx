import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import TrustBadges from "@/components/TrustBadges"
import WhyChoose from "@/components/WhyChoose"
import HeritageStory from "@/components/HeritageStory"
import HowItsMade from "@/components/HowItsMade"
import ArtisanSpotlight from "@/components/ArtisanSpotlight"
import ProductCollection from "@/components/ProductCollection"
import Gallery from "@/components/Gallery"
import Testimonials from "@/components/Testimonials"
import Sustainability from "@/components/Sustainability"
import FAQ from "@/components/FAQ"
import CTABanner from "@/components/CTABanner"
import Footer from "@/components/Footer"
import FloatingParticles from "@/components/FloatingParticles"
import JsonLd from "@/components/JsonLd"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"

export default function Home() {
  return (
    <>
      <JsonLd />
      <FloatingParticles />
      <Navbar />
      <FloatingWhatsApp />
      <main id="main-content">
        <Hero />
        <TrustBadges />
        <WhyChoose />
        <HeritageStory />
        <HowItsMade />
        <ArtisanSpotlight />
        <ProductCollection />
        <Gallery />
        <Testimonials />
        <Sustainability />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
