import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { PROFILE, MANIFESTO } from "@/constants/data";
import { fadeUp, staggerContainer, EASE } from "@/animations/variants";
import SectionHeading from "@/common/SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 px-6" data-testid="about">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="01" eyebrow="About" title="Systems thinker, backend by craft." />

        <div className="mt-16 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          {/* Profile portrait — spotlight / clipped frame */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border cyan-glow">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />
              <img
                src="/Profile_Pic.jpeg"
                alt="Sai Prakash"
                className="w-full h-[460px] object-cover rounded-3xl shadow-2xl hover:scale-[1.02] transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-5 left-5 z-20">
                <p className="font-display text-lg text-foreground">{PROFILE.name}</p>
                <p className="text-sm text-primary font-mono">{PROFILE.location}</p>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              className="text-lg text-foreground/85 leading-relaxed"
            >
              {PROFILE.about}
            </motion.p>

            {/* Numbered manifesto chapters */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 space-y-8"
            >
              {MANIFESTO.map((m) => (
                <motion.div key={m.no} variants={fadeUp} className="group flex gap-6 border-t border-border/60 pt-6">
                  <span className="font-mono text-sm text-primary/70 pt-1">{m.no}</span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">{m.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <a
              href={PROFILE.resumeUrl}
              download
              data-testid="about-resume-btn"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-primary/60 hover:text-primary transition-colors"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
