'use client'
import React, { useState } from 'react'
import Image from 'next/image'

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
  }
]

function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === blogPosts.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full bg-[#1E1E1E] pt-80 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-20">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-white mr-6 ">Blogs</h2>
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

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-3 gap-8 pl-40">
            {blogPosts.map((post, index) => (
              <div key={post.id} className="group cursor-pointer">
                {/* Date and Title above image */}
                <div className="space-y-4 mb-4">
                  <p className="text-white text-sm mb-4">{post.date}</p>
                  <h3 className="text-xl font-semibold text-white leading-snug">
                    {post.title}
                  </h3>
                </div>
                
                {/* Image container */}
                <div className="relative mb-6">
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
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-4 py-1.5 bg-transparent text-[#00EF88] text-sm rounded-3xl border border-[#00EF88]">
                      {post.category}
                    </span>
                    
                    {post.id === 2 && (
                      <div className="flex items-center gap-2">
                        <Image
                          src="/Blog/download.png"
                          alt="Download"
                          width={20}
                          height={20}
                        />
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
                    <p className="text-white/80 text-sm leading-relaxed">
                      {post.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
