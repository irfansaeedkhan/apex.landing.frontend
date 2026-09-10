import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TelegramIcon } from '@/components/icons'

const Footer = () => {
  return (
    <div className="w-full px-4 pb-4 sm:px-8 sm:pb-8 md:px-10 lg:pb-16">
      <div className="flex h-[290px] w-full flex-col items-center rounded-3xl bg-white sm:h-[315px] sm:rounded-[32px]">
        <div className="mx-auto flex h-[calc(100%-64px)] w-full max-w-[302px] flex-col items-center justify-center gap-8 sm:max-w-[343px]">
          <Image
            src="/images/logo-black.png"
            alt="logo"
            width={43}
            height={42}
            className="flex-shrink-0 cursor-pointer"
          />

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={'https://opensea.io/collection/apex-order-nft'}
              target="_blank"
              className="flex cursor-pointer items-center gap-2"
            >
              <Image
                src="/images/opensea-dark.svg"
                alt="logo"
                width={24}
                height={24}
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              <p className="text-color-dark-blue">Opensea</p>
            </Link>
            <Link
              href={'https://t.me/+Q8uc3-WJNjc5NmJk'}
              target="_blank"
              className="flex cursor-pointer items-center gap-2"
            >
              <TelegramIcon className="h-5 w-5 text-color-dark-blue sm:h-6 sm:w-6" />
              <p className="text-color-dark-blue">Telegram</p>
            </Link>
            <Link
              href={
                'https://app.centher.io/profile/0x571bc57d15e319b926b3b8fc67710c90a7591e63'
              }
              target="_blank"
              className="flex cursor-pointer items-center gap-2"
            >
              <Image
                src="/images/centher-dark.webp"
                alt="Centher"
                width={24}
                height={24}
                className="h-6 w-6 sm:h-7 sm:w-7"
              />
              <p className="text-color-dark-blue">Centher</p>
            </Link>
          </div>
        </div>
        <div className="flex h-16 w-full items-center justify-center rounded-b-3xl bg-color-light-gray text-color-dark-blue sm:rounded-b-[32px]">
          2023 Apex Order All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
