'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [isProductsOpen, setIsProductsOpen] = useState(true);

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Full-width overlay with blur */}
      <div 
        className="absolute inset-0 bg-[#D8E7F9]/10 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      {/* Right sidebar - narrower width to match image */}
      <div 
        className={`absolute top-0 right-0 h-full w-[35%] bg-[#D8E7F9]/90 backdrop-blur-sm transform transition-transform duration-300 ease-in-out flex flex-col max-sm:w-[80%] justify-end ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '35%' }}
      >
        {/* Navigation Links - right aligned and positioned at bottom */}
        <div className="px-6 mb-24 flex flex-col items-end text-right">
          <div className="space-y-5">
            {/* Vision */}
            <div>
              <Link 
                href="/vision" 
                onClick={onClose}
                className={`block text-sm hover:text-[#0316FF] transition-colors ${
                  pathname === '/vision' ? 'text-[#0316FF] font-medium' : 'text-[#231F20]'
                }`}
              >
                Vision
              </Link>
            </div>
            
            {/* Career */}
            <div>
              <Link 
                href="/career" 
                onClick={onClose}
                className={`block text-sm hover:text-[#0316FF] transition-colors ${
                  pathname === '/career' ? 'text-[#0316FF] font-medium' : 'text-[#231F20]'
                }`}
              >
                Career
              </Link>
            </div>
            
            {/* ABHA / ABDM */}
            <div>
              <Link 
                href="/abha-abdm" 
                onClick={onClose}
                className={`block text-sm hover:text-[#0316FF] transition-colors ${
                  pathname === '/abha-abdm' ? 'text-[#0316FF] font-medium' : 'text-[#231F20]'
                }`}
              >
                ABHA / ABDM
              </Link>
            </div>
            
            {/* Pricing & Planning */}
            <div>
              <Link 
                href="/pricing" 
                onClick={onClose}
                className={`block text-sm hover:text-[#0316FF] transition-colors ${
                  pathname === '/pricing' ? 'text-[#0316FF] font-medium' : 'text-[#231F20]'
                }`}
              >
                Pricing & Planning
              </Link>
            </div>
            
            {/* Products - toggle dropdown */}
            <div className="text-right w-full">
              <button 
                onClick={toggleProducts}
                className="text-right w-full flex justify-end items-center text-sm font-medium text-[#231F20] hover:text-[#0316FF] transition-colors"
              >
                <span>Products</span>
                <svg
                  className={`ml-1 h-3 w-3 transform ${isProductsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Products submenu - conditionally visible */}
              {isProductsOpen && (
                <div className="mt-2 space-y-3 text-right">
                  <div>
                    <Link 
                      href="/doctors-dashboard" 
                      onClick={onClose}
                      className="block text-xs text-[#6B7280] hover:text-[#0316FF] transition-colors text-right"
                    >
                      Doctor's Dashboard
                    </Link>
                  </div>
                  <div>
                    <Link 
                      href="/doctors-app" 
                      onClick={onClose}
                      className="block text-xs text-[#6B7280] hover:text-[#0316FF] transition-colors text-right"
                    >
                      Doctor's App
                    </Link>
                  </div>
                  <div>
                    <Link 
                      href="/patients-app" 
                      onClick={onClose}
                      className="block text-xs text-[#6B7280] hover:text-[#0316FF] transition-colors text-right"
                    >
                      Patient's App
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            {/* Contact us */}
            <div>
              <Link 
                href="/contact" 
                onClick={onClose}
                className={`block text-sm hover:text-[#0316FF] transition-colors ${
                  pathname === '/contact' ? 'text-[#0316FF] font-medium' : 'text-[#231F20]'
                }`}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Close button - blue circle with X in bottom right */}
        <div className="absolute right-8 bottom-8">
          <button 
            onClick={onClose}
            aria-label="Close menu" 
            className="w-10 h-10 flex items-center justify-center bg-[#0316FF] rounded-full shadow-md"
          >
            <Image 
              src="/mobile-cross.png" 
              alt="Close" 
              width={40} 
              height={40} 
              className="w-[40px] h-[40px]" 
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar; 