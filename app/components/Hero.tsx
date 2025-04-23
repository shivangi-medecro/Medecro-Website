import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Hero1() {
    return (
        <div className="relative w-full min-h-screen bg-[#f6f9fd] overflow-hidden font-outfit">
            <div>
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/Hero/bg1.png"
                        alt="Background"
                        fill
                        priority
                        className="object-cover w-full h-full"
                        style={{ objectPosition: 'center' }}
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center py-20">
                        {/* Left Content */}
                        <div className="ml-24">
                            <div className="text-[44px] font-bold mb-6">
                                <h1 className="text-[#0316FF] ">AI-powered</h1>
                                <h1 className="text-[#231F20] -mt-2">Dental X-Ray Analyzer</h1>
                            </div>

                            <div className="space-y-2 mb-8">
                                <div className="flex items-start ">
                                    <Image src="/Hero/tick.png" alt="Check" width={20} height={20} className="mt-1 mr-3" />
                                    <p className="text-[#231F20] text-[15px]">Instantly detect cavities, fractures, and anomalies with AI precision.</p>
                                </div>

                                <div className="flex items-start">
                                    <Image src="/Hero/tick.png" alt="Check" width={20} height={20} className="mt-1 mr-3" />
                                    <p className="text-[#231F20] text-[15px]">Reduce human error and enhance diagnostic accuracy.</p>
                                </div>

                                <div className="flex items-start">
                                    <Image src="/Hero/tick.png" alt="Check" width={20} height={20} className="mt-1 mr-3" />
                                    <p className="text-[#231F20] text-[15px]">Accelerate treatment planning with automated image analysis.</p>
                                </div>
                            </div>

                            <Link
                                href="#"
                                className="inline-flex items-center px-5 py-3 text-sm rounded-full bg-[linear-gradient(145deg,#00EF88,#0316FF)] text-white hover:opacity-90 relative group"
                            >
                                Schedule a Demo
                                <Image src="/capsule.png" alt="Schedule" width={14} height={14} className="ml-2" />
                                
                                {/* Hover tooltip with image */}
                                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 -bottom-30 left-25 -translate-x-1/2 z-50 pointer-events-none">
                                    <div className="relative" style={{ width: '200px', height: 'auto' }}>
                                        <Image 
                                            src="/Hero/hover.png" 
                                            alt="Hover background" 
                                            width={200} 
                                            height={100} 
                                            style={{ width: '100%', height: 'auto' }}
                                            className="max-w-none"
                                            priority
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: '0px' }}>
                                            <p className="text-black text-center font-medium text-sm max-w-[8rem]">Schedule a Demo to know more</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Right Content - X-Ray Machine Image */}
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative" style={{ width: '100%', height: '520px' }}>
                                {/* Chat bubbles */}
                                <div className="absolute -bottom-4 -right-8 flex flex-col space-y-3 max-w-[150px]">
                                    {/* First bubble - Only top-left corner not rounded */}
                                    <div className="bg-white py-3 px-5 rounded-[20px] rounded-tl-none shadow-md text-center">
                                        <p className="text-[#231F20] font-medium text-xs">Ask AI Assistant?</p>
                                    </div>

                                    {/* Second bubble - All corners rounded except bottom-right */}
                                    <div className="bg-white p-5 rounded-[24px] rounded-br-none shadow-md">
                                        <p className="text-[#231F20] text-xs">
                                            Could you please confirm if this is a routine cleaning or if you're experiencing any specific concerns?
                                        </p>
                                    </div>

                                    {/* AI image just below the chat bubbles */}
                                    <div className="w-[55px] h-[55px]  self-end">
                                        <img src="/Hero/ai.png" alt="AI Assistant" className="w-full h-full object-contain" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Hero2() {
    return (
        <div className="relative w-full min-h-screen bg-[#f6f9fd] overflow-hidden font-outfit">
            <div>
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/Hero/bg2.png"
                        alt="Background"
                        fill
                        priority
                        className="object-cover w-full h-full"
                        style={{ objectPosition: 'center' }}
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center py-20">
                        {/* Left Content */}
                        <div className="ml-24">
                            <div className="text-[44px] font-bold mb-6">
                                <h1 className="text-[#0316FF] ">AI-powered <span className='text-[#231F20]'>Clinic</span></h1>
                                <h1 className="text-[#231F20] -mt-2">Management System.</h1>
                            </div>

                            <div className="space-y-2 mb-8">
                                <div className="flex items-start ">
                                    <Image src="/Hero/tick.png" alt="Check" width={20} height={20} className="mt-1 mr-3" />
                                    <p className="text-[#231F20] text-[15px]">Streamline patient records, appointments, and billing with AI automation.</p>
                                </div>

                                <div className="flex items-start">
                                    <Image src="/Hero/tick.png" alt="Check" width={20} height={20} className="mt-1 mr-3" />
                                    <p className="text-[#231F20] text-[15px]">Reduce administrative burden, improving clinic efficiency.</p>
                                </div>

                                <div className="flex items-start">
                                    <Image src="/Hero/tick.png" alt="Check" width={20} height={20} className="mt-1 mr-3" />
                                    <p className="text-[#231F20] text-[15px]">Enhance patient experience with seamless digital workflows.</p>
                                </div>
                            </div>

                            <Link
                                href="#"
                                className="inline-flex items-center px-5 py-3 text-sm rounded-full bg-[linear-gradient(145deg,#00EF88,#0316FF)] text-white hover:opacity-90 relative group"
                            >
                                Schedule a Demo
                                <Image src="/capsule.png" alt="Schedule" width={14} height={14} className="ml-2" />
                                
                                {/* Hover tooltip with image */}
                                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 -bottom-30 left-25 -translate-x-1/2 z-50 pointer-events-none">
                                    <div className="relative" style={{ width: '200px', height: 'auto' }}>
                                        <Image 
                                            src="/Hero/hover.png" 
                                            alt="Hover background" 
                                            width={200} 
                                            height={100} 
                                            style={{ width: '100%', height: 'auto' }}
                                            className="max-w-none"
                                            priority
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: '0px' }}>
                                            <p className="text-black text-center font-medium text-sm max-w-[8rem]">Schedule a Demo to know more</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Right Content - X-Ray Machine Image */}
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative" style={{ width: '100%', height: '520px' }}>
                                {/* Chat bubbles */}
                                <div className="absolute -bottom-4 right-0 flex flex-col space-y-3 max-w-[150px]">
                                    {/* First bubble - Only top-left corner not rounded */}
                                    <div className="bg-white py-3 px-5 rounded-[20px] rounded-tl-none shadow-md text-center">
                                        <p className="text-[#231F20] font-medium text-xs">Ask AI Assistant?</p>
                                    </div>

                                    {/* Second bubble - All corners rounded except bottom-right */}
                                    <div className="bg-white p-5 rounded-[24px] rounded-br-none shadow-md">
                                        <p className="text-[#231F20] text-xs">
                                            Could you please confirm if this is a routine cleaning or if you're experiencing any specific concerns?
                                        </p>
                                    </div>

                                    {/* AI image just below the chat bubbles */}
                                    <div className="w-[55px] h-[55px]  self-end">
                                        <img src="/Hero/ai.png" alt="AI Assistant" className="w-full h-full object-contain" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Hero3() {
    return (
        <div className="relative w-full min-h-screen bg-[#f6f9fd] overflow-hidden font-outfit">
            <div>
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/Hero/bg3.png"
                        alt="Background"
                        fill
                        priority
                        className="object-cover w-full h-full"
                        style={{ objectPosition: 'center' }}
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center py-20">
                        {/* Left Content */}
                        <div className="ml-24">
                            <div className="text-[44px] font-bold mb-6">
                                <h1 className="text-[#0316FF] ">Your AI Dental
                                </h1>
                                <h1 className="text-[#231F20] -mt-2">Assistant</h1>
                            </div>

                            <div className="space-y-2 mb-8">
                                <div className="flex items-start ">
                                    <Image src="/Hero/tick.png" alt="Check" width={20} height={20} className="mt-1 mr-3" />
                                    <p className="text-[#231F20] text-[15px]">Automate routine tasks and focus on patient care.</p>
                                </div>

                                <div className="flex items-start">
                                    <Image src="/Hero/tick.png" alt="Check" width={20} height={20} className="mt-1 mr-3" />
                                    <p className="text-[#231F20] text-[15px]">Get AI-powered insights for better clinical decisions.</p>
                                </div>

                                <div className="flex items-start">
                                    <Image src="/Hero/tick.png" alt="Check" width={20} height={20} className="mt-1 mr-3" />
                                    <p className="text-[#231F20] text-[15px]">Improve workflow efficiency with smart automation.</p>
                                </div>
                            </div>

                            <Link
                                href="#"
                                className="inline-flex items-center px-5 py-3 text-sm rounded-full bg-[linear-gradient(145deg,#00EF88,#0316FF)] text-white hover:opacity-90 relative group"
                            >
                                Schedule a Demo
                                <Image src="/capsule.png" alt="Schedule" width={14} height={14} className="ml-2" />
                                
                                {/* Hover tooltip with image */}
                                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 -bottom-30 left-25 -translate-x-1/2 z-50 pointer-events-none">
                                    <div className="relative" style={{ width: '200px', height: 'auto' }}>
                                        <Image 
                                            src="/Hero/hover.png" 
                                            alt="Hover background" 
                                            width={200} 
                                            height={100} 
                                            style={{ width: '100%', height: 'auto' }}
                                            className="max-w-none"
                                            priority
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: '0px' }}>
                                            <p className="text-black text-center font-medium text-sm max-w-[8rem]">Schedule a Demo to know more</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Right Content - X-Ray Machine Image */}
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative" style={{ width: '100%', height: '520px' }}>
                                {/* Chat bubbles */}
                                <div className="absolute -bottom-4 -right-35 flex flex-col space-y-3 max-w-[150px]">
                                    {/* First bubble - Only top-left corner not rounded */}
                                    <div className="bg-white py-3 px-5 rounded-[20px] rounded-tl-none shadow-md text-center">
                                        <p className="text-[#231F20] font-medium text-xs">Ask AI Assistant?</p>
                                    </div>

                                    {/* Second bubble - All corners rounded except bottom-right */}
                                    <div className="bg-white p-5 rounded-[24px] rounded-br-none shadow-md">
                                        <p className="text-[#231F20] text-xs">
                                            Could you please confirm if this is a routine cleaning or if you're experiencing any specific concerns?
                                        </p>
                                    </div>

                                    {/* AI image just below the chat bubbles */}
                                    <div className="w-[55px] h-[55px]  self-end">
                                        <img src="/Hero/ai.png" alt="AI Assistant" className="w-full h-full object-contain" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Hero4() {
    return (
        <div className="relative w-full min-h-screen bg-[#f6f9fd] overflow-hidden font-outfit">
            <div>
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/Hero/bg4.png"
                        alt="Background"
                        fill
                        priority
                        className="object-cover w-full h-full"
                        style={{ objectPosition: 'center' }}
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center py-20">
                        {/* Left Content */}
                        <div className="ml-24">
                            <div className="text-[44px] font-bold mb-6">
                                <h1 className="text-[#0316FF] ">24/7 AI-Powered</h1>
                                <h1 className="text-[#231F20] -mt-2">Teleconsultations.</h1>
                            </div>

                            <div className="space-y-2 mb-8">
                                <div className="flex items-start ">
                                    <Image src="/Hero/tick.png" alt="Check" width={20} height={20} className="mt-1 mr-3" />
                                    <p className="text-[#231F20] text-[15px]">Remote consultations anytime, anywhere.</p>
                                </div>

                                <div className="flex items-start">
                                    <Image src="/Hero/tick.png" alt="Check" width={20} height={20} className="mt-1 mr-3" />
                                    <p className="text-[#231F20] text-[15px]">Secure, AI-assisted diagnosis and treatment planning.</p>
                                </div>

                                <div className="flex items-start">
                                    <Image src="/Hero/tick.png" alt="Check" width={20} height={20} className="mt-1 mr-3" />
                                    <p className="text-[#231F20] text-[15px]">Expand your reach and offer seamless virtual care.</p>
                                </div>
                            </div>

                            <Link
                                href="#"
                                className="inline-flex items-center px-5 py-3 text-sm rounded-full bg-[linear-gradient(145deg,#00EF88,#0316FF)] text-white hover:opacity-90 relative group"
                            >
                                Schedule a Demo
                                <Image src="/capsule.png" alt="Schedule" width={14} height={14} className="ml-2" />
                                
                                {/* Hover tooltip with image */}
                                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 -bottom-30 left-25 -translate-x-1/2 z-50 pointer-events-none">
                                    <div className="relative" style={{ width: '200px', height: 'auto' }}>
                                        <Image 
                                            src="/Hero/hover.png" 
                                            alt="Hover background" 
                                            width={200} 
                                            height={100} 
                                            style={{ width: '100%', height: 'auto' }}
                                            className="max-w-none"
                                            priority
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: '0px' }}>
                                            <p className="text-black text-center font-medium text-sm max-w-[8rem]">Schedule a Demo to know more</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Right Content - X-Ray Machine Image */}
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative" style={{ width: '100%', height: '520px' }}>
                                {/* Chat bubbles */}
                                <div className="absolute -bottom-4 -right-30 flex flex-col space-y-3 max-w-[150px]">
                                    {/* First bubble - Only top-left corner not rounded */}
                                    <div className="bg-white py-3 px-5 rounded-[20px] rounded-tl-none shadow-md text-center">
                                        <p className="text-[#231F20] font-medium text-xs">Ask AI Assistant?</p>
                                    </div>

                                    {/* Second bubble - All corners rounded except bottom-right */}
                                    <div className="bg-white p-5 rounded-[24px] rounded-br-none shadow-md">
                                        <p className="text-[#231F20] text-xs">
                                            Could you please confirm if this is a routine cleaning or if you're experiencing any specific concerns?
                                        </p>
                                    </div>

                                    {/* AI image just below the chat bubbles */}
                                    <div className="w-[55px] h-[55px]  self-end">
                                        <img src="/Hero/ai.png" alt="AI Assistant" className="w-full h-full object-contain" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// function Hero() {
//     return (
//         <>
//             <Hero1 />
//             <Hero2 />
//             <Hero3 />
//             <Hero4 />
//         </>
//     )
// }

// export default Hero
