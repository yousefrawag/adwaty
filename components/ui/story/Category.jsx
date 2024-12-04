"use client";
import { useState } from "react";
import data from "./data.json";
import Image from "next/image";
const Category = () => {
    const categories = data.categories || [];
    const unique_Data = ["الكل", ...new Set(categories.map((item) => item.category_type))]
    const [category_active, setCategory_active] = useState("الكل");
    const [myData, setData] = useState([...categories])
    const filterationItems = (category) => {
        setCategory_active(category);
        if(category === "الكل") {
            return setData([...categories])
        }
        const showItemSelect = categories.filter((items) => items.category_type === category)
        return setData(showItemSelect)
    }

  return (
    <div>
      {/* parent */}

      <div className="py-10">
        <div className="flex gap-4 items-center">
            {unique_Data.map((category) => {
                return (
                    <button key={category} onClick={() => filterationItems(category)} className={category_active === category ? "text-primary font-medium underline" : "text-grayColor"}>
                        {category}
                    </button>
                )
            })}
        </div>
      <div className="grid grid-cols-4 gap-4 pt-10">
        {myData.map((item) => {
            return <div key={item.id} className="w-[100%] h-[192px] bg-red-300 relative rounded overflow-hidden " >
          <Image
      src={item.item_img}
      alt="Picture of the logo"
      layout="fill"
      objectFit="cover"
    />
    <span className="absolute top-0 right-0 py-1 px-2 bg-primary text-white text-[13px] rounded-bl-lg ">{item.status}</span>
            </div>
        })}
      </div>
      </div>


    </div>
  );
};

export default Category;
