import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" pt-5 text-chance-dark-blue text-center text-base w-full pb-10 bg-chance-dark-teal">
      <div className=" max-w-screen-xl m-auto px-5 justify-center items-start gap-10 block md:flex">
        <div className=" mb-5 md:mb-0 text-center">
          <h4 className=" font-bold">Contact Information</h4>
          <p>
            <span className=" font-bold">Phone: </span>(559) 672-2995
          </p>
          <p>
            <span className="font-bold">Email: </span>cmae83@yahoo.com
          </p>
        </div>
        <div className=" text-center mb-5 md:mb-0  font-bold">
          <h4 className=" font-bold">Navigation Links</h4>
          <Link href={"/"}>
            <p>Home</p>
          </Link>
          <Link href={"/aboutUs"}>
            <p>About Us</p>
          </Link>
          <Link href={"/contactUs"}>
            <p>Contact Us</p>
          </Link>
          <Link href={"/services"}>
            <p>Services</p>
          </Link>
        </div>
        <div className=" m-auto md:m-0 mb-5 md:mb-0 max-w-52">
          <h4 className=" font-bold">Copyright Notice</h4>
          <p>© 2024 Just By Chance Cleaning. All rights reserved.</p>
        </div>
        <div className=" m-auto md:m-0 max-w-52">
          <h4 className=" font-bold">Proudly Built By: </h4>
          <p>
            This website was proudly built by{" "}
            <span className=" font-bold">
              <Link
                target="_blank"
                href={"https://www.centralvalleywebdev.com"}
              >
                Central Valley Web Development
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
