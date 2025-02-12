// import localFont from "next/font/local";
import Navbar from "@/components/ui/navbar/navbar";
import "./globals.css";
import Footer from "@/components/ui/footer/Footer";
import {BsWhatsapp} from "react-icons/bs"



export const metadata = {
  title: "Adwaty",
  description: "أدواتى هى مخصصه لجميع ادوات التخاطب والادراك التى تساعد على نمو الطفل",
  keywords: "أفلام, مسلسلات, إنتاج فني, السعودية, الوطن العربي, روح استوديو",
  author: "Roh Studio",
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

