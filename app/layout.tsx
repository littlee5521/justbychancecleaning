import type { Metadata } from "next";
import "./globals.css";
import { quicksand } from "./UI/fonts";
import SuspenseNavbar from "./UI/suspenseNavBar";
import Footer from "./UI/footer";

export const metadata: Metadata = {
  title: "Just By Chance Cleaning",
  description: "Just By Chance Cleaning Book Now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className}`}>
        <SuspenseNavbar></SuspenseNavbar>
        {children}
        <Footer />
      </body>
    </html>
  );
}
