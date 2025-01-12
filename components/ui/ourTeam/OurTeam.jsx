import Image from 'next/image.js'
import React from 'react'

const OurTeam = () => {
  return (
<section className="py-pp_80 dark:bg-dark">
  <div className="container mx-auto px-4">
    <div className="text-center dark:text-white">
      <h1 className="font-bold text-3xl">فريق عملنا</h1>
      <p className="text-grayColor dark:text-white mt-4 max-w-xl mx-auto text-lg leading-relaxed">
        بمعداتٍ حديثة وعالية الجودة، يضمن لك فريقنا الاستفادة من مجموعة هائلة وعلى كفاءة عالية من موظفي الإنتاج المحترفين في غضون أفواجٍ من الإبداع!
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-1 gap-16 pt-16">
      {/* Card 1 */}
      <div className="flex flex-col md:flex-row items-center py-8 md:items-start gap-8 rounded-lg overflow-hidden bg-white">
        <div className="w-full md:w-1/3 h-[280px] overflow-hidden relative">
          <Image 
            src="/images/Picture2.svg"
            alt="أحمد البشري"
            fill
            objectFit="cover"
            className=' rounded-lg'
          />
        </div>
        <div className="p-6 md:w-2/3 text-center md:text-right">
          <h2 className="text-xl font-bold text-green-600 mb-2">أحمد البشري</h2>
          <p className="text-gray-700 font-semibold mb-4">منتج وكاتب روائي ودرامي سعودي</p>
          <p className="text-gray-600 max-w-2xl leading-8">
            مؤسس روح استوديو خبرة تزيد عن 15 عام في المجال الإعلامي. مؤسس وشريك لمجموعة من الشركات في المجال، عمل مستشاراً إعلامياً في MBC وعمل لدى العديد من الجهات الإعلامية، انتج العديد من المسلسلات والبرامج للقنوات والمنصات الإعلامية.
          </p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="flex flex-col md:flex-row items-center py-8 md:items-start rounded-lg overflow-hidden bg-white">
        <div className="p-6 md:w-2/3 text-center md:text-right">
          <h2 className="text-xl font-bold text-green-600 mb-2">مشعل المطيري</h2>
          <p className="text-gray-700 font-semibold mb-4">منتج وممثل سعودي</p>
          <p className="text-gray-600 max-w-2xl leading-8">
            مؤسس روح استوديو وشركة طريق الفن عام خبرة تزيد عن 20 عام في المجال الإعلامي. رئيس مجلس إدارة جمعية الأفلام المهنية، حائز على جائزة افضل ممثل لعام 2017 في مهرجان أفلام السعودية. انتج العديد من الأفلام والمسلسلات للقنوات والمنصات الإعلامية.
          </p>
        </div>
        <div className="w-full md:w-1/3 h-[280px] overflow-hidden relative">
          <Image 
            src="/images/Picture1.svg"
            alt="مشعل المطيري"
            fill
            objectFit="cover"
            className=' rounded-lg'
          />
        </div>
      </div>
    </div>
  </div>
</section>

  )
}


export default OurTeam
