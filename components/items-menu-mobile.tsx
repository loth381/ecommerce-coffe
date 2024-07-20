import { Menu } from "lucide-react";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        <Link href="/categories/cafe-molido" className="block">
          <p>Cafe molido</p>
        </Link>
        <Link href="/categories/cafe-grano" className="block">
          <p>Cafe en granos</p>
        </Link>
        <Link href="/categories/cafe-capsula" className="block">
          <p>Cafe en capsulas</p>
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default ItemsMenuMobile;
