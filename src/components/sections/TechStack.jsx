import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TECH_GROUPS } from "../../constants/data";
import { fadeUp, staggerContainer } from "../../animations/variants";
import SectionHeading from "../../common/SectionHeading";

function TiltCard({ group, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 15 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      style={{ perspective: 900 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="group relative h-full rounded-2xl border border-border bg-card/70 p-6 hover:border-primary/40 transition-colors duration-300"
        data-testid={`tech-card-${group.category.toLowerCase()}`}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div style={{ transform: "translateZ(40px)" }}>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-2 w-2 rounded-full bg-primary cyan-glow" />
            <h3 className="font-display text-lg font-semibold text-foreground">{group.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-sm text-foreground/80 hover:text-primary hover:border-primary/50 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="relative py-28 sm:py-36 px-6" data-testid="tech-stack">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="02"
          eyebrow="Tech Stack"
          title="The tools I build with."
          subtitle="A backend-heavy toolkit tuned for scale, reliability and developer velocity."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TECH_GROUPS.map((group, i) => (
            <TiltCard key={group.category} group={group} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
