'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import ReactCountryFlag from 'react-country-flag'
import { TopArrow } from '@/components/media'
import { teamData } from './team-data'
import clsx from 'clsx'
import { useResizeObserver, useWindowSize } from 'usehooks-ts'

// React 19 type compatibility with older library typings
const SlickSlider = Slider as unknown as React.ComponentType<Record<string, unknown>>
const CountryFlag = ReactCountryFlag as unknown as React.ComponentType<{
  countryCode: string
  style?: React.CSSProperties
}>

function SlickButtonFix({
  children,
  currentSlide: _currentSlide,
  slideCount: _slideCount,
  ...props
}: {
  children: React.ReactNode
  currentSlide?: number
  slideCount?: number
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}) {
  const isPrev =
    typeof props.className === 'string' && props.className.includes('slick-prev')

  return (
    <button
      type="button"
      {...props}
      aria-label={isPrev ? 'Previous team member' : 'Next team member'}
    >
      {children}
    </button>
  )
}

const CoreTeam = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { width = 1280 } = useWindowSize()
  const { height: divHeight = 0 } = useResizeObserver({
    ref: ref as React.RefObject<HTMLElement>,
    box: 'border-box',
  })

  const [activeSlide, setActiveSlide] = useState(0)

  const settings = {
    arrows: true,
    dots: false,
    autoplay: false,
    speed: 300,
    centerMode: false,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    useCss: true,
    afterChange: (current: number) => {
      setTimeout(() => setActiveSlide(current), 1)
    },
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
    nextArrow: (
      <SlickButtonFix>
        <TopArrow
          className={
            'slick-next !h-[60px] !w-[60px] sm:!h-[6rem] sm:!w-[6rem] lg:!h-[133px] lg:!w-[133px]'
          }
        />
      </SlickButtonFix>
    ),
    prevArrow: (
      <SlickButtonFix>
        <TopArrow
          className={
            'slick-prev !h-[60px] !w-[60px] sm:!h-[6rem] sm:!w-[6rem] lg:!h-[133px] lg:!w-[133px]'
          }
        />
      </SlickButtonFix>
    ),
  }

  return (
    <section className="coreTeam relative w-full">
      <div className="coreTeamContainer flex flex-col-reverse items-center gap-10 xl:flex-row xl:items-start xl:gap-20">
        <div
          ref={ref}
          className="description absolute top-[16rem] max-w-[450px] flex-shrink-0 sm:top-[16rem] md:top-[29rem] lg:top-[30rem] xl:relative xl:top-0"
        >
          {teamData.map((member, index) => {
            return member.id === activeSlide ? (
              <div key={index}>
                <div className="flex items-center justify-center gap-2 xl:justify-start">
                  <h2>{member.name}</h2>
                  <span className="flex flex-shrink-0 text-3xl">
                    <CountryFlag
                      countryCode={member.country_code}
                      style={{
                        fontSize: '1.5em',
                      }}
                    />
                  </span>
                </div>
                <div className="mx-auto mb-6 mt-2 flex w-fit items-center justify-center rounded-xl bg-[rgba(204_242_49/0.13)] px-4 py-3 text-sm font-medium text-white sm:text-base md:text-lg lg:text-xl xl:mx-0 xl:justify-start">
                  {member.role}
                </div>
                <ul className="flex flex-col gap-5">
                  {member.list.map((li, index) => (
                    <li
                      key={index}
                      className="text-sm text-white sm:text-base lg:text-lg"
                    >
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null
          })}
        </div>
        <div className="partner-slider-wp">
          <div className="container-fluid">
            <div
              className="custom-pad partner-slider pb-4 lg:pb-0"
              style={{
                height:
                  width >= 1280
                    ? `100%`
                    : width >= 768
                      ? `${divHeight + 110 + 490}px`
                      : `${divHeight + 110 + 250}px`,
              }}
            >
              <SlickSlider
                {...settings}
                className={`parent_slider h-full xl:pb-[10rem]`}
              >
                {teamData.map((member, index) => (
                  <div
                    key={index}
                    className={clsx(
                      'box w-full max-w-[370px]',
                      activeSlide === member.id && 'active',
                    )}
                  >
                    <div className="parslide">
                      <div className="partner-box core">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={370}
                          height={417}
                          sizes="(max-width: 768px) 80vw, 370px"
                          className="flex w-full flex-shrink-0 object-cover md:h-[417px] md:max-w-[370px]"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </SlickSlider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreTeam
