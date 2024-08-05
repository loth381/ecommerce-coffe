"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ItemsMenuMobile from "./items-menu-mobile";
import MenuList from "./menu-list";
import ToggleTheme from "./toggle-theme";

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-around p-8 mx-auto cursor-pointer transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <h1
        className={`text-3xl ${
          isScrolled ? "text-black" : "text-white"
        }`}
        onClick={() => router.push("/")}
      >
        Cafeteria <span className="font-bold">Avendaño</span>
      </h1>
      <div className="items-center justify-between hidden sm:flex">
        <MenuList isScrolled={isScrolled} />
      </div>
      <div className="flex sm:hidden">
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Navbar;
