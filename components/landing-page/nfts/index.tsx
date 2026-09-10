import React from 'react'
import Section1st from './section-1st'
import Section2nd from './section-2nd'

const NFTSection = () => {
  return (
    <div
      id="nft"
      className="mx-auto mb-[100px] mt-20 flex w-full max-w-[1204px] flex-col gap-[54px] px-4 lg:mb-[200px]"
    >
      <Section1st />
      <Section2nd />
    </div>
  )
}

export default NFTSection
