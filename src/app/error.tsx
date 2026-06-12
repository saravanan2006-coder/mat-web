"use client"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="text-center max-w-md">
        <div className="font-heading text-8xl font-bold text-red-200 mb-6">!</div>
        <h1 className="font-heading text-3xl md:text-4xl text-primary mb-4">Something went wrong</h1>
        <p className="text-text-light mb-8 leading-relaxed">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-light transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
