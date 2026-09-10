'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components'
import { ArrowRightIcon } from '@/components/icons'

const Section1st = () => {
  useEffect(() => {
    let cleanup: (() => void) | undefined

    const setup = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      gsap.registerPlugin(ScrollTrigger)

      const animation2 = gsap.timeline({
        scrollTrigger: {
          trigger: '#pyramid-bottom',
        },
      })

      animation2.from('.pyramid', {
        duration: 1,
        y: '100',
        alpha: 0,
        stagger: 0.2,
        transformOrigin: 'center center',
      })

      cleanup = () => {
        animation2.kill()
        ScrollTrigger.getAll().forEach((t) => t.kill())
      }
    }

    void setup()
    return () => cleanup?.()
  }, [])

  return (
    <div className="mx-auto flex w-full max-w-[1204px] flex-col items-center gap-10 lg:flex-row lg:items-end">
      <div className="flex w-full flex-col items-center gap-6 pb-14 sm:pb-0 md:max-w-[600px] lg:max-w-full lg:items-start">
        <h2 className="back mx-auto text-center text-[28px] font-semibold leading-normal tracking-[-1.2px] text-white sm:text-[48px] lg:mx-0 lg:text-start lg:text-[60px]">
          NFTs
        </h2>
        <p className="text-center text-sm font-normal text-color-gray-3 sm:text-xl lg:text-start">
          The more passes you own, the greater the advantages you gain access
          to. Here are the various levels accessible to holders
        </p>
        <Link
          href="https://apex-dashboard-org.vercel.app/dashboard"
          target="_blank"
        >
          <Button
            icon={<ArrowRightIcon className="h-6 w-6 text-current" />}
            className="max-w-max"
          >
            Purchase NFT
          </Button>
        </Link>
      </div>
      <div className="relative flex w-full flex-col items-center gap-2">
        <div
          id="pyramid-bottom"
          className="pyramid absolute left-[50%] top-[-5rem] w-full translate-x-[-50%]"
        >
          <Image
            src="/images/vector.png"
            alt=""
            width={312}
            height={305}
            className="mx-auto h-[305px] w-full max-w-[312px]"
          />
        </div>
        <div className="pyramid z-10 flex h-10 w-[137px] flex-shrink-0 items-center justify-center rounded-full bg-color-gray-1 px-2 text-center text-xs text-color-white">
          20+ NFT - Apex Whale
        </div>
        <div className="pyramid z-10 flex h-[56px] w-[201px] flex-shrink-0 items-center justify-center rounded-full bg-color-gray-1 px-2 text-center text-xs text-color-white">
          10 NFT - Apex Venture
        </div>
        <div className="pyramid z-10 flex h-[56px] w-[258px] flex-shrink-0 items-center justify-center rounded-full bg-color-gray-1 px-6 text-center text-xs text-color-white">
          5 NFT - Apex Alpha
        </div>
        <div className="pyramid flex h-[56px] w-[85%] flex-shrink-0 items-center justify-center rounded-full bg-color-gray-1 px-6 text-center text-xs text-color-white sm:w-[327px]">
          1 NFT - Apex Holder
        </div>
      </div>
    </div>
  )
}

export default Section1st
