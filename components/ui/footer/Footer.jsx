import Image from 'next/image'
import darkLogo from "@/public/images/darkLogo.svg"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto">
      <div className='grid grid-cols-4 items-center justify-between'>
        <div>
            <Image
            src={darkLogo}
            alt='dark logo'
            objectFit='cover'
            />
            <p>حيث يصنع الفرق في المسلسلات والافلام والبرامج العربية</p>
        </div>
        <div>
            <h1>الشركة</h1>
            <div>
                <Link href="#">عنا</Link>
                <Link href="#">تواصل معنا</Link>
                <Link href="#">وظائف</Link>
                <Link href="#">الثقافة</Link>
                <Link href="#">المدونات</Link>
            </div>
        </div>
        <div>
            <h1>الدعم</h1>
            <div>
                <Link href="#">البداية</Link>
                <Link href="#">مركز المساعدة</Link>
                <Link href="#">حالة الخادم</Link>
                <Link href="#">الابلاغ عن خطأ</Link>
                <Link href="#">دعم الدردشة</Link>
            </div>
        </div>
        <div>
            <h1>تابعونا</h1>
            <div>
                <Link href="#"><FaFacebookF /></Link>
                <Link href="#"><FaInstagram /></Link>
                <Link href="#"><FaLinkedinIn /></Link>
                <Link href="#"><FaYoutube /></Link>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
