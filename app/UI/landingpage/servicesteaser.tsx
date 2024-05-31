import ScrubIcon from "../../../public/scrub.svg";
import VacuumIcon from "../../../public/vacuum.svg";
import Link from "next/link";
import SparkleIcon from "../../../public/sparkle.svg";

export default function ServicesTeaser() {
  return (
    <section className="text-center bg-chance-blue text-xl px-6 md:text-2xl m-auto mt-10 w-full">
      <div className=" max-w-screen-xl m-auto pt-8">
        <h3 className=" text-4xl font-bold mb-8"> Our Services</h3>
        <div className="cardWrapper pb-10 gap-10 justify-between block sm:flex">
          <div className="card border border-black mb-10 sm:mb-0 pb-8 w-full sm:w-2/4 pt-8 px-4 bg-white">
            <div className="px-3 py-4 w-fit rounded-full m-auto bg-chance-blue">
              <ScrubIcon className="w-20 h-20 fill-black" />
            </div>
            <h3 className=" text-4xl mt-8 mb-6 font-bold">Deep Clean </h3>
            <h4 className=" font-bold">Key Benefits</h4>
            <ul className=" list-disc font-bold list-inside">
              <li className=" font-normal mt-4 my-1">
                Comprehensive cleaning of all areas.
              </li>
              <li className=" font-normal my-1">
                Ideal for initial visits or after long intervals.
              </li>
              <li className=" font-normal my-1">
                Includes detailed attention to often-missed spots.
              </li>
            </ul>
            <Link className="" href={"/services"}>
              <button className=" flex mt-10 m-auto hover:scale-105 shadow-lg bg-chance-green text-white hover:text-chance-dark-blue font-bold py-1 text-2xl px-5 rounded-full items-center transition-all duration-300 ease-in-out hover:bg-chance-yellow">
                <SparkleIcon className="w-20 h-20 mr-2 transition-colors duration-300 ease-in-out fill-current" />
                Learn More!
              </button>
            </Link>
          </div>
          <div className="card border border-black mb-10 sm:mb-0 pb-8 w-full sm:w-2/4 pt-8 px-4 bg-white">
            <div className="px-3 py-4 w-fit rounded-full m-auto bg-chance-blue">
              <VacuumIcon className="w-20 h-20 fill-black" />
            </div>
            <h3 className=" text-4xl mt-8 mb-8 font-bold">Routine Clean </h3>
            <h4 className=" font-bold"> Key Benefits</h4>
            <ul className=" list-disc font-bold list-inside">
              <li className=" font-normal mt-4 my-1">
                Regular maintenance at an affordable rate.
              </li>
              <li className=" font-normal my-1">
                Scheduled weekly, bi-weekly, or monthly visits.
              </li>
              <li className=" font-normal my-1">
                Ensures a consistently clean environment.
              </li>
            </ul>
            <Link className="" href={"/services"}>
              <button className=" flex mt-10 m-auto hover:scale-105 shadow-lg bg-chance-green text-white hover:text-chance-dark-blue font-bold py-1 text-2xl px-5 rounded-full items-center transition-all duration-300 ease-in-out hover:bg-chance-yellow">
                <SparkleIcon className="w-20 h-20 mr-2 transition-colors duration-300 ease-in-out fill-current" />
                Learn More!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
