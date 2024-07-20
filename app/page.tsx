import BannerDiscount from "@/components/banner-discount";
import BannerProduct from "@/components/banner-product";
import CarouselTextBanner from "@/components/carousel-text-banner";
import ChooseCategory from "@/components/choose-category";
import FeacturedProducts from "@/components/featured-products";

export default function Home() {
  return (
    <main>
      <CarouselTextBanner/>
      <FeacturedProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProduct />
      
    </main>
  );
}
