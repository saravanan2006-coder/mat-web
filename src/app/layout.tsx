import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "@/components/Providers"
import PageTransition from "@/components/PageTransition"

export const metadata: Metadata = {
  title: "Thenmozhi Korai Mats | Handwoven Premium Korai Grass Mats from Tamil Nadu",
  description:
    "Discover the timeless comfort of handcrafted Korai Mats from Tamil Nadu. 100% natural, eco-friendly, and woven by skilled artisans using centuries-old techniques.",
  keywords: [
    "korai mats", "Tamil Nadu handwoven mats", "eco-friendly mats",
    "traditional Indian mats", "natural sleeping mats", "korai grass",
    "handcrafted", "premium wellness",
  ],
  openGraph: {
    title: "Thenmozhi Korai Mats | Premium Handwoven Mats",
    description: "Experience authentic handcrafted comfort from Tamil Nadu. 100% natural, eco-friendly Korai mats.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://thenmozhi-korai-mats.vercel.app",
    siteName: "Thenmozhi Korai Mats",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thenmozhi Korai Mats",
    description: "Handwoven premium Korai mats from Tamil Nadu.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/images/Logo.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#1F4D36" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className="min-h-screen bg-cream text-text antialiased dark:bg-primary-dark dark:text-white transition-colors duration-300">
        <a
          href="#main-content"
          className="fixed -top-20 left-4 z-[100] bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg focus:top-4 transition-all duration-300"
        >
          Skip to content
        </a>
        <Providers>
          <PageTransition>{children}</PageTransition>
        </Providers>
      </body>
    </html>
  )
}
