"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Navigation } from 'swiper/modules';

const TheBestEver = () => {
  return (
    <section className='py-pp_80'>
      <div className="container mx-auto">
      <div className='pb-10'>
        <h1>الأفضل علي الاطلاق</h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        pagination={{
            clickable: true,
        }}
        modules={[ Navigation]}
        className="mySwiper h-[300px]"
        >
        <SwiperSlide className={cardStyle}>Slide 1</SwiperSlide>
        <SwiperSlide className={cardStyle}>Slide 2</SwiperSlide>
        <SwiperSlide className={cardStyle}>Slide 3</SwiperSlide>
        <SwiperSlide className={cardStyle}>Slide 4</SwiperSlide>
        <SwiperSlide className={cardStyle}>Slide 5</SwiperSlide>
        <SwiperSlide className={cardStyle}>Slide 6</SwiperSlide>
        <SwiperSlide className={cardStyle}>Slide 7</SwiperSlide>
        <SwiperSlide className={cardStyle}>Slide 8</SwiperSlide>
        <SwiperSlide className={cardStyle}>Slide 9</SwiperSlide>
      </Swiper>
          </div>
    </section>
  );
}

const cardStyle= "h-[300px] bg-red-500"



export default TheBestEver
