"use client";
import { useState } from 'react';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaPlay } from "react-icons/fa6";
import Link from "next/link.js";
import { FaPlus } from "react-icons/fa";
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import ModulePop from '@/components/common/modulepop';
const VariousPrograms = ({ data }) => {
    const [isVisible, setisvobale] = useState(false);
    const [promlink, setPromolink] = useState("");
    const handelpopup = (item) => {
      setPromolink(item);
      setisvobale(true);
    };
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
        // pagination={{
        //   clickable: true,
        //   dynamicBullets: true, // Makes dots adjust based on the active slide
        // }}
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
            className="group shadow-lg w-[100%] relative h-[192px] overflow-hidden"
          >
            <Link  href={`/series/${item.id}`}>
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
            <div className="absolute flex flex-col items-start px-6 pb-6 justify-end transition-all duration-200 group-hover:translate-y-0 w-full h-[100%] bottom-0 translate-y-full lef-0" style={{background: "linear-gradient(0deg,#0d1c27 11.97%,transparent)"}}>
              <h1 className="text-[#ffffff] font-bold text-[16px]">{item.title}</h1>
              <p className="text-[#dddddd] text-[14px]">{item?.details?.slice(0, 40) + "..."}</p>
           
            </div>
            </Link>
        
          </SwiperSlide>
        ))}
      </Swiper>
      <ModulePop
        onClose={() => setisvobale(false)}
        isVisible={isVisible}
        videoUrl={promlink}
      />
    </section>
  );
};

export default VariousPrograms;
