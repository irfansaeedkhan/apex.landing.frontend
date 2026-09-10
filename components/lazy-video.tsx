'use client'

import { useEffect, useRef, useState } from 'react'

type LazyVideoProps = {
  src: string
  className?: string
  ariaLabel?: string
}

/** Loads and plays muted loop videos only when near the viewport. */
export default function LazyVideo({
  src,
  className,
  ariaLabel = 'Decorative video',
}: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [activeSrc, setActiveSrc] = useState<string | undefined>(undefined)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting) {
          setActiveSrc(src)
          void el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { rootMargin: '200px 0px', threshold: 0.05 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [src])

  return (
    <video
      ref={ref}
      className={className}
      src={activeSrc}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      aria-label={ariaLabel}
    >
      <track kind="captions" src="/videos/silent-captions.vtt" srcLang="en" label="English" />
      Your browser does not support the video tag.
    </video>
  )
}
