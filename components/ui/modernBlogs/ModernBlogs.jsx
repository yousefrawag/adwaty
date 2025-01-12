import Image from "next/image.js";
import Link from "next/link.js";
import { GoArrowUpRight } from "react-icons/go";

const ModernBlogs = ({blogs}) => {
  return (
    <section className="py-pp_80 bg-gradient-to-r from-[#00CC9A] to-[#009BFB] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-white">المدونات الحديثة</h1>
        </div>
        <div className="grid cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-4">
          {
            blogs?.map((item) => {
              return    <div key={item.id} className={`${cardStyle}`}>
              <div className="w-full h-[200px] relative">
                <Image
                  src={ item?.img }
                  alt="picture 1"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h1 className={hStyle}>
                  {item?.title}
                </h1>
                <p className={`${pStyle} max-w-lg`}>
                {
                  item?.details.slice(0, 200) + "..."
                }
               
              
                </p>
                <Link className={btnStyle} href={`/pressReleases/${item.id}`}>
                  <GoArrowUpRight className="translate-y-1" />
                  قراءه المدونة
                  </Link>
              </div>
            </div>
            })
          }
        </div>
      </div>
    </section>
  );
};

const btnStyle =
  "bg-primary text-white w-[170px] py-2 flex items-center justify-center gap-2 rounded-full";
const pStyle = "text-grayColor text-[14px] leading-7 my-4";
const hStyle = "font-meduim text-black  text-[24px]";
const cardStyle = "bg-white shadow-lg rounded-lg overflow-hidden h-auto";

export default ModernBlogs;
