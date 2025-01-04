"use client";
import React from "react";
import Image from "next/image";

const Singelblogher = ({ currentBlog, loading }) => {


  // Format the createdAt date
  const formattedDate = currentBlog?.createdAt
    ? new Date(currentBlog.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown Date";

  console.log("From blog:", currentBlog);

  return (
    <div className="w-full">
      <Image
        width={400}
        height={50}
        alt="blog-image"
        layout="responsive"
        className="w-full h-[50vh] object-cover" // Custom classes for styling
        quality={100} // High-quality rendering
        src={currentBlog?.img ? currentBlog?.img : "/images/item.svg"}
        priority
      />
      <div className="container mx-auto mt-20 px-4">
        <div className="flex flex-col lg:justify-between lg:flex-row">
          <h1 className="text-2xl text-[#2C2C2E] font-semibold">
            {currentBlog?.title}
          </h1>
          <span className="text-[#06A580]  mt-5">
            تاريخ النشر: {formattedDate}
          </span>
        </div>
        <p className="leading-9 text-[#69696A] mt-10 w-full lg:w-[90%]">
          {currentBlog?.details}
        </p>
      </div>
    </div>
  );
};

export default Singelblogher;
