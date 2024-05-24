import Image from "next/image";
import { quicksand } from "./fonts";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="block lg:flex w-full gap-5 text-white   justify-between text-2xl bg-chance-blue text-center px-12 pb-5 tracking-wider ">
      <div className=" flex justify-center pt-5">
        <Link href={"/"}>
          <Image
            className=" m-auto transition duration-300 ease-in-out transform hover:scale-105"
            src={"/Icon1.png"}
            alt="A cleaning business Icon"
            width={100}
            height={100}
          />
        </Link>
        <p
          className={` ${quicksand.className} h-fit pl-5 my-auto text-white font-bold`}
        >
          Just By Chance Cleaning
        </p>
      </div>
      <div className=" block md:flex my-auto gap-5 pt-5">
        <Link href={"/aboutus"}>
          <div className=" p-4 flex mb-5 md:mb-0 font-bold bg-chance-green py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <Image
              src={"/clean.png"}
              alt="A cleaning business Icon"
              width={75}
              height={75}
            ></Image>
            <p className=" h-fit my-auto">Services</p>
          </div>
        </Link>
        <Link href={"/contactus"}>
          <div className=" p-4 flex mb-5 md:mb-0 font-bold bg-chance-green py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <Image
              src={"/maid.png"}
              alt="A cleaning business Icon"
              width={75}
              height={75}
            ></Image>
            <p className=" pl-2 h-fit my-auto">About Us</p>
          </div>
        </Link>
        <Link href={"/contactus"}>
          <div className=" p-4 flex mb-5 md:mb-0 font-bold bg-chance-green py-3 pb-4 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <Image
              src={"/phone.png"}
              alt="A cleaning business Icon"
              width={60}
              height={75}
            ></Image>
            <p className=" pl-2 h-fit my-auto">Contact Us</p>
          </div>
        </Link>
      </div>
    </nav>
  );
}
