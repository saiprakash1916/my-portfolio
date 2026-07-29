import { useRef, useState } from "react";
import { motion } from "framer-motion";

// Magnetic hover button — pointer pulls the button subtly toward it.
export default function MagneticButton({
  children,
  as = "a",
  variant = "primary",
  className = "",
  ...props
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * 0.25, y: y * 0.25 });
  };
  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90 cyan-glow"
      : "border border-border text-foreground hover:border-primary/60 hover:text-primary";

  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
      className={`${base} ${styles} ${className}`}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
