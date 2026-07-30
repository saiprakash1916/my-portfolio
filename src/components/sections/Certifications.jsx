import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/constants/data";
import { fadeUp, staggerContainer } from "@/animations/variants";
import SectionHeading from "@/common/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6" data-testid="certifications">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="06" eyebrow="Certifications" title="Verified credentials." />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {CERTIFICATIONS.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300"
              data-testid="cert-card"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">{c.year}</span>
                {c.verified && (
                  <span className="inline-flex items-center gap-1 text-xs text-primary">
                    <BadgeCheck size={14} /> Verified
                  </span>
                )}
              </div>
              <h3 className="mt-5 font-display text-base font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
