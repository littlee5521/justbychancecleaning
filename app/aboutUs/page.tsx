import AboutUsHeader from "../UI/aboutus/header";
import OurMission from "../UI/aboutus/ourmission";
import OurValues from "../UI/aboutus/ourvalues";
import MeetTheTeam from "../UI/aboutus/meetTheTeam";
import OurStory from "../UI/aboutus/ourStory";
import AboutUsCTA from "../UI/aboutus/aboutUsCTA";

export default function Page() {
  return (
    <main>
      <AboutUsHeader />
      <OurMission />
      <OurValues />
      <MeetTheTeam />
      <OurStory />
      <AboutUsCTA />
    </main>
  );
}
