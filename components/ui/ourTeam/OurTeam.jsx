"use client";
import { AuthFetchTeam } from '@/utils/FetchSeries';
import Image from 'next/image';
import React from 'react';

const OurTeam = () => {
  const { data, loading } = AuthFetchTeam();

  return (
    <section className="py-pp_80 dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center dark:text-white">
          <h1 className="font-bold text-3xl">فريق عملنا</h1>
    
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-16 pt-16">
          {data?.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item?.id}
                className={`flex flex-col md:flex-row items-center py-8 md:items-start gap-8 rounded-lg overflow-hidden bg-white ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="w-full md:w-1/3 h-[280px] overflow-hidden relative">
                  <Image
                    src={item.img}
                    alt={item?.name || "Team-member"}
                    fill
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="p-6 md:w-2/3 text-center md:text-right">
                  <h2 className="text-xl font-bold text-primary mb-2">{item?.name}</h2>
                  <p className="text-gray-700 font-semibold mb-4">{item?.job}</p>
                  <p className="text-gray-600 max-w-2xl leading-8">{item?.about}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;