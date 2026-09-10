import dynamic from 'next/dynamic'

const LandingPageHome2nd = dynamic(
  () => import('@/components/landing-page/home/landing-page-home-2nd'),
)
const NFTSection = dynamic(() => import('@/components/landing-page/nfts'))
const RoadmapSection = dynamic(
  () => import('@/components/landing-page/roadmap'),
)
const Ecosystem = dynamic(() => import('@/components/landing-page/eco-system'))
const ArtSection = dynamic(() => import('@/components/landing-page/art'))
const FrequentlyAsked = dynamic(
  () => import('@/components/landing-page/frequently-asked'),
)
const Footer = dynamic(() => import('@/components/landing-page/footer'))

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
