import React from 'react'
import Image from 'next/image'
import { Button } from '@/components'
import Link from 'next/link'
import { ArrowRightIcon, TelegramIcon } from '@/components/icons'

const text =
  'cool-link px-4 py-1.5 text-base font-medium leading-[22px] text-color-gray-3 cursor-pointer hover:text-white'

const mobileLinks = [
  ['#home', 'Home'],
  ['#nft', 'NFT'],
  ['#roadmap', '90 Days Roadmap'],
  ['#ecosystem', 'Apex Order Ecosystem'],
  ['#art', 'Apex Art'],
  ['#faq', 'FAQ'],
] as const

/** Fully server-rendered header — CSS checkbox menu, zero client JS. */
function Header() {
  return (
    <nav className="mobile-nav-root fixed left-0 top-0 z-[100] w-full bg-color-dark-purple/60 px-4 backdrop-blur-[8px] lg:h-[88px] lg:p-3 lg:px-10">
      <div className="maxWidth mx-auto flex w-full flex-wrap items-center justify-between py-4 lg:p-4">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Apex Order"
            width={40}
            height={44}
            priority
            className="h-[34px] w-8 flex-shrink-0 cursor-pointer lg:h-11 lg:w-10"
          />
        </Link>

        <div className="hidden items-center lg:flex">
          {mobileLinks.map(([href, label]) => (
            <a key={href} href={href} className={text}>
              {label}
            </a>
          ))}
        </div>

        <Link
          href="https://apex-dashboard-org.vercel.app/dashboard"
          target="_blank"
          className="hidden lg:flex"
        >
          <Button>Purchase NFT</Button>
        </Link>

        <input
          id="mobile-nav-toggle"
          type="checkbox"
          className="peer sr-only"
          aria-label="Toggle main menu"
        />
        <label
          htmlFor="mobile-nav-toggle"
          className="accent-themeDark inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg p-2 text-lg lg:hidden"
        >
          <svg
            className="mobile-nav-open-icon h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
          <svg
            className="mobile-nav-close-icon hidden h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>

        <div className="mobile-nav-panel z-50 hidden w-full peer-checked:flex lg:!hidden">
          <ul className="mt-4 flex min-h-[90vh] w-full flex-col items-center justify-between p-4 pt-12">
            <div className="items-left flex w-full flex-col gap-3">
              {mobileLinks.map(([href, label]) => (
                <a key={href} href={href} className={`${text} text-white`}>
                  {label}
                </a>
              ))}
              <Link
                href="https://apex-dashboard-org.vercel.app/dashboard"
                target="_blank"
                className="pt-7"
              >
                <Button
                  icon={<ArrowRightIcon className="h-6 w-6 text-current" />}
                  className="mx-auto max-w-max"
                >
                  Enter Apex Now
                </Button>
              </Link>
            </div>
            <div className="flex flex-col gap-7 text-xs text-color-gray-3">
              <div className="flex flex-wrap items-center justify-center text-center">
                <p className="inline-block font-normal lg:text-lg">
                  {/* Round 1: was hardcoded 2023. */}
                  &copy; {new Date().getFullYear()} Apex Order All rights
                  reserved.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="#"
                  className="flex cursor-pointer items-center gap-2"
                >
                  <Image
                    src="/images/opensea-grey.svg"
                    alt=""
                    width={26}
                    height={26}
                    className="h-7 w-7"
                  />
                  <p>Opensea</p>
                </Link>
                <Link
                  href="#"
                  className="flex cursor-pointer items-center gap-2"
                >
                  <TelegramIcon className="h-7 w-7 text-color-gray-3" />
                  <p>Telegram</p>
                </Link>
                <Link
                  href="#"
                  className="flex cursor-pointer items-center gap-2"
                >
                  <Image
                    src="/images/centher-grey.webp"
                    alt=""
                    width={26}
                    height={26}
                    className="h-8 w-8"
                  />
                  <p>Centher</p>
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
