import Image from 'next/image'
import React from 'react'

const partners = [
  { src: '/images/centher-full.png', alt: 'Centher' },
  { src: '/images/the-sandbox.svg', alt: 'The Sandbox' },
  { src: '/images/decentraland.svg', alt: 'Decentraland' },
  { src: '/images/roblox.png', alt: 'Roblox' },
  { src: '/images/everdome.svg', alt: 'Everdome' },
  { src: '/images/dexa.png', alt: 'DeXa' },
  { src: '/images/bybit.png', alt: 'Bybit' },
  { src: '/images/phintech.png', alt: 'Phintech' },
] as const

const Partnership = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className="back mx-auto w-full text-center text-[28px] font-semibold leading-normal tracking-[-1.2px] text-white sm:text-[48px] lg:text-[60px]">
        Awesome Partnership
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
        {partners.map((partner) => (
          <Image
            key={partner.src}
            src={partner.src}
            alt={partner.alt}
            width={221}
            height={93}
            className="h-[52px] w-[124px] sm:h-[72px] sm:w-[172px] lg:h-[93px] lg:w-[221px]"
          />
        ))}
      </div>
    </div>
  )
}

export default Partnership
