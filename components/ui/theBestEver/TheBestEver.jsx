"use client";


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import { AuthFetchpresesleas } from "@/utils/FetchSeries";
const TheBestEver = () => {
   const {  blogs } = AuthFetchpresesleas();
  return (
    <section className="py-pp_80 bg-[#eee] dark:bg-dark dark:text-white">
      <div className="container mx-auto">
        <div className="pb-10">
          <h1 className="dark:text-white">تصريحات صحفية</h1>
        </div>
        <Swiper
          slidesPerView={3} // Default number of slides to show
          spaceBetween={30} // Default spacing between slides
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: { // For screens 320px and larger
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: { // For screens 640px and larger
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: { // For screens 768px and larger
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: { // For screens 1024px and larger
              slidesPerView:3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {
            blogs?.map((item) =>{
              return  <SwiperSlide className={cardStyle} key={item.id}>
             <div className="w-full h-[300px] relative">
                        <Image
                          src={ item?.img }
                          alt="picture 1"
                          fill
                          objectFit="cover"
                        />
                      </div>
               
              <div className="w-full p-4">
                <span className={hStyle}>{
                  item?.title
                  }</span>
                <p className={pStyle}>
                      {
                        item?.details.slice(0,200) + "..."
                      }
                </p>
                <Link className={btnStyle} href={`/pressReleases/${item.id}`}>
                  <GoArrowUpRight className="translate-y-1" />
                            قراءه المدونة
                                  </Link>
              </div>
            </SwiperSlide>
            })
          }
         
      
     
      
        </Swiper>
      </div>
    </section>
  );
};

const cardStyle = "bg-white overflow-hidden shadow-lg rounded-lg";
const pStyle = "text-grayColor text-[14px] leading-7 my-4";
const hStyle = "font-meduim text-black  text-[24px]";
const btnStyle = "bg-primary text-white w-[170px] py-2 flex items-center hover:opacity-50 duration-200 ease-in-out justify-center gap-2 rounded-full mt-3";
export default TheBestEver;
