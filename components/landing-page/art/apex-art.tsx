import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components'
import LazyVideo from '@/components/lazy-video'
import { ArrowRightIcon } from '@/components/icons'

const ApexArt = () => {
  return (
    <div className="mx-auto w-full max-w-[1204px] px-4">
      <div className="flex w-full items-center justify-center rounded-[40px] border border-color-gray-2/[0.08] bg-[url(/images/backgroung-image.webp)] bg-cover bg-center bg-no-repeat px-4 py-6 shadow-[0px_1px_208px_0px_rgba(255,255,255,0.03)] sm:py-12 lg:py-[74px]">
        <div className="relative w-full overflow-hidden">
          <LazyVideo
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/apex.mp4"
            ariaLabel="Apex Art showcase video"
          />
          <div className="relative z-10 mx-auto flex w-full flex-col gap-4 sm:gap-8 md:max-w-[640px] lg:max-w-[928px] lg:gap-16">
            <Image
              src="/images/logo.png"
              alt=""
              width={74}
              height={74}
              className="mx-auto h-[36px] w-[36px] object-cover md:h-[74px] md:w-[74px]"
            />
            <h2 className="back mx-auto w-full text-center text-[28px] font-semibold leading-normal tracking-[-1.2px] text-white sm:text-[48px] lg:text-[60px]">
              Apex Art
            </h2>
            <p className="text-center text-xs font-normal text-white sm:text-xl lg:text-2xl">
              The Apex Order collection is developed in collaboration with
              Filippo Ghisleri. Filippo is a freelance Digital Artist with a
              degree in Art Direction and Graphic Design from the University of
              Fine Arts in Brescia. He has collaborated with some of the biggest
              names in the Italian music scene, including Fedez, Vegas Jones,
              Dark Polo Gang, Giaime, and more. He has also entered the digital
              fashion market, creating advertising campaigns and 3D animations
              for international brands such as Armani, GCDS, Lipault, Pyrex,
              Disclaimer, Adidas x Y-3.
            </p>
            <Link
              href="https://apex-dashboard-org.vercel.app/dashboard"
              target="_blank"
            >
              <Button
                icon={<ArrowRightIcon className="h-6 w-6 text-current" />}
                className="mx-auto max-w-max"
              >
                Purchase Art
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApexArt
