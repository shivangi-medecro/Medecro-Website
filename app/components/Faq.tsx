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
    <div className="border border-[#AFAFAF] rounded-2xl p-4 mb-4">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={onClick}
      >
        <h3 className={`text-sm font-medium ${isOpen ? 'text-[#0316FF] font-semibold' : ''}`} style={{maxWidth: '90%', flexGrow: 1}}>{question}</h3>
        <div className="text-gray-400 ml-4">
          {isOpen ? (
            <Image src="/minus.png" alt="Collapse" width={16} height={2} />
          ) : (
            <Image src="/plus.png" alt="Expand" width={16} height={14} />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 text-sm text-gray-600 pr-10">
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
      answer: "Yes, you can add new information to a patient's record, including medical notes, test results, and updates. Simply go to the patient's profile and use the 'Edit' option to enter the new details."
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
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between">
          {/* Left Column */}
          <div className="min-w-[45%] p-8">
            <div >
                <div className="max-w-[18rem]">
              <h2 className="text-5xl font-extrabold mb-1">Frequently</h2>
              <h2 className="text-5xl font-extrabold mb-1">Asked</h2>
              <h2 className="text-5xl font-extrabold text-[#0316FF] mb-4">Questions</h2>
              
              <p className="text-sm mb-8">Visit our Frequently Asked Questions to find helpful information.</p>
              </div>
              <div className="mb-5 border border-[#AFAFAF] rounded-3xl p-4">
                <h3 className="font-semibold mb-1">Can't locate the answers you need?</h3>
                <p className="text-sm text-[#5A5A5A]">We're here to help with any questions you have!</p>

                <div className='pt-4'>
                <p className="text-sm font-medium mb-2">Ask Your Question</p>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="How do I restore lost or deleted data?" 
                    className="w-full p-4 border border-[#AFAFAF] rounded-2xl text-sm text-black placeholder:text-black"
                  />
                  <button 
                    type="submit"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-full bg-[linear-gradient(145deg,#00EF88,#0316FF)] text-white hover:opacity-80 mt-4"
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
          <div className="min-w-[55%] p-8">
            <div className="max-h-[500px] overflow-y-auto pr-4 hide-scrollbar" 
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
      </div>
    </section>
  );
}

export default Faq;
