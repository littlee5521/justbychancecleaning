"use client";
import { useState } from "react";
import CleanIcon from "../../public/clean.svg";
import MaidIcon from "../../public/maid.svg";
import PhoneIcon from "../../public/phone.svg";

import Image from "next/image";
import { quicksand } from "./fonts";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="block lg:flex w-full gap-5  text-white  justify-between text-2xl bg-chance-blue text-center px-12 pb-5 tracking-wider ">
      <div className="block lg:flex justify-between w-full  max-w-screen-4xl m-auto">
        <div className=" flex justify-center pt-5">
          <Link className=" my-auto  " href={"/"}>
            <Image
              className=" m-auto transition duration-300 ease-in-out transform hover:scale-105"
              src={"/icon.png"}
              alt="A cleaning business Icon"
              width={100}
              height={100}
            />
          </Link>
          <p
            className={` ${quicksand.className} h-fit pl-0 md:pl-5 text-chance-dark-blue md:text-3xl my-auto  font-bold`}
          >
            Just By Chance Cleaning
          </p>
          <input
            type="checkbox"
            id="menu-toggle"
            checked={isMenuOpen}
            onChange={handleMenuToggle}
            className="hidden"
          />
          <label
            htmlFor="menu-toggle"
            className=" cursor-pointer my-auto md:hidden text-2xl block p-4"
          >
            <Image
              width={75}
              height={75}
              alt="a hambburger icom"
              src={"/menu.png"}
            ></Image>
          </label>
        </div>
        <div
          className={`menu-items ${
            isMenuOpen ? "flex" : "hidden"
          } md:flex my-auto gap-5 pt-5 flex-col justify-center md:flex-row`}
        >
          <Link href={"/services"}>
            <div className=" p-4 flex mb-5 md:mb-0 hover:bg-chance-yellow  bg-chance-green py-2 px-4 rounded-full shadow-md text-black transition duration-300 ease-in-out transform hover:scale-105">
              <CleanIcon className="w-20 h-20 mr-2 transition-colors duration-300 ease-in-out fill-current" />
              <p className=" h-fit my-auto">Services</p>
            </div>
          </Link>
          <Link href={"/aboutUs"}>
            <div className=" p-4 flex mb-5 md:mb-0 hover:bg-chance-yellow text-black bg-chance-green py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <MaidIcon className="w-20 h-20 mr-2 transition-colors duration-300 ease-in-out fill-current" />
              <p className=" pl-2 h-fit my-auto">About Us</p>
            </div>
          </Link>
          <Link href={"/contactUs"}>
            <div className="  flex mb-5 md:mb-0 hover:bg-chance-yellow  text-black bg-chance-green pb-4 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <PhoneIcon className="w-20 h-20 pt-5 mr-2 transition-colors my-auto duration-300 ease-in-out fill-current" />
              <p className=" pl-2 h-full pt-5 my-auto">Contact Us</p>
            </div>
          </Link>

          <style jsx>{`
            #menu-toggle:checked ~ .menu-items {
              display: flex;
            }
          `}</style>
        </div>
      </div>
    </nav>
  );
}
