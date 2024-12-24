import Image from 'next/image.js'
import React from 'react'

const OurTeam = () => {
  return (
    <section className='py-pp_80 dark:bg-dark'>
      <div className="container mx-auto px-4">
        <div className='text-center dark:text-white'>
            <h1 className='font-bold'>فريق عملنا</h1>
            <p className='text-grayColor dark:text-white mt-2 max-w-md mx-auto'>بمعداتٍ حديثة وعالية الجودة، يضمن لك فريقنا الاستفادة من مجموعة هائلة وعلى كفاءة عالية من موظفي الإنتاج المحترفين في غضون أفواجٍ من الإبداع!</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pt-14'>
            <div className='shadow-lg rounded-lg overflow-hidden bg-[#f7f7f7]'>
                <div className='w-full h-[340px] relative'>
                   <Image 
                   src="/images/Picture2.svg"
                   alt='picture 1'
                   fill
                   objectFit='cover'
                   />
                </div>
                <div className='p-4'>
                    <h1 className={h1Style}>أحمد البشري</h1>
                    <p className={pStyle}>منتج وكاتب روائي ودرامي سعودي</p>
                    <p className={pStyle}>مؤسس روح استوديو خبرة تزيد عن 15 عام في المجال  الإعلامي مؤسس وشريك لمجموعة من الشركات في المجال، عمل مستشاراً إعلامياً في MBC وعمل لدى العديد من الجهات الإعلامية ، انتج العديد من المسلسلات والبرامج للقنوات والمنصات الإعلامية</p>
                </div>
            </div>
            <div className='shadow-lg rounded-lg overflow-hidden bg-[#f7f7f7]'>
                <div className='w-full h-[340px] relative'>
                   <Image 
                   src="/images/Picture1.svg"
                   alt='picture 1'
                   fill
                   objectFit='cover'
                   />
                </div>
                <div className='p-4'>
                    <h1 className={h1Style}>مشعل المطيري</h1>
                    <p className={pStyle}>منتج وممثل سعودي</p>
                    <p className={pStyle}>مؤسس روح استوديو وشركة طريق الفن عام خبرة تزيد عن 20 عام في المجال الإعلامي ، رئيس مجلس إدارة جمعية الأفلام المهنية، حائز على جائزة افضل ممثل لعام 2017 في مهرجان أفلام السعودية انتج العديد من الأفلام والمسلسلات للقنوات والمنصات الإعلامية</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

const h1Style = "text-[24px] font-bold m-0"
const pStyle = "text-[14px] text-grayColor mt-2 leading-6"

export default OurTeam
