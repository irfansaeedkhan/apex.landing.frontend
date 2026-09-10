'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

const LandingPageHome2nd = () => {
  const started = useRef(false)

  useEffect(() => {
    if (started.current) return
    started.current = true

    let cleanup: (() => void) | undefined
    let idleId: number | undefined
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const setup = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      gsap.registerPlugin(ScrollTrigger)

      const animation1 = gsap.timeline({
        scrollTrigger: {
          trigger: '#nftcontainer',
          start: '-100% top',
          end: '300px top',
        },
      })

      animation1
        .from('.nfts', {
          duration: 1.5,
          top: '50%',
          left: '50%',
          transformOrigin: 'center center',
        })
        .to('.nft-2', {
          duration: 0.5,
          rotate: 0,
          transformOrigin: 'center center',
        })
        .to(
          '.nft-3',
          {
            duration: 0.5,
            rotate: 0,
            transformOrigin: 'center center',
          },
          '<',
        )

      cleanup = () => {
        animation1.kill()
        ScrollTrigger.getAll().forEach((t) => t.kill())
      }
    }

    const schedule = () => {
      void setup()
    }

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(schedule, { timeout: 2500 })
    } else {
      timeoutId = setTimeout(schedule, 1200)
    }

    return () => {
      if (idleId !== undefined && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId)
      }
      if (timeoutId) clearTimeout(timeoutId)
      cleanup?.()
    }
  }, [])

  return (
    <div className="m-4 sm:m-0" id="nftcontainer">
      <div className="relative flex h-auto flex-col items-center rounded-[30px] bg-color-gray-1 p-4 px-4 text-white md:p-10 lg:min-h-[392px] lg:flex-row lg:items-start lg:p-12">
        <div className="relative top-[-75px] flex flex-shrink-0 flex-grow md:top-[-100px] lg:hidden">
          <Image
            src="/images/ipad-nft.webp"
            alt=""
            width={400}
            height={500}
          />
        </div>
        <div
          id="thirdCircle"
          className="w-full flex-shrink lg:max-w-[500px] xl:max-w-[716px]"
        >
          <p className="max-w-[468px] text-2xl font-semibold leading-[1.2] tracking-[-1.2px] text-white sm:text-[40px]">
            An NFT “you shall not PASS” without
          </p>
          <p className="mt-6 flex flex-col gap-2 text-sm leading-[22px] tracking-[-0.17px] text-color-gray-3">
            <span>
              Imagine owning an NFT that grants you access to an elite group of
              individuals with whom you can grow financially and personally. An
              NFT that provides real-life advantages in your daily life. Apex
              Order offers all this and more, with the goal of building a true
              global order on the blockchain where Apex Pass holders can grow in
              all aspects of life.
            </span>
            <span>
              Creating an empowering environment is a fundamental key to this
              journey, as we believe that we become the people we associate
              with. Hence, we aim to attract the best, bringing the entire
              community to unlimited growth, reaching their own APEX.
            </span>
          </p>
        </div>
        <div className="relative hidden h-80 flex-shrink-0 flex-grow lg:flex">
          <Image
            src="/images/nft-1.webp"
            alt=""
            width={140}
            height={140}
            className="nfts nft-1 absolute -top-[6rem] right-40"
          />
          <Image
            src="/images/nft-2.webp"
            alt=""
            width={192}
            height={192}
            className="nfts nft-2 absolute right-0 top-9"
          />
          <Image
            src="/images/nft-3.webp"
            alt=""
            width={208}
            height={208}
            className="nfts nft-3 absolute left-0 top-28"
          />
          <Image
            src="/images/nft-4.webp"
            alt=""
            width={140}
            height={140}
            className="nfts nft-4 absolute -bottom-20 right-12"
          />
        </div>
      </div>
    </div>
  )
}

export default LandingPageHome2nd
