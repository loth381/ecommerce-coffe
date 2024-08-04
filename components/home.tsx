"use client";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HomeBanner: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const items = [
    {
      name: "RESTAURANTE",
      description: "LUREMY",
      imageUrl: "/homelomo.webp",
    },
    {
      name: "CAFETERÍA",
      description: "LUREMY",
      imageUrl: "/homelomo.webp",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 2000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative h-screen overflow-hidden bebas-neue-regular">
      <motion.div
        className={`bg-fixed absolute w-full h-full bg-cover bg-center`}
        style={{ backgroundImage: `url(${items[current].imageUrl})` }}
        initial={{ opacity: 0, scale: 1.05 }} // Comienza un poco escalado y transparente
        animate={{ opacity: 1, scale: 1 }} // Desvanece y escala a su tamaño original
        exit={{ opacity: 0, scale: 1.05 }} // Desvanece y escala al salir
        transition={{ duration: 1, ease: "easeInOut" }} // Transición suave
      >
        {/* Fondo oscuro */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          {/* Contenedor de contenido */}
          <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] xl:w-[700px] xl:h-[700px] border-radius-full overflow-hidden mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="rounded-full"
            >
              <Image
                src="/homepatron.webp"
                alt="home"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                priority
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 p-2 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
              <motion.p
                className="text-lg md:text-2xl text-slate-800"
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
              >
                Sabor y Sazón de Nuestra Tierra
              </motion.p>

              {/* Animación para cambiar entre "RESTAURANTE" y "CAFETERÍA" */}
              <div className="flex justify-center items-center">
                <motion.h2
                  className="text-4xl md:text-6xl lg:text-8xl pt-4 no-background"
                  key={current} // Cambia la clave para forzar la animación
                  initial={{ opacity: 0, x: -50 }} // Inicio fuera de la pantalla (izquierda)
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, ease: "easeInOut" },
                  }}
                  exit={{
                    opacity: 0,
                    x: 50, // Sale a la derecha
                    transition: { duration: 0.6, ease: "easeInOut" },
                  }}
                >
                  {items[current].name}
                </motion.h2>
              </div>

              {/* Muestra la descripción solo una vez, ya que no cambia */}
              <motion.p
                className="text-md text-4xl md:text-8xl"
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
              >
                {items[current].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
                className="mt-6"
              >
                <Link
                  href="/allproducts"
                  className="lg:mt-6 text-lg md:text-xl px-8 py-3 flex justify-center items-center bg-slate-800 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
                  aria-label="Comprar ahora"
                >
                  NUESTRA CARTA <MoveRight className="px-1" size={30} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeBanner;
