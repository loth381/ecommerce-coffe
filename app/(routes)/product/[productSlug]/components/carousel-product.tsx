/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselProductProps {
  images: {
    data: {
      id: number;
      attributes: {
        url: string;
      };
    }[];
  };
}

const CarouselProduct = (props: CarouselProductProps) => {
  const { images } = props;

  return (
    <div className="sm:px-16 relative">
      <Carousel>
        <CarouselContent>
          {images.data.map((image) => (
            <CarouselItem key={image.id}>
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`}
                alt="Imagen Product"
                className="rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:left-4" />
        <CarouselNext className="hidden sm:flex sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-4"  />  
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
