'use client'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#231F20] text-white">
      <div className="container mx-auto px-6 lg:px-36 py-16 max-lg:py-12">
        {/* Top section */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/Footer/footer-logo.png" 
              alt="Medecro.ai" 
              width={130} 
              height={130}
              className="object-contain"
            />
          </div>

          {/* Vertical Line */}
          <div className="h-8 w-[1px] bg-white/20 -mr-14"></div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6 mx-10 text-xs 2xl:text-sm max-lg:text-[10px] max-lg:space-x-4">
            <Link href="/" className="text-[#00EF88] hover:opacity-80">Home</Link>
            <Link href="/vision" className="hover:text-[#00EF88]">Vision</Link>
            <Link href="/career" className="hover:text-[#00EF88]">Career</Link>
            <Link href="/abha-abdm" className="hover:text-[#00EF88]">ABHA / ABDM</Link>
            <Link href="/contact" className="hover:text-[#00EF88]">Contact us</Link>
            <Link href="/privacy" className="hover:text-[#00EF88]">Privacy Policy</Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-8 max-lg:space-x-5">
            <Link href="#" className="hover:opacity-80">
              <div className="w-[18px] h-[18px] 2xl:w-[22px] 2xl:h-[22px] max-lg:w-[14px] max-lg:h-[14px] relative">
                <Image src="/Footer/facebook.png" alt="Facebook" fill className="object-contain" />
              </div>
            </Link>
            <Link href="#" className="hover:opacity-80">
              <div className="w-[18px] h-[18px] 2xl:w-[22px] 2xl:h-[22px] max-lg:w-[14px] max-lg:h-[14px] relative">
                <Image src="/Footer/instagram.png" alt="Instagram" fill className="object-contain" />
              </div>
            </Link>
            <Link href="#" className="hover:opacity-80">
              <div className="w-[18px] h-[18px] 2xl:w-[22px] 2xl:h-[22px] max-lg:w-[14px] max-lg:h-[14px] relative">
                <Image src="/Footer/linkedin.png" alt="LinkedIn" fill className="object-contain" />
              </div>
            </Link>
            <Link href="#" className="hover:opacity-80">
              <div className="w-[18px] h-[18px] 2xl:w-[22px] 2xl:h-[22px] max-lg:w-[14px] max-lg:h-[14px] relative">
                <Image src="/Footer/twitter.png" alt="Twitter" fill className="object-contain" />
              </div>
            </Link>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="w-full h-[1px] bg-white/20 my-8 max-lg:my-6"></div>

        {/* Bottom section */}
        <div className="flex items-center">
          {/* Address */}
          <div className="w-[300px] max-lg:w-[230px]">
            <p className="text-[10px] text-white/80 2xl:text-xs max-lg:text-[8px]">
              TR-406, 4th Floor A11F Coworking,<br />
              Plot No. 21 & 21A, Sector 142, Noida-201304
            </p>
          </div>

          {/* Vertical Line */}
          <div className="h-8 w-[1px] bg-white/20 -ml-6 mr-16 max-lg:mr-8"></div>

          {/* Contact Info and Copyright */}
          <div className="flex-1 flex items-center justify-between">
            <div className="flex items-center gap-8 max-lg:gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-[18px] h-[18px] 2xl:w-[22px] 2xl:h-[22px] max-lg:w-[14px] max-lg:h-[14px] relative">
                  <Image src="/Footer/phone.png" alt="Phone" fill className="object-contain" />
                </div>
                <span className="text-xs text-white/80 2xl:text-sm max-lg:text-[9px]">+91 93405 05933</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-[18px] h-[18px] 2xl:w-[22px] 2xl:h-[22px] max-lg:w-[14px] max-lg:h-[14px] relative">
                  <Image src="/Footer/email.png" alt="Email" fill className="object-contain" />
                </div>
                <span className="text-xs text-white/80 2xl:text-sm max-lg:text-[9px]">medecro.ai123@gmail.com</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-[10px] text-white/80 text-right 2xl:text-xs max-lg:text-[8px]">
              <p>©2024 Medecro.ai | All Rights Reserved</p>
              <p className="mt-1">MEDECRO TECHNOLOGIES PRIVATE LIMITED</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
