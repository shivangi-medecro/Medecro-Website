'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

// Testimonial data
const testimonialData = [
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
  const [animation, setAnimation] = useState('')

  // Set the right arrow as active by default
  useEffect(() => {
    setActiveArrow('right');
  }, []);

  const handlePrev = () => {
    // Apply animation
    setAnimation('slide-out-right')
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1))
      setActiveArrow('left')
      setAnimation('slide-in-left')
      
      // Remove animation class after transition
      setTimeout(() => {
        setAnimation('')
      }, 300)
    }, 300)
  }

  const handleNext = () => {
    // Apply animation
    setAnimation('slide-out-left')
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1))
      setActiveArrow('right')
      setAnimation('slide-in-right')
      
      // Remove animation class after transition
      setTimeout(() => {
        setAnimation('')
      }, 300)
    }, 300)
  }

  return (
    <div className="w-full -mt-48 mb-[-16rem] max-lg:-mt-48 max-lg:mb-[-16rem]   relative z-10 ">
      <div className="container mx-auto px-6 max-lg:px-0">
        <div className="lg:max-w-[1100px] max-lg:max-w-[1000px] 2xl:max-w-[1300px] mx-auto bg-white rounded-2xl shadow-md py-16 2xl:py-20 px-36 max-lg:px-20">
          <div className="flex justify-between items-center gap-20 ">
            {/* Left Section - Title */}
            <div className='flex flex-col justify-center items-center'>
              <p className="text-sm max-lg:text-xs 2xl:text-lg tracking-[0.25em] uppercase mb-5 max-lg:mb-3">T E S T I M O N I A L S</p>
              <h2 className="text-[2.5rem] max-lg:text-[2rem] 2xl:text-[3rem] leading-[1.2] font-bold">
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
              <div className="flex justify-between items-center w-full mb-8">
                {/* Profile Images with fixed ring and comma */}
                <div className="profile-carousel relative h-14 2xl:h-16 w-[120px] 2xl:w-[138px]">
                  <div className="absolute left-0 top-0 w-14 h-14 2xl:w-16 2xl:h-16 rounded-full border-2 border-[#0316FF] z-20 pointer-events-none"></div>
                  
                  {/* Fixed comma icon */}
                  <div className="absolute left-9 top-10 2xl:left-11 2xl:top-12 z-30 pointer-events-none">
                    <Image
                      src="/Testimonials/comma.png"
                      alt="Quote"
                      width={18}
                      height={18}
                      className="2xl:w-[22px] 2xl:h-[22px]"
                      priority
                    />
                  </div>
                  
                  {/* Display profile images */}
                  <div className="relative w-full h-full">
                    {testimonialData.map((testimonial, index) => {
                      // Calculate positions for the 3 visible profile images
                      const diff = (index - currentIndex + testimonialData.length) % testimonialData.length;
                      
                      // Only show 3 images
                      if (diff > 2) return null;
                      
                      // Position offsets
                      const leftPosition = diff === 0 ? 0 : (diff === 1 ? 45 : 90);
                      
                      return (
                        <div 
                          key={testimonial.id}
                          className={`absolute transition-all duration-300 profile-pos-${diff}`}
                          style={{
                            left: `${leftPosition}px`,
                            zIndex: 15 - diff,
                            opacity: diff === 0 ? 1 : 0.7
                          }}
                        >
                          <div className="w-14 h-14 2xl:w-16 2xl:h-16 rounded-full overflow-hidden">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={56}
                              height={56}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Navigation Arrows - Right Side */}
                <div className="navigation-arrows flex gap-3 relative z-50">
                  <button 
                    onClick={handlePrev}
                    className="navigation-arrow flex items-center justify-center transition-all"
                  >
                    <Image
                      src="/Testimonials/arrow.png"
                      alt="Previous"
                      width={20}
                      height={18}
                      className=" 2xl:w-[24px] 2xl:h-[16px]"
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
                      className="transform rotate-180 2xl:w-[24px] 2xl:h-[16px]"
                      style={{
                        filter: activeArrow === 'right' ? 'brightness(0) saturate(100%) invert(19%) sepia(93%) saturate(5055%) hue-rotate(235deg) brightness(92%) contrast(108%)' : 'none',
                        opacity: activeArrow === 'right' ? 1 : 0.6
                      }}
                    />
                  </button>
                </div>
              </div>

              {/* Quote Content - Fixed height container */}
              <div className="relative overflow-hidden h-[155px] max-lg:h-[140px] 2xl:h-[165px]">
                <div 
                  className={`w-full transition-all duration-300 ${animation} h-full flex flex-col`}
                >
                  {/* Quote paragraph with fixed height and scrollable if needed */}
                  <div className="overflow-y-auto">
                    <p className="text-[#231F20] text-sm max-lg:text-xs 2xl:text-base leading-[1.6] mb-6 break-words">
                      &quot;{testimonialData[currentIndex].quote}&quot;
                    </p>
                  </div>
                  {/* Author info - slightly increased spacing */}
                  <div>
                    <h3 className="text-[#231F20] text-sm max-lg:text-xs 2xl:text-base font-semibold">
                      {testimonialData[currentIndex].name}
                    </h3>
                    <p className="text-[#231F20]/60 text-sm max-lg:text-xs 2xl:text-base">
                      {testimonialData[currentIndex].designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        .slide-out-left {
          transform: translateX(60%);
          opacity: 0;
        }
        .slide-in-right {
          transform: translateX(0%);
          opacity: 1;
        }
        .slide-out-right {
          transform: translateX(-60%);
          opacity: 0;
        }
        .slide-in-left {
          transform: translateX(0);
          opacity: 1;
        }
        
        @media (min-width: 1536px) {
          .profile-pos-1 {
            left: 52px !important;
          }
          .profile-pos-2 {
            left: 104px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Testimonials 