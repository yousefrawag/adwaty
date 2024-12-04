"use client"; 
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import data from "./slider-data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HerouiSwiper = () => {
  return (
    <section className="w-full h-[100%]">
      <div className="h-[100%]">
        <ul className="h-[100%] w-full">
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            className="h-[100%]"
            autoplay={{
              delay: 2500,
            }}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {data.map(({ id, tagline, title }) => (
              <SwiperSlide key={id}>
                <div
                  className="h-[100%] w-full absolute left-0 top-0 bg-[url('/images/bg-cover.svg')] bg-cover "

                ></div>
                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
{/*                   <div className="text-center">
                    {tagline && (
                      <p className="text-md sm:text-xl lg:text-3xl font-semibold text-white">
                        {tagline}
                      </p>
                    )}
                    <p className="text-3xl sm:text-6xl lg:text-8xl font-bold text-white">
                      {title}
                    </p>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default HerouiSwiper;
