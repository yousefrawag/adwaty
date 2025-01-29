"use client";
import { AuthFetchservicea } from "@/utils/FetchSeries";
import Image from "next/image";
import { GrCertificate } from "react-icons/gr";
import { SlEnergy } from "react-icons/sl";

const CompanyServices = () => {
  const { data, loading } = AuthFetchservicea();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-pp_80 h-auto dark:bg-dark">
      <div className="container mx-auto px-4">
        <div>
          {data?.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={item.id} className={`${isEven ? "" : "pt-[150px] mb-10 mt-4 flex w-full items-start justify-end"}`}>
                <div className={`relative w-full lg:mb-20 mb-40 xl:w-[500px] h-[340px] ${isEven ? "" : "mt-5"}`}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    objectFit="cover"
                  />
                  <div
                    className={`absolute bg-[#F5F5F5] p-6 rounded-lg shadow-lg ${
                      isEven
                        ? "translate-x-[0%] translate-y-[90%] xl:translate-x-[-90%] translate-y-[30%] lg:translate-x-[-90%] translate-y-[30%] mb-[4rem] left-0"
                        : "translate-x-[0%] translate-y-[100%] xl:translate-x-[90%] translate-y-[40%] lg:translate-x-[90%] translate-y-[40%] bottom-0 left-0 z-10"
                    }`}
                    style={{
                      marginTop: "1rem", // Add margin-top for small screens
                      marginBottom: "1rem", // Add margin-bottom for small screens
                    }}
                  >
                    <div className="bg-primary rounded-lg text-white flex items-center justify-center h-10 w-10">
                      {isEven ? <GrCertificate /> : <SlEnergy />}
                    </div>
                    <span className="text-grayColor text-[14px] font-medium inline-block my-2">
                      {item.title}
                    </span>
                    <p className="text-[#181818] leading-7">{item.details}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyServices;