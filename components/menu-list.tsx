"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import Link from "next/link";

interface MenuListProps {
  isScrolled: boolean;
}

const MenuList: React.FC<MenuListProps> = ({ isScrolled }) => {
  return (
    <NavigationMenu className="flex text-[25px] bebas-neue-regular items-center justify-between">
      <NavigationMenuList className="flex items-center justify-between gap-8">
        <NavigationMenuItem>
          <Link href="/carta" legacyBehavior passHref>
            <NavigationMenuLink className={isScrolled ? "text-black" : "text-white"}>
              Menu
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={isScrolled ? "text-black" : "text-white"}>
              Nosotros
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/gallery" legacyBehavior passHref>
            <NavigationMenuLink className={isScrolled ? "text-black" : "text-white"}>
              Galeria
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/delivery" legacyBehavior passHref>
            <NavigationMenuLink className={isScrolled ? "text-black" : "text-white"}>
              Delivery
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/local" legacyBehavior passHref>
            <NavigationMenuLink className={isScrolled ? "text-black" : "text-white"}>
              Local
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MenuList;
