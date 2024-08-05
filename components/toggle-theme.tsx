"use client";

import Link from "next/link";
import { TbTruckDelivery } from "react-icons/tb";

const ToggleTheme = () => {

  return (
    <div>
      <Link
          href="/allproducts"
          className=" text-lg md:text-[18px] px-5 py-3 flex justify-center items-center bg-slate-800 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
          aria-label="Comprar ahora"
        >
        <TbTruckDelivery  className="px-1" size={30} /> Ordena Ya
        </Link>
    </div>
  );
};

export default ToggleTheme;
