"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo2.svg"
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const links = [
    { 
      lable: "الرئيسية", 
      path: "/",
    },
    {
      lable: "مسلسلات",
      path: "/",
    },
    {
      lable: "نصوص",
      path: "/",
    },
    {
      lable: "الشركة",
      path: "/",
    },
    {
      lable: "الخدمات",
      path: "/",
    },
    {
      lable: "تصريحات صحفية",
      path: "/",
    },
    {
        lable: "اتصل بنا",
        path: "/",
      }
  ];


  return (
    <nav className="fixed top-0 w-screen z-40">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-3 rounded-lg">
          <div>
          <Image
      src={logo}
      alt="Picture of the logo"
      sizes="100vw"
      style={{
        width: 'auto',
        height: 'auto'
      }}
    />
          </div>
          <div className="flex items-center gap-8 text-sm">
              
          </div>
          <div>
            <ul className="flex items-center gap-10">
              {links.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="capitalize text-sm py-1 font-medium"
                  >
                    <Link className="py-1 text-white hover:text-primary hover:underline" href={link.path}>{link.lable}</Link>
                  </li>
                );
              })}
              <ThemeToggle/> 
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
