'use client'
import React, { useState } from 'react'
import { faqsData } from './faqs-data'
import SingleFaq from './single-faq'

const FrequentlyAsked = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const handleAccordionClick = (id: number) => {
    if (activeAccordion === id) {
      setActiveAccordion(null)
    } else {
      setActiveAccordion(id)
    }
  }
  return (
    <div
      id="faq"
      className="mx-auto mt-20 flex w-full max-w-[1204px] flex-col gap-[54px] px-4 pb-16 sm:pb-[110px]"
    >
      <h2 className="back mx-auto w-full text-center text-[28px] font-semibold leading-normal tracking-[-1.2px] text-white sm:max-w-[504px] sm:text-[48px] lg:text-[60px]">
        Frequently asked questions
      </h2>
      <div className="flex flex-col gap-4">
        {faqsData.map((faq) => {
          return (
            <SingleFaq
              faq={faq}
              key={faq.id}
              isOpen={faq.id === activeAccordion}
              onAccordionClick={handleAccordionClick}
            />
          )
        })}
      </div>
    </div>
  )
}

export default FrequentlyAsked
