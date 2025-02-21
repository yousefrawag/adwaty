"use client";
import { useEffect, useState , useCallback  } from "react";
import data from "./data.json";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link.js";
import { CiCirclePlus } from "react-icons/ci";
import { AuthFetchBlog } from "@/utils/FetchSeries";
import ModulePop from "@/components/common/modulepop";
import { FaPlus } from "react-icons/fa";
const Category = () => {
  const { loading, data } = AuthFetchBlog();
  const categories = data.categories || [];
  const [isVisible, setisvobale] = useState(false);
  const [promlink, setPromolink] = useState("");
  const handelpopup = (item) => {
    setPromolink(item);
    setisvobale(true);
  };
  const unique_Data = ["الكل" ,...new Set(data?.map((item) => item.categoray))];
  const [category_active, setCategory_active] = useState("الكل");
  const [myData, setData] = useState([...data]);
  const filterationItems = useCallback((category) => {
    setCategory_active(category);
    if (category === "الكل") {
      return setData(data);
    }
    const showItemSelect = data.filter((items) => items.categoray === category);
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
      <div className="py-10">
        <div className="flex gap-4 items-center">
          {unique_Data?.map((category) => {
            return (
              <button
                key={category}
                onClick={() => filterationItems(category)}
                className={
                  category_active === category
                    ? "text-white bg-main p-2  rounded-md font-medium "
                    : "text-white p-2 bg-primary rounded-md"
                }
              >
                {category}
              </button>
            );
          })}
        </div>
        {myData.length ? (
          <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
            {myData?.map((item) => {
              return (
                <Link 
                href={`/series/${item.id}`}
                  key={item.id}
                  className="group relative transition ease-in-out duration-300 hover:scale-110 shadow-lg w-[100%] relative h-[300px] bg-red-300 rounded overflow-hidden"
                >
                  <div>
                    <Image
                      src={item?.imagesCutomez[0]?.url}
                      alt="Picture of the logo"
                      fill
                      priority
                      objectFit="cover"
                    />
                  </div>
                  <span className="absolute top-0 right-0 py-1 px-2 bg-primary text-white text-[13px] rounded-bl-lg">
                {item?.categoray}
              </span>
                  <div className="absolute flex flex-col items-start px-6 pb-6 justify-end transition-all duration-200 group-hover:translate-y-0 w-full h-[100%] bottom-0 translate-y-full lef-0" style={{background: "linear-gradient(0deg,#0d1c27 11.97%,transparent)"}}>
                    <h1 className="text-[#ffffff] font-bold text-[16px]">
                      {item.title}
                    </h1>
                    <p
                      className="text-[#dddddd] text-[14px]"
                      style={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                      }}
                    >
                      {item?.details?.slice(0 , 70) + "..."}
                    </p>
                  
                  </div>
                </Link>
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
