import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function HealthcarePower() {
  return (
    <div className="w-full py-14 2xl:py-20 font-outfit bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[64rem] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-12">
            {/* Left Image */}
            <div className="relative w-full lg:w-auto max-w-[17rem]">
              <Image
                src="/color-capsule.png"
                alt="Medecro Healthcare"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="lg:ml-6 max-w-[34rem] 2xl:max-w-[43rem]">
              <h2 className="text-[2.5rem] 2xl:text-5xl leading-[1.2] 2xl:leading-[1.2] font-bold mb-5">
                <span className="text-[#0316FF]">Powering the Future</span><br />
                <span className="text-[#231F20]">of Healthcare!</span>
              </h2>
              
              <p className="text-[#231F20] 2xl:text-xl font-medium text-[1rem] mb-4 2xl:mb-6">
                Medecro boosts efficiency for Healthcare Organizations, NGOs, Clinics, and
                Individuals with AI-powered automation. Streamline workflows, reduce admin tasks,
                and enhance outcomes—reclaim valuable time for care.
              </p>

              <p className="text-[#231F20] 2xl:text-xl font-semibold 2xl:font-bold text-[1.1rem] mb-4 2xl:mb-6">
                Join us in our journey and let&apos;s revolutionize healthcare.
              </p>

              <Link 
                href="#" 
                className="inline-flex items-center px-5 py-3 text-sm 2xl:text-base rounded-full bg-[linear-gradient(145deg,#00EF88,#0316FF)] text-white hover:opacity-80"
              >
                Get in touch with us
                <Image src="/capsule.png" alt="Contact" width={14} height={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HealthcarePower 