'use client'
import React, { useState } from 'react'
import SinglePhase from './single-phase'
import { PhaseData } from './phase-data'

const PhaseSection = () => {
  const [phaseState, setPhaseState] = useState(2)
  return (
    <div className="grid w-full grid-cols-1 gap-7 rounded-[20px] border border-color-gray-2/[0.08] bg-color-gray-1 px-5 py-6 sm:gap-6 md:grid-cols-3 md:rounded-[30px] md:px-6 md:py-8 lg:gap-8 lg:px-[56px] lg:py-16">
      {PhaseData.map((phase, index) => (
        <SinglePhase
          key={index}
          phase={phase.phase}
          phaseState={phaseState}
          setPhaseState={setPhaseState}
          description={phase.description}
        />
      ))}
    </div>
  )
}

export default PhaseSection
