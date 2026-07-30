import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { Download, ArrowRight } from "lucide-react";
import { PROFILE } from "@/constants/data";
import { maskLine, fadeUp, EASE } from "@/animations/variants";
import Typewriter from "/src/common/Typewriter";
import MagneticButton from "../../common/MagneticButton";

const BackendScene = lazy(() => import("@/canvas/BackendScene"));

const socials = [
  { icon: FaGithub, href: PROFILE.socials.github, label: "github" },
  { icon: FaLinkedinIn, href: PROFILE.socials.linkedin, label: "linkedin" },
  { icon: FaEnvelope, href: PROFILE.socials.email, label: "email" },
];

const MaskWord = ({ children, i }) => (
  <span className="block overflow-hidden">
    <motion.span variants={maskLine} custom={i} className="block">
      {children}
    </motion.span>
  </span>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16" data-testid="hero">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-float-slow" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px] animate-float-slow" />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <motion.div initial="hidden" animate="visible">
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6"
          >
            {PROFILE.role}
          </motion.p>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
            <MaskWord i={0}>
              <span className="text-muted-foreground text-3xl sm:text-4xl font-normal">Hi
              <span className="inline-block origin-[70%_70%] animate-[wave_2s_ease-in-out_infinite]">
                👋
              </span>, I'm</span>
            </MaskWord>
            <MaskWord i={1}>
              <span className="text-gradient">{PROFILE.name}</span>
            </MaskWord>
          </h1>

          <motion.div variants={fadeUp} className="mt-4 font-display text-2xl sm:text-3xl text-foreground/90 h-10">
            <Typewriter words={["Java, Spring Boot", "Microservices", "REST APIs", "Distributed Systems", "Reat.js"]} />
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-md text-base text-muted-foreground leading-relaxed"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div variants={fadeUp} transition={{ delay: 0.5 }} className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton as="a" href={PROFILE.resumeUrl} download data-testid="hero-resume-btn">
              <Download size={16} /> Download Resume
            </MagneticButton>
            <MagneticButton as="a" href="#contact" data-scroll variant="ghost" data-testid="hero-contact-btn">
              Contact Me <ArrowRight size={16} />
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ delay: 0.6 }} className="mt-10 flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                data-testid={`hero-social-${s.label}`}
                className="grid place-items-center h-11 w-11 rounded-full border border-border text-foreground/70 hover:text-primary hover:border-primary/60 hover:-translate-y-1 transition-all duration-300"
              >
                <s.icon size={17} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — 3D scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
          className="relative h-[420px] sm:h-[520px] lg:h-[640px]"
          data-testid="hero-scene"
        >
          <Suspense fallback={<div className="h-full w-full grid place-items-center text-muted-foreground text-sm">Loading scene…</div>}>
            <BackendScene />
          </Suspense>
          {/* Floating labels */}
          <div className="pointer-events-none absolute top-6 left-4 glass rounded-full px-3 py-1.5 text-xs font-mono text-primary">Cloud</div>
          <div className="pointer-events-none absolute top-1/2 right-2 glass rounded-full px-3 py-1.5 text-xs font-mono text-foreground/80">API Gateway</div>
          <div className="pointer-events-none absolute bottom-8 left-8 glass rounded-full px-3 py-1.5 text-xs font-mono text-foreground/80">Databases</div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground tracking-widest"
      >
        SCROLL ↓
      </motion.div>
    </section>
  );
}
