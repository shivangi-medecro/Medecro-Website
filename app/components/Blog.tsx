'use client'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

// Duplicate blog posts to have more content for scrolling
const blogPosts = [
  {
    id: 1,
    date: "Feb 22, 2025",
    title: "How to Handle Dental Emergencies",
    image: "/Blog/blog1.png",
    category: "Patient Guide"
  },
  {
    id: 2,
    date: "Feb 08, 2025",
    title: "Teeth Sensitivity: Causes, Prevention, and Treatments",
    image: "/Blog/blog2.png",
    description: "Do hot or cold foods make you wince? Understand the common reasons behind tooth sensitivity and how you can manage it effectively.",
    category: "Patient Guide"
  },
  {
    id: 3,
    date: "Jan 30, 2025",
    title: "Importance of Dental Checkups: More Than Just Clean Teeth",
    image: "/Blog/blog3.png",
    category: "Patient Guide"
  },
  // Duplicated posts to show scrolling behavior
  {
    id: 4,
    date: "Feb 22, 2025",
    title: "How to Handle Dental Emergencies",
    image: "/Blog/blog1.png",
    category: "Patient Guide"
  },
  {
    id: 5,
    date: "Feb 08, 2025",
    title: "Teeth Sensitivity: Causes, Prevention, and Treatments",
    image: "/Blog/blog2.png",
    description: "Do hot or cold foods make you wince? Understand the common reasons behind tooth sensitivity and how you can manage it effectively.",
    category: "Patient Guide"
  },
  {
    id: 6,
    date: "Jan 30, 2025",
    title: "Importance of Dental Checkups: More Than Just Clean Teeth",
    image: "/Blog/blog3.png",
    category: "Patient Guide"
  }
]

function Blog() {
  return (
    <div className="w-full bg-[#1E1E1E] pt-80 max-lg:pt-80 pb-20 max-md:px-0">
      <div className="max-md:w-[92%] mx-auto  px-4 max-lg:px-0">
        <div className=" mx-auto ">
          {/* Header */}
          <div className="flex justify-between items-center mb-20">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-white mr-6">Blogs</h2>
              <Image
                src="/Blog/big-arrow.png"
                alt="View all blogs"
                width={144}
                height={144}
                className="w-36 h-auto"
              />
            </div>
            <div className="flex flex-col items-end">
              <span className="text-white text-sm font-medium">Check all</span>
              <div className="h-[3px] bg-[#00EF88] mt-1 w-full"></div>
            </div>
          </div>

          {/* Blog Posts Carousel */}
          <div className="relative blog-carousel-container">
            <div className="px-12 max-lg:px-0 max-md:px-3">
              <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={4}
                navigation={{
                  nextEl: '.blog-button-next',
                  prevEl: '.blog-button-prev',
                }}
                grabCursor={true}
                keyboard={{
                  enabled: true,
                }}
                loop={true}
                className="blog-swiper"
              >
                {blogPosts.map((post) => (
                  <SwiperSlide key={post.id} className="h-full">
                    <div className="group cursor-pointer h-full flex flex-col">
                      {/* Fixed height for title section to ensure alignment */}
                      <div className="space-y-1 h-32">
                        <p className="text-white text-sm mb-4">{post.date}</p>
                        <h3 className="text-xl font-semibold text-white leading-snug line-clamp-2 max-md:text-base">
                          {post.title}
                        </h3>
                      </div>
                      
                      {/* Image container - fixed aspect ratio */}
                      <div className="relative mb-6 w-full">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>

                      {/* Content below image */}
                      <div className="space-y-3 mt-auto">
                        <div className="flex items-center justify-between">
                          <span className="inline-block px-4 py-1.5 bg-transparent text-[#00EF88] text-sm rounded-3xl border border-[#00EF88]">
                            {post.category}
                          </span>
                          
                          {(post.id === 2 || post.id === 5) && (
                            <div className="flex items-center gap-2">
                              {/* <Image
                                src="/Blog/download.png"
                                alt="Download"
                                width={20}
                                height={20}
                              /> */}
                              <Image
                                src="/Blog/share.png"
                                alt="Share"
                                width={20}
                                height={20}
                              />
                            </div>
                          )}
                        </div>
                        
                        {post.description && (
                          <p className="text-white/80 text-sm max-md:text-xs leading-relaxed">
                            {post.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            {/* Custom Navigation with > and < symbols */}
            <div className="blog-button-prev absolute top-1/2 max-lg:top-[45%] left-0 max-md:-left-8 max-lg:-left-14 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/20 rounded-full cursor-pointer hover:bg-white/30 transition-all">
              <span className="text-white/70 text-xl font-medium">&lt;</span>
            </div>
            <div className="blog-button-next absolute max-lg:top-[45%] top-1/2 right-0 max-md:-right-8 max-lg:-right-14 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/20 rounded-full cursor-pointer hover:bg-white/30 transition-all">
              <span className="text-white/70 text-xl font-medium">&gt;</span>
            </div>

            {/* <div className="blog-button-prev absolute top-1/2 left-0 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/30 rounded-full cursor-pointer hover:bg-white/50 transition-all">
              <span className="text-gray-400 text-xl font-semibold">&lt;</span>
            </div>
            <div className="blog-button-next absolute top-1/2 right-0 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/30 rounded-full cursor-pointer hover:bg-white/50 transition-all">
              <span className="text-white/20 text-xl font-semibold">&gt;</span>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
