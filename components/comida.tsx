import { Medal, Package, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IoBagCheckOutline } from "react-icons/io5";

const Comida = () => {
  return (
    <div className="py-28 bg-slate-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 md:px-16 lg:px-4 relative">
        {/* Imagen 1: visible en pantallas grandes */}
        <Image
          className="absolute pb-96 hidden md:block"
          src="/shape-1.png"
          alt="Imagen"
          width={200}
          height={100}
        />
        {/* Imagen 2: visible en pantallas grandes */}
        <Image
          className="absolute pt-96 hidden md:block"
          src="/shape-3.png"
          alt="Imagen"
          width={150}
          height={100}
        />
        <div className="flex-1 mb-8 lg:mb-0">
          <Image
            src="/menu01.png"
            alt="Imagen de DXN"
            width={750}
            height={600}
            className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex-1 max-w-lg mb-8 lg:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bebas-neue-regular text-gray-800">
            Wonderful dining experience & food.
          </h1>
          <p className="text-base md:text-lg leading-relaxed py-4 text-gray-600">
            Somos un equipo de Ayacucho con más de 2 años de experiencia en DXN. Nos especializamos en guiar a nuevos integrantes en el ámbito de la venta de nuestros productos, resaltando sus beneficios para la salud y el bienestar. Trabajar con DXN ofrece una oportunidad única para
          </p>
          <div className="flex flex-col md:flex-row lg:justify-start justify-between items-center bebas-neue-regular">
            <Link
              href="/allproducts"
              className="mt-6 text-lg md:text-xl px-8 py-3 flex justify-center items-center bg-slate-800 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
              aria-label="Comprar ahora"
            >
              NUESTRO Restaurante
            </Link>
            <h1 className="mt-4 md:mt-7 md:pl-10 text-3xl items-center flex">
              <span>
                <Phone size={45} className="px-2" />
              </span>
              930134000
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
        <div className="flex flex-col items-center">
          <Package size={50} className="text-gray-800 mb-2" />
          <h1 className="text-xl font-bold">Fast Delivery</h1>
          <p className="text-gray-600">Within 30 minutes</p>
        </div>
        <div className="flex flex-col items-center">
          <Medal size={50} className="text-gray-800 mb-2" />
          <h1 className="text-xl font-bold">Quality Guarantee</h1>
          <p className="text-gray-600">Satisfaction assured</p>
        </div>
        <div className="flex flex-col items-center">
          <IoBagCheckOutline size={50} className="text-gray-800 mb-2" />
          <h1 className="text-xl font-bold">Secure Payment</h1>
          <p className="text-gray-600">100% safe transactions</p>
        </div>
      </div>
    </div>
  );
};

export default Comida;
