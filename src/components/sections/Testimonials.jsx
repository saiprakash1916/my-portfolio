import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../../constants/data";
import { EASE } from "../../animations/variants";
import SectionHeading from "../../common/SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((d) => {
    setDir(d);
    setIndex((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go]);

  const item = TESTIMONIALS[index];

  return (
    <section className="relative py-28 px-6" data-testid="testimonials">
      <div className="max-w-4xl mx-auto">
        <SectionHeading index="07" eyebrow="Testimonials" title="Trusted by teams." align="center" />

        <div className="mt-16 relative">
          <div className="glass-strong rounded-3xl p-8 sm:p-12 min-h-[280px] flex flex-col justify-center overflow-hidden">
            <Quote className="text-primary/40 mb-6" size={40} />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.5, ease: EASE }}
                data-testid={`testimonial-${index}`}
              >
                <p className="font-display text-xl sm:text-2xl leading-relaxed text-foreground/90">
                  "{item.quote}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full bg-primary/15 border border-primary/30 grid place-items-center font-display text-primary font-semibold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              data-testid="testimonial-prev"
              className="h-10 w-10 grid place-items-center rounded-full border border-border text-foreground/70 hover:text-primary hover:border-primary/60 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              data-testid="testimonial-next"
              className="h-10 w-10 grid place-items-center rounded-full border border-border text-foreground/70 hover:text-primary hover:border-primary/60 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
