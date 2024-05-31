import ScrubIcon from "../../../public/clean.svg";

export default function OurMission() {
  return (
    <section className=" bg-chance-yellow py-5 text-center">
      <div className=" max-w-screen-xl px-5 m-auto">
        <div className="card rounded-full flex text-xl sm:text-2xl flex-col border border-black mb-10 m-auto sm:mb-0 py-16 w-full sm:w-2/4 px-10 bg-white">
          <div className="px-3 py-4 mb-10 w-fit rounded-full m-auto bg-chance-yellow">
            <ScrubIcon className="w-20 h-20 fill-black" />
          </div>
          <h3 className=" text-4xl font-bold">Our Mission </h3>
          <p className=" mx-5">
            At Just By Chance Cleaning, our mission is to provide exceptional
            cleaning services that improve the quality of life for our clients.
            We are committed to creating clean, healthy environments where you
            can thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
