import Link from "next/link";
import SparkleIcon from "../../../public/sparkle.svg";

export default function AboutUsCTA() {
  return (
    <section className=" bg-chance-yellow text-center">
      <div className="pb-10 max-w-screen-xl px-6 pt-10 m-auto">
        <h1 className=" text-4xl pb-8 font-bold">Join Our Community</h1>
        <h2 className=" text-2xl py-5">
          Experience the Just By Chance Cleaning difference. Contact us today to
          schedule your service.
        </h2>
        <Link className="" href={"/contactUs"}>
          <button className=" flex mt-10 m-auto hover:scale-105 mb-5 shadow-lg bg-chance-green text-white hover:text-chance-dark-blue font-bold py-1 text-2xl px-5 rounded-full items-center transition-all duration-300 ease-in-out hover:bg-chance-yellow">
            <SparkleIcon className="w-20 h-20 mr-2 transition-colors duration-300 ease-in-out fill-current" />
            Book Now!
          </button>
        </Link>
      </div>
    </section>
  );
}
