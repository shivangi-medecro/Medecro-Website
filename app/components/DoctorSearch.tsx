import React from 'react'
import Image from 'next/image'

function DoctorSearch() {
  return (
    <div className="w-full font-outfit relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#CBE3FF]/80 to-white" />
      
      <div className="container mx-auto px-6 py-20 max-lg:py-0 pb-52 max-lg:pb-52 relative">
        <div className="flex items-center justify-between max-w-[1000px] mx-auto">
          <div className="max-w-[500px] max-lg:max-w-[440px] ">
            <h2 className="text-[2.75rem] max-lg:text-[2rem] leading-[1.2] font-bold mb-3">
              <span className="text-[#231F20]">Find the </span>
              <span className="text-[#0316FF]">Right Doctor,</span>
              <br />
              <span className="text-[#231F20]">Right Away</span>
            </h2>
            
            <p className="text-[#231F20] text-base max-lg:text-sm mb-8 max-lg:mb-6 opacity-80">
              Search top-rated doctors by name, specialty, or location,
              and book appointments quickly and effortlessly.
            </p>

            <div className="space-y-4">
              {/* Search Input */}
              <div className="bg-white rounded-md flex items-center px-4 max-lg:px-3 py-3.5 max-lg:py-2.5 shadow-sm">
                <Image 
                  src="/DoctorSearch/search.png" 
                  alt="Search"
                  width={20}
                  height={20}
                  className="mr-3 max-lg:w-[16px] max-lg:h-[16px]"
                />
                <input
                  type="text"
                  placeholder="Search doctors, clinics, hospitals, etc."
                  className="w-full outline-none text-[#231F20] placeholder:text-gray-400 text-base max-lg:text-sm"
                />
              </div>

              {/* Dropdowns Row */}
              <div className="flex gap-4 max-lg:gap-3">
                {/* City Dropdown */}
                <div className="flex-1">
                  <div className="bg-white rounded-md flex items-center px-4 max-lg:px-3 py-3.5 max-lg:py-2.5 shadow-sm cursor-pointer">
                    <Image 
                      src="/DoctorSearch/location.png" 
                      alt="Location"
                      width={20}
                      height={20}
                      className="mr-3 max-lg:w-[16px] max-lg:h-[16px]"
                    />
                    <span className="text-gray-400 text-base max-lg:text-sm">Select your city</span>
                    <Image 
                      src="/DoctorSearch/polygon.png" 
                      alt="Expand"
                      width={10}
                      height={10}
                      className="ml-auto max-lg:w-[8px] max-lg:h-[8px]"
                    />
                    
                  </div>
                </div>

                {/* Category Dropdown */}
                <div className="flex-1">
                  <div className="bg-white rounded-md flex items-center px-4 max-lg:px-3 py-3.5 max-lg:py-2.5 shadow-sm cursor-pointer">
                    <Image 
                      src="/DoctorSearch/special-doctor.png" 
                      alt="Category"
                      width={20}
                      height={20}
                      className="mr-3 max-lg:w-[16px] max-lg:h-[16px]"
                    />
                    <span className="text-gray-400 text-base max-lg:text-sm">Doctor&apos;s Category</span>
                    <Image 
                      src="/DoctorSearch/polygon.png" 
                      alt="Expand"
                      width={10}
                      height={10}
                      className="ml-auto max-lg:w-[8px] max-lg:h-[8px]"
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
              className="object-contain max-lg:ml-10"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorSearch 