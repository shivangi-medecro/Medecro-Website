import React from 'react'
import Image from 'next/image'

function Solutions() {
  return (
    <div className="w-full py-20 font-outfit" style={{
      background: 'linear-gradient(180deg, #CBE3FF 0%, rgba(203, 227, 255, 0.5) 50%, rgba(255, 255, 255, 1) 100%)'
    }}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading Section */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-7">
          <span className="text-[#231F20]">Solutions for </span>
          <span className="text-[#0316FF]">Smarter Healthcare</span>
        </h2>
        
        {/* Subheading */}
        <p className="text-center text-gray-700 max-w-[33rem] mx-auto mb-16 text-sm">
          <span className="font-bold">Medecro.ai</span> offers solutions that empower healthcare professionals with AI-driven
          insights for improved decision-making and streamlined operations.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 max-w-[64rem] mx-auto">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center px-6 relative">
            <Image
              src="/solutions/disease.png"
              alt="Timely Disease Recognition"
              width={48}
              height={48}
              className="mb-4"
            />
            <h3 className="text-lg font-medium mb-2 w-40">Timely Disease Recognition</h3>
            <p className="text-gray-600 mb-4 text-xs">
              Early detection of diseases using India-specific AI models ensures better patient outcomes.
            </p>
            <a href="#" className="text-[#0316FF] text-sm underline decoration-[0.5px] underline-offset-8">Learn More</a>
            {/* Separator */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-4/5 bg-gray-200"></div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center px-6 relative">
            <Image
              src="/solutions/plus.png"
              alt="Seamless Integration"
              width={48}
              height={48}
              className="mb-4"
            />
            <h3 className="text-lg font-medium mb-2 w-40">Seamless Integration</h3>
            <p className="text-gray-600 mb-4 text-xs">
              Flexible AI solutions that adapt to your clinic&apos;s unique workflows and requirements.
            </p>
            <a href="#" className="text-[#0316FF] text-sm underline decoration-[0.5px] underline-offset-8">Learn More</a>
            {/* Separator */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-4/5 bg-gray-200"></div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center px-6 relative">
            <Image
              src="/solutions/hands.png"
              alt="Patient-Centric Innovation"
              width={48}
              height={48}
              className="mb-4"
            />
            <h3 className="text-lg font-medium mb-2 w-40">Patient-Centric Innovation</h3>
            <p className="text-gray-600 mb-4 text-xs">
              Personalized healthcare with AI recommendations and optimized operations.
            </p>
            <a href="#" className="text-[#0316FF] text-sm underline decoration-[0.5px] underline-offset-8">Learn More</a>
            {/* Separator */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-4/5 bg-gray-200"></div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center px-6">
            <Image
              src="/solutions/scope.png"
              alt="Accelerated Research & Development"
              width={48}
              height={48}
              className="mb-4 -mt-6"
            />
            <h3 className="text-lg font-medium mb-2 w-">Accelerated Research & Development</h3>
            <p className="text-gray-600 mb-4 text-xs text-center">
              Harness cutting-edge AI to expedite healthcare advancements and scientific discoveries.
            </p>
            <a href="#" className="text-[#0316FF] text-sm underline decoration-[0.5px] underline-offset-8">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solutions
