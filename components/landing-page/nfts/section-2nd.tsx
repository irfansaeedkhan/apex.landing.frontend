import React from 'react'
import LazyVideo from '@/components/lazy-video'

const Section2nd = () => {
  return (
    <div className="flex w-full flex-col gap-5 lg:flex-row lg:gap-6">
      <div className="h-[588px] w-full rounded-[30px] bg-color-gray-2/[0.08] p-6 lg:max-w-[793px]">
        <div className="relative h-full w-full rounded-[30px] bg-black">
          <LazyVideo
            className="h-full w-full"
            src="/videos/centher-metaverse.mp4"
            ariaLabel="DeXa Biz License metaverse video"
          />
          <p className="absolute bottom-6 w-full text-center text-3xl font-semibold text-[#F7F7F8]">
            DeXa Biz License
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section2nd
