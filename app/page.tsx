import Hero from "./UI/landingpage/hero";
import AboutUsTeaser from "./UI/landingpage/aboutusteaser";
import ServicesTeaser from "./UI/landingpage/servicesteaser";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Hero></Hero>
      <AboutUsTeaser />
      <ServicesTeaser />
    </main>
  );
}
