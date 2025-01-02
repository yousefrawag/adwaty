"use client";
import { useEffect, useState } from "react";
import data from "./data.json";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link.js";
import { CiCirclePlus } from "react-icons/ci";
import { AuthFetchBlog } from "@/utils/FetchSeries";
import ModulePop from "@/components/common/modulepop";
const Category = () => {
  const {loading, data} = AuthFetchBlog()
  const categories = data.categories || [];
  const [isVisible ,setisvobale] = useState(false)
  const [promlink , setPromolink] = useState("")
  const handelpopup = (item) =>{
    setPromolink(item)
    setisvobale(true)
  }
  const unique_Data = [
    "الكل",
    "مسلسلات",
    "أفلام",
    "برامج",
    "رسوم متحركة"
  ];
  const [category_active, setCategory_active] = useState("الكل");
  const [myData, setData] = useState([...data]);
  const filterationItems = (category) => {
    setCategory_active(category);
    if (category === "الكل") {
      return setData(data);
    }
    const showItemSelect = data.filter(
      (items) => items.category === category
    );
    return setData(showItemSelect);
  };
  useEffect(() =>{
    if(data){
      filterationItems("الكل")
    }
  } , [data])
  if(loading) {
    return <h2>loadding...</h2>
  }
  return (
    <div>
      {/* parent */}

      <div className="py-10">
        <div className="flex gap-4 items-center">
          {unique_Data?.map((category) => {
            return (
              <button
                key={category}
                onClick={() => filterationItems(category)}
                className={
                  category_active === category
                    ? "text-primary font-medium underline"
                    : "text-grayColor"
                }
              >
                {category}
              </button>
            );
          })}
        </div>
        {
          myData.length ? (
            <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 gap-4 pt-10">
            {myData?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="group shadow-lg w-[100%] relative h-[192px] bg-red-300 rounded overflow-hidden "
                >
                  <div>
                    <Image
                      src={item?.seriesimagesCutmez[0]?.url}
                      alt="Picture of the logo"
                      fill
                      priority
                    />
                    <span className="absolute top-0 right-0 py-1 px-2 bg-primary text-white text-[13px] rounded-bl-lg">
                      {item?.status}
                    </span>
                  </div>
                  <div className="absolute flex flex-col items-start px-6 justify-center transition-all duration-200 group-hover:translate-y-0 w-full h-full bg-[#CDCBC9] bottom-0 translate-y-full lef-0">
                    <h1 className="text-[#3C3F46] font-bold text-[16px]">{item.title}</h1>
                    <p className="text-[#3C3F46] text-[14px]">{item?.details?.slice(0 ,40)+ "..."}</p>
                    {/* <ul className="flex py-2 text-[#3C3F46]">
                      {item.details.film_type?.map((ite, index) => (
                        <li className="flex gap-1 mx-2 items-center text-[14px]" key={index}><span className="w-2 rounded-full h-2 inline-block bg-[#06A580]"></span>{ite}</li>
                      ))}
                    </ul> */}
                    <div className="bg-[#2D3036] items-center mt-2 text-white flex gap-2 py-2 rounded-full px-2">
                      <button onClick={() => handelpopup(item?.promoLink)}  className="flex items-center gap-2">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-[#00CC9A] to-[#009BFB]"><FaPlay className="text-[10px]" /></span><span className="text-[12px]">شاهد الان</span>
                      </button>
                      <Link href={`/series/${item.id}`} className="flex items-center gap-2">
                        <span><CiCirclePlus className="text-[18px]" /> </span> <span className="text-[12px]">المزيد</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          ): <h2 className="w-full items-center justify-center text-2xl text-center">
            قريبا تابعونا....👌
          </h2>
        }
      
      </div>
   <ModulePop onClose={() => setisvobale(false)} isVisible={isVisible} videoUrl={promlink} />
    </div>
  );
};

export default Category;
