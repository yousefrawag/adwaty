
"use client"
import { useState } from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import data from "./data.json";

const SeriesDetails = ({ selectedCategoryId = "1" }) => {
  const categories = data.categories || [];
  const selectedCategory = categories.find(
    (category) => category.id === selectedCategoryId
  );

  const [activeTab, setActiveTab] = useState("general_view");

  if (!selectedCategory) {
    return <p>الفيلم غير موجود</p>;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "general_view":
        return (
          <p className="max-w-lg text-grayColor leading-7">
            {selectedCategory.details.general_view}
          </p>
        );
      case "watch":
        return (
          <p className="max-w-lg text-grayColor leading-7">
            {selectedCategory.details.watch}
          </p>
        );
      case "covers":
        return (
          <div className="grid grid-cols-2 gap-4">
            {selectedCategory.details.covers.map((cover, index) => (
              <div
                key={index}
                className="w-full h-[212px] relative rounded-lg overflow-hidden"
              >
                <Image
                  src={`/images/${cover}`}
                  alt={`غلاف ${index + 1}`}
                  fill
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        );
      case "team":
        return (
          <ul className="list-disc pl-5 text-grayColor">
            {selectedCategory.details.team.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-10 mt-[97px] dark:bg-dark">
      <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="w-full h-[449px] relative rounded-lg overflow-hidden">
                  <Image
                    src={selectedCategory.item_img}
                    alt={selectedCategory.details.title}
                    fill
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="w-full h-[212px] relative rounded-lg overflow-hidden">
                    <Image
                      src={selectedCategory.item_img}
                      alt={selectedCategory.details.title}
                      fill
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-full h-[212px] relative rounded-lg overflow-hidden">
                    <Image
                      src={selectedCategory.item_img}
                      alt={selectedCategory.details.title}
                      fill
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
        <div className="flex items-start gap-4 pt-10 dark:bg-dark">
          <div className="w-1/4">
            <div>
              <h1>{selectedCategory.details.title}</h1>
            </div>
            <div className="flex gap-2 mt-2 items-center">
              <FaLocationDot className="text-primary" />
              <h4 className="font-bold text-grayColor">مصر</h4>
            </div>
          </div>
          <div className="w-3/4">
            <div>
              <ul className="flex items-center text-[18px] font-medium">
                <li
                  className={`${liStyle} ${
                    activeTab === "general_view" ? "border-primary" : ""
                  }`}
                  onClick={() => setActiveTab("general_view")}
                >
                  نظرة عامة
                </li>
                <li
                  className={`${liStyle} ${
                    activeTab === "watch" ? "border-primary" : ""
                  }`}
                  onClick={() => setActiveTab("watch")}
                >
                  شاهد
                </li>
                <li
                  className={`${liStyle} ${
                    activeTab === "covers" ? "border-primary" : ""
                  }`}
                  onClick={() => setActiveTab("covers")}
                >
                  الغلافات
                </li>
                <li
                  className={`${liStyle} ${
                    activeTab === "team" ? "border-primary" : ""
                  }`}
                  onClick={() => setActiveTab("team")}
                >
                  فريق العمل
                </li>
              </ul>
            </div>
            <div className="py-6">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const liStyle = "cursor-pointer border-b-2 py-2 px-12";

export default SeriesDetails;


