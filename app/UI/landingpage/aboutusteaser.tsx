import Image from "next/image";
import Link from "next/link";
import BroomIcon from "../../../public/broom.svg";

export default function AboutUsTeaser() {
  return (
    <section className=" text-center text-xl px-6 md:text-2xl m-auto mt-10 max-w-screen-xl">
      <h3 className=" text-4xl mb-8 font-bold">About Us </h3>
      <div className="py-6 mb-10 hover:scale-105 shadow-lg transition-transform duration-300 ease-in-out bg-chance-green w-fit m-auto rounded-full px-8">
        <Image
          className=" m-auto"
          alt="a photo of a cleaning robot"
          width={125}
          height={125}
          src={"/chancy.png"}
        ></Image>
      </div>
      <p>
        At Just By Chance Cleaning, we believe in delivering spotless results
        with a touch of magic. Our dedicated team is passionate about
        transforming spaces into clean, healthy environments.
      </p>
      <Link className="" href={"/aboutUs"}>
        <button className=" flex mt-10 m-auto hover:scale-105 shadow-lg bg-chance-green text-white hover:text-chance-dark-blue font-bold py-1 text-2xl px-5 rounded-full items-center transition-all duration-300 ease-in-out hover:bg-chance-yellow">
          <BroomIcon className="w-20 h-20 mr-2 transition-colors duration-300 ease-in-out fill-current" />
          Learn More About Us!
        </button>
      </Link>
    </section>
  );
}
