import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function WhyUs() {
  return (
    <div className="relative w-full min-h-[400px] font-outfit overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/WhyUs/why-us.png" 
          alt="Background" 
          fill 
          className="object-cover" 
          priority
        />
      </div>
      
      {/* Gradient overlay - using linear gradient for precise control with darker colors */}
      <div className="absolute inset-0 z-10" 
        style={{ 
          background: 'linear-gradient(to bottom, rgba(0,220,150,0.65) 10%, rgba(0,190,150,0.65) 30%, rgba(0,100,170,0.70) 70%, rgba(0,50,180,0.70) 90%)' 
        }}
      ></div>
      
      {/* Content container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center justify-center  px-6">
          {/* Left content with heading */}
          <div className="flex flex-col items-center text-white lg:max-w-[380px] text-center ">
            <h2 className="text-4xl font-bold mb-10 text-center">Why Choose Medecro.ai?</h2>
            
            <Link 
              href="#contact" 
              className="inline-flex items-center px-4 py-2.5 bg-white text-black rounded-full text-xs hover:bg-opacity-80 transition-colors mr-4 hover:bg-white/80"
            >
              Contact Us to Learn More
              <Image 
                src="/WhyUs/capsule.png" 
                alt="Arrow" 
                width={16} 
                height={16} 
                className="ml-2" 
              />
            </Link>
          </div>
          
          {/* Right content with text in image border */}
          <div className="lg:max-w-[38rem] relative">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/WhyUs/rectangle.png" 
                alt="Border" 
                fill 
                className="object-fill" 
              />
            </div>
            <div className="relative z-10 p-10 text-white">
              <p className="text-xl leading-relaxed">
                Experience the transformative power of AI in healthcare with solutions tailored to your clinic&apos;s unique needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
