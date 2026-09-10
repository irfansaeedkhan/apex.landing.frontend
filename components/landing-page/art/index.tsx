import React from 'react'
import Partnership from './partnership'
import OurTeam from './our-team'
import ApexArt from './apex-art'

const ArtSection = () => {
  return (
    <div
      id="art"
      className="mx-auto flex w-full max-w-[1270px] flex-col gap-[80px] md:gap-[140px] lg:gap-[172px]"
    >
      <ApexArt />
      <OurTeam />
      <Partnership />
    </div>
  )
}

export default ArtSection
