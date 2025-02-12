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
import {AuthFetchpresesleas} from "../../../utils/FetchSeries"
// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import ModulePop from '@/components/common/modulepop';
const VariousPrograms = ({ data }) => {
    const [isVisible, setisvobale] = useState(false);
    const [promlink, setPromolink] = useState("");
    const {blogs} = AuthFetchpresesleas()
    const handelpopup = (item) => {
      setPromolink(item);
      setisvobale(true);
    };
  return (
    <section className="py-16 bg-primary text-white">
    <div className="container mx-auto px-5 text-center">
      <h2 className="text-3xl font-bold mb-10">آراء العملاء</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {blogs.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 mx-auto mb-4">
                <Image
                  src={review.img || "/default-avatar.png"}
                  alt={review.name}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-yellow-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-black">{review.name}</h3>
              <p className="text-yellow-400 mt-2">⭐⭐⭐⭐⭐</p>
              <p className="mt-4  text-black">{review.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
  );
};

export default VariousPrograms;
