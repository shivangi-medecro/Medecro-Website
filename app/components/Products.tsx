import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Products() {
  return (
    <div className="w-full py-20 font-outfit bg-white max-md:py-10 overflow-x-hidden">
      {/* Desktop container (hidden on mobile) */}
      <div className="container mx-auto px-4 max-md:hidden">
        <div className="max-w-[64rem] mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-[#231F20] text-sm 2xl:text-xl tracking-[0.15em] uppercase mb-3">O U R &nbsp;&nbsp; P R O D U C T S</h2>
            <div className="w-[90%] max-w-[900px] h-[1px] bg-gray-300 mx-auto"></div>
          </div>

          {/* Products Grid - Only visible on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Product 1 */}
            <div className="text-center flex flex-col items-center">
              <div className="-mt-4 mb-10 w-[285px] h-[285px] max-lg:w-[220px] max-lg:h-[220px] relative">
                <Image
                  src="/products/product1.png"
                  alt="Your Practice, Your Control"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#231F20] text-3xl max-lg:text-2xl font-bold mb-2">Your Practice,<br />Your Control</h3>
              <p className="text-[#231F20] text-sm max-lg:text-xs mb-4">
                An all-in-one platform for<br />clinic management
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center px-5 py-3 max-lg:px-4 max-lg:py-2 text-sm max-lg:text-xs rounded-full bg-[linear-gradient(145deg,#00EF88,#0316FF)] text-white hover:opacity-80"
              >
                Book a Demo
                <Image src="/capsule.png" alt="Book Demo" width={14} height={14} className="ml-2" />
              </Link>
            </div>

            {/* Product 2 */}
            <div className="text-center flex flex-col items-center">
              <div className="-mt-4 mb-8 ml-6 w-[300px] h-[300px] max-lg:w-[230px] max-lg:h-[230px] relative">
                <Image
                  src="/products/product2.png"
                  alt="Care at Your Fingertips"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#231F20] text-3xl max-lg:text-2xl font-bold mb-2">Care at Your<br />Fingertips</h3>
              <p className="text-[#231F20] text-sm max-lg:text-xs mb-4">
                Empowering doctors<br />on the go Experience
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center px-5 py-3 max-lg:px-4 max-lg:py-2 text-sm max-lg:text-xs rounded-full bg-[linear-gradient(145deg,#00EF88,#0316FF)] text-white hover:opacity-80"
              >
                Download the App
                <Image src="/capsule.png" alt="Download" width={14} height={14} className="ml-2" />
              </Link>
            </div>

            {/* Product 3 */}
            <div className="text-center flex flex-col items-center">
              <div className="mb-10 w-[280px] h-[275px] max-lg:w-[215px] max-lg:h-[215px] relative">
                <Image
                  src="/products/product3.png"
                  alt="Where Patients Find You"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#231F20] text-3xl max-lg:text-2xl font-bold mb-2">Where Patients<br />Find You</h3>
              <p className="text-[#231F20] text-sm max-lg:text-xs mb-4">
                Improving patient<br />experiences
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center px-5 py-3 max-lg:px-4 max-lg:py-2 text-sm max-lg:text-xs rounded-full bg-[linear-gradient(145deg,#00EF88,#0316FF)] text-white hover:opacity-80"
              >
                Download the App
                <Image src="/capsule.png" alt="Download" width={14} height={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Products Layout - Only visible on max-md screens */}
      <div className="hidden max-md:block w-full max-md:mx-auto">
        {/* Mobile Heading */}
        <div className="text-center mb-8">
          <h2 className="text-[#231F20] text-sm tracking-[0.15em] uppercase mb-3">O U R &nbsp;&nbsp; P R O D U C T S</h2>
          <div className="w-[90%] h-[1px] bg-gray-300 mx-auto"></div>
        </div>

        {/* Mobile Products Container - Centers all products */}
        <div className="flex flex-col items-center px-4 max-sm:px-2">
          {/* Product 1 */}
          <div className="flex mb-20 w-full justify-center max-sm:flex-col max-sm:items-center max-sm:mb-12">
            <div className="w-[40%] flex justify-end max-sm:w-full max-sm:justify-center max-sm:mb-4">
              <div className="max-sm:flex max-sm:justify-center">
                <Image
                  src="/products/product1.png"
                  alt="Your Practice, Your Control"
                  width={300}
                  height={300}
                  className="object-contain z-10 max-sm:w-[200px] max-sm:h-[200px]"
                />
              </div>
            </div>
            <div className="w-[40%] flex flex-col justify-center max-sm:w-full max-sm:items-center">
              <h3 className="text-[#231F20] text-[30px] leading-tight font-bold mb-3 text-right max-sm:text-center">Your Practice, Your<br />Control</h3>
              <p className="text-[#231F20] text-[18px] mb-5 text-right max-sm:text-center">
                An all-in-one platform for clinic<br />management
              </p>
              <Link 
                href="#" 
                className="inline-flex self-end items-center px-5 py-2.5 text-[16px] rounded-full bg-gradient-to-r from-[#00EF88] to-[#0316FF] text-white max-sm:self-center"
              >
                Book a Demo
                <Image src="/capsule.png" alt="Book Demo" width={18} height={18} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex mb-20 w-full flex-row-reverse justify-center ml-14 max-sm:flex-col max-sm:items-center max-sm:mb-12 max-sm:ml-0">
            <div className="w-[40%] flex justify-start max-sm:w-full max-sm:justify-center max-sm:mb-4">
              <div className="max-sm:flex max-sm:justify-center">
                <Image
                  src="/products/product2.png"
                  alt="Care at Your Fingertips"
                  width={300}
                  height={300}
                  className="object-contain z-10 max-sm:w-[200px] max-sm:h-[200px]"
                />
              </div>
            </div>
            <div className="w-[40%] flex flex-col justify-center max-sm:w-full max-sm:items-center">
              <h3 className="text-[#231F20] text-[30px] leading-tight font-bold mb-3 text-left max-sm:text-center">Care at Your<br />Fingertips</h3>
              <p className="text-[#231F20] text-[18px] mb-5 text-left max-sm:text-center">
                Empowering doctors on the go<br />Experience
              </p>
              <Link 
                href="#" 
                className="inline-flex self-start items-center px-5 py-2.5 text-[16px] rounded-full bg-gradient-to-r from-[#00EF88] to-[#0316FF] text-white max-sm:self-center"
              >
                Download the App
                <Image src="/capsule.png" alt="Download" width={18} height={18} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Product 3 */}
          <div className="flex mb-10 w-full justify-center max-sm:flex-col max-sm:items-center">
            <div className="w-[40%] flex justify-end max-sm:w-full max-sm:justify-center max-sm:mb-4">
              <div className="max-sm:flex max-sm:justify-center">
                <Image
                  src="/products/product3.png"
                  alt="Where Patients Find You"
                  width={300}
                  height={300}
                  className="object-contain z-10 max-sm:w-[200px] max-sm:h-[200px]"
                />
              </div>
            </div>
            <div className="w-[40%] flex flex-col justify-center max-sm:w-full max-sm:items-center">
              <h3 className="text-[#231F20] text-[30px] leading-tight font-bold mb-3 text-right max-sm:text-center">Where Patients<br />Find You</h3>
              <p className="text-[#231F20] text-[18px] mb-5 text-right max-sm:text-center">
                Improving patient<br />experiences
              </p>
              <Link 
                href="#" 
                className="inline-flex self-end items-center px-5 py-2.5 text-[16px] rounded-full bg-gradient-to-r from-[#00EF88] to-[#0316FF] text-white max-sm:self-center"
              >
                Download the App
                <Image src="/capsule.png" alt="Download" width={18} height={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
