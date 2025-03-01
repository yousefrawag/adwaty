import Image from 'next/image'
import darkLogo from "@/public/images/darkLogo.svg"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from 'next/link';
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "@/public/images/logo2.png";


const Footer = () => {
  return (
    <footer className='py-pp_80  text-black'>
      <div className="container mx-auto">
      <div className='grid grid-cols-1   xl:grid-cols-3 lg:grid-cols-3 gap-8'>
        <div className='w-full px-10 xl:px-0 lg:px-0'>
            <Image
            src={logo}
            alt='dark logo'
            objectFit='cover'
            className='w-[200px] h-[150px]'
            />
            <p className={textColor}> 

            شركة ادواتي لتصميم وتنفيذ حقائب التربية الخاصة لتطوير مهارات الأطفال نهدف إلى توفير حلول فعالة.
            </p>
        </div>
        <div className='w-full px-10 xl:px-0 lg:px-0'>
            <h2 className={headStyle}>الشركة</h2>
            <div className='flex flex-col gap-4 items-start jsutify-start'>
                <Link className={textColor} href="/about">عنا</Link>
                <Link className={textColor} href="/contact">تواصل معنا</Link>
                <Link className={textColor} href="/services">خدمات</Link>
                <Link className={textColor} href="/series">أدواتى</Link>
             
            </div>
        </div>
     
        <div className='w-full px-10 xl:px-0 lg:px-0'>
            <h2 className={headStyle}>تابعونا</h2>
            <div className='flex gap-4'>
                <Link className='w-9 h-9 hover:opacity-50 duration-200 rounded-full bg-primary text-white flex items-center justify-center' href="https://www.facebook.com/profile.php?id=100064672423169"><FaFacebookF /></Link>
                <Link className='w-9 h-9 hover:opacity-50 duration-200 rounded-full bg-primary text-white flex items-center justify-center' href="https://www.instagram.com/adwaty_11/"><FaInstagram /></Link>
                <Link className='w-9 h-9 hover:opacity-50 duration-200 rounded-full bg-primary text-white flex items-center justify-center' href=""><FaSquareXTwitter /></Link>
                <Link className='w-9 h-9 hover:opacity-50 duration-200 rounded-full bg-primary text-white flex items-center justify-center' href="#"><FaYoutube /></Link>
            </div>
        </div>
      </div>
      </div>
    </footer>
  )
}

const headStyle = 'text-[22px] font-bold mb-6 '
const textColor = "text-grayColor hover:text-primary"

export default Footer
