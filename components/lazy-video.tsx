'use client'

import { useEffect, useRef, useState } from 'react'

type LazyVideoProps = {
  src: string
  className?: string
  ariaLabel?: string
}

/**
 * Round 1: the old version set src only when the video entered the
 * viewport and called play() in the same tick, so playback could fail
 * before the file had loaded, and it attached an empty captions track
 * (an 8-byte WEBVTT file with no cues). The video files themselves are
 * valid h264, so the player was the suspect. src is now set
 * immediately, the observer only pauses off-screen playback, the empty
 * captions track is removed, and a failed video hides itself instead of
 * showing a dead player.
 */
export default function LazyVideo({
  src,
  className,
  ariaLabel = 'Decorative video',
}: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting) {
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

  if (failed) return null

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-label={ariaLabel}
      onError={() => setFailed(true)}
    >
      Your browser does not support the video tag.
    </video>
  )
}
