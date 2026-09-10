import Image from 'next/image'
import React, { FC } from 'react'
import { HiCheckCircle } from 'react-icons/hi'
import { LiaCircle } from 'react-icons/lia'

interface Props {
  phase: number
  phaseState: number
  setPhaseState: React.Dispatch<React.SetStateAction<number>>
  description: string
}
const SinglePhase: FC<Props> = ({
  phase,
  phaseState,
  description,
}) => {
  return (
    <div className="col-span-2 flex flex-col gap-4 sm:col-span-1">
      <Image
        src={
          phaseState >= phase ? '/images/logo.png' : '/images/phase-logo.png'
        }
        alt="phase"
        width={36}
        height={36}
        className="h-9 w-9 object-cover"
      />
      <p className="flex items-center gap-4">
        {phaseState >= phase ? (
          <HiCheckCircle className="h-5 w-5 text-white lg:h-7 lg:w-7" />
        ) : (
          <span>
            <LiaCircle className="h-5 w-5 text-white/[0.4] lg:h-7 lg:w-7" />
          </span>
        )}
        <span className="sm:text:lg text-sm font-semibold text-white lg:text-[28]">
          Phase {phase}
        </span>
      </p>
      <hr />
      <p className="text-sm font-medium text-white sm:text-base lg:text-2xl">
        {description}
      </p>
    </div>
  )
}

export default SinglePhase
