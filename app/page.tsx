import React from 'react'
import Navbar from './components/Navbar'
// import Hero from './components/Hero'
import HeroCarousel from './components/HeroCarousel'
import Statistics from './components/Statistics'
import Solutions from './components/Solutions'
import Future from './components/Future'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import HealthcarePower from './components/HealthcarePower'
import Profits from './components/Profits'
import DoctorSearch from './components/DoctorSearch'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Footer from './components/Footer'
import BookDemo from './components/BookDemo'
import Faq from './components/Faq'

function page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-12"> 
        {/* <Hero /> */}
        <HeroCarousel />
        <Statistics />
        <Solutions />
        <Future />
        <Products />
        <WhyUs />
        <HealthcarePower />
        <Profits />
        <DoctorSearch />
        <Testimonials />
        <Blog />
        <BookDemo />
        <Faq />
        <Footer />
      </main>
    </div>
  )
}
 
export default page
