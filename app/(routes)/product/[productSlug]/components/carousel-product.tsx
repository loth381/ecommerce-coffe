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

  // Verificar que images y images.data están definidos y que images.data es un array
  const hasImages = images?.data?.length > 0;

  return (
    <div className="sm:px-16 relative">
      <Carousel>
        <CarouselContent>
          {hasImages ? (
            images.data.map((image) => (
              <CarouselItem key={image.id}>
                <img
                  src={`${image.attributes.url}`}
                  alt={`Product Image ${image.id}`}
                  className="rounded-lg"
                />
              </CarouselItem>
            ))
          ) : (
            <p>No images available</p>
          )}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:left-4" />
        <CarouselNext className="hidden sm:flex sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-4" />
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
