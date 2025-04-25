'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full bg-white z-50 py-4">
      <div className="max-w-7xl mx-auto px-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Medecro Logo" width={150} height={40} />
        </Link>

        <div className="flex items-center text-sm">
          <div className="flex items-center space-x-8">
            <Link 
              href="/vision" 
              className={`text-black hover:text-[#0316FF] ${pathname === '/vision' ? 'text-[#0316FF]' : ''}`}
            >
              Vision
            </Link>
            <Link 
              href="/career"
              className={`text-black hover:text-[#0316FF] ${pathname === '/career' ? 'text-[#0316FF]' : ''}`}
            >
              Career
            </Link>
            <Link 
              href="/abha-abdm"
              className={`text-black hover:text-[#0316FF] ${pathname === '/abha-abdm' ? 'text-[#0316FF]' : ''}`}
            >
              ABHA / ABDM
            </Link>
            <Link 
              href="/pricing"
              className={`text-black hover:text-[#0316FF] ${pathname === '/pricing' ? 'text-[#0316FF]' : ''}`}
            >
              Pricing & Planning
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className={`flex items-center text-black hover:text-[#0316FF] ${pathname.startsWith('/products') || isProductsOpen ? 'text-[#0316FF]' : ''}`}
              >
                Products
                <svg
                  className={`ml-1 h-4 w-4 transform ${isProductsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProductsOpen && (
                <div className="absolute right-0 mt-2 w-50 bg-white rounded-2xl shadow-lg p-2">
                  <Link href="/doctors-dashboard" className="block px-4 py-1 text-black hover:bg-[#E8EAFF] rounded-xl">
                    Doctor&apos;s Dashboard
                  </Link>
                  <Link href="/doctors-app" className="block px-4 py-1 text-black hover:bg-[#E8EAFF] rounded-xl">
                    Doctor&apos;s App
                  </Link>
                  <Link href="/patients-app" className="block px-4 py-1 text-black hover:bg-[#E8EAFF] rounded-xl">
                    Patient&apos;s App
                  </Link>
                </div>
              )}
            </div>
            <Link 
              href="/contact"
              className={`text-black hover:text-[#0316FF] ${pathname === '/contact' ? 'text-[#0316FF]' : ''}`}
            >
              Contact Us
            </Link>
          </div>
          <div className="flex items-center space-x-3 ml-8">
            <Link 
              href="/app" 
              className="px-5 py-3 rounded-full bg-[linear-gradient(145deg,#00EF88,#0316FF)] text-white hover:opacity-80"
            >
              Go to App
            </Link>
            <Link 
              href="/signin" 
              className="flex items-center px-5 py-3 rounded-full bg-[linear-gradient(145deg,#00EF88,#0316FF)] text-white hover:opacity-80"
            >
              Sign In
              <Image src="/capsule.png" alt="Sign In" width={16} height={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 