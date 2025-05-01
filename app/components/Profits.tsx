import React from 'react'
import Image from 'next/image'

function Profits() {
  const profitCards = [
    {
      icon: "/Profits/Care1.png",
      title: "Increased Visibility & Lead Generation",
      description: "Get featured on our B2C platform and attract more patients."
    },
    {
      icon: "/Profits/Care2.png",
      title: "Automated Follow-Ups & Patient Retention",
      description: "AI-driven WhatsApp & SMS reminders reduce no-shows."
    },
    {
      icon: "/Profits/Care3.png",
      title: "Teleconsultation Monetization",
      description: "Monetize remote consultations with seamless telehealth solutions."
    },
    {
      icon: "/Profits/Care4.png",
      title: "Premium Listing & Subscription Revenue",
      description: "Higher visibility and loyalty programs for long-term earnings."
    },
    {
      icon: "/Profits/Care5.png",
      title: "Pharmacy, Lab & Insurance Commissions",
      description: "Earn referral fees from prescriptions, tests, and claims."
    },
    {
      icon: "/Profits/Care6.png",
      title: "Multi-Clinic Management",
      description: "Centralized dashboard to optimize operations across locations."
    },
    {
      icon: "/Profits/Care7.png",
      title: "AI-Powered Revenue Optimization",
      description: "Smart pricing, financial insights, and demand-based scheduling."
    }
  ];

  return (
    <div className="w-full py-20 font-outfit bg-white ">
      <div className="container mx-auto px-10 max-lg:px-2 max-md:px-1  ">
        <div className="mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 max-sm:text-center">
            <h2 className="text-[#231F20] text-base max-md:text-[13px] max-lg:text-sm 2xl:text-xl tracking-[0.18em] max-md:tracking-[0.05em] uppercase mb-3">T U R N &nbsp; Y O U R &nbsp; E X P E R T I S E &nbsp; I N T O &nbsp; M O R E &nbsp; P R O F I T S</h2>
          </div>

          <div className="flex flex-col items-center max-sm:px-6 ">
            {/* Desktop Layout: Row 1 (4 cards) and Row 2 (3 cards) */}
            <div className="hidden md:grid md:grid-cols-4 gap-4 mb-8 w-[90%] max-lg:w-[100%]">
              {profitCards.slice(0, 4).map((card, index) => (
                <div key={index} className="bg-white rounded-md relative w-full max-w-[250px] 2xl:max-w-[270px] mx-auto">
                  <div className="absolute top-6 left-0 h-[180px] 2xl:h-[220px] flex">
                    <div className="w-[2px] bg-gray-200"></div>
                    <div className="w-[18px] bg-gradient-to-r from-gray-200/70 to-transparent"></div>
                  </div>
                  <div className="flex flex-col items-start p-6 pl-8">
                    <div className="mb-4 h-[60px] max-lg:h-[45px] flex items-center">
                      <Image
                        src={card.icon}
                        alt={card.title}
                        width={52}
                        height={52}
                        className="object-contain max-lg:w-[40px] max-lg:h-[40px]"
                      />
                    </div>
                    <h3 className="text-[#231F20] text-[18px] max-lg:text-[15px] 2xl:text-xl font-medium mb-2 leading-tight">{card.title}</h3>
                    <p className="text-[#231F20] text-xs max-lg:text-[10px] 2xl:text-sm leading-snug">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:grid md:grid-cols-3 gap-4 max-w-[80%] mx-auto">
              {profitCards.slice(4, 7).map((card, index) => (
                <div key={index} className="bg-white rounded-md relative w-full max-w-[250px] 2xl:max-w-[270px] mx-auto">
                  <div className="absolute top-6 left-0 h-[180px] 2xl:h-[220px] flex">
                    <div className="w-[2px] bg-gray-200"></div>
                    <div className="w-[18px] bg-gradient-to-r from-gray-200/70 to-transparent"></div>
                  </div>
                  <div className="flex flex-col items-start p-6 pl-8">
                    <div className="mb-4 h-[60px] max-lg:h-[45px] flex items-center">
                      <Image
                        src={card.icon}
                        alt={card.title}
                        width={52}
                        height={52}
                        className="object-contain max-lg:w-[40px] max-lg:h-[40px]"
                      />
                    </div>
                    <h3 className="text-[#231F20] text-[18px] max-lg:text-[15px] 2xl:text-xl font-medium mb-2 leading-tight">{card.title}</h3>
                    <p className="text-[#231F20] text-xs max-lg:text-[10px] 2xl:text-sm leading-snug">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Layout: 2-2-2-1 */}
            <div className="md:hidden w-full max-w-full px-0 mx-auto max-sm:mx-auto">
              {/* First row: 2 cards */}
              <div className="grid grid-cols-2 gap-14 max-sm:gap-6  mb-5">
                {profitCards.slice(0, 2).map((card, index) => (
                  <div key={index} className="bg-white rounded-md relative mx-auto  w-full">
                    <div className="absolute top-6 left-0 h-[180px] flex">
                      <div className="w-[2px] bg-gray-200"></div>
                      <div className="w-[18px] bg-gradient-to-r from-gray-200/70 to-transparent"></div>
                    </div>
                    <div className="flex flex-col items-start p-4 pl-6  pr-2">
                      <div className="mb-3 h-[45px] flex items-center">
                        <Image
                          src={card.icon}
                          alt={card.title}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-[#231F20] text-[18px] font-medium mb-2 leading-tight w-full">{card.title}</h3>
                      <p className="text-[#231F20] text-[12px] leading-snug w-full">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Second row: 2 cards */}
              <div className="grid grid-cols-2 gap-14 max-sm:gap-6 mb-5">
                {profitCards.slice(2, 4).map((card, index) => (
                  <div key={index} className="bg-white rounded-md relative mx-auto  w-full">
                    <div className="absolute top-6 left-0 h-[180px] flex">
                      <div className="w-[2px] bg-gray-200"></div>
                      <div className="w-[18px] bg-gradient-to-r from-gray-200/70 to-transparent"></div>
                    </div>
                    <div className="flex flex-col items-start p-4 pl-5 pr-2">
                      <div className="mb-3 h-[45px] flex items-center">
                        <Image
                          src={card.icon}
                          alt={card.title}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-[#231F20] text-[18px] font-medium mb-2 leading-tight w-full">{card.title}</h3>
                      <p className="text-[#231F20] text-[12px] leading-snug w-full">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Third row: 2 cards */}
              <div className="grid grid-cols-2 gap-14 max-sm:gap-6 mb-5">
                {profitCards.slice(4, 6).map((card, index) => (
                  <div key={index} className="bg-white rounded-md relative mx-auto  w-full">
                    <div className="absolute top-6 left-0 h-[180px] flex">
                      <div className="w-[2px] bg-gray-200"></div>
                      <div className="w-[18px] bg-gradient-to-r from-gray-200/70 to-transparent"></div>
                    </div>
                    <div className="flex flex-col items-start p-4 pl-5 pr-2">
                      <div className="mb-3 h-[45px] flex items-center">
                        <Image
                          src={card.icon}
                          alt={card.title}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-[#231F20] text-[18px] font-medium mb-2 leading-tight w-full">{card.title}</h3>
                      <p className="text-[#231F20] text-[12px] leading-snug w-full">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fourth row: 1 card (centered) */}
              <div className="flex justify-center max-sm:ml-6">
                <div className="bg-white rounded-md relative  w-[50%]">
                  <div className="absolute top-6 left-0 h-[180px] flex">
                    <div className="w-[2px] bg-gray-200"></div>
                    <div className="w-[18px] bg-gradient-to-r from-gray-200/70 to-transparent"></div>
                  </div>
                  <div className="flex flex-col items-start p-4 pl-5 pr-2">
                    <div className="mb-3 h-[45px] flex items-center">
                      <Image
                        src={profitCards[6].icon}
                        alt={profitCards[6].title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-[#231F20] text-[18px] font-medium mb-2 leading-tight w-full">{profitCards[6].title}</h3>
                    <p className="text-[#231F20] text-[12px] leading-snug w-full">{profitCards[6].description}</p>
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

export default Profits 