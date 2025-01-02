import CompanyServices from "@/components/ui/companyServices/CompanyServices.jsx";
import Link from "next/link.js";
import { GoArrowUpRight } from "react-icons/go";

const Services = () => {
  return (
    <div className="mt-[97px]">
      <section className="w-full h-[300px] bg-gradient-to-r from-[#00CC9A] to-[#009BFB] ">
        <div className=" w-full flex overflow-hidden items-center flex-col justify-center h-full gap-4 text-white text-center">
          <h1 className="text-white">خدمات الشركة</h1>
          <p className="w-full  xl:max-w-[45%] lg:max-w-[45%] leading-7 font-medium">
            سيدرز آرت برودكشن (روح استديو) رائدةٌ في صناعة السينما والمسلسلات
            العربية شراء حقوق / توكيل انتاج / إنتاج / توزيع أفلام سينمائية /
            مسلسلات تلفزيونية / برامج ألعاب / مسرحيات / رسوم متحركة نشأ محتوى
            CAP من المشرق/ مصر/ المغرب/ السعودية/ العراق
          </p>
          <Link
            className="group bg-[#633D3D] text-white w-[170px] py-2 flex items-center justify-center gap-2 rounded-full"
            href="#"
          >
            <GoArrowUpRight className="translate-y-1 group-hover:translate-x-2 transition-transform duration-200" />
            عرض المزيد
          </Link>
        </div>
      </section>

      {/* company services */}
      <CompanyServices/>
    </div>
  );
};

export default Services;
