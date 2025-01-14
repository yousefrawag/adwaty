import Image from 'next/image.js'
import ValuesRohStudio from '@/components/ui/valuesRohStudio/ValuesRohStudio.jsx'
import OurTeam from '@/components/ui/ourTeam/OurTeam.jsx'
const About = () => {
  return (
    <div>
      <section className='w-full h-[300px] relative mt-20'>
        <Image
        src="/images/company.svg"
        objectFit='cover'
        fill
        alt='company image'
        />
        <div className='relative z-2 w-full flex overflow-hidden items-center flex-col justify-center h-full gap-4 text-white text-center'>
            <h1>روح استديو</h1>
            <p className='w-full  xl:max-w-[45%] lg:max-w-[45%] leading-7'>أفلام ومسلسلات وبرامج تلفزيونية من المشرق ومصر والمغرب والخليج العربي نمتلك ونوزع كامل حقوق مسلسلاتنا وانتاجاتنا عالمياً, سيدرز آرت برودكشن (روح استديو) رائدةٌ في صناعة السينما والمسلسلات العربية</p>
        </div>
      </section>
      {/* roh studio value */}
      <ValuesRohStudio/>
      {/* our team section */}
      <OurTeam/>
    </div>
  )
}

export default About
