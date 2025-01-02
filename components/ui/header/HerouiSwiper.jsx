"use client"; 
import React, { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import Image from "next/image";
import ModulePop from "@/components/common/modulepop";

const HerouiSwiper = ({data}) => {
  const [isVisible , setvisbale] = useState(false)
  const [videoUrl , setVideourl] = useState("")
  const handelpopup = (promlink) =>{
    setVideourl(promlink)
    setvisbale(true)
  }
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
            {data?.map(({ id, seriesimagesCutmez  ,title , details , promoLink , castimagesCutmez }) => (
              <SwiperSlide key={id}>
                <div
                  className={`h-[100%] w-full absolute left-0 top-0   bg-cover `}
                 

                >
                  <Image 
                  src={seriesimagesCutmez?.[0]?.url}  alt="image"
                  width={500}  // Higher resolution for better quality
                  height={500}
                  layout="intrinsic"  // Maintain the aspect ratio
                  className="w-full h-full object-cover" 
                />
                </div>
                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20  ">
           
                </div>
                <div className="absolute z-2 min-h-[200px] flex p-3  flex-col justify-start w-[700px]  bottom-[10rem]  right-[1rem]">
                 <span className="text-white font-medium	text-2xl">{title}</span>
                 <div className="bg-[#2D3036] items-center mt-5 text-white flex gap-2  rounded-full w-[200px] p-2">
                    <button className="flex items-center gap-2" onClick={() => handelpopup(promoLink)}>
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-[#00CC9A] to-[#009BFB]"><FaPlay className="text-[10px]" /></span><span className="text-[12px]">شاهد الان</span>
                    </button>
                    <Link href={`/series/${id}`} className="flex items-center gap-2">
                      <span><CiCirclePlus className="text-[18px]" /> </span> <span className="text-[12px]">المزيد</span>
                    </Link>
                  </div>
             

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
      <ModulePop onClose={() => setvisbale(false)} isVisible={isVisible} videoUrl={videoUrl} /> 
    </section>
  );
};

export default HerouiSwiper;
