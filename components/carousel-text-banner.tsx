"use client";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export const dataCarouselTop = [
  {
    id: 1,
    title: "Envio en 24/48 h",
    description:
      "como cliente vip, tus envios en 24/48 horas. obten mas infomarcion",
    link: "#",
  },
  {
    id: 2,
    title: "Consigue hasta un -25% en compras superiores a s/40",
    description:
      "-20% al gastar s/100 o -25% al gastar s/150, usa el codigo Cafecito",
    link: "#",
  },
  {
    id: 3,
    title: "Devolucion y entregas gratuitas",
    description:
      "como cliente vip,  tienes envios y devoluciones gratis en plan",
    link: "#",
  },
  {
    id: 1,
    title: "Comprar novedades",
    description: "Todas las novedades al 50% descuento",
    link: "#",
  },
];

const CarouselTextBanner = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-200  dark:bg-primary">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {dataCarouselTop.map(({ id, title, link, description }) => (
            <CarouselItem
              key={id}
              onClick={() => router.push(link)}
              className="cursor-pointer"
            >
              <div>
                <Card className="shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col items-center justify-center p-2 text-center">
                    <p className="sm:text-lg text-wrap dark:text-secondary">
                      {title}
                    </p>
                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner;
