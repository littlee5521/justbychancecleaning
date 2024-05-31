import StarIcon from "../../../public/noun-star-6883878.svg";

export default function ProcessOverView() {
  return (
    <section className=" bg-chance-blue text-center">
      <div className=" pb-10 max-w-screen-xl px-6 pt-10 m-auto">
        <h1 className=" text-4xl pb-8 font-bold">Our Cleaning Process</h1>
        <div className="card m-auto text-xl md:text-2xl rounded-full flex flex-col border border-black mb-10 sm:mb-0 pb-8 w-full sm:w-2/4 pt-8 h-fit px-10 py-16 bg-white">
          <div className="px-3 py-4 w-fit rounded-full m-auto bg-chance-blue">
            <StarIcon className="w-24 h-24 fill-black" />
          </div>
          <h3 className=" text-4xl mt-8 mb-6 font-bold">
            How we ensure your space stays clean and healthy.
          </h3>
          <p>
            At Just By Chance Cleaning, we follow a meticulous process to
            deliver exceptional cleaning results. From the initial consultation
            to routine maintenance, our approach is designed to meet your unique
            needs and ensure your space remains spotless. Here`s how our process
            works:
          </p>
          <ul className=" list-disc font-bold list-inside">
            <li className=" font-normal mt-4 my-1">
              <span className=" font-bold">Step 1: Initial Consultation: </span>
              We discuss your cleaning needs and customize a plan tailored to
              your space.
            </li>
            <li className=" font-normal my-1">
              <span className=" font-bold">Step 2: Deep Cleaning: </span>
              Our team performs a thorough deep clean to prepare your space for
              routine maintenance.
            </li>
            <li className=" font-normal mb-24 my-1">
              <span className=" font-bold">Step 3: Routine Maintenance: </span>
              Regular cleanings keep your space consistently spotless and
              healthy.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
