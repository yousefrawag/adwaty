import Image from 'next/image'
import darkLogo from "@/public/images/darkLogo.svg"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='py-pp_80 dark:bg-dark dark:text-white'>
      <div className="container mx-auto">
      <div className='grid grid-cols-1   xl:grid-cols-3 lg:grid-cols-3 gap-8'>
        <div className='w-full px-10 xl:px-0 lg:px-0'>
            <Image
            src={darkLogo}
            alt='dark logo'
            objectFit='cover'
            />
            <p className={textColor}>حيث يصنع الفرق في المسلسلات والافلام والبرامج العربية</p>
        </div>
        <div className='w-full px-10 xl:px-0 lg:px-0'>
            <h2 className={headStyle}>الشركة</h2>
            <div className='flex flex-col gap-4 items-start jsutify-start'>
                <Link className={textColor} href="#">عنا</Link>
                <Link className={textColor} href="#">تواصل معنا</Link>
                <Link className={textColor} href="#">وظائف</Link>
                <Link className={textColor} href="#">الثقافة</Link>
                <Link className={textColor} href="#">المدونات</Link>
            </div>
        </div>
     
        <div className='w-full px-10 xl:px-0 lg:px-0'>
            <h2 className={headStyle}>تابعونا</h2>
            <div className='flex gap-4'>
                <Link className='w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center' href="#"><FaFacebookF /></Link>
                <Link className='w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center' href="#"><FaInstagram /></Link>
                <Link className='w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center' href="#"><FaLinkedinIn /></Link>
                <Link className='w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center' href="#"><FaYoutube /></Link>
            </div>
        </div>
      </div>
      </div>
    </footer>
  )
}

const headStyle = 'text-[22px] font-bold mb-6 '
const textColor = "text-grayColor dark:text-white"

export default Footer
