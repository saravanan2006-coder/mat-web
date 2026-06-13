"use client"

import { useEffect, useRef, type ReactNode } from "react"
import Lenis from "lenis"
import { LanguageProvider } from "@/lib/LanguageContext"

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return <>{children}</>
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        {children}
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
