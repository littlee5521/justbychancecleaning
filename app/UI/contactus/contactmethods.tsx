import PhoneIcon from "../../../public/phone.svg";
import MailIcon from "../../../public/mail.svg";

export default function ContactMethods() {
  return (
    <section className=" bg-chance-yellow py-5 text-xl sm:text-2xl text-center">
      <div className=" max-w-screen-xl px-5 m-auto">
        <div className="cardWrapper pb-10 gap-10 justify-between block sm:flex">
          <div className="card border border-black mb-10 sm:mb-0 pb-8 w-full sm:w-2/4 pt-8 px-4 bg-white">
            <div className="px-3 py-4 w-fit rounded-full m-auto bg-chance-yellow">
              <PhoneIcon className="w-20 h-20 fill-black" />
            </div>
            <h3 className=" text-4xl mt-8 mb-6 font-bold">Phone </h3>
            <h4 className=" font-bold">Call us at (559) 672-2995</h4>
          </div>
          <div className="card border border-black mb-10 sm:mb-0 pb-8 w-full sm:w-2/4 pt-8 px-4 bg-white">
            <div className="px-3 py-4 w-fit rounded-full m-auto bg-chance-yellow">
              <MailIcon className="w-20 h-20 fill-black" />
            </div>
            <h3 className=" text-4xl mt-8 mb-8 font-bold">Email </h3>
            <h4 className=" font-bold">Email us at cmae83@yahoo.com</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
