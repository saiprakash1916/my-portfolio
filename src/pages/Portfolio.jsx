import Hero from "../components/layout/Hero";
import About from "../components/layout/About";
import TechStack from "../components/sections/TechStack";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Architecture from "../components/sections/Architecture";
import Certifications from "../components/sections/Certifications";
import Contact from "../components/sections/Contact";
import Marquee from "../common/Marquee";

export default function Portfolio() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Architecture />
      <Certifications />
      <Contact />
    </main>
  );
}
