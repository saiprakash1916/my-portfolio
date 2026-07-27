import { useState } from "react";
import { navLinks } from "../constants/index.js";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/85 text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <h1 className="cursor-pointer text-2xl font-extrabold tracking-wide text-cyan-300 transition-colors duration-300 hover:text-cyan-400">
          Sai P.
        </h1>

        <div className="flex items-center gap-12">
          <ul className="hidden list-none items-center gap-1 rounded-full border border-white/10 bg-white/10 px-2 py-1 shadow-inner shadow-cyan-500/10 backdrop-blur-md md:flex">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer select-none rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/20 hover:text-cyan-300"
              >
                {link.title}
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-full border border-white/10 bg-white/10 p-2 text-white transition-all duration-300 hover:bg-cyan-400/20 md:hidden"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          <button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:from-cyan-400 hover:to-blue-400">
            Download CV
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer select-none rounded-full px-3 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/20 hover:text-cyan-300"
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
