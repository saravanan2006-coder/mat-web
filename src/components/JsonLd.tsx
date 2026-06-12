export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          name: "Thenmozhi Korai Mats",
          description: "Handwoven korai grass mats from Tamil Nadu",
          url: process.env.NEXT_PUBLIC_SITE_URL || "https://thenmozhi-korai-mats.vercel.app",
          telephone: "+917708465612",
          email: "thenmozhikoraiwefts21@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Villupuram",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          sameAs: ["https://wa.me/916383986265"],
        }),
      }}
    />
  )
}
