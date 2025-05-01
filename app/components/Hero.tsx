import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MobileSidebar from './MobileSidebar'

interface HeroSectionProps {
    backgroundImage: string;
    titleBlue: string;
    titleBlack: string;
    titleBlackSpan?: string;
    features: string[];
    chatBubblePosition?: string;
}

function HeroSection({ 
    backgroundImage, 
    titleBlue, 
    titleBlack, 
    titleBlackSpan = "", 
    features,
    chatBubblePosition = "right-6 2xl:right-10 max-md:-right-72 max-sm:right-12 " 
}: HeroSectionProps) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const toggleMobileSidebar = () => {
        setIsMobileSidebarOpen(!isMobileSidebarOpen);
    };

    return (
        <div className="relative w-full min-h-screen bg-[#f6f9fd] overflow-hidden font-outfit">
            <div>
                {/* Background Image - Hidden for max-md screens */}
                <div className="max-md:hidden absolute inset-0 w-full h-full">
                    <Image
                        src={backgroundImage}
                        alt="Background"
                        fill
                        priority
                        className="object-cover w-full h-full"
                        style={{ objectPosition: 'center' }}
                    />
                </div>

                <div className="container mx-auto max-md:mx-14 max-sm:mx-4 px-4 max-md:px-0 relative z-10">
                    <div className="flex flex-col md:flex-row items-center py-20">
                        {/* Left Content - Touching left border on max-md screens */}
                        <div className="max-md:w-full max-md:pl-0 max-md:pr-0 max-md:ml-0 max-md:mt-20 w-1/2 max-lg:min-w-[60%] ml-24 max-lg:ml-6">
                            <div className="max-md:text-4xl max-md:pl-0 max-lg:text-4xl text-[44px] 2xl:text-[50px] font-bold mb-6">
                                <h1 className="text-[#0316FF]">
                                    {titleBlue} {titleBlackSpan && <span className='text-[#231F20]'>{titleBlackSpan}</span>}
                                </h1>
                                <h1 className="text-[#231F20] -mt-2 max-md:mt-0 max-lg:mt-0">{titleBlack}</h1>
                            </div>

                            <div className="space-y-2 max-md:pl-0 max-md:space-y-1 mb-8">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start">
                                        <Image src="/Hero/tick.png" alt="Check" width={20} height={20} className="mt-1 mr-3" />
                                        <p className="text-[#231F20] text-[15px] max-lg:text-[13px] 2xl:text-[18px]">{feature}</p>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="#"
                                className="max-md:ml-0 inline-flex items-center px-5 py-3 text-sm rounded-full bg-[linear-gradient(145deg,#00EF88,#0316FF)] text-white hover:opacity-80 relative group"
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

                        {/* Right Content - Touching right border on max-md screens */}
                        <div className="max-md:w-full max-md:flex max-md:justify-end max-md:pr-0 max-md:mt-0 w-1/2 relative flex items-center justify-end">
                            <div className="relative max-md:h-[400px] max-md:mr-0 h-[520px]" style={{ width: '420px', maxWidth: '100%' }}>
                                {/* Chat bubbles - using fixed width container with absolute positioning */}
                                <div className={`absolute -bottom-4 ${chatBubblePosition} flex flex-col space-y-3 max-w-[150px] 2xl:max-w-[175px]`}>
                                    {/* First bubble - Only top-left corner not rounded */}
                                    <div className="bg-white py-3 px-5 rounded-[20px] rounded-tl-none shadow-md text-center">
                                        <p className="text-[#231F20] font-medium text-xs 2xl:text-sm">Ask AI Assistant?</p>
                                    </div>

                                    {/* Second bubble - All corners rounded except bottom-right */}
                                    <div className="bg-white p-5 max-md:p-3 rounded-[24px] rounded-br-none shadow-md">
                                        <p className="text-[#231F20] text-xs 2xl:text-sm">
                                            Could you please confirm if this is a routine cleaning or if you&apos;re experiencing any specific concerns?
                                        </p>
                                    </div>

                                    {/* AI image just below the chat bubbles */}
                                    <div className="w-[55px] h-[55px] max-lg:w-[45px] max-lg:h-[45px] self-end">
                                        <Image src="/Hero/ai.png" alt="AI Assistant" width={55} height={55} className="object-contain" />
                                    </div>
                                    
                                    {/* Mobile Menu - Only visible on max-md screens, placed directly below AI image */}
                                    <div className="max-md:block hidden self-end mt-6">
                                        <button 
                                            onClick={toggleMobileSidebar} 
                                            className="focus:outline-none"
                                        >
                                            <Image 
                                                src="/mobile-menu.png" 
                                                alt="Mobile Menu" 
                                                width={45} 
                                                height={45} 
                                                className="object-contain" 
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <MobileSidebar isOpen={isMobileSidebarOpen} onClose={() => setIsMobileSidebarOpen(false)} />
        </div>
    )
}

export function Hero1() {
	return (
			<HeroSection 
					backgroundImage="/Hero/bg1.png"
					titleBlue="AI-powered"
					titleBlack="Dental X-Ray Analyzer"
					features={[
							"Instantly detect cavities, fractures, and anomalies with AI precision.",
							"Reduce human error and enhance diagnostic accuracy.",
							"Accelerate treatment planning with automated image analysis."
					]}
			/>
	)
}

export function Hero2() {
	return (
			<HeroSection 
					backgroundImage="/Hero/bg2.png"
					titleBlue="AI-powered"
					titleBlackSpan="Clinic"
					titleBlack="Management System."
					features={[
							"Streamline patient records, appointments, and billing with AI automation.",
							"Reduce administrative burden, improving clinic efficiency.",
							"Enhance patient experience with seamless digital workflows."
					]}
			/>
	)
}

export function Hero3() {
	return (
			<HeroSection 
					backgroundImage="/Hero/bg3.png"
					titleBlue="Your AI Dental"
					titleBlack="Assistant"
					features={[
							"Automate routine tasks and focus on patient care.",
							"Get AI-powered insights for better clinical decisions.",
							"Improve workflow efficiency with smart automation."
					]}
			/>
	)
}

export function Hero4() {
	return (
			<HeroSection 
					backgroundImage="/Hero/bg4.png"
					titleBlue="24/7 AI-Powered"
					titleBlack="Teleconsultations."
					features={[
							"Remote consultations anytime, anywhere.",
							"Secure, AI-assisted diagnosis and treatment planning.",
							"Expand your reach and offer seamless virtual care."
					]}
			/>
	)
}


// export default function Hero() {
//     return (
//         <>
//             <Hero1 />
//             <Hero2 />
//             <Hero3 />
//             <Hero4 />
//         </>
//     )
// }
