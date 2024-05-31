import ScrubIcon from "../../../public/scrub.svg";
import VacuumIcon from "../../../public/vacuum.svg";
import Link from "next/link";
import SparkleIcon from "../../../public/sparkle.svg";

export default function ServicesTeaser() {
  return (
    <section className="text-center bg-chance-yellow text-xl px-6 md:text-2xl m-auto w-full">
      <div className=" max-w-screen-xl m-auto pt-8">
        <div className="cardWrapper pb-10 gap-24 justify-between block sm:flex">
          <div className="card rounded-full flex flex-col border border-black mb-10 sm:mb-0 pb-8 w-full sm:w-2/4 pt-8 px-10 py-16 bg-white">
            <div className="px-3 py-4 w-fit rounded-full m-auto bg-chance-yellow">
              <ScrubIcon className="w-20 h-20 fill-black" />
            </div>
            <h3 className=" text-4xl mt-8 mb-6 font-bold">Deep Clean </h3>
            <h4 className=" font-bold">Key Benefits</h4>
            <p>
              Our Deep Clean service is designed to provide a thorough and
              comprehensive cleaning. Recommended for the first one or two
              visits, this service ensures every corner and surface is
              meticulously cleaned.
            </p>
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
            <Link className="" href={"/contactUs"}>
              <button className=" flex mt-10 m-auto hover:scale-105 mb-5 shadow-lg bg-chance-green text-white hover:text-chance-dark-blue font-bold py-1 text-2xl px-5 rounded-full items-center transition-all duration-300 ease-in-out hover:bg-chance-yellow">
                <SparkleIcon className="w-20 h-20 mr-2 transition-colors duration-300 ease-in-out fill-current" />
                Get A Quote!
              </button>
            </Link>
          </div>
          <div className="card border flex flex-col border-black mb-10 sm:mb-0 pb-8 w-full sm:w-2/4 pt-8 rounded-full bg-white px-10 py-16">
            <div className="px-3 py-4 w-fit rounded-full m-auto bg-chance-yellow">
              <VacuumIcon className="w-20 h-20 fill-black" />
            </div>
            <h3 className=" text-4xl mt-8 mb-8 font-bold">Routine Clean </h3>
            <h4 className=" font-bold"> Key Benefits</h4>
            <p>
              Our Routine Clean service is perfect for maintaining a
              consistently clean space. After the initial deep cleaning, this
              affordable service keeps your home or office spotless with regular
              visits.
            </p>
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
            <Link className="" href={"/contactUs"}>
              <button className=" flex mt-10 m-auto hover:scale-105 mb-5 shadow-lg bg-chance-green text-white hover:text-chance-dark-blue font-bold py-1 text-2xl px-5 rounded-full items-center transition-all duration-300 ease-in-out hover:bg-chance-yellow">
                <SparkleIcon className="w-20 h-20 mr-2 transition-colors duration-300 ease-in-out fill-current" />
                Get A Quote!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
