import Image from 'next/image.js'
import ValuesRohStudio from '@/components/ui/valuesRohStudio/ValuesRohStudio.jsx'
import OurTeam from '@/components/ui/ourTeam/OurTeam.jsx'
import AboutComponent  from '@/components/ui/about/About'
const About = () => {
  return (
    <div>
      <section className='w-full h-[300px] relative mt-20'>
        <Image
        src="/images/heroadwaty.jpg"
        objectFit='cover'
        fill
        alt='company image'
        />
        <div className='relative z-2 w-full flex overflow-hidden items-center flex-col justify-center h-full gap-4 text-white text-center'>
            <h1 className='text-black'>أدواتى </h1>
            <p className='w-full  text-black xl:max-w-[45%] lg:max-w-[45%] leading-7'>
              
            شركة أدواتي لتنمية التخاطب تأسست على يد د. محمد الباز، المتخصص في تطوير أدوات مبتكرة تساعد الأطفال على تحسين قدراتهم في التخاطب والتواصل. نهدف إلى توفير حلول فعالة لدعم الأطفال ذوي اضطرابات النطق والتواصل، من خلال أدوات تعليمية متخصصة مصممة بعناية لتعزيز مهاراتهم اللغوية بطريقة ممتعة وسهلة.

نؤمن بأن لكل طفل القدرة على التواصل، ونحن هنا لنساعده على تحقيق ذلك بأفضل الوسائل العلمية والتقنيات الحديثة.
                 </p>
        </div>
      </section>
    <AboutComponent />
      {/* our team section */}
      <OurTeam/>
    </div>
  )
}

export default About
