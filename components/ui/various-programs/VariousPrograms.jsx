"use client";

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaPlay } from "react-icons/fa6";
import Link from "next/link.js";
import { CiCirclePlus } from "react-icons/ci";
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const VariousPrograms = ({ data }) => {
  return (
    <section className='py-pp_80 dark:bg-dark dark:text-white px-5 relative'>
      <div className="container mx-auto">
        <div className='pb-10'>
          <h1 className='dark:text-white text-black'>برامج متنوعة</h1>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2000, // 3 seconds
          disableOnInteraction: false, // Keeps autoplay running after user interactions
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true, // Makes dots adjust based on the active slide
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 25 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper s2 h-[300px]"
      >
        {data?.map((item) => (
          <SwiperSlide
            key={item.id}
            className="group shadow-lg w-[100%] relative h-[192px] bg-red-300 rounded "
          >
            <div>
              <Image
                src={item?.seriesimagesCutmez[0]?.url}
                alt="Picture of the logo"
                fill
                priority
              />
              <span className="absolute top-0 right-0 py-1 px-2 bg-primary text-white text-[13px] rounded-bl-lg">
                {item?.kindOfSeries}
              </span>
            </div>
            <div className="absolute flex flex-col items-start px-6 justify-center transition-all duration-200 group-hover:translate-y-0 w-full h-full bg-[#CDCBC9] bottom-0 translate-y-full lef-0">
              <h1 className="text-[#3C3F46] font-bold text-[16px]">{item.title}</h1>
              <p className="text-[#3C3F46] text-[14px]">{item?.details?.slice(0, 40) + "..."}</p>
              <div className="bg-[#2D3036] items-center mt-2 text-white flex gap-2 py-2 rounded-full px-2">
                <button onClick={() => handelpopup(item?.promoLink)} className="flex items-center gap-2">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-[#00CC9A] to-[#009BFB]">
                    <FaPlay className="text-[10px]" />
                  </span>
                  <span className="text-[12px]">شاهد الان</span>
                </button>
                <Link href={`/series/${item.id}`} className="flex items-center gap-2">
                  <span><CiCirclePlus className="text-[18px]" /></span>
                  <span className="text-[12px]">المزيد</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default VariousPrograms;
