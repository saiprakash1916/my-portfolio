import HeroCanvas from "../canvas/HeroCanvas";
import TypeWriter from "./TypeWriter";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)] px-6 py-20 text-white sm:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] [background-size:18px_18px] opacity-20" />

      <div className="relative z-10 grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-300/80">
            Senior Java Developer
          </p>
          <h1 className="mb-6 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            <span className="flex items-center justify-center gap-2 lg:justify-start">
              Hi
              <span className="inline-block origin-[70%_70%] animate-[wave_2s_ease-in-out_infinite]">
                👋
              </span>
              , I'm
            </span>

            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              <TypeWriter />
            </span>
          </h1>

          <div className="mb-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
              Java Backend Developer
            </span>
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200">
              Spring Boot
            </span>
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200">
              Microservices
            </span>
          </div>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300 lg:mx-0">
            Java Backend Developer with 5+ years of experience building scalable
            enterprise applications using Java, Spring Boot, Microservices, REST
            APIs, and SQL. Experienced in integrating React-based frontends with
            robust backend services.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
            <HeroCanvas />
        </div>
      </div>
    </section>
  );
}

export default Hero;
