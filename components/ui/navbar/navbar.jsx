"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo2.svg";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation.js";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { lable: "الرئيسية", path: "/" },
    { lable: "مسلسلات", path: "/series" },
    { lable: "الشركة", path: "/about" },
    { lable: "الخدمات", path: "/services" },
    { lable: "تصريحات صحفية", path: "/pressReleases" },
    { lable: "اتصل بنا", path: "/contact" },
  ];

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Track scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white dark:bg-dark w-full z-40 ${
        pathname === "/" || pathname === "/series"
          ? `fixed top-0 dark:bg-transparent bg-transparent ${
              isScrolled ? "!bg-white shadow-lg dark:!bg-dark shadow-lg" : ""
            }}`
          : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 rounded-lg">
          <div>
            {darkMode ? (
              <Image
                src={logo}
                alt="Picture of the logo"
                sizes="100vw"
                width={120}
                height={100}
              />
            ) : (
              <Image
                src="/images/darkLogo.svg"
                alt="Picture of the logo"
                sizes="100vw"
                width={120}
                height={100}
              />
            )}
          </div>
          <div>
            <ul className="hidden md:flex items-center gap-10">
              {links.map((link, index) => (
                <li key={index} className="capitalize text-sm py-1 font-medium">
                  <Link
                    className={
                      pathname === link.path
                        ? `text-primary border-b-[1px] border-primary py-2`
                        : pathname === "/" || pathname === "/series"
                        ? `py-2 text-white dark:text-white hover:text-primary dark:hover:text-primary ${
                            isScrolled ? "!text-grayColor dark:!text-white" : ""
                          }`
                        : `py-2 text-grayColor dark:text-white hover:text-primary dark:hover:text-primary`
                    }
                    href={link.path}
                  >
                    {link.lable}
                  </Link>
                </li>
              ))}
              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </ul>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#2C2C2E] text-primary"
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
            <div className="absolute top-[97px] right-0 bg-white dark:bg-grayColor shadow-lg rounded-b-lg w-full z-50 p-4">
              <ul className="flex flex-col gap-4 text-[16px] font-medium">
                {links.map((link, index) => (
                  <li
                    key={index}
                    className="capitalize text-sm py-1 font-medium"
                  >
                    <Link
                      onClick={() => setMenuOpen(false)}
                      className={
                        pathname === link.path
                          ? `text-primary border-b-[1px] border-primary py-2`
                          : `py-2 text-white dark:text-white hover:text-primary`
                      }
                      href={link.path}
                    >
                      {link.lable}
                    </Link>
                  </li>
                ))}
                <ThemeToggle />
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
