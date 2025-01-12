import Image from "next/image.js"
import { GrCertificate } from "react-icons/gr";
import { SlEnergy } from "react-icons/sl";

const CompanyServices = () => {
  return (
    <section className="py-pp_80 h-auto dark:bg-dark">
      <div className="container mx-auto px-4">
        <div>
            <div>
                <div className="relative w-full lg:mb-20 mb-40 xl:w-[500px] h-[340px]">
                    <Image
                    src="/images/297~new-services-.svg"
                    alt="not found"
                    fill
                    objectFit="cover"
                    />
                <div className="absolute bg-[#F5F5F5] p-6 translate-x-[0%] translate-y-[90%] xl:translate-x-[-90%]  translate-y-[30%] lg:translate-x-[-90%] translate-y-[30%] mb-[4rem] rounded-lg shadow-lg left-0 ">
                    <div className="bg-[#06A580] rounded-lg text-white flex items-center justify-center h-10 w-10"><GrCertificate />
                    </div>
                    <span className="text-grayColor text-[14px] font-medium inline-block my-2">67  سنه من الخبرة</span>
                    <p className="text-[#181818] leading-7">في السوق ، كمنتجين وموزعين ، يمكن لفريق المبيعات الخبير لدينا والخبراء تقديم فكرة ومتابعة مفهومها الكامل - ثم الإنتاج ثم التوزيع بعد ذلك. نوفر توزيع الأفلام العربية الحائزة على جوائز دولية والمسلسلات التلفزيونية عالية التصنيف من أصول مصرية ولبنانية ومغربية وسعودية وتونسية وبلاد الشام والإنتاج المشترك</p>
                </div>
                </div>
            </div>

            <div className="pt-[150px] mb-10 mt-4 flex w-full items-start justify-end">
                <div className="relative mt-5 w-[500px] h-[340px]">
                <div className="absolute z-10 bg-[#F5F5F5] p-6 translate-x-[0%]  translate-y-[100%] xl:translate-x-[90%] translate-y-[40%] lg:translate-x-[90%] translate-y-[40%] rounded-lg shadow-lg left-0 bottom-0">
                    <div className="bg-[#06A580] rounded-lg text-white flex items-center justify-center h-10 w-10"><SlEnergy />
                    </div>
                    <span className="text-grayColor text-[14px] font-medium inline-block my-2">طاقتنا</span>
                    <p className="text-[#181818] leading-7">فريق إنتاج روح استوديو لديه القدرة على إدارة أكثر من 5 مشاريع في الوقت ذاته في بلدان مختلفة، وهي لبنان والسعودية والمغرب وتركيا والإمارات العربية المتحدة</p>
                </div>
                    <Image
                    src="/images/graphic-designer-editing-footage-software-working-edit-video-montage-with-color-grading-audio-effects-sound-film-production-content-making-creative-movie-computer.svg"
                    alt="not found"
                    fill
                    objectFit="cover"
                    />
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default CompanyServices
