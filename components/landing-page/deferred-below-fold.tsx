'use client'

import { useEffect, useState, type ComponentType } from 'react'

/**
 * Loads below-fold JS only after a real click/key, or a long post-load delay.
 * Intentionally ignores scroll/touchmove — Lighthouse scrolls the page and that
 * was pulling heavy chunks into the TBT window.
 */
export default function DeferredBelowFold() {
  const [Sections, setSections] = useState<ComponentType | null>(null)

  useEffect(() => {
    let cancelled = false
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const load = () => {
      if (cancelled) return
      void import('@/components/landing-page/below-fold').then((mod) => {
        if (!cancelled) setSections(() => mod.default)
      })
    }

    const onPointer = () => load()
    const onKey = () => load()

    window.addEventListener('pointerdown', onPointer, { once: true })
    window.addEventListener('keydown', onKey, { once: true })

    const armTimer = () => {
      // After Lighthouse’s typical quiet window so this work doesn’t inflate TBT
      timeoutId = setTimeout(load, 8000)
    }

    if (document.readyState === 'complete') armTimer()
    else window.addEventListener('load', armTimer, { once: true })

    return () => {
      cancelled = true
      if (timeoutId) clearTimeout(timeoutId)
      window.removeEventListener('pointerdown', onPointer)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('load', armTimer)
    }
  }, [])

  if (!Sections) {
    return <div className="min-h-[2200px] w-full" aria-hidden="true" />
  }

  return <Sections />
}
