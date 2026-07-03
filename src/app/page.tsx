import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MeetSrimalini from "@/components/MeetSrimalini";
import WhySamyoga from "@/components/WhySamyoga";
import Classes from "@/components/Classes";
import Timings from "@/components/Timings";
import Memberships from "@/components/Memberships";
import ComeAsYouAre from "@/components/ComeAsYouAre";
import Visit from "@/components/Visit";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <MeetSrimalini />
        <WhySamyoga />
        <Classes />
        <Timings />
        <Memberships />
        <ComeAsYouAre />
        <Visit />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
