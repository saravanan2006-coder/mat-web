import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="text-center max-w-md">
        <div className="font-heading text-8xl font-bold text-primary/20 mb-6">404</div>
        <h1 className="font-heading text-3xl md:text-4xl text-primary mb-4">Page Not Found</h1>
        <p className="text-text-light mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-light transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
