export default function OurValues() {
  return (
    <section className=" bg-chance-blue py-5 text-xl sm:text-2xl text-center">
      <div className=" max-w-screen-xl px-5 m-auto">
        <h1 className=" text-4xl font-bold">Our Values</h1>
        <h2 className=" text-2xl py-5">
          We believe in integrity, reliability, and excellence. Our values guide
          everything we do and ensure that we deliver the best possible service
          to our clients.
        </h2>
        <ul className=" list-disc text-left m-auto w-fit font-bold list-inside">
          <li className=" font-normal mt-4 my-1">
            <span className=" font-bold">Integrity: </span>
            We conduct our business with honesty and transparency.
          </li>
          <li className=" font-normal my-1">
            <span className=" font-bold">Reliability: </span>
            You can count on us to show up on time and do the job right.
          </li>
          <li className=" font-normal my-1">
            <span className=" font-bold">Excellence: </span>
            We strive for excellence in every cleaning task we undertake.
          </li>
          <li className=" font-normal  mb-4 my-1">
            <span className=" font-bold">Customer Satisfaction: </span>
            Our top priority is your satisfaction with our services.
          </li>
        </ul>
      </div>
    </section>
  );
}
