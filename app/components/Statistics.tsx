'use client'
import Image from 'next/image'

function Statistics() {
  return (
    <section className="bg-white py-28 max-sm:py-28 2xl:py-32 max-md:py-16 max-md:flex max-md:justify-center max-md:w-full">
      <div className="container mx-auto px-6 lg:px-36 2xl:px-52 relative max-md:container max-md:px-4 max-md:mx-auto max-md:flex max-md:flex-col max-md:items-center max-md:w-full">
        {/* Background design */}
        <div className="absolute -top-16 2xl:-top-20 right-28 2xl:right-40 max-lg:-right-12 max-md:absolute max-md:-right-32 max-md:-top-16 max-sm:-right-6 max-sm:-top-32 ">
          <Image
            src="/Statistics/rainbow.png"
            alt="Background design"
            width={400}
            height={400}
            className="object-contain 2xl:w-[30rem] max-md:w-[16rem] max-md:h-[16rem]"
          />
        </div>

        {/* Heading */}
        <div className="mb-4 max-md:mb-8 max-md:z-10 max-md:relative  max-md:w-full max-md:-ml-32 max-sm:-ml-0 ">
          <h3 className="uppercase text-sm 2xl:text-base text-[#231F20] 2xl:leading-10 leading-7 tracking-[0.4em]">Our Statistics</h3>
          <div className="flex items-center gap-2 max-w-[24rem] 2xl:max-w-[30rem] max-md:flex max-md:justify-center max-md:max-w-full">
            <h2 className="text-4xl 2xl:text-5xl font-bold text-[#231F20] leading-tight">The impact of <span className="text-4xl 2xl:text-5xl font-bold text-[#0316FF]">AI in medical diagnostics</span></h2>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid max-md:grid-cols-2 grid-cols-4 gap-8 mt-20 2xl:mt-32 max-sm:gap-4  max-md:gap-20 max-md:mt-12 max-md:w-[35rem] max-sm:w-[25rem] max-md:justify-items-center max-md:mx-auto max-md:-ml-20 max-sm:-ml-0">
          {/* 90% Stat */}
          <div className="relative max-md:w-full">
            <Image
              src="/statistics/blue-border.png"
              alt="Border"
              width={2}
              height={120}
              className="absolute left-0 top-0 h-full 2xl:h-44"
            />
            <div className="pl-8">
              <p className="text-4xl font-bold text-[#0316FF]">90%</p>
              <p className="text-sm 2xl:text-base text-[#231F20] mt-4">
                Hospitals are adopting AI for early diagnosis and remote monitoring.
              </p>
            </div>
          </div>

          {/* 70% Stat */}
          <div className="relative max-md:w-full">
            <Image
              src="/statistics/green-border.png"
              alt="Border"
              width={2}
              height={120}
              className="absolute left-0 top-0 h-full 2xl:h-44"
            />
            <div className="pl-8">
              <p className="text-4xl font-bold text-[#00EF88]">70%</p>
              <p className="text-sm 2xl:text-base text-[#231F20] mt-4">
                Reduction in staffing costs achieved through AI automation.
              </p>
            </div>
          </div>

          {/* 40% Stat */}
          <div className="relative max-md:w-full">
            <Image
              src="/statistics/blue-border.png"
              alt="Border"
              width={2}
              height={120}
              className="absolute left-0 top-0 h-full 2xl:h-44"
            />
            <div className="pl-8">
              <p className="text-4xl font-bold text-[#0316FF]">40%</p>
              <p className="text-sm 2xl:text-base text-[#231F20] mt-4">
                Reduction in missed fracture diagnoses through AI-powered analysis.
              </p>
            </div>
          </div>

          {/* 25% Stat */}
          <div className="relative max-md:w-full">
            <Image
              src="/statistics/green-border.png"
              alt="Border"
              width={2}
              height={120}
              className="absolute left-0 top-0 h-full 2xl:h-44"
            />
            <div className="pl-8">
              <p className="text-4xl font-bold text-[#00EF88]">25%</p>
              <p className="text-sm 2xl:text-base text-[#231F20] mt-4">
                Increase in resource utilization efficiency with AI-driven workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics
