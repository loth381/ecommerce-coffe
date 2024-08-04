'use client'; // Marca este archivo como componente del cliente

import Image from 'next/image';
import React from 'react';
import { Autoplay } from 'swiper/modules'; // Quitamos la importación de Navigation
import { Swiper, SwiperSlide } from 'swiper/react';
// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  {
    src: '/fondomenu.webp',
    width: 1450,
    height: 967,
    title: 'Appeteaser blatter',
    subtitles: ['Manzana', 'Pera', 'Plátano']
  },
  {
    src: '/fondomenu.webp',
    width: 1450,
    height: 967,
    title: 'Appeteaser blatter',
    subtitles: ['Kiwi', 'Naranja', 'Fresa']
  },
  {
    src: '/fondomenu.webp',
    width: 1450,
    height: 967,
    title: 'Appeteaser blatter',
    subtitles: ['Uva', 'Mango', 'Lúcuma']
  },
  {
    src: '/fondomenu.webp',
    width: 1450,
    height: 967,
    title: 'Appeteaser blatter',
    subtitles: ['Cereza', 'Frambuesa', 'Papaya']
  },
  {
    src: '/fondomenu.webp',
    width: 1450,
    height: 967,
    title: 'Appeteaser blatter',
    subtitles: ['Cereza', 'Frambuesa', 'Papaya']
  },
  {
    src: '/fondomenu.webp',
    width: 1450,
    height: 967,
    title: 'Appeteaser blatter',
    subtitles: ['Cereza', 'Frambuesa', 'Papaya']
  },
  {
    src: '/fondomenu.webp',
    width: 1450,
    height: 967,
    title: 'Appeteaser blatter',
    subtitles: ['Cereza', 'Frambuesa', 'Papaya']
  },
  {
    src: '/fondomenu.webp',
    width: 1450,
    height: 967,
    title: 'Appeteaser blatter',
    subtitles: ['Piña', 'Durazno', 'Coco']
  }
];

const ImageCarousel: React.FC = () => {
  return (
    <div className=' py-20 bg-slate-50'>
    <div className='flex flex-col items-center justify-center py-4 '>
      <p className='text-[17px] text-red-600 schibsted-grotesk font-semibold py-2'>-SPECIAL CHOICE-</p>
      <h1 className='text-6xl bebas-neue-regular '>Popular dishes</h1>
    </div>
    <section className="relative w-full mx-auto my-8 px-4 overflow-hidden">
      <Swiper
        modules={[Autoplay]} // Quitamos Navigation
        spaceBetween={5} // Espacio reducido entre imágenes
        slidesPerView={1} // Mostrar una imagen a la vez por defecto
        loop={true} // Hacer el carrusel cíclico
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        pagination={{ clickable: true }}
        speed={2000} // Ajuste la velocidad de la transición
        breakpoints={{
          640: {
            slidesPerView: 1, // Mostrar una imagen a la vez en pantallas pequeñas
            spaceBetween: 5
          },
          768: {
            slidesPerView: 2, // Mostrar dos imágenes a la vez en pantallas medianas
            spaceBetween: 10
          },
          1200: {
            slidesPerView: 4, // Mostrar tres imágenes a la vez en pantallas grandes
            spaceBetween: 15,
            width: 1700,
          },
          1600:{
            slidesPerView: 5, // Mostrar tres imágenes a la vez en pantallas grandes
            spaceBetween: 15,
            width: 2100,
          }
        }}
        className="mySwiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full lg:w-[400px] h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 mx-auto">
              <Image
                src={item.src}
                alt={`Image ${index + 1}`}
                width={item.width}
                height={item.height}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-slate-700 font-semibold schibsted-grotesk  text-xs md:text-[20px]">{item.title}</h3>
              <div className="flex justify-center items-center gap-1 space-x-2 mt-1 ">
                {item.subtitles.map((subtitle, subIndex) => (
                  <React.Fragment key={subIndex}>
                    <span className="text-slate-400 text-lg md:text-lg font-semibold "> {/* Tamaño del subtítulo */}
                      {subtitle}
                    </span>
                    {subIndex < item.subtitles.length - 1 && (
                      <span className="text-slate-300 text-[35px] font-semibold">•</span> // Punto como separador, tamaño aumentado
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .mySwiper {
          width: 100%;
          height: auto;
        }
        .swiper-wrapper {
        display: flex;
          transition-timing-function: ease-in-out; /* Cambia la transición para hacerla más suave */
        }
        .swiper-slide {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .swiper-pagination-bullet {
          background-color: #ffffff;
        }
        .swiper-pagination-bullet-active {
          background-color: #007bff;
        }
      `}</style>
    </section>
    </div>
  );
};

export default ImageCarousel;
