import ServicesHeader from "../UI/services/header";
import ServiceCards from "../UI/services/servicecards";
import ProcessOverView from "../UI/services/processoverview";
import WhyUs from "../UI/services/whyus";
import ServicesCTA from "../UI/services/servicesCTA";
export default function Page() {
  return (
    <main>
      <ServicesHeader />
      <ServiceCards />
      <ProcessOverView />
      <WhyUs />
      <ServicesCTA />
    </main>
  );
}
