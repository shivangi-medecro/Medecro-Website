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
    <div className="w-full py-20 font-outfit bg-white">
      <div className="container mx-auto px-10 max-lg:px-2">
        <div className=" mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-[#231F20] text-base max-lg:text-sm 2xl:text-xl tracking-[0.18em] uppercase mb-3">T U R N &nbsp; Y O U R &nbsp; E X P E R T I S E &nbsp; I N T O &nbsp; M O R E &nbsp; P R O F I T S</h2>
          </div>

          <div className="flex flex-col items-center">
            {/* Cards - First Row (4 cards) */}
            <div className="grid grid-cols-4 gap-4 mb-8 w-[90%] max-lg:w-[100%]">
              {profitCards.slice(0, 4).map((card, index) => (
                <div key={index} className="bg-white rounded-md relative w-full max-w-[250px] 2xl:max-w-[270px]  mx-auto">
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

            {/* Cards - Second Row (3 cards, centered) */}
            <div className="grid grid-cols-3 gap-4 max-w-[80%] mx-auto">
              {profitCards.slice(4, 7).map((card, index) => (
                <div key={index} className="bg-white rounded-md relative w-full max-w-[250px] 2xl:max-w-[270px]  mx-auto">
                  <div className="absolute top-6 left-0 h-[180px] 2xl:h-[220px] flex">
                    <div className="w-[2px] bg-gray-200"></div>
                    <div className="w-[18px] bg-gradient-to-r from-gray-200/70 to-transparent"></div>
                  </div>
                  <div className="flex flex-col items-start p-6  pl-8 ">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profits 