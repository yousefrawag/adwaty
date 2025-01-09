"use client";
import { useEffect, useState , useCallback  } from "react";
import data from "./data.json";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link.js";
import { CiCirclePlus } from "react-icons/ci";
import { AuthFetchBlog } from "@/utils/FetchSeries";
import ModulePop from "@/components/common/modulepop";
const Category = () => {
  const { loading, data } = AuthFetchBlog();
  const categories = data.categories || [];
  const [isVisible, setisvobale] = useState(false);
  const [promlink, setPromolink] = useState("");
  const handelpopup = (item) => {
    setPromolink(item);
    setisvobale(true);
  };
  const unique_Data = ["الكل", "مسلسلات", "أفلام", "برامج", "رسوم متحركة"];
  const [category_active, setCategory_active] = useState("الكل");
  const [myData, setData] = useState([...data]);
  const filterationItems = useCallback((category) => {
    setCategory_active(category);
    if (category === "الكل") {
      return setData(data);
    }
    const showItemSelect = data.filter((items) => items.category === category);
    return setData(showItemSelect);
  }, [data]);
  useEffect(() => {
    if (data) {
     setData(data)
    }
  } , [data]);
  if (loading) {
    return <h2>loadding...</h2>;
  }
  return (
    <div>
      {/* parent */}
      <div className="py-10 ">
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
        {myData.length ? (
          <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
            {myData?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="group shadow-lg w-[100%] relative h-[300px] bg-red-300 rounded overflow-hidden "
                >
                  <div>
                    <Image
                      src={item?.seriesimagesCutmez[0]?.url}
                      alt="Picture of the logo"
                      fill
                      priority
                      objectFit="cover"
                    />
                  </div>
                  <div className="absolute flex flex-col items-start px-6 justify-center transition-all duration-200 group-hover:translate-y-0 w-full h-[50%] bg-[#CDCBC9] bottom-0 translate-y-full lef-0">
                    <h1 className="text-[#3C3F46] font-bold text-[16px]">
                      {item.title}
                    </h1>
                    <p
                      className="text-[#3C3F46] text-[14px]"
                      style={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                      }}
                    >
                      {item?.details.slice(0 , 70) + "..."}
                    </p>
                    <div className="bg-[#2D3036] items-center mt-2 text-white flex gap-2 py-2 rounded-full px-2">
                      <button
                        onClick={() => handelpopup(item?.promoLink)}
                        className="flex items-center gap-2"
                      >
                        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-[#00CC9A] to-[#009BFB]">
                          <FaPlay className="text-[10px]" />
                        </span>
                        <span className="text-[12px]">شاهد الان</span>
                      </button>
                      <Link
                        href={`/series/${item.id}`}
                        className="flex items-center gap-2"
                      >
                        <span>
                          <CiCirclePlus className="text-[18px]" />{" "}
                        </span>{" "}
                        <span className="text-[12px]">المزيد</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h2 className="w-full items-center justify-center text-2xl text-center">
            قريبا تابعونا....👌
          </h2>
        )}
      </div>
      <ModulePop
        onClose={() => setisvobale(false)}
        isVisible={isVisible}
        videoUrl={promlink}
      />
    </div>
  );
};

export default Category;
