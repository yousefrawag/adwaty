"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo2.svg"
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation.js";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname(); 
  const [menuOpen, setMenuOpen] = useState(false);

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
    <nav className="fixed top-0 w-full z-40 dark:bg-dark bg-withe">
      <div className="container mx-auto px-4">
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
          <div>
            <ul className="hidden md:flex items-center gap-10">
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
                          {/* Mobile Menu Button */}
                          <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#2C2C2E] hover:text-[#00AEEF]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>
        {menuOpen && (
                    <div className="absolute top-[97px] right-0 bg-white shadow-lg rounded-b-lg w-full z-50 p-4">
                    <ul className="flex flex-col gap-4 text-[16px] font-medium">
                      {links.map((link, index) => {
                        return (
                          <li
                            key={index}
                            className="capitalize text-sm py-1 font-medium"
                          >
                            <Link onClick={() => setMenuOpen(false)} className={pathname === link.path ? `text-primary border-b-[1px] border-primary py-2`: `py-2 text-grayColor dark:text-white hover:text-primary`} href={link.path}>{link.lable}</Link>
                          </li>
                        );
                      })}
                      <ThemeToggle/> 
                    </ul>
                  </div>
        )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
