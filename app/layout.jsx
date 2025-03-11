// import localFont from "next/font/local";
import Navbar from "@/components/ui/navbar/navbar";
import "./globals.css";
import Footer from "@/components/ui/footer/Footer";
import {BsWhatsapp} from "react-icons/bs"



export const metadata = {
  title: "Adwaty",
  description: "شركة أدواتي مخصصه لحقائب التربية الخاصة",
  keywords: "أفلام, مسلسلات, إنتاج فني, السعودية, الوطن العربي, روح استوديو, أدوات تخاطب, تخاطب الأطفال, إعاقة ذهنية, تأخر ذهني, أطفال ذوي احتياجات خاصة, تربية خاصة, حقائب تربية خاصة, أدوات تربية خاصة, علاج النطق, أدوات نطق, أدوات تعليمية, صعوبات التعلم, اضطرابات النطق, جلسات تخاطب, أدوات تأهيل, برامج تأهيلية, تأهيل الأطفال, مشاكل النطق, أدوات نطق الأطفال, أدوات مساعدة, أدوات حسية, تنمية المهارات, تدريب التخاطب, تعليم الأطفال, تعليم خاص, تعليم ذوي الاحتياجات الخاصة, أدوات معالجة النطق, أدوات تفاعلية, وسائل تعليمية, كتب تخاطب, بطاقات تعليمية, توحد, متلازمة داون, أطفال متلازمة داون, اضطراب طيف التوحد, تدريبات نطق, تدريب الأطفال, مهارات التواصل, مشاكل الكلام, تأهيل سمعي, تأهيل لغوي, تأهيل ذهني, علاج تأخر الكلام, أدوات تواصل بديلة, تأهيل نطق, برامج تأهيل التخاطب, أدوات العلاج الوظيفي, ألعاب تربوية",

  author: "Adwaty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/path/to/your/og-image.jpg" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-body">
        <Navbar />
        <a
  href="https://api.whatsapp.com/send?phone=201016527538"

  className="whats_button"
  target="_blank"
  rel="noopener noreferrer"
>
  <BsWhatsapp />
</a>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

