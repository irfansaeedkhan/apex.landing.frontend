'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Planets } from '@/assets/svgs'

const Ecosystem = () => {
  const planetsRef = useRef<HTMLDivElement | null>(null)
  const activeTitleRef = useRef('Apex Art')
  const [title, setTitle] = useState('Apex Art')
  const [contentKey, setContentKey] = useState(0)
  const [content, setContent] = useState<React.ReactNode>(
    <div>
      <p>
        We believe that personal and professional education is the foundation of
        every success story. Therefore, we offer all our members a digital
        academy covering a wide range of topics, from understanding NFT
        technology, trading, and professional network marketing to tax education
        and much more! Lessons will be both live and pre-recorded, allowing you
        to learn at your convenience. Expect continuous updates to our
        educational offerings as we refuse to set limits in the realm of
        learning.
      </p>
    </div>,
  )

  interface dynamicText {
    title: string
    content: React.ReactNode
  }

  // Function to map degrees to corresponding text
  const updateTitleAndContent = (degree: number) => {
    const degreeMapping: { [degree: string]: dynamicText } = {
      '0': {
        title: 'Apex Academy',
        content: (
          <div>
            <p>
              We believe that personal and professional education is the
              foundation of every success story. Therefore, we offer all our
              members a digital academy covering a wide range of topics, from
              understanding NFT technology, trading, and professional network
              marketing to tax education and much more! Lessons will be both
              live and pre-recorded, allowing you to learn at your convenience.
              Expect continuous updates to our educational offerings as we
              refuse to set limits in the realm of learning.
            </p>
          </div>
        ),
      },
      '40': {
        title: 'Apex Retreats',
        content: (
          <div>
            <p>
              Our live events, true masterminds, present a unique opportunity
              for NFT holders to personally connect with the finest members of
              the community and special guests who elevate the value of our
              retreats to new heights. At these gatherings, you can exchange
              ideas, receive valuable advice, and forge lasting connections with
              other brilliant minds while planning future project developments
              together.
            </p>
          </div>
        ),
      },
      '80': {
        title: 'Centher - Apex Home',
        content: (
          <div>
            <p>
              In collaboration with Centher, a revolutionary social-fi platform,
              Apex Order has created a virtual home for our community. Centher
              provides a dedicated space for members to share, discuss, and
              interact, fostering an engaging and vibrant community. This
              partnership ensures we channel all the essential DeFi community
              utilities while offering an exceptional experience.
            </p>
          </div>
        ),
      },
      '120': {
        title: 'Apex Community',
        content: (
          <div>
            <p>
              We know that a community&rsquo;s true value lies in its people,
              environment, and exchange of opinions. Our NFT community thrives
              with passionate and talented individuals from various business and
              life areas. Together, we create a stimulating environment where
              you can grow, learn, and collaborate with like-minded innovators.
            </p>
          </div>
        ),
      },
      '160': {
        title: 'Apex Give Back',
        content: (
          <div>
            <p>
              We aim to make a positive impact on the world. Through our charity
              program, we allocate a portion of our revenues to initiatives that
              promote the common good. By doing so, we contribute to improving
              the lives of the less fortunate, turning our project into an
              opportunity to create a positive impact.
            </p>
          </div>
        ),
      },
      '200': {
        title: 'Apex Rentverse',
        content: (
          <div>
            <p>
              Apex Order stands at the forefront of the future of business,
              offering a revolutionary service that allows for monthly profits
              to be derived from collecting rents for the management of offices
              in the Metaverse. With the advent of digitalization and the expansion
              of remote work, the need for virtual meeting spaces and offices in the
              Metaverse is growing exponentially. Companies are seeking innovative
              solutions to collaborate, communicate, and connect in a digital
              environment, making virtual offices not only desirable but necessary.
              Currently, this service is available only for the Chinese market and
              is utilized in a private Metaverse we have named Rentverse.
            </p>
          </div>
        ),
      },
      '240': {
        title: 'Apex Token (upcoming)',
        content: (
          <div>
            <p>
              We will soon introduce our token, creating an even more dynamic
              ecosystem for our NFT holders. The token will open up new
              possibilities and become a fundamental piece in the growth of Apex
              Order.
            </p>
          </div>
        ),
      },
      '280': {
        title: 'Apex Chart',
        content: (
          <div>
            <p>
              Apex Chart is an autonomous trading service designed for our NFT
              holders, allowing them to follow analyses from our expert trader
              and replicate their actions. It&rsquo;s not a signal room but
              access to the critical thinking of a professional trader who
              consistently shares market insights. Members also get access to a
              private chat to exchange opinions, ideas, and increase their
              know-how in the world of cryptocurrency trading.
            </p>
          </div>
        ),
      },
      '320': {
        title: 'Prospera',
        content: (
          <div>
            <p>
              Prospera is a project in partnership between Apex Order &
              Phintech, the pinnacle of financial prowess that molds economies
              and redefine prosperity.
            </p>
            <p>
              Prosperity can be achieved through a combination of education,
              innovation, hard work, effective governance, and equitable
              distribution of resources. This is the perfect sum of the trading
              strategies behind Prospera. <br />
              Discover more on{' '}
              <a
                href="https://app.centher.io/"
                target="_blank"
                className="text-white underline"
              >
                Centher.io!
              </a>
            </p>
          </div>
        ),
      },
      // Add more mappings as needed
    }
    //degree ranges for desktop view
    const degreeRangesDesktop = [
      { start: 0, end: 40, circleId: 'planets_svg__p1' },
      { start: 40, end: 80, circleId: 'planets_svg__p9' },
      { start: 80, end: 120, circleId: 'planets_svg__p8' },
      { start: 120, end: 160, circleId: 'planets_svg__p7' },
      { start: 160, end: 200, circleId: 'planets_svg__p6' },
      { start: 200, end: 240, circleId: 'planets_svg__p5' },
      { start: 240, end: 280, circleId: 'planets_svg__p4' },
      { start: 280, end: 320, circleId: 'planets_svg__p3' },
      { start: 320, end: 360, circleId: 'planets_svg__p2' },
    ]
    //degree ranges for mobile view
    const degreeRangesMobile = [
      { start: 0, end: 40, circleId: 'planets_svg__p4' },
      { start: 40, end: 80, circleId: 'planets_svg__p3' },
      { start: 80, end: 120, circleId: 'planets_svg__p2' },
      { start: 120, end: 160, circleId: 'planets_svg__p1' },
      { start: 160, end: 200, circleId: 'planets_svg__p9' },
      { start: 200, end: 240, circleId: 'planets_svg__p8' },
      { start: 240, end: 280, circleId: 'planets_svg__p7' },
      { start: 280, end: 320, circleId: 'planets_svg__p6' },
      { start: 320, end: 360, circleId: 'planets_svg__p5' },
    ]
    const isMobileView = window.innerWidth < 1024
    const degreeRanges = isMobileView ? degreeRangesMobile : degreeRangesDesktop

    const circle1 = document.querySelector(
      '#planets_svg__p1 circle:first-child',
    ) as SVGElement
    const circle2 = document.querySelector(
      '#planets_svg__p2 circle:first-child',
    ) as SVGElement
    const circle3 = document.querySelector(
      '#planets_svg__p3 circle:first-child',
    ) as SVGElement
    const circle4 = document.querySelector(
      '#planets_svg__p4 circle:first-child',
    ) as SVGElement
    const circle5 = document.querySelector(
      '#planets_svg__p5 circle:first-child',
    ) as SVGElement
    const circle6 = document.querySelector(
      '#planets_svg__p6 circle:first-child',
    ) as SVGElement
    const circle7 = document.querySelector(
      '#planets_svg__p7 circle:first-child',
    ) as SVGElement
    const circle8 = document.querySelector(
      '#planets_svg__p8 circle:first-child',
    ) as SVGElement
    const circle9 = document.querySelector(
      '#planets_svg__p9 circle:first-child',
    ) as SVGElement

    if (circle1) circle1.style.stroke = 'transparent'
    if (circle2) circle2.style.stroke = 'transparent'
    if (circle3) circle3.style.stroke = 'transparent'
    if (circle4) circle4.style.stroke = 'transparent'
    if (circle5) circle5.style.stroke = 'transparent'
    if (circle6) circle6.style.stroke = 'transparent'
    if (circle7) circle7.style.stroke = 'transparent'
    if (circle8) circle8.style.stroke = 'transparent'
    if (circle9) circle9.style.stroke = 'transparent'

    for (const range of degreeRanges) {
      if (degree >= range.start && degree < range.end) {
        const circle = document.querySelector(
          `#${range.circleId} circle:first-child`,
        ) as SVGElement

        if (circle) {
          circle.style.stroke = 'white'
        }

        const next = degreeMapping[range.start.toString()]
        if (next && next.title !== activeTitleRef.current) {
          activeTitleRef.current = next.title
          setTitle(next.title)
          setContent(next.content)
          setContentKey((k) => k + 1)
        }

        break
      }
    }
  }

  useEffect(() => {
    let cancelled = false
    let animation3: gsap.core.Timeline | null = null
    const el = planetsRef.current
    const onEnter = () => animation3?.pause()
    const onLeave = () => animation3?.play()

    const setup = async () => {
      const { gsap } = await import('gsap')
      if (cancelled) return

      animation3 = gsap.timeline()
      animation3.to('.planets', {
        duration: 60,
        rotation: 360,
        transformOrigin: 'center center',
        repeat: -1,
        ease: 'none',
        onUpdate: () => {
          const rotation = gsap.getProperty('.planets', 'rotation')
          const degree = ((Number(rotation) % 360) + 360) % 360
          updateTitleAndContent(degree)
        },
      })

      el?.addEventListener('mouseenter', onEnter)
      el?.addEventListener('mouseleave', onLeave)
    }

    void setup()

    return () => {
      cancelled = true
      animation3?.kill()
      el?.removeEventListener('mouseenter', onEnter)
      el?.removeEventListener('mouseleave', onLeave)
    }
  }, [])
  return (
    <div
      id="ecosystem"
      className="mx-auto h-[100vh] w-full max-w-[1440px] sm:h-[120vh] lg:h-auto"
    >
      <h2 className="line mx-auto flex w-full max-w-full flex-col gap-2 text-center text-[34px] font-bold leading-[42px] tracking-[-3px] md:text-[64px] md:leading-[72px]">
        <span className="back">Explore the Apex Order</span>
        <span className="back">Ecosystem</span>
      </h2>
      <div className="relative flex h-full w-full flex-col items-center gap-5 lg:h-[100vh] lg:flex-row">
        <div
          ref={planetsRef}
          className="relative h-full w-full overflow-hidden hover:cursor-pointer lg:max-w-[50%]"
        >
          <Planets className="planets absolute left-[50%] top-[0] w-full translate-x-[-50%] translate-y-[-50%] scale-150 sm:scale-100 lg:left-[0] lg:top-[50%] lg:h-[1000px] lg:w-[1000px] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:scale-95" />
          <Image
            src="/images/logo.png"
            alt=""
            width={150}
            height={150}
            className="absolute left-[50%] top-[13%] mx-auto h-[76px] w-[76px] translate-x-[-50%] object-cover lg:left-[15%] lg:top-[50%] lg:h-[150px] lg:w-[150px] lg:translate-y-[-50%]"
          />
          <Image
            src="/images/planet-bg-blur.webp"
            alt=""
            width={261}
            height={1109}
            className="absolute left-[-25px] top-[-30vh] z-50 hidden h-[170vh] w-auto lg:block"
          />
          <Image
            src="/images/planet-bg-blur-mobile1.webp"
            alt=""
            width={401}
            height={609}
            className="absolute left-[50%] top-[0] z-50 block w-full translate-x-[-50%] translate-y-[-50%] lg:hidden"
          />
        </div>
        <div className="mt-[-40px] h-full max-w-[627px] flex-grow overflow-hidden p-5 pb-5 lg:h-[40vh] lg:w-[50%]">
          <div key={contentKey} className="ecosystem-copy">
            <h2 className="w-full pb-5 text-left text-[20px] font-semibold leading-normal tracking-[-1.2px] text-white sm:text-[28px]">
              {title}
            </h2>
            <div className="text-sm font-normal text-color-gray-3 sm:text-xl">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecosystem
