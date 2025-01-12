"use client";

import React, { useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import data from "./about-data.json";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const SwiperScrr = () => {
  return (
    <>
      <Swiper
        dir="rtl"
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
        }}
        className="mySwiper"
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col gap-4 xl:flex-row lg:flex-row xl:items-center justify-between">
                <div className="pr-20 w-full lg:w-2/4  xl:w-2/4 sm:mb-4 md:mb-4 ">
                  <h1 className="font-bold text-[40px]">{item.title}</h1>
                  <p className="my-5 text-[20px]">{item.desc}</p>
                  <Link
                    href="/about"
                    className="flex cursor-pointer items-center opacity-80 justify-center gap-1 bg-gradient-to-r from-[#009BFB] to-[#00CC9A] rounded-full hover:bg-gradient-to-l transition-all ease-in-out hover:opacity-50 duration-200 text-white h-[44px] w-[181px] text-[18px]"
                  >
                    {" "}
                    <GoArrowUpRight /> عن الشركة
                  </Link>
                </div>
                <div className="w-[657px] h-[390px] relative rounded overflow-hidden">
                  <Image
                    src={item.image}
                    alt="about company image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperScrr;
