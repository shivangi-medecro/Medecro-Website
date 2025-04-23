'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    image: "/Testimonials/avatar1.jpg",
    quote: "Medecro.ai has completely transformed our clinic, revolutionizing the way we operate and care for our patients. With AI-driven insights, we've streamlined workflows, significantly reducing administrative burdens and saving hours every day.",
    name: "Dr. Rajasi Kumar",
    designation: "General Practitioner"
  },
  {
    id: 2,
    image: "/Testimonials/avatar2.jpg",
    quote: "The integration of AI technology has enhanced our diagnostic accuracy and patient care. The platform's intuitive interface makes it easy to manage appointments and maintain detailed patient records.",
    name: "Dr. Sarah Mitchell",
    designation: "Pediatric Specialist"
  },
  {
    id: 3,
    image: "/Testimonials/avatar3.jpg",
    quote: "Outstanding platform that has revolutionized our practice management. The automated scheduling and patient communication features have significantly improved our efficiency.",
    name: "Dr. James Wilson",
    designation: "Cardiologist"
  }
]

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeArrow, setActiveArrow] = useState<'left' | 'right' | null>(null)

  // Set the right arrow as active by default
  useEffect(() => {
    setActiveArrow('right');
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setActiveArrow('left')
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setActiveArrow('right')
  }

  return (
    <div className="w-full -mt-48 mb-[-16rem] relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-[1100px] mx-auto bg-white rounded-2xl shadow-md py-16 px-36">
          <div className="flex justify-between items-start gap-20">
            {/* Left Section - Title */}
            <div>
              <p className="text-sm tracking-[0.25em] uppercase mb-5">T E S T I M O N I A L S</p>
              <h2 className="text-[2.5rem] leading-[1.1] font-bold">
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
              {/* Profile Images and Navigation - Now positioned at opposite corners */}
              <div className="flex justify-between items-center w-full mb-8">
                {/* Profile Images with fixed ring and comma */}
                <div className="profile-carousel relative h-14 w-[120px]">
                  {/* Fixed blue ring for active image */}
                  <div className="absolute left-0 top-0 w-14 h-14 rounded-full border-2 border-[#0316FF] z-20 pointer-events-none"></div>
                  
                  {/* Fixed comma icon */}
                  <div className="absolute left-9 top-10 z-30 pointer-events-none">
                    <Image
                      src="/Testimonials/comma.png"
                      alt="Quote"
                      width={18}
                      height={18}
                      priority
                    />
                  </div>
                  
                  {/* Display 3 profile images */}
                  <div className="relative w-full h-full">
                    {testimonials.map((testimonial, index) => {
                      // Calculate positions for the 3 visible profile images
                      const diff = (index - currentIndex + testimonials.length) % testimonials.length;
                      
                      // Only show 3 images (current, next, and next+1)
                      if (diff > 2) return null;
                      
                      // Position offset - adjust for 20% overlap
                      // Each image is 56px wide, so 20% overlap means shift by ~45px (56px - 20%)
                      const leftPosition = diff === 0 ? 0 : (diff === 1 ? 45 : 90);
                      
                      return (
                        <div 
                          key={testimonial.id}
                          className="absolute transition-all duration-300"
                          style={{
                            left: `${leftPosition}px`,
                            zIndex: 15 - diff, // Current image has highest z-index
                            opacity: diff === 0 ? 1 : 0.7 // Current image 100% visible, others faded
                          }}
                        >
                          <div className="w-14 h-14 rounded-full overflow-hidden">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={56}
                              height={56}
                              className="object-cover w-full h-full"
                              style={{ width: '100%', height: '100%' }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Navigation Arrows - Right Side */}
                <div className="navigation-arrows flex gap-3">
                  <button 
                    onClick={handlePrev}
                    className="navigation-arrow flex items-center justify-center transition-all"
                  >
                    <Image
                      src="/Testimonials/arrow.png"
                      alt="Previous"
                      width={20}
                      height={18}
                      style={{
                        filter: activeArrow === 'left' ? 'brightness(0) saturate(100%) invert(19%) sepia(93%) saturate(5055%) hue-rotate(235deg) brightness(92%) contrast(108%)' : 'none',
                        opacity: activeArrow === 'left' ? 1 : 0.6
                      }}
                    />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="navigation-arrow flex items-center justify-center transition-all"
                  >
                    <Image
                      src="/Testimonials/arrow.png"
                      alt="Next"
                      width={20}
                      height={18}
                      className="transform rotate-180"
                      style={{
                        filter: activeArrow === 'right' ? 'brightness(0) saturate(100%) invert(19%) sepia(93%) saturate(5055%) hue-rotate(235deg) brightness(92%) contrast(108%)' : 'none',
                        opacity: activeArrow === 'right' ? 1 : 0.6
                      }}
                    />
                  </button>
                </div>
              </div>

              {/* Quote Content */}
              <div>
                <p className="text-[#231F20] text-sm leading-[1.6] mb-6">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h3 className="text-[#231F20] text-sm font-semibold">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-[#231F20]/60 text-sm">
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