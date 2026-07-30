import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PROFILE } from "../../constants/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50 px-6 lg:px-10 pt-6"
    >
      <nav
        className={`max-w-7xl mx-auto flex items-center justify-between rounded-full px-8 py-4 transition-all duration-500 ${
          scrolled ? "glass-strong" : "bg-transparent"
        }`}
      >
        <a href="#home" data-scroll className="flex items-center gap-2 group" data-testid="nav-logo">
          <span className="h-2.5 w-2.5 rounded-full bg-primary cyan-glow" />
          <span className="font-display font-semibold text-lg tracking-tight">
            {PROFILE.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {NAV_LINKS.map((l, index) => (
              <motion.a
                key={l.id}
                href={`#${l.id}`}
                data-scroll
                onHoverStart={() => setHovered(index)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{
                  scale: 1.35,
                  y: -6,
                }}
                animate={{
                  scale:
                    hovered === null
                      ? 1
                      : hovered === index
                      ? 1.35
                      : Math.abs(hovered - index) === 1
                      ? 1.15
                      : 1,
                  opacity: hovered === null || hovered === index ? 1 : 0.75,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 18,
                }}
                className="relative px-4 py-2 text-base font-medium text-muted-foreground hover:text-white"
              >
                {l.label}
              </motion.a>
            ))}
        </div>

        <a
          href="#contact"
          data-scroll
          data-testid="nav-cta"
          className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Let's talk
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 max-w-6xl mx-auto glass-strong rounded-3xl p-4"
            data-testid="nav-mobile-menu"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                data-scroll
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
