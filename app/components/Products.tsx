import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Products() {
  return (
    <div className="w-full py-20 font-outfit bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[64rem] mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-[#231F20] text-sm tracking-[0.15em] uppercase mb-3">O U R &nbsp;&nbsp; P R O D U C T S</h2>
            <div className="w-[90%] max-w-[900px] h-[1px] bg-gray-300 mx-auto"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Product 1 */}
            <div className="text-center flex flex-col items-center">
              <div className="mb-8 w-[280px] h-[280px] relative">
                <Image
                  src="/products/product1.png"
                  alt="Your Practice, Your Control"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#231F20] text-3xl font-bold mb-2">Your Practice,<br />Your Control</h3>
              <p className="text-[#231F20] text-sm mb-4">
                An all-in-one platform for<br />clinic management
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center px-5 py-3 text-sm rounded-full bg-[linear-gradient(145deg,#00EF88,#0316FF)] text-white hover:opacity-90"
              >
                Book a Demo
                <Image src="/capsule.png" alt="Book Demo" width={14} height={14} className="ml-2" />
              </Link>
            </div>

            {/* Product 2 */}
            <div className="text-center flex flex-col items-center">
              <div className="-mt-4 mb-8 ml-6 w-[300px] h-[300px] relative">
                <Image
                  src="/products/product2.png"
                  alt="Care at Your Fingertips"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#231F20] text-3xl font-bold mb-2">Care at Your<br />Fingertips</h3>
              <p className="text-[#231F20] text-sm mb-4">
                Empowering doctors<br />on the go Experience
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center px-5 py-3 text-sm rounded-full bg-[linear-gradient(145deg,#00EF88,#0316FF)] text-white hover:opacity-90"
              >
                Download the App
                <Image src="/capsule.png" alt="Download" width={14} height={14} className="ml-2" />
              </Link>
            </div>

            {/* Product 3 */}
            <div className="text-center flex flex-col items-center">
              <div className="mb-8 w-[280px] h-[280px] relative">
                <Image
                  src="/products/product3.png"
                  alt="Where Patients Find You"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#231F20] text-3xl font-bold mb-2">Where Patients<br />Find You</h3>
              <p className="text-[#231F20] text-sm mb-4">
                Improving patient<br />experiences
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center px-5 py-3 text-sm rounded-full bg-[linear-gradient(145deg,#00EF88,#0316FF)] text-white hover:opacity-90"
              >
                Download the App
                <Image src="/capsule.png" alt="Download" width={14} height={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
