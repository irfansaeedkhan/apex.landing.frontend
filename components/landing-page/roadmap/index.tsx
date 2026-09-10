import React from 'react'
import PhaseSection from './phase-section'
import Section2nd from './section-2nd'

const RoadmapSection = () => {
  return (
    <div
      id="roadmap"
      className="mx-auto mb-[100px] mt-20 flex w-full max-w-[1204px] flex-col gap-[54px] px-4 lg:mb-[200px]"
    >
      <div>
        <h2 className="back mx-auto text-center text-[28px] font-semibold leading-normal tracking-[-1.2px] text-white sm:text-[48px] lg:mx-0 lg:text-[60px]">
          90 Days Roadmap
        </h2>
        <p className="mt-5 text-center text-sm font-normal text-color-gray-3 sm:text-xl">
          Here&apos;s what we have planned for the next 90 days.
        </p>
      </div>
      <PhaseSection />
      <Section2nd />
    </div>
  )
}

export default RoadmapSection
