import Image from 'next/image.js'
import ValuesRohStudio from '@/components/ui/valuesRohStudio/ValuesRohStudio.jsx'
import OurTeam from '@/components/ui/ourTeam/OurTeam.jsx'
import AboutComponent  from '@/components/ui/about/About'
const About = () => {
  return (
    <div>
      <section className='w-full h-[300px] relative mt-20'>
        <Image
        src="/images/donw.jpg"
        objectFit='cover'
        fill
        alt='company image'
        />
        <div className='relative z-2 w-full flex overflow-hidden items-center flex-col justify-center h-full gap-4 text-white text-center'>
         
       
        </div>
      </section>
    <AboutComponent />
      {/* our team section */}
      <OurTeam/>
    </div>
  )
}

export default About
