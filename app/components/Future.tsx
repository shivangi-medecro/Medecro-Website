import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Future() {
  return (
    <div className="w-full py-14 font-outfit bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[64rem] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-6">
            {/* Left Content */}
            <div className="max-w-[17rem] lg:ml-12">
              <h2 className="text-[2.2rem] leading-[1.2] font-bold mb-5">
                <span className="text-[#231F20]">A Glimpse into<br />the </span>
                <span className="text-[#0316FF]">Future of<br />Healthcare</span>
              </h2>
              
              <p className="text-[#231F20] text-[0.925rem] mb-7">
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
            <div className="relative flex-1 w-full lg:w-auto lg:max-w-[34rem]">
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
    </div>
  )
}

export default Future
