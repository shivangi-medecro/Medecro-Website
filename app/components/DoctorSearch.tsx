import React from 'react'
import Image from 'next/image'

function DoctorSearch() {
  return (
    <div className="w-full font-outfit relative">
      <div className=" absolute inset-0 bg-gradient-to-b from-[#CBE3FF]/80 to-white" />
      
      <div className="container max-w-[1400px] mx-auto px-6 max-md:py-20 py-20 max-lg:py-0 pb-52 max-lg:pb-52 max-md:pb-56 relative max-sm:px-4">
        {/* Main content wrapper */}
        <div className="flex items-center justify-between max-w-[1000px] mx-auto max-md:justify-center max-sm:flex-col">
          {/* Text Column */}
          <div className="max-w-[500px] max-lg:max-w-[440px] max-md:max-w-[300px] max-md:pr-2 max-sm:text-center max-sm:mx-auto max-sm:pr-0 max-sm:w-full">
            <h2 className="max-sm:hidden text-[2.75rem] max-lg:text-[2rem]  leading-[1.2] font-bold mb-3">
              <span className="text-[#231F20] max-md:text-[2.2rem]">Find the </span>
              <span className="text-[#0316FF] max-md:text-[2.2rem]">Right Doctor,</span>
              <br />
              <span className="text-[#231F20] max-md:text-[2.2rem]">Right Away</span>
            </h2>

            <h2 className="sm:hidden text-[2.75rem] max-lg:text-[2rem] text-[#231F20] max-md:text-[2.2rem] leading-[1.2] font-bold mb-3 max-sm:w-full max-sm:mx-auto">Find the
              <span className="text-[#0316FF] "> Right Doctor,</span>
              <br />
              Right Away
            </h2>

            
            
            <p className="text-[#231F20] text-base max-lg:text-sm max-md:text-sm mb-8 max-md:mb-0 max-lg:mb-6 opacity-80 max-md:w-[350px] max-sm:w-full max-sm:mx-auto">
              Search top-rated doctors by name, specialty, or location,
              and book appointments quickly and effortlessly.
            </p>

            <div className="space-y-4 md:block max-md:hidden">
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

          {/* Image Column */}
          <div className="max-sm:hidden relative w-[420px] h-[460px] max-md:w-[35%] max-md:h-[260px]">
            <Image
              src="/DoctorSearch/doctor.png"
              alt="Doctor"
              fill
              className="object-contain max-lg:ml-0 max-md:ml-4"
              priority
            />
          </div>
        </div>

        {/* Mobile Input Fields - displayed only on mobile */}
        <div className="hidden max-md:block w-full mx-auto max-w-[580px] max-md:mt-8 max-md:px-1">
          <div className="space-y-3">
            {/* Search Input */}
            <div className="bg-white rounded-md flex items-center px-4 max-lg:px-3 py-3 max-lg:py-2.5 shadow-sm">
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
            <div className="flex gap-3 max-sm:flex-col">
              {/* City Dropdown */}
              <div className="flex-1">
                <div className="bg-white rounded-md flex items-center px-4 max-lg:px-3 py-3 max-lg:py-2.5 shadow-sm cursor-pointer">
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
                <div className="bg-white rounded-md flex items-center px-4 max-lg:px-3 py-3 max-lg:py-2.5 shadow-sm cursor-pointer">
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
      </div>
    </div>
  )
}

export default DoctorSearch 