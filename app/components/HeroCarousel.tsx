'use client'
import React from 'react'
import { Hero1, Hero2, Hero3, Hero4 } from './Hero'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function HeroCarousel() {
    return (
        <div className="hero-carousel-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="hero-swiper"
            >
                <SwiperSlide><Hero1 /></SwiperSlide>
                <SwiperSlide><Hero2 /></SwiperSlide>
                <SwiperSlide><Hero3 /></SwiperSlide>
                <SwiperSlide><Hero4 /></SwiperSlide>
            </Swiper>
            
            {/* Custom Navigation Arrows */}
            <div className="swiper-button-prev !text-gray-500 !bg-transparent"></div>
            <div className="swiper-button-next !text-gray-500 !bg-transparent"></div>
            
            {/* Custom Pagination */}
            <div className="swiper-pagination !bottom-5 !z-20"></div>
        </div>
    )
}

export default HeroCarousel
