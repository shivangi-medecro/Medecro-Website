import React from 'react';
import Image from 'next/image';

function BookDemo() {
  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between max-md:items-center ">
          {/* Left side - Image */}
          <div className="md:w-1/2 flex items-center justify-center max-md:hidden">
            <div className="relative">
              <div className="absolute -z-10 w-[80%] h-[90%] bottom-0 left-5 rounded-2xl bg-gradient-to-br from-[#00EF88] to-[#0316FF]"></div>
              <Image 
                src="/Demo/demo-doctor.png" 
                alt="Doctor booking a demo" 
                width={380} 
                height={380} 
                className="rounded-2xl relative z-10"
              />
            </div>
          </div>
          
          {/* Right side - Form */}
          <div className="md:w-1/2 max-md:w-[80%] ">
            <h2 className="text-4xl 2xl:text-5xl font-bold mb-12">Book a Demo</h2>
            <p className="uppercase text-xs 2xl:text-sm font-medium mb-6 tracking-wider text-black">FILL&nbsp; OUT&nbsp; THE&nbsp; FORM&nbsp; BELOW&nbsp; TO&nbsp; BOOK&nbsp; A&nbsp; DEMO</p>
            
            <form className="space-y-5">
              {/* Full Name */}
              <input 
                type="text" 
                placeholder="Your full name" 
                className="w-full h-[50px] p-3 border border-[#E8E8E8] rounded-md bg-white text-sm placeholder:text-[#AFAFAF]"
              />
              
              {/* Email and Phone */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full h-[50px] p-3 border border-[#E8E8E8] rounded-md bg-white text-sm placeholder:text-[#AFAFAF] pr-10"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Image src="/Demo/mail.png" alt="Email" width={18} height={18} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex rounded-md border border-[#E8E8E8] h-[50px]">
                    <div className="flex items-center bg-white" style={{width: '80px'}}>
                      <div className="flex items-center pl-2 pr-1">
                        <Image src="/Demo/india.png" alt="India" width={20} height={20} className="rounded-full" />
                        <span className="text-sm ml-1 mr-1">+91</span>
                      </div>
                      <Image src="/Demo/polygon.png" alt="Dropdown" width={8} height={5} />
                    </div>
                    <input 
                      type="tel" 
                      placeholder="Contact no" 
                      className="w-[calc(100%-80px)] p-3 bg-white text-sm placeholder:text-[#AFAFAF] border-l border-[#E8E8E8]"
                    />
                  </div>
                </div>
              </div>
              
              {/* Job Role and Practice Name */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="relative">
                    <select 
                      defaultValue=""
                      className="w-full h-[50px] p-3 border border-[#E8E8E8] rounded-md appearance-none bg-white text-sm text-[#AFAFAF]"
                    >
                      <option value="" disabled>Job Role</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Image src="/Demo/polygon.png" alt="Dropdown" width={8} height={5} />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 relative">
                  <div className="relative">
                    <select 
                      defaultValue=""
                      className="w-full h-[50px] p-3 border border-[#E8E8E8] rounded-md appearance-none bg-white text-sm text-[#AFAFAF]"
                    >
                      <option value="" disabled>Practice Name</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      
                      <Image src="/Demo/polygon.png" alt="Dropdown" width={8} height={5} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Postal Code and Current Software */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="Postal Code" 
                    className="w-full h-[50px] p-3 border border-[#E8E8E8] rounded-md bg-white text-sm placeholder:text-[#AFAFAF]"
                  />
                </div>
                
                <div className="flex-1 relative">
                  <div className="relative">
                    <select 
                      defaultValue=""
                      className="w-full h-[50px] p-3 border border-[#E8E8E8] rounded-md appearance-none bg-white text-sm text-[#AFAFAF]"
                    >
                      <option value="" disabled>Current Software</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Image src="/Demo/polygon.png" alt="Dropdown" width={8} height={5} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Captcha */}
              <div className="bg-[#E9E9E9] p-[1px] rounded-md w-[45%] shadow-sm">
                <div className="flex items-center">
                  <div className="bg-white rounded-sm p-3">
                    <Image src="/Demo/captcha.png" alt="reCAPTCHA" width={35} height={18} />
                  </div>
                  <div className="ml-4">
                    <p className="text-xs">Protected by reCAPTCHA</p>
                    <p className="text-[11px] text-black mt-[2px]">Privacy • Terms</p>
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-full bg-[linear-gradient(145deg,#00EF88,#0316FF)] text-white hover:opacity-80"
                >
                  Book a Demo
                  <Image src="/capsule.png" alt="Book Demo" width={14} height={14} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDemo;
