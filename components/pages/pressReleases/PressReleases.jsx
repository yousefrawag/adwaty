import ModernBlogs from '@/components/ui/modernBlogs/ModernBlogs.jsx'
import Image from 'next/image.js'

const PressReleases = ({blogs}) => {
  return (
    <div>
      <section className='w-full h-[300px] relative mt-[97px]'>
        <Image
        src="/images/woman-sitting-by-table-cafe.svg"
        objectFit='cover'
        fill
        alt='image'
        />
        <div className='relative z-2 w-full flex overflow-hidden items-center flex-col justify-center h-full gap-4 text-white text-center'>
            <h1 className='text-[#06A580]'>تصريح صحفي</h1>
            <p className='max-w-[45%] leading-7 font-medium'>أفلام ومسلسلات وبرامج تلفزيونية من المشرق ومصر والمغرب والخليج العربي نمتلك ونوزع كامل حقوق مسلسلاتنا وانتاجاتنا عالمياً, سيدرز آرت برودكشن (روح استديو) رائدةٌ في صناعة السينما والمسلسلات العربية</p>
        </div>
      </section>
      {/* Modern Blogs section */}
      <ModernBlogs blogs={blogs}/>
    </div>
  )
}

export default PressReleases
