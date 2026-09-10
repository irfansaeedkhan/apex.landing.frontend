import Image from 'next/image'
import React from 'react'

const Partnership = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className="back mx-auto w-full text-center text-[28px] font-semibold leading-normal tracking-[-1.2px] text-white sm:text-[48px] lg:text-[60px]">
        Awesome Partnership
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
        <Image
          src="/images/centher-full.png"
          alt="partnership"
          width={221}
          height={93}
          className="h-[52px] w-[124px] sm:h-[72px] sm:w-[172px] lg:h-[93px] lg:w-[221px]"
        />
        <Image
          src="/images/the-sandbox.svg"
          alt="partnership"
          width={221}
          height={93}
          className="h-[52px] w-[124px] sm:h-[72px] sm:w-[172px] lg:h-[93px] lg:w-[221px]"
        />
        <Image
          src="/images/decentraland.svg"
          alt="partnership"
          width={221}
          height={93}
          className="h-[52px] w-[124px] sm:h-[72px] sm:w-[172px] lg:h-[93px] lg:w-[221px]"
        />
        <Image
          src="/images/roblox.png"
          alt="partnership"
          width={221}
          height={93}
          className="h-[52px] w-[124px] sm:h-[72px] sm:w-[172px] lg:h-[93px] lg:w-[221px]"
        />
        <Image
          src="/images/everdome.svg"
          alt="partnership"
          width={221}
          height={93}
          className="h-[52px] w-[124px] sm:h-[72px] sm:w-[172px] lg:h-[93px] lg:w-[221px]"
        />
        <Image
          src="/images/dexa.png"
          alt="partnership"
          width={221}
          height={93}
          className="h-[52px] w-[124px] sm:h-[72px] sm:w-[172px] lg:h-[93px] lg:w-[221px]"
        />
        <Image
          src="/images/bybit.png"
          alt="partnership"
          width={221}
          height={93}
          className="h-[52px] w-[124px] sm:h-[72px] sm:w-[172px] lg:h-[93px] lg:w-[221px]"
        />
        <Image
          src="/images/phintech.png"
          alt="partnership"
          width={221}
          height={93}
          className="h-[52px] w-[124px] sm:h-[72px] sm:w-[172px] lg:h-[93px] lg:w-[221px]"
        />
      </div>
    </div>
  )
}

export default Partnership
