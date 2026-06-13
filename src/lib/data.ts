export interface ProductVariation {
  id: string
  colorName: string
  colorHex: string
  images: string[]
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  rating: number
  badge: string
  variations: ProductVariation[]
}

export const products: Product[] = [
  {
    id: "prod_001",
    name: "Classic Plain Mat",
    description: "Traditional comfort for everyday use. Handwoven with natural korai grass for a cool and comfortable sleep.",
    price: 349,
    rating: 3.8,
    badge: "Bestseller",
    variations: [
      { id: "var_001a", colorName: "Green", colorHex: "#22c55e", images: ["/images/classic plain.jpg"] },
      { id: "var_001b", colorName: "Purple", colorHex: "#a855f7", images: ["/images/classic1.jpg"] },
    ],
  },
  {
    id: "prod_002",
    name: "Patterned Mat",
    description: "Stylish designs for a modern touch, combining traditional weaving with contemporary aesthetics.",
    price: 399,
    rating: 4.6,
    badge: "Popular",
    variations: [
      { id: "var_002a", colorName: "Red & Gold", colorHex: "#eab308", images: ["/images/Patterned.jpg"] },
      // { id: "var_002b", colorName: "Green & Red", colorHex: "#16a34a", images: ["/images/color-yell.jpg", "/images/color-green.jpg"] },
    ],
  },
  {
    id: "prod_003",
    name: "The Artisan Mat",
    description: "Higher level of detail and craftsmanship. Simple, natural, and beautiful.",
    price: 299,
    rating: 4.6,
    badge: "Premium",
    variations: [
      { id: "var_003a", colorName: "Dotted R&B", colorHex: "#2563eb", images: ["/images/artisian.jpg"] },
      // { id: "var_003b", colorName: "Light Green", colorHex: "#4ade80", images: ["/images/4-color.jpg", "/images/4-color (2).jpg"] },
    ],
  },
  {
    id: "prod_004",
    name: "Premium Mat with Nylon Borders",
    description: "Luxury weave with durable nylon borders for superior comfort, longevity, and a refined look.",
    price: 549,
    rating: 4.9,
    badge: "Premium",
    variations: [
      { id: "var_004a", colorName: "Dark Orange", colorHex: "#c2410c", images: ["/images/prem.jpg", "/images/prem1.jpg"] },
    ],
  },
  {
    id: "prod_005",
    name: "Eco-Friendly Mat",
    description: "Sustainably sourced korai grass mats that are environmentally friendly and biodegradable.",
    price: 150,
    rating: 3.7,
    badge: "Affordable",
    variations: [
      { id: "var_005a", colorName: "Yellow", colorHex: "#eab308", images: ["/images/normal-yell.jpg"] },
      { id: "var_005b", colorName: "Red", colorHex: "#ef4444", images: ["/images/normal-red.jpg"] },
      { id: "var_005c", colorName: "Purple", colorHex: "#a855f7", images: ["/images/normal-pur.jpg"] },
    ],
  },
  {
    id: "prod_006",
    name: "Special Coloured Mats",
    description: "Affordable yet stylish mats that do not compromise on quality or design.",
    price: 319,
    rating: 4.2,
    badge: "Budget",
    variations: [
      { id: "var_006a", colorName: "Red", colorHex: "#ef4444", images: ["/images/special colored.png"] },
    ],
  },
  {
    id: "prod_007",
    name: "Special Plain Mats",
    description: "Simple, natural, and beautiful mats that highlight the beauty of korai grass.",
    price: 289,
    rating: 4.0,
    badge: "Simple",
    variations: [
      { id: "var_007a", colorName: "Green", colorHex: "#22c55e", images: ["/images/eco.jpg"] },
      { id: "var_007b", colorName: "Golden", colorHex: "#f59e0b", images: ["/images/spl-yellow.jpg"] },
      { id: "var_007c", colorName: "Red", colorHex: "#ef4444", images: ["/images/spl-red.jpg"] },
    ],
  },
]

export type Review = {
  name: string
  text: string
  rating: number
}

export const reviews: Review[] = [
  { name: "Priya K.", text: "Absolutely love my new korai mat! The quality is outstanding and it keeps cool even on hot nights.", rating: 5 },
  { name: "Ramesh S.", text: "Bought this for my meditation space. The natural feel and craftsmanship are beautiful.", rating: 5 },
  { name: "Lakshmi M.", text: "Great value for money. The mat is well-made and the delivery was prompt. Will buy again!", rating: 4 },
  { name: "Anand R.", text: "The patterned mat is gorgeous. Exactly as described and the color is vibrant.", rating: 5 },
]

export const timelineSteps = [
  { year: "Ancient", title: "Ancient Origins", description: "Korai grass weaving has been practiced in Tamil Nadu for over 2,000 years, with techniques passed down through generations." },
  { year: "Harvest", title: "Harvesting Korai Grass", description: "Korai grass is sustainably harvested from wetlands, carefully selected for length and strength." },
  { year: "Weave", title: "Traditional Weaving", description: "Skilled artisans weave each mat on handlooms using techniques perfected over centuries." },
  { year: "Modern", title: "Modern Sustainable Living", description: "Today, these mats are cherished worldwide for their natural cooling properties and eco-friendly craftsmanship." },
]

export const processSteps = [
  { step: 1, title: "Harvest Korai Grass", description: "Sustainably harvested from Tamil Nadu wetlands during the dry season." },
  { step: 2, title: "Sun Dry Naturally", description: "Dried under the sun for days until the fibers reach perfect flexibility." },
  { step: 3, title: "Traditional Weaving", description: "Expertly woven on handlooms using century-old techniques." },
  { step: 4, title: "Quality Inspection", description: "Each mat is carefully inspected for perfection." },
  { step: 5, title: "Delivered To You", description: "Packed with care and delivered to your doorstep." },
]

export const faqs = [
  { q: "What are Korai mats made of?", a: "Korai mats are handwoven from natural Korai grass (Cyperus corymbosus), a sustainable plant grown in the wetlands of Tamil Nadu." },
  { q: "How do I clean my Korai mat?", a: "Simply wipe with a damp cloth and dry in shade. Avoid machine washing or prolonged sun exposure." },
  { q: "Are Korai mats eco-friendly?", a: "Yes! They are 100% biodegradable, made from natural fibers without any chemicals." },
  { q: "What sizes are available?", a: "We offer Single (3x6 ft), Double (4x6 ft), Queen (5x7 ft), and King (6x7 ft) sizes." },
  { q: "How long do Korai mats last?", a: "With proper care, a quality Korai mat can last 3-5 years or more." },
  { q: "Where do you deliver?", a: "We deliver across Tamil Nadu. Contact us to check availability for your area." },
]
