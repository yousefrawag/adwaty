

import aboutimage from "@/public/images/owner.webp"
import Image from "next/image"
const AboutComponent  = () => {

  
  return (
    <section className='py-[80px]'>
      <div className="container mx-auto px-4">
    

        <div  className='flex justify-between flex-col gap-10 md:gap-2 md:flex-row items-center   mb-4'>
        <div className="w-full md:w-[50%]">
        <span>من نحن</span>
            <div>
                <h1 className="text-[32px] font-medium my-4 text-[#2C2C2E]">
          
                دعنا نتكلم عنا
                </h1>
                <p className="text-[#69696A] leading-8 max-w-[100%] md:max-w-[80%] "
                > 
شركة أدواتي لتنمية التخاطب تأسست على يد د. محمد الباز، المتخصص في تطوير أدوات مبتكرة تساعد الأطفال على تحسين قدراتهم في التخاطب والتواصل. نهدف إلى توفير حلول فعالة لدعم الأطفال ذوي اضطرابات النطق والتواصل، من خلال أدوات تعليمية متخصصة مصممة بعناية لتعزيز مهاراتهم اللغوية بطريقة ممتعة وسهلة.

نؤمن بأن لكل طفل القدرة على التواصل، ونحن هنا لنساعده على تحقيق ذلك بأفضل الوسائل العلمية والتقنيات الحديثة.                  </p>
            </div>
        </div>
        <div className="w-[100%] md:w-[50%] flex items-center md:items-start justify-center md:justify-end">
        <Image
                src={aboutimage }
                alt="about Image"
                width={100}
                height={100}
                priority
                style={{ objectFit: "cover", width: "303px", height: "348px" }}
                />
        </div>
        </div>

   
      </div>
    </section>
  )
}

export default AboutComponent 
