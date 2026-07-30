import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { EXPERIENCE } from "../../constants/data";
import { EASE } from "../../animations/variants";
import SectionHeading from "../../common/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36 px-6" data-testid="experience">
      <div className="max-w-5xl mx-auto">
        <SectionHeading index="03" eyebrow="Experience" title="Five years, shipping in production." />

        <div className="mt-16 relative">
          {/* Timeline spine */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-1/2" />

          <div className="space-y-14">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: EASE }}
                className={`relative pl-10 sm:pl-0 sm:w-1/2 ${
                  i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"
                }`}
                data-testid={`experience-item-${i}`}
              >
                {/* Node */}
                <span
                  className={`absolute top-1.5 left-0 sm:left-auto h-3.5 w-3.5 rounded-full bg-primary cyan-glow ${
                    i % 2 === 0 ? "sm:-right-[7px]" : "sm:-left-[7px]"
                  }`}
                />
                <div className="glass rounded-2xl p-6 hover:border-primary/40 transition-colors duration-300">
                  <span className="font-mono text-xs text-primary">{exp.duration}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-sm text-foreground/80">{exp.company}</p>
                  <p className={`mt-1 flex items-center gap-1.5 text-xs text-muted-foreground ${i % 2 === 0 ? "sm:justify-end" : ""}`}>
                    <MapPin size={12} /> {exp.location}
                  </p>
                  <ul className={`mt-4 space-y-2 text-sm text-muted-foreground ${i % 2 === 0 ? "sm:text-right" : ""}`}>
                    {exp.achievements.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                  <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? "sm:justify-end" : ""}`}>
                    {exp.tech.map((t) => (
                      <span key={t} className="rounded-md bg-secondary/70 px-2.5 py-1 text-xs text-foreground/70 border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
