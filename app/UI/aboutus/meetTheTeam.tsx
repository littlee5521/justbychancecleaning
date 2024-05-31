import ScrubIcon from "../../../public/scrub.svg";
import Image from "next/image";

export default function MeetTheTeam() {
  return (
    <section className=" bg-chance-yellow py-5 text-xl sm:text-2xl text-center">
      <div className=" max-w-screen-xl px-5 m-auto">
        <div className="card m-auto border border-black mb-10 sm:mb-0 pb-8 w-full sm:w-2/4 pt-8 px-4 bg-white">
          <div className="px-3 py-4 w-fit rounded-full m-auto bg-chance-blue">
            <ScrubIcon className="w-20 h-20 fill-black" />
          </div>
          <h3 className=" text-4xl mt-8 mb-6 font-bold">Meet the Team </h3>
          <p>
            Our dedicated team of cleaning professionals is passionate about
            what they do. Get to know the friendly faces behind our exceptional
            service.
          </p>
          <h3 className=" text-4xl mt-8 mb-6 font-bold">
            Chancy Thompson, Founder
          </h3>
          <p>
            Chancy has years of experience in the cleaning industry and is
            dedicated to ensuring that every client receives the best service
            possible.
          </p>
          <div className="py-6 mt-10 hover:scale-105 shadow-lg transition-transform duration-300 ease-in-out bg-chance-blue w-fit m-auto rounded-full px-8">
            <Image
              className=" m-auto"
              alt="a photo of a cleaning robot"
              width={125}
              height={125}
              src={"/chancy.png"}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
