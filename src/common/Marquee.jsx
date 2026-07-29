import { MARQUEE_WORDS } from "@/constants/data";

// One slow editorial marquee strip.
export default function Marquee() {
  const row = [...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div className="relative py-10 border-y border-border/60 overflow-hidden" data-testid="marquee">
      <div className="flex w-max animate-marquee">
        {row.map((word, i) => (
          <div key={i} className="flex items-center">
            <span className="font-display text-3xl sm:text-4xl font-medium text-foreground/70 px-8 whitespace-nowrap">
              {word}
            </span>
            <span className="text-primary text-2xl">✦</span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent" />
    </div>
  );
}
