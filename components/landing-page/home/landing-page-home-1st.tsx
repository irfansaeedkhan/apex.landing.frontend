import React from 'react'
import { Button } from '../../buttons'
import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons'

const LandingPageHome1st = () => {
  return (
    <div
      id="home"
      className="flex flex-col gap-6 pt-12 text-white md:gap-[35px] lg:pt-0"
    >
      <p className="mx-auto w-full max-w-[343px] text-center text-sm leading-[22px] tracking-tight text-color-white md:max-w-[630px] md:text-xl md:leading-7 lg:max-w-[720px] lg:text-2xl lg:leading-9">
        We aim to attract the best, bringing the entire community to unlimited
        growth, reaching their own APEX.
      </p>
      <div className="line mx-auto flex w-full max-w-full flex-col text-center text-[34px] font-bold leading-[42px] tracking-[-3px] md:text-[64px] md:leading-[72px] md:tracking-[3px] lg:max-w-[1174px] lg:text-[90px] lg:leading-[92px] xl:text-[104px] xl:leading-[106px]">
        <div className="relative h-[42px] w-full overflow-hidden md:h-[72px] lg:h-[92px] xl:h-[106px] xl:text-[104px]">
          <span
            className="fade-in fade-gradient absolute left-0 h-[inherit] w-full"
            style={{ ['--fade-delay' as string]: '0.4s' }}
          >
            Apex Order
          </span>
        </div>
        <div className="relative h-[42px] w-full overflow-hidden md:h-[72px] lg:h-[92px] xl:h-[106px] xl:text-[104px]">
          <span
            className="fade-in fade-gradient absolute left-0 h-[inherit] w-full"
            style={{ ['--fade-delay' as string]: '0.5s' }}
          >
            A new world order...
          </span>
        </div>
        <div className="relative h-[42px] w-full overflow-hidden md:h-[72px] lg:h-[92px] xl:h-[106px] xl:text-[104px]">
          <span
            className="fade-in fade-gradient absolute left-0 h-[inherit] w-full"
            style={{ ['--fade-delay' as string]: '0.6s' }}
          >
            built on Metaverse.
          </span>
        </div>
      </div>
      <Link
        href="https://app.centher.io/auth/register?referred_by=0x571bc57d15e319b926b3b8fc67710c90a7591e63"
        target="_blank"
      >
        <Button
          icon={<ArrowRightIcon className="h-6 w-6 text-current" />}
          className="mx-auto max-w-max"
        >
          Enter Apex Now
        </Button>
      </Link>
    </div>
  )
}

export default LandingPageHome1st
