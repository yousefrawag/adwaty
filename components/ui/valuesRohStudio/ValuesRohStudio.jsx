import Image from 'next/image.js'
import React from 'react'

const ValuesRohStudio = () => {
  return (
    <section className='py-pp_80 dark:bg-dark'>
      <div className="container mx-auto px-4">
        <div className='text-center dark:text-white'>
            <h1>قيم روح استديو</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 pt-14 gap-8'>
            <div className='flex h-[165px] w-full gap-4 bg-[#F5F5F5]  p-6 rounded-lg shadow-md'>
                <div className='w-[8%] h-[45px] rounded-lg relative'>
                    <Image 
                    src="/images/icon_1.svg"
                    alt='icon'
                    fill
                    objectFit='cover'
                    className='rounded-lg'
                    />
                </div>
                <div className='w-[92%]'>
                    <h4 className='font-bold text-[16px]'>تمكين الابداع</h4>
                    <p className='text-grayColor mt-1 text-[14px]'>الشركة فخورة بكتالوج إنتاج غني بقصص جذابة ذات بعد اجتماعي. صبّاح أخوان تدرك أهمية تأثيـر الإعلام والإنتاج على كافة جوانب المجتمع الاقتصادية والاجتماعية والبيئية.</p>
                </div>
            </div>
            <div className='flex h-[165px] w-full gap-4 bg-[#F5F5F5] p-6 rounded-lg shadow-md'>
            <div className='w-[8%] h-[45px] rounded-lg relative'>
                    <Image 
                    src="/images/icon_2.svg"
                    alt='icon'
                    fill
                    objectFit='cover '
                    className='rounded-lg'
                    />
                </div>
                <div className='w-[92%]'>
                    <h4 className='font-bold text-[16px]'>سيدرز آرت برودكشن</h4>
                    <p className='text-grayColor mt-1 text-[14px]'>روح استديو مجموعة انتاج نشيطة ذات نفوذ. الشركة لديها المقدرة على إدارة 5 انتاجات في 5 دول مختلفة بمنتجيها البارعين وبأحدث تقنياتها.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ValuesRohStudio
