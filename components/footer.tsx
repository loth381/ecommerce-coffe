import Link from "next/link";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoLocationOutline, IoMailOpenOutline } from "react-icons/io5";
import { TbMessage2 } from "react-icons/tb";
import { Separator } from "./ui/separator";
const dataFooter = [
  {
    id: 1,
    name: "Sobre nosotros",
    link: "#",
    icon: <IoLocationOutline className="text-4xl text-slate-800 hover:text-orange-400"  />,
    description: "Enjoy a wonderful cafe dining experience",
  },
  {
    id: 2,
    name: "Productos",
    link: "#",
    icon: <IoMailOpenOutline className="text-4xl text-slate-800 hover:text-orange-400" />,
    description: "Phone: 1-800-222-000 Fax: 1-800-222-002",
  },
  {
    id: 3,
    name: "Mi cuenta",
    link: "#",
    icon: <BsTelephoneInbound className="text-4xl text-slate-800 hover:text-orange-400"  />,
    description: "info@yourdomain.com hr@yourdomain.com",
  },
  {
    id: 4,
    name: "Política de privacidad",
    link: "#",
    icon: <TbMessage2 className="text-4xl text-slate-800 hover:text-orange-400" />,
    description: "Lorem ipsum consectetur adipiscing onsectetur.",
  },
];

const Footer = () => {
  return (
    <footer
      className="mt-4 bg-cover bg-center relative items-center pt-8 inset-0"

    >
      <div className="w-full max-w-screen-xl text- mx-auto md:py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-10">
          {dataFooter.map((data) => (
            <div key={data.id} className="flex flex-col items-center">
              <div className="text-gray-500 dark:text-gray-400">{data.icon}</div>
              <Link href={data.link} className="hover:underline mt-2">
                <div className="text-lg font-bold text-gray-700 dark:text-gray-300">
                  {data.name}
                </div>
              </Link>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex flex-col">
                {data.description}
              </div>
            </div>
          ))}
        </div>
        <Separator className="my-6 bg-slate-800 border-slate-950 sm:mx-auto dark:border-white lg:my-4" />
        <div className="flex max-sm:flex-col py-4  sm:py-0 justify-between items-center">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy; 2024 <Link href="#"></Link> Todos los derechos reservados.
          </span>
          <p className="py-2 text-2xl">
            <span className="font-bold">Avendaño</span> cafeteria
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/tu_cuenta"
              className="text-2xl text-blue-800"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/tu_cuenta"
              className="text-2xl text-pink-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@tu_cuenta"
              className="text-2xl text-black dark:text-white"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/tu_cuenta"
              className="text-2xl text-red-600"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
