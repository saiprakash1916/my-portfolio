import { useEffect } from "react";
import Lenis from "lenis";

// Smooth momentum scrolling for the whole page.
export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Anchor navigation support.
    const onClick = (e) => {
      const link = e.target.closest("a[data-scroll]");
      if (!link) return;
      e.preventDefault();
      const id = link.getAttribute("href");
      const el = document.querySelector(id);
      if (el) lenis.scrollTo(el, { offset: -80 });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);
}
