import React from 'react'
import CoreTeam from './team-slider'

const OurTeam = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1260px] flex-col items-center gap-10 px-4 lg:items-start">
      <div className="mx-auto flex w-full max-w-full flex-shrink-0 flex-col items-center gap-6 lg:items-start">
        <h2 className="back mx-auto w-full text-center text-[28px] font-semibold leading-normal tracking-[-1.2px] text-white sm:text-[48px] lg:text-[60px]">
          Our Team
        </h2>
        <p className="mx-auto max-w-[600px] text-center text-sm font-normal text-color-gray-3 sm:text-xl">
          We respect and honor the noble origin of the term DAO, which has been
          overused. Our aim at Apex Order is not to centralize power in a few
          individuals but to offer the opportunity (based on NFT levels) to vote
          on important decisions that drive the project forward.
        </p>
      </div>
      <div className="w-full">
        <CoreTeam />
      </div>
    </div>
  )
}

export default OurTeam
