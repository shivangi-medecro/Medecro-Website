'use client'
import Image from 'next/image'

function Statistics() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-36 relative">
        {/* Background design */}
        <div className="absolute -top-16  right-28 ">
          <Image
            src="/Statistics/rainbow.png"
            alt="Background design"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Heading */}
        <div className="mb-4">
          <h3 className="uppercase text-sm  text-[#231F20] leading-7 tracking-[0.4em]">Our Statistics</h3>
          <div className="flex items-center gap-2 max-w-[24rem]">
            <h2 className="text-4xl font-bold text-[#231F20] leading-tight">The impact of <span className="text-4xl font-bold text-[#0316FF]">AI in medical diagnostics</span></h2>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-4 gap-8 mt-20">
          {/* 90% Stat */}
          <div className="relative">
            <Image
              src="/statistics/blue-border.png"
              alt="Border"
              width={2}
              height={120}
              className="absolute left-0 top-0 h-full"
            />
            <div className="pl-8">
              <p className="text-4xl font-bold text-[#0316FF]">90%</p>
              <p className="text-sm text-[#231F20] mt-4">
                Hospitals are adopting AI for early diagnosis and remote monitoring.
              </p>
            </div>
          </div>

          {/* 70% Stat */}
          <div className="relative">
            <Image
              src="/statistics/green-border.png"
              alt="Border"
              width={2}
              height={120}
              className="absolute left-0 top-0 h-full"
            />
            <div className="pl-8">
              <p className="text-4xl font-bold text-[#00EF88]">70%</p>
              <p className="text-sm text-[#231F20] mt-4">
                Reduction in staffing costs achieved through AI automation.
              </p>
            </div>
          </div>

          {/* 40% Stat */}
          <div className="relative">
            <Image
              src="/statistics/blue-border.png"
              alt="Border"
              width={2}
              height={120}
              className="absolute left-0 top-0 h-full"
            />
            <div className="pl-8">
              <p className="text-4xl font-bold text-[#0316FF]">40%</p>
              <p className="text-sm text-[#231F20] mt-4">
                Reduction in missed fracture diagnoses through AI-powered analysis.
              </p>
            </div>
          </div>

          {/* 25% Stat */}
          <div className="relative">
            <Image
              src="/statistics/green-border.png"
              alt="Border"
              width={2}
              height={120}
              className="absolute left-0 top-0 h-full"
            />
            <div className="pl-8">
              <p className="text-4xl font-bold text-[#00EF88]">25%</p>
              <p className="text-sm text-[#231F20] mt-4">
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
