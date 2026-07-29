import Hero from "@/layout/Hero";
import About from "@/layout/About";
import TechStack from "@/sections/TechStack";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Architecture from "@/sections/Architecture";
import Certifications from "@/sections/Certifications";
import Contact from "@/sections/Contact";
import Marquee from "@/common/Marquee";

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
