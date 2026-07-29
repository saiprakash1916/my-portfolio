import { useState, useEffect } from "react";

// Lightweight typewriter: types a word, holds, deletes, moves to next.
export default function Typewriter({ words, className = "", typing = 90, deleting = 45, hold = 1400 }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typing);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), hold);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deleting);
      } else {
        setPhase("typing");
        setIndex((i) => i + 1);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, phase, index, words, typing, deleting, hold]);

  return (
    <span className={className} data-testid="typewriter">
      {text}
      <span className="inline-block w-[3px] h-[0.9em] translate-y-[2px] bg-primary ml-1 animate-pulse" />
    </span>
  );
}
