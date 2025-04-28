import React from 'react'
import Image from 'next/image'

function DoctorSearch() {
  return (
    <div className="w-full font-outfit relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#CBE3FF]/80 to-white" />
      
      <div className="container mx-auto px-6 py-20 pb-52 relative">
        <div className="flex items-center justify-between max-w-[1000px] mx-auto">
          <div className="max-w-[500px]">
            <h2 className="text-[2.75rem] leading-[1.2] font-bold mb-3">
              <span className="text-[#231F20]">Find the </span>
              <span className="text-[#0316FF]">Right Doctor,</span>
              <br />
              <span className="text-[#231F20]">Right Away</span>
            </h2>
            
            <p className="text-[#231F20] text-base mb-8 opacity-80">
              Search top-rated doctors by name, specialty, or location,
              and book appointments quickly and effortlessly.
            </p>

            <div className="space-y-4">
              {/* Search Input */}
              <div className="bg-white rounded-md flex items-center px-4 py-3.5 shadow-sm">
                <Image 
                  src="/DoctorSearch/search.png" 
                  alt="Search"
                  width={20}
                  height={20}
                  className="mr-3 "
                />
                <input
                  type="text"
                  placeholder="Search doctors, clinics, hospitals, etc."
                  className="w-full outline-none text-[#231F20] placeholder:text-gray-400 text-base"
                />
              </div>

              {/* Dropdowns Row */}
              <div className="flex gap-4">
                {/* City Dropdown */}
                <div className="flex-1">
                  <div className="bg-white rounded-md flex items-center px-4 py-3.5 shadow-sm cursor-pointer">
                    <Image 
                      src="/DoctorSearch/location.png" 
                      alt="Location"
                      width={20}
                      height={20}
                      className="mr-3 "
                    />
                    <span className="text-gray-400 text-base">Select your city</span>
                    <Image 
                      src="/DoctorSearch/polygon.png" 
                      alt="Expand"
                      width={10}
                      height={10}
                      className="ml-auto "
                    />
                    
                  </div>
                </div>

                {/* Category Dropdown */}
                <div className="flex-1">
                  <div className="bg-white rounded-md flex items-center px-4 py-3.5 shadow-sm cursor-pointer">
                    <Image 
                      src="/DoctorSearch/special-doctor.png" 
                      alt="Category"
                      width={20}
                      height={20}
                      className="mr-3 "
                    />
                    <span className="text-gray-400 text-base">Doctor&apos;s Category</span>
                    <Image 
                      src="/DoctorSearch/polygon.png" 
                      alt="Expand"
                      width={10}
                      height={10}
                      className="ml-auto "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-[420px] h-[460px]">
            <Image
              src="/DoctorSearch/doctor.png"
              alt="Doctor"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorSearch 