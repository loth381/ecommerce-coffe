import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
  return (
    <>
      <div className="mt-4 text-center">
        <p>Sumergete en una experiencia única</p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase ">Cafe Exquisito</h4>
        <p className="my-2 text-lg">Despierda tus sentidos con cada sorbo</p>
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
      </div>
      <div className="h-[350px] bg-cover lg:h-[600px]  bg-[url('/slider-image.jpg')] bg-center mt-5 ">

      </div>
    </>
  );
};
export default BannerProduct;
