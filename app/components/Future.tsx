'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Future() {
  return (
    <div className="w-full py-14 max-sm:pt-4 font-outfit bg-white">
      {/* Original desktop version (unchanged) */}
      <div className="container mx-auto px-4 max-md:hidden">
        <div className="max-w-[64rem] 2xl:max-w-[80rem] mx-auto">
          <div className="flex flex-row items-center justify-center lg:gap-6">
            {/* Left Content */}
            <div className="max-w-[17rem] 2xl:max-w-[25rem] lg:ml-12">
              <h2 className="text-[2.2rem] 2xl:text-5xl leading-[1.2] 2xl:leading-[1.1] font-bold mb-5">
                <span className="text-[#231F20]">A Glimpse into<br />the </span>
                <span className="text-[#0316FF]">Future of<br />Healthcare</span>
              </h2>
              
              <p className="text-[#231F20] text-[0.9rem] 2xl:text-xl font-medium mb-7 font-outfit">
                Check how Medecro revolutionizes healthcare with AI-powered tools,
                seamless consultations, and automated workflows for better efficiency.
              </p>

              <Link 
                href="#" 
                className="inline-flex items-center px-6 py-3 text-[0.875rem] rounded-full bg-[linear-gradient(145deg,#00EF88,#0316FF)] text-white hover:opacity-80"
              >
                Book a Demo
                <Image src="/capsule.png" alt="Book Demo" width={14} height={14} className="ml-2" />
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative flex-1 w-full max-lg:max-w-[30rem] lg:w-auto lg:max-w-[34rem] 2xl:max-w-[40rem]">
              <div className="aspect-[16/10] relative rounded-2xl overflow-hidden">
                <Image
                  src="/future.png"
                  alt="Future of Healthcare"
                  fill
                  className="object-cover"
                />
                {/* Play Button Overlay */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[3.25rem] h-[3.25rem] bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[9px] border-l-[#0316FF] border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version (only visible on max-md screens) */}
      <div className="hidden max-md:block max-md:py-10">
        <div className="max-md:w-full max-md:px-20 max-sm:px-0">
          <div className="max-md:max-w-full max-md:flex max-md:flex-col max-md:items-center max-md:text-center">
            {/* Heading */}
            <div className="max-md:mb-4 max-md:w-full max-md:px-20 max-sm:w-[30rem]">
              <h2 className="max-md:max-w-full max-md:text-5xl max-md:text-[2rem] max-md:leading-[1.2] max-md:font-bold">
                <span className="max-md:text-[#231F20]">A Glimpse into the </span>
                <span className="max-md:text-[#0316FF]">Future of Healthcare</span>
              </h2>
            </div>
            
            {/* Description */}
            <div className="max-md:w-full max-md:px-20 max-sm:px-0 max-md:mb-5 max-sm:w-[25rem]">
              <p className="max-md:text-[#231F20] max-md:text-[0.95rem] max-md:font-medium max-sm:font-normal">
                Check how Medecro revolutionizes healthcare with AI-powered tools,
                seamless consultations, and automated workflows for better efficiency.
              </p>
            </div>

            {/* Video Preview Image - Full width with no horizontal margins */}
            <div className="max-md:w-full max-md:aspect-[16/10] max-md:relative  max-md:rounded-2xl max-md:overflow-hidden max-md:mb-8">
              <Image
                src="/future.png"
                alt="Future of Healthcare"
                fill
                className="max-md:object-cover"
              />
              {/* Play Button Overlay */}
              {/* <div className="max-md:absolute max-md:inset-0 max-md:flex max-md:items-center max-md:justify-center">
                <div className="max-md:w-[2.75rem] max-md:h-[2.75rem] max-md:bg-white max-md:rounded-full max-md:flex max-md:items-center max-md:justify-center max-md:cursor-pointer">
                  <div className="max-md:w-0 max-md:h-0 max-md:border-t-[6px] max-md:border-t-transparent max-md:border-l-[9px] max-md:border-l-[#0316FF] max-md:border-b-[6px] max-md:border-b-transparent max-md:ml-1"></div>
                </div>
              </div> */}
            </div>

            {/* CTA Button */}
            <Link 
              href="#" 
              className="max-md:inline-flex max-md:items-center max-md:px-6 max-md:py-3 max-md:rounded-full max-md:bg-gradient-to-r max-md:from-[#00EF88] max-md:to-[#0316FF] max-md:text-white"
            >
              <span className="max-md:font-medium max-md:text-[0.9rem]">Book a Demo</span>
              <Image src="/capsule.png" alt="Book Demo" width={14} height={14} className="max-md:ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Future
