import React from 'react'
import Image from 'next/image'
import { HiMenu } from 'react-icons/hi'
import { Button } from '@/components'
import Link from 'next/link'

const LandingPageHeader = () => {
  return (
    <div className="flex h-12 w-full items-center justify-between gap-5 bg-color-dark-purple px-4 sm:h-[72px] sm:px-8 md:px-10 lg:h-[88px]">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={40}
        height={44}
        className="h-[34px] w-8 flex-shrink-0 cursor-pointer sm:h-11 sm:w-10"
      />
      <div className="hidden items-center lg:flex">
        <a href="#home" className={text}>
          Home
        </a>
        <a href="#nft" className={text}>
          NFT
        </a>
        <a href="#roadmap" className={text}>
          90 Days Roadmap
        </a>
        <a href="#ecosystem" className={text}>
          Apex Order Ecosystem
        </a>
        <a href="#art" className={text}>
          Apex Art
        </a>
        <a href="#faq" className={text}>
          FAQ
        </a>
      </div>
      <Link
        href="https://apex-dashboard-org.vercel.app/dashboard"
        target="_blank"
        className="hidden lg:flex"
      >
        <Button>Purchase NFT</Button>
      </Link>
      <div className="flex lg:hidden">
        <HiMenu className="h-6 w-6 text-white" />
      </div>
    </div>
  )
}

export default LandingPageHeader

const text =
  'cool-link px-4 py-1.5 text-base font-medium leading-[22px] text-color-gray-3 cursor-pointer hover:text-white'
