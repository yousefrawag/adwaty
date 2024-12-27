"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo2.svg"
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation.js";

const Navbar = () => {
  const pathname = usePathname(); 
  const links = [
    { 
      lable: "الرئيسية", 
      path: "/",
    },
    {
      lable: "مسلسلات",
      path: "/series",
    },
    {
      lable: "الشركة",
      path: "/about",
    },
    {
      lable: "الخدمات",
      path: "/services",
    },
    {
      lable: "تصريحات صحفية",
      path: "/pressReleases",
    },
    {
        lable: "اتصل بنا",
        path: "/contact",
      }
  ];


  return (
    <nav className="fixed top-0 w-screen z-40 dark:bg-dark bg-withe">
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
                    <Link className={pathname === link.path ? `text-primary border-b-[1px] border-primary py-2`: `py-2 text-grayColor dark:text-white hover:text-primary`} href={link.path}>{link.lable}</Link>
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
