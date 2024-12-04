"use client";

import React, { useRef, useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import data from "./about-data.json";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

const  SwiperScrr = () => {
  return (
    <>
      <Swiper
        dir="rtl"
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Navigation]}
        autoplay={{
          delay: 2500,
        }}
        className="mySwiper"
      >

        {data.map((item) => {
          return         <SwiperSlide key={item.id}>
          <div  className='flex items-center justify-between'>
            <div className='pr-20 w-2/4 '>
              <h1>{item.title}</h1>
              <p className='my-5'>{item.desc}</p>
              <Link href="/about" className='flex cursor-pointer items-center opacity-80 justify-center gap-1 bg-btnColor rounded-full text-white h-[44px] w-[181px] text-[18px]'> <GoArrowUpRight /> عن الشركة</Link>
            </div>
            <div className='w-[657px] h-[390px] relative rounded overflow-hidden'>
              <Image
              src={item.image}
              alt='about company image'
              layout='fill'
              objectFit='cover'
              className='rounded'
              />
            </div>
          </div>
        </SwiperSlide>
        })}
      </Swiper>
    </>
  );
}

export default SwiperScrr