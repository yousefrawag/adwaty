import CompanyServices from "@/components/ui/companyServices/CompanyServices.jsx";
import Link from "next/link.js";
import { GoArrowUpRight } from "react-icons/go";

const Services = () => {
  return (
    <div>
      <section className="w-full h-[300px] bg-[#eee]  mt-40">
        <div className=" w-full flex overflow-hidden items-center flex-col justify-center h-full gap-4 text-white text-center">
          <h1 className="text-primary">خدمات الشركة</h1>
          <p className="w-full text-black  xl:max-w-[45%] lg:max-w-[45%] leading-7 font-medium">
          دوات تعليمية متخصصة  / جلسات متابعة وتقييم دوري
          حصص خصوصية لتطوير المهارات اللغوية /
          دعم أولياء الأمور وتوجيههم
          </p>
      
        </div>
      </section>

      {/* company services */}
      <CompanyServices/>
    </div>
  );
};

export default Services;
