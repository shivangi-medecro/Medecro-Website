'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    image: "/Testimonials/avatar1.png",
    quote: "Medecro.ai has completely transformed our clinic, revolutionizing the way we operate and care for our patients. With AI-driven insights, we've streamlined workflows, significantly reducing administrative burdens and saving hours every day.",
    name: "Dr. Rajasi Kumar",
    designation: "General Practitioner"
  },
  {
    id: 2,
    image: "/Testimonials/avatar2.png",
    quote: "The integration of AI technology has enhanced our diagnostic accuracy and patient care. The platform's intuitive interface makes it easy to manage appointments and maintain detailed patient records.",
    name: "Dr. Sarah Mitchell",
    designation: "Pediatric Specialist"
  },
  {
    id: 3,
    image: "/Testimonials/avatar3.png",
    quote: "Outstanding platform that has revolutionized our practice management. The automated scheduling and patient communication features have significantly improved our efficiency.",
    name: "Dr. James Wilson",
    designation: "Cardiologist"
  }
]

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full -mt-48 mb-[-16rem] relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-[1100px] mx-auto bg-white rounded-2xl shadow-md py-16 px-16">
          <div className="flex justify-between items-start gap-16">
            {/* Left Section - Title */}
            <div>
              <p className="text-xs tracking-[0.25em] uppercase mb-5">T E S T I M O N I A L S</p>
              <h2 className="text-[2.75rem] leading-[1.1] font-bold">
                <div className="text-[#231F20]">What Our</div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0316FF]">Clients</span>
                  <span className="text-[#231F20]">Think</span>
                </div>
                <div className="text-[#231F20]">About Us?</div>
              </h2>
            </div>

            {/* Right Section - Content */}
            <div className="flex-1">
              {/* Profile Images and Navigation */}
              <div className="flex justify-end mb-8">
                <div className="flex items-center">
                  <div className="flex mr-6">
                    {testimonials.map((testimonial, index) => (
                      <div 
                        key={testimonial.id}
                        className={`relative -ml-2 first:ml-0 ${
                          index === currentIndex ? 'z-10' : 'z-0'
                        }`}
                      >
                        <div className={`w-11 h-11 rounded-full overflow-hidden bg-gray-100 ${
                          index === currentIndex ? 'ring-[3px] ring-[#0316FF]' : ''
                        }`}>
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={44}
                            height={44}
                            className="object-cover"
                          />
                        </div>
                        {index === currentIndex && (
                          <div className="absolute -top-1 -right-1">
                            <Image
                              src="/Testimonials/comma.png"
                              alt="Quote"
                              width={18}
                              height={18}
                              priority
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={handlePrev}
                      className="opacity-50 hover:opacity-70 transition-opacity"
                    >
                      <Image
                        src="/Testimonials/arrow.png"
                        alt="Previous"
                        width={18}
                        height={18}
                        className="transform rotate-180"
                      />
                    </button>
                    <button 
                      onClick={handleNext}
                      className="opacity-50 hover:opacity-70 transition-opacity"
                    >
                      <Image
                        src="/Testimonials/arrow.png"
                        alt="Next"
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Quote Content */}
              <div>
                <p className="text-[#231F20] text-base leading-[1.6] mb-6">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h3 className="text-[#231F20] text-lg font-semibold">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-[#231F20]/60 text-base">
                    {testimonials[currentIndex].designation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials 