'use client'
import React, { useState } from 'react';
import Image from 'next/image';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

// Accordion Item component
const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-[#AFAFAF] rounded-2xl p-4 mb-4 max-sm:w-full">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={onClick}
      >
        <h3 className={`text-sm max-lg:text-xs 2xl:text-base font-medium ${isOpen ? 'text-[#0316FF] font-semibold' : ''}`} style={{maxWidth: '90%', flexGrow: 1}}>{question}</h3>
        <div className="text-gray-400 ml-4">
          {isOpen ? (
            <Image src="/minus.png" alt="Collapse" width={16} height={2} />
          ) : (
            <Image src="/plus.png" alt="Expand" width={16} height={14} />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 text-sm max-lg:text-xs 2xl:text-base text-gray-600 pr-10 max-sm:pr-4">
          {answer}
        </div>
      )}
    </div>
  );
};

interface FaqItem {
  question: string;
  answer: string;
}

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems: FaqItem[] = [
    {
      question: "Can I add new information to a patient's record?",
      answer: "Yes, you can add new information to a patient's record, including medical notes, test results, and updates. Simply go to the patient's profile and use the, Edit option to enter the new details."
    },
    {
      question: "Can I edit or update a patient's medical history?",
      answer: "Yes, you can edit or update a patient's medical history by accessing their profile and using the edit functionality."
    },
    {
      question: "How do I assign roles to team members in my practice?",
      answer: "You can assign roles to team members through the Settings > Team Management section, where you can set different permission levels."
    },
    {
      question: "How do I restore lost or deleted data?",
      answer: "To restore lost or deleted data, go to the Data Recovery section in Settings, where you can see a log of recently deleted items and restore them as needed."
    },
    {
      question: "What are the steps to reschedule or cancel an appointment?",
      answer: "To reschedule or cancel an appointment, navigate to the Calendar section, find the appointment, and use the reschedule or cancel options in the dropdown menu."
    },
    {
      question: "What are the steps to reschedule or cancel an appointment?",
      answer: "To reschedule or cancel an appointment, navigate to the Calendar section, find the appointment, and use the reschedule or cancel options in the dropdown menu."
    },
    // {
    //   question: "What are the steps to reschedule or cancel an appointment?",
    //   answer: "To reschedule or cancel an appointment, navigate to the Calendar section, find the appointment, and use the reschedule or cancel options in the dropdown menu."
    // }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl max-lg:max-w-4xl max-md:max-w-[80%] max-sm:w-[95%] max-sm:max-w-none max-sm:px-0">
        <div className="flex max-md:flex-col justify-between max-sm:w-full">
          {/* Left Column */}
          <div className="min-w-[45%] p-8 max-sm:p-0 max-sm:pb-4 max-sm:w-full">
            <div>
                {/* For screens larger than medium */}
                <div className="max-w-[18rem] max-md:hidden">
                  <h2 className="text-5xl max-lg:text-4xl 2xl:text-6xl font-extrabold mb-1">Frequently</h2>
                  <h2 className="text-5xl max-lg:text-4xl 2xl:text-6xl font-extrabold mb-1">Asked</h2>
                  <h2 className="text-5xl max-lg:text-4xl 2xl:text-6xl font-extrabold text-[#0316FF] mb-4">Questions</h2>
                  
                  <p className="text-sm max-lg:text-xs 2xl:text-base mb-8">Visit our Frequently Asked Questions to find helpful information.</p>
                </div>
                
                {/* For medium screens and below */}
                <div className="hidden max-md:block max-md:text-center max-md:mx-auto mb-2 max-sm:w-full max-sm:px-4">
                  <h2 className="text-6xl max-lg:text-5xl font-extrabold mb-1 max-sm:text-4xl">Frequently Asked</h2>
                  <h2 className="text-6xl max-lg:text-5xl font-extrabold text-[#0316FF] mb-4 max-sm:text-4xl">Questions</h2>
                  
                  <p className="text-base max-lg:text-sm mb-0">Visit our Frequently Asked Questions to find helpful information.</p>
                </div>

                {/* Question container for larger screens */}
                <div className="mb-5 border border-[#AFAFAF] rounded-3xl p-4 max-md:hidden">
                  <h3 className="font-semibold mb-1 max-lg:text-sm 2xl:text-base">Can&apos;t locate the answers you need?</h3>
                  <p className="text-sm max-lg:text-xs 2xl:text-base text-[#5A5A5A]">We&apos;re here to help with any questions you have!</p>

                  <div className='pt-4'>
                    <p className="text-sm max-lg:text-xs 2xl:text-base font-medium mb-2">Ask Your Question</p>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="How do I restore lost or deleted data?" 
                        className="w-full p-4 max-lg:p-3 border border-[#AFAFAF] rounded-2xl text-sm max-lg:text-xs 2xl:text-base text-black placeholder:text-black"
                      />
                      <button 
                        type="submit"
                        className="inline-flex items-center px-6 max-lg:px-4 py-3 max-lg:py-2 text-sm max-lg:text-xs font-medium rounded-full bg-[linear-gradient(145deg,#00EF88,#0316FF)] text-white hover:opacity-80 mt-4"
                      >
                        Send Now
                        <Image src="/capsule.png" alt="Send Now" width={14} height={14} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="min-w-[55%] max-lg:min-w-[60%] 2xl:min-w-[65%] p-8 2xl:pt-12 max-sm:p-0 max-sm:w-full max-sm:px-4">
            <div className="max-h-[500px] 2xl:max-h-[600px] overflow-y-auto pr-4 hide-scrollbar max-sm:pr-0" 
                 style={{
                   scrollbarWidth: 'none', /* Firefox */
                   msOverflowStyle: 'none', /* IE and Edge */
                 }}>
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Question container for medium screens and below */}
        <div className="hidden max-md:block mb-5 border border-[#AFAFAF] rounded-3xl p-4 max-w-[90%] mx-auto max-sm:max-w-none max-sm:w-[calc(100%-2rem)] max-sm:mx-auto">
          <h3 className="font-semibold mb-1 max-lg:text-sm 2xl:text-base">Can&apos;t locate the answers you need?</h3>
          <p className="text-sm max-lg:text-xs 2xl:text-base text-[#5A5A5A]">We&apos;re here to help with any questions you have!</p>

          <div className='pt-4'>
            <p className="text-sm max-lg:text-xs 2xl:text-base font-medium mb-2">Ask Your Question</p>
            <div className="relative">
              <input 
                type="text" 
                placeholder="How do I restore lost or deleted data?" 
                className="w-full p-4 max-lg:p-3 border border-[#AFAFAF] rounded-2xl text-sm max-lg:text-xs 2xl:text-base text-black placeholder:text-black"
              />
              <button 
                type="submit"
                className="inline-flex items-center px-6 max-lg:px-4 py-3 max-lg:py-2 text-sm max-lg:text-xs font-medium rounded-full bg-[linear-gradient(145deg,#00EF88,#0316FF)] text-white hover:opacity-80 mt-4"
              >
                Send Now
                <Image src="/capsule.png" alt="Send Now" width={14} height={14} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
