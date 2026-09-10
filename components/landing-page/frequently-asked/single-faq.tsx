'use client'
import React, { FC } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { Faq } from './faqs-data'

interface Props {
  faq: Faq
  isOpen: boolean
  onAccordionClick: (id: number) => void
}

const SingleFaq: FC<Props> = ({ faq, isOpen, onAccordionClick }) => {
  const toggleAccordion = () => {
    onAccordionClick(faq.id)
  }

  return (
    <div key={faq.id} className="faq-item flex flex-col gap-6">
      <div
        className={`faq-header flex cursor-pointer items-center justify-between rounded-full bg-color-gray-1 p-5 sm:p-8 ${
          isOpen ? 'bg-color-gray-1/90' : ''
        }`}
        onClick={toggleAccordion}
      >
        <p className="text-base font-semibold text-white sm:text-lg">
          {faq.question}
        </p>
        {isOpen ? (
          <FiMinus className="shrink-0 cursor-pointer text-base text-white" />
        ) : (
          <FiPlus className="shrink-0 cursor-pointer text-base text-white" />
        )}
      </div>

      <div
        className={`faq-content transition-max-height overflow-hidden ${
          isOpen
            ? 'max-h-[500px] duration-1000 ease-in-out'
            : 'max-h-0 duration-500 ease-in-out'
        }`}
      >
        <p className="p-4 text-sm font-normal leading-[22px] tracking-[-.14px] text-gray-600 sm:text-lg">
          {faq.answer}
        </p>
      </div>
    </div>
  )
}

export default SingleFaq
