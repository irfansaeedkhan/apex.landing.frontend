import React from 'react'
import Header from '@/components/landing-page/header'
import LandingPageHome1st from '@/components/landing-page/home/landing-page-home-1st'
import DeferredBelowFold from '@/components/landing-page/deferred-below-fold'

export default function Home() {
  return (
    <main className="h-auto min-h-screen bg-color-dark-blue">
      <Header />
      <div className="mx-auto flex w-full max-w-[1204px] flex-col gap-[113px] py-11 md:py-[110px] lg:gap-16">
        <LandingPageHome1st />
      </div>
      <DeferredBelowFold />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var p=document.querySelector('.mobile-nav-panel');var t=document.getElementById('mobile-nav-toggle');if(!p||!t)return;p.addEventListener('click',function(e){if(e.target&&e.target.closest&&e.target.closest('a'))t.checked=false;});})();`,
        }}
      />
    </main>
  )
}
