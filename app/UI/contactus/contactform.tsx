"use client";
import { useRef, useEffect } from "react";
import ChatIcon from "../../../public/chat.svg";
import emailsJs from "@emailjs/browser";

export default function ContactForm() {
  useEffect(() => {
    emailsJs.init({
      publicKey: "Z9Aj9dXcdHGYivOWN",
    });
  }, []);
  const formRef = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailsJs
      .sendForm("service_x838w0k", "template_70h4sc2", formRef.current!)
      .then(() => {
        console.log("Sucess");
      });
  };

  return (
    <section className=" bg-chance-blue py-5 text-xl sm:text-2xl text-center">
      <div className=" max-w-screen-xl px-5 m-auto">
        <div className="card border m-auto border-black mb-10 sm:mb-0 pb-8 w-full sm:w-2/4 pt-8 px-4 bg-white">
          <div className="px-3 py-4 w-fit rounded-full m-auto bg-chance-blue">
            <ChatIcon className="w-20 h-20 fill-black" />
          </div>
          <h3 className=" text-4xl mt-8 mb-6 font-bold">Send Us a Message </h3>
          <form className=" flex flex-col" ref={formRef} onSubmit={sendEmail}>
            <label className="mb-5" htmlFor="user_name">
              Your Name
            </label>
            <input
              className="mb-5 pl-5 border-2 border-chance-blue rounded-md"
              name="user_name"
              type="text"
            />
            <label className="mb-5" htmlFor="user_email">
              Your Email
            </label>
            <input
              className="mb-5 pl-5 border-2 border-chance-blue rounded-md"
              name="user_email"
              type="email"
            />
            <label className="mb-5" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="mb-5 pl-5 h-40 border-2 border-chance-blue rounded-md"
              name="message"
            ></textarea>
            <input
              className=" flex w-64 mt-10 m-auto hover:scale-105 mb-5 shadow-lg bg-chance-green text-white hover:text-chance-dark-blue font-bold py-3 text-3xl px-10 rounded-full items-center transition-all duration-300 ease-in-out hover:bg-chance-yellow"
              type="submit"
              content="Hello"
              value="Send"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
