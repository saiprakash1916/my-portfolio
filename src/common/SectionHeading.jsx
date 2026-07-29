import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";

// Numbered, editorial section heading used across the site.
export default function SectionHeading({ index, eyebrow, title, subtitle, align = "left" }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
        {index && (
          <span className="font-mono text-xs text-primary/80 tracking-widest">{index}</span>
        )}
        <span className="h-px w-10 bg-primary/40" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {eyebrow}
        </span>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="mt-5 text-base text-muted-foreground leading-relaxed">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
