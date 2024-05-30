import Image from "next/image";
import { poppins } from "../fonts";
import StarIcon from "../../../public/noun-star-6883878.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="relative h-screen  bg-cover bg-center">
        <div className="">
          <div className="absolute z-10 inset-0  bg-chance-blue filter saturate-0 bg-opacity-20"></div>
          <div className="absolute z-20 px-6 md:px-20 mt-10 inset-0 max-w-screen-2xl m-auto text-center">
            <h2
              className={` ${poppins.className} font-bold mb-18 md:pb-16 tracking-wider text-chance-dark-blue text-4xl`}
            >
              Cleaning by Chance, Perfection by Choice!
            </h2>
            <p
              className={`font-bold bg-white md:bg-none md:bg-opacity-15 bg-opacity-40 text-chance-dark-blue text-xl md:text-2xl transform translate-y-2 translate-x-2
        shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.2)]`}
            >
              Welcome to Just By Chance Cleaning! We bring professional cleaning
              magic to the Central Valley. Whether it`s a cozy home or a
              bustling office, our expert team transforms mess into sparkling
              perfection. Let us handle the dirty work while you enjoy the
              spotless results—because with us, cleanliness isn`t just by
              chance, it`s guaranteed!
            </p>
            <Link href={"/contactUs"}>
              <button className=" m-auto hover:scale-105 mt-10 shadow-lg md:mt-20 bg-chance-green text-white hover:text-chance-dark-blue font-bold py-1 text-2xl px-5 rounded-full flex items-center transition-all duration-300 ease-in-out hover:bg-chance-yellow">
                <StarIcon className="w-20 h-20 mr-2 transition-colors duration-300 ease-in-out fill-current" />
                Take a Chance!
              </button>
            </Link>
          </div>
          <Image
            className=" z-0"
            layout="fill"
            alt="A photo of cleaning supplies"
            src={"/herobg.jpg"}
            objectFit="cover"
            objectPosition="center"
            priority
          ></Image>
        </div>
      </div>
    </section>
  );
}
