import Image from "next/image.js";
import Link from "next/link.js";
import { GoArrowUpRight } from "react-icons/go";

const ModernBlogs = () => {
  return (
    <section className="py-pp_80 bg-gradient-to-r from-[#00CC9A] to-[#009BFB] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-white">المدونات الحديثة</h1>
        </div>
        <div className="flex gap-4">
          <div className={`w-2/3 ${cardStyle}`}>
            <div className="w-full h-[640px] relative">
              <Image
                src="/images/item.svg"
                alt="picture 1"
                fill
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h1 className={hStyle}>
                ملك المحتوى في منطقة الشرق الأوسط وشمال أفريقيا
              </h1>
              <p className={`${pStyle} max-w-lg`}>
                حافظت واحدة من أكبر شركات الإنتاج في منطقة الشرق الأوسط وشمال
                إفريقيا على مرونتها في وجه الإغلاق الذي شل صناعة الإنتاج في جميع
                أنحاء العالم الماضي سنة. الرئيس التنفيذي لشركة سيدارز للإنتاج
                الفني (صباح براذرز) صادق صباح يقول فيجايا شيريان كيف تكيفت
                الشركة باستمرار منذ وقت مبكر أصدرت شركة Cedars Art Production
                (CAP) خمس حلقات رمضانية من 30 حلقة إنتاجات هذا العام، أربعة منها
                ستعرض حصريا على MBC المنصات ، مع خدمة SVOD شاهد VIP تتمتع بوضع
                النافذة الأولى في بعض الحالات: المسلسل المغربي سلام أبو البنات
                وأولاد الأم، إنتاجات مصرية مولوك الجدعانة ولام غزال ومشرق هذا
                الأخير من بطولة نادين نسيب نجيم سيعرض حصريا على MBC في دول مجلس
                التعاون الخليجي، وعلى قناة MTV في لبنان، وعلى قناة رؤيا في
                الأردن، وعلى قناة ART في مصر. على الرغم من أن CAP تنتج عادة
                حوالي 14 مسلسلا تلفزيونيا وزوجين من الأفلام في السنه
              </p>
              <Link className={btnStyle} href="#">
                <GoArrowUpRight className="translate-y-1" />
                عرض المزيد
              </Link>
            </div>
          </div>
          <div className={`w-1/3 flex flex-col gap-4`}>
            <div className={cardStyle}>
              <div className="w-full h-[270px] relative">
                <Image
                  src="/images/reaaaa.svg"
                  alt="picture 1"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h1 className={`font-bold text-black dark:text-white text-[16px]`}>
                  ملك المحتوى في منطقة الشرق الأوسط وشمال أفريقيا
                </h1>
                <p className={pStyle}>
                  حافظت واحدة من أكبر شركات الإنتاج في منطقة الشرق الأوسط وشمال
                  إفريقيا على مرونتها في وجه الإغلاق الذي شل صناعة الإنتاج في
                  جميع أنحاء العالم الماضي سنة. الرئيس التنفيذي لشركة سيدارز
                  للإنتاج الفني (صباح براذرز) صادق صباح يقول فيجايا شيريان كيف
                  تكيفت الشركة باستمرار منذ
                </p>
                <Link className={btnStyle} href="#">
                  <GoArrowUpRight className="translate-y-1" />
                  عرض المزيد
                </Link>
              </div>
            </div>
            <div className={cardStyle}>
              <div className="w-full h-[270px] relative">
                <Image
                  src="/images/OIP (2).svg"
                  alt="picture 1"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h1 className={`font-bold text-black dark:text-white text-[16px]`}>
                  ملك المحتوى في منطقة الشرق الأوسط وشمال أفريقيا
                </h1>
                <p className={pStyle}>
                  حافظت واحدة من أكبر شركات الإنتاج في منطقة الشرق الأوسط وشمال
                  إفريقيا على مرونتها في وجه الإغلاق الذي شل صناعة الإنتاج في
                  جميع أنحاء العالم الماضي سنة. الرئيس التنفيذي لشركة سيدارز
                  للإنتاج الفني (صباح براذرز) صادق صباح يقول فيجايا شيريان كيف
                  تكيفت الشركة باستمرار منذ
                </p>
                <Link className={btnStyle} href="#">
                  <GoArrowUpRight className="translate-y-1" />
                  عرض المزيد
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const btnStyle =
  "bg-[#06A580] text-white w-[170px] py-2 flex items-center justify-center gap-2 rounded-full";
const pStyle = "text-grayColor text-[14px] leading-7 my-4";
const hStyle = "font-bold text-black dark:text-white text-[24px]";
const cardStyle = "bg-white shadow-lg rounded-lg overflow-hidden";

export default ModernBlogs;
