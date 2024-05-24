import Image from "next/image";
import { poppins } from "../fonts";

export default function Hero() {
  return (
    <section>
      <div className="relative h-screen bg-cover bg-center">
        <div className="absolute inset-0 bg-chance-blue bg-opacity-10"></div>
        <div className="absolute px-20 mt-10 inset-0 text-center">
          <h2
            className={` ${poppins.className} font-bold mb-10 text-chance-dark-blue text-4xl`}
          >
            Cleaning by Chance, Perfection by Choice!
          </h2>
          <p className={`font-bold tex text-chance-dark-blue text-2xl`}>
            Welcome to Just By Chance Cleaning! We bring professional cleaning
            magic to the Central Valley. Whether it's a cozy home or a bustling
            office, our expert team transforms mess into sparkling perfection.
            Let us handle the dirty work while you enjoy the spotless
            results—because with us, cleanliness isn't just by chance, it's
            guaranteed!
          </p>
        </div>
        <Image
          layout="responsive"
          width={100}
          height={100}
          alt="A photo of cleaning supplies"
          src={"/herobg.jpg"}
        ></Image>
      </div>
    </section>
  );
}
