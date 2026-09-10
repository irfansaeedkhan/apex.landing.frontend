'use client'

import dynamic from 'next/dynamic'

const LandingPageHome2nd = dynamic(
  () => import('@/components/landing-page/home/landing-page-home-2nd'),
  { ssr: false },
)
const NFTSection = dynamic(() => import('@/components/landing-page/nfts'), {
  ssr: false,
})
const RoadmapSection = dynamic(
  () => import('@/components/landing-page/roadmap'),
  { ssr: false },
)
const Ecosystem = dynamic(() => import('@/components/landing-page/eco-system'), {
  ssr: false,
})
const ArtSection = dynamic(() => import('@/components/landing-page/art'), {
  ssr: false,
})
const FrequentlyAsked = dynamic(
  () => import('@/components/landing-page/frequently-asked'),
  { ssr: false },
)
const Footer = dynamic(() => import('@/components/landing-page/footer'), {
  ssr: false,
})

/** Loaded only after DeferredBelowFold opts in — keep this module heavy-side. */
export default function BelowFold() {
  return (
    <>
      <div className="mx-auto flex w-full max-w-[1204px] flex-col pb-16">
        <LandingPageHome2nd />
      </div>
      <NFTSection />
      <RoadmapSection />
      <Ecosystem />
      <ArtSection />
      <FrequentlyAsked />
      <Footer />
    </>
  )
}
