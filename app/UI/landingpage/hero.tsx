import Image from "next/image";
import { poppins } from "../fonts";
import StarIcon from "../../../public/noun-star-6883878.svg";

export default function Hero() {
  return (
    <section>
      <div className="relative h-screen bg-cover bg-center">
        <div className="">
          <div className="absolute z-10 inset-0 bg-chance-blue filter saturate-0 bg-opacity-10"></div>
          <div className="absolute z-20 px-6 md:px-20 mt-10 inset-0 text-center">
            <h2
              className={` ${poppins.className} font-bold mb-10 tracking-wider text-chance-dark-blue text-4xl`}
            >
              Cleaning by Chance, Perfection by Choice!
            </h2>
            <p className={`font-bold tex text-chance-dark-blue text-2xl`}>
              Welcome to Just By Chance Cleaning! We bring professional cleaning
              magic to the Central Valley. Whether it`s a cozy home or a
              bustling office, our expert team transforms mess into sparkling
              perfection. Let us handle the dirty work while you enjoy the
              spotless results—because with us, cleanliness isn`t just by
              chance, it`s guaranteed!
            </p>
            <button className=" m-auto hover:scale-105 mt-10 shadow-lg md:mt-20 bg-chance-green text-white hover:text-chance-dark-blue font-bold py-1 text-2xl px-5 rounded-full flex items-center transition-all duration-300 ease-in-out hover:bg-chance-yellow">
              <StarIcon className="w-20 h-20 mr-2 transition-colors duration-300 ease-in-out fill-current" />
              Take a Chance!
            </button>
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
