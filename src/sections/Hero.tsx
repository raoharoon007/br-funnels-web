import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-background px-4 py-14 sm:py-25 2xl:py-31.25">

      <div
        className="absolute -left-[10%] top-1/2 -translate-y-1/2 w-75 h-125 bg-gradient-main rounded-full sm:w-125 sm:h-175 opacity-30 blur-[120px] pointer-events-none z-0"

      />

      <div
        className="absolute -right-[10%] top-1/2 -translate-y-1/2 bg-gradient-main rounded-full w-75 h-125 sm:w-125 sm:h-175 opacity-30 blur-[120px] pointer-events-none z-0"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">

          <h1 className="text-[28px] font-semibold leading-tight text-background sm:text-5xl lg:text-[56px]">
            Turn Your Klaviyo Into 30–40% Of Your
            <span className="block text-gradient-main ">
              Shopify Revenue  In 90 Days
            </span>
          </h1>

          <p className="mt-6 max-w-[85%] sm:max-w-177.75 text-sm font-normal text-foreground sm:text-[20px] leading-relaxed">
            We build done-for-you email & SMS systems for DTC and eCommerce brands that drive consistent, predictable revenue  without relying on paid ads.
          </p>

          <div className="mt-10 2xl:mt-13.5 flex flex-row flex-wrap items-start justify-center gap-y-8 gap-x-4 sm:gap-4 w-full">
            <div className="w-[45%] sm:w-full sm:max-w-55 px-2 py-3">
              <div className="text-2xl font-bold text-center text-gradient-main sm:text-[32px]">38%</div>
              <div className="mt-1 text-xs sm:text-base text-center font-normal text-primary leading-tight">
                Avg. revenue lift across active clients 
              </div>
            </div>

            <div className="w-[45%] sm:w-full sm:max-w-55 px-2 py-3">
              <div className="text-2xl font-bold text-center text-gradient-main sm:text-[32px]">4.2x</div>
              <div className="mt-1 text-xs sm:text-base text-center font-normal text-primary leading-tight">
                Average ROI delivered in first 90 days 
              </div>
            </div>

            <div className="w-full sm:w-full sm:max-w-55 px-2 py-3">
              <div className="text-2xl font-bold text-center text-gradient-main sm:text-[32px]">120+</div>
              <div className="mt-1 text-xs sm:text-base text-center font-normal text-primary leading-tight">
                Email flows and funnels built to date   
              </div>
            </div>
          </div>

          <div className="mt-10 2xl:mt-12.5 flex flex-col items-center justify-center gap-4 w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link href="#contact" className="w-full sm:w-auto rounded-[14px] bg-gradient-horizontal px-6 py-3.5 sm:px-8 sm:py-4 cursor-pointer flex flex-row gap-2 items-center justify-center text-sm sm:text-base font-semibold text-background transition-transform active:scale-95">
                Get Your Free Email Audit
                <Image src="/assets/icons/Arrow.svg" alt="Arrow" width={20} height={20} className="brightness-0 invert" priority />
              </Link>

              <Link href="#case-studies" className="w-full sm:w-auto rounded-[14px] border border-primary bg-transparent cursor-pointer flex items-center justify-center px-6 py-3.5 sm:px-8.25 sm:py-4 text-sm sm:text-base font-semibold text-background transition-all hover:bg-white/5 active:scale-95">
                View Case Studies
              </Link>
            </div>

            <p className="text-sm text-white font-normal text-center max-w-md">
              No commitment required. We'll show you exactly where your revenue is leaking.
            </p>

            <p className="text-sm text-center font-semibold">
              ⚡<span className='text-gradient-main'>Only 3 free audit spots remaining this month</span>
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero