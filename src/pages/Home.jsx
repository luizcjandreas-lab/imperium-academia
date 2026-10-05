import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Showcase from "../components/Showcase.jsx";
import Structure from "../components/Structure.jsx";
import Why from "../components/Why.jsx";
import Reviews from "../components/Reviews.jsx";
import Trial from "../components/Trial.jsx";
import VisitStrip from "../components/VisitStrip.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <About />
      <Structure />
      <Why />
      <Reviews />
      <Trial />
      <VisitStrip />
    </>
  );
}
