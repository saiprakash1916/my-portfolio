import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Database as DbIcon, Server, ArrowRight, Cpu } from "lucide-react";
import { SERVICES } from "@/constants/data";
import { EASE } from "@/animations/variants";
import SectionHeading from "@/common/SectionHeading";

function FlowPill({ icon: Icon, label, active, onClick, testid }) {
  return (
    <button
      onClick={onClick}
      data-testid={testid}
      className={`w-full flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
        active
          ? "border-primary/70 bg-primary/10 text-foreground cyan-glow"
          : "border-border bg-card/60 text-foreground/75 hover:border-primary/40 hover:text-foreground"
      }`}
    >
      <Icon size={17} className={active ? "text-primary" : "text-muted-foreground"} />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

const Connector = () => (
  <div className="relative h-8 mx-auto w-px bg-border overflow-hidden">
    <motion.span
      className="absolute left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-primary"
      animate={{ y: [-8, 32] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

export default function Architecture() {
  const [active, setActive] = useState(SERVICES[2].id);
  const service = SERVICES.find((s) => s.id === active);

  return (
    <section id="architecture" className="relative py-28 sm:py-36 px-6" data-testid="architecture">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          index="05"
          eyebrow="Microservices"
          title="Architecture, made tangible."
          subtitle="Click a service to inspect its responsibilities, endpoints and data. Packets show live request flow."
        />

        <div className="mt-16 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
          {/* Interactive flow */}
          <div className="glass rounded-3xl p-6">
            <div className="rounded-xl border border-border bg-card/60 px-4 py-3 flex items-center gap-3">
              <Cloud size={17} className="text-primary" />
              <span className="text-sm font-medium text-foreground/80">Cloud / Clients</span>
            </div>
            <Connector />
            <div className="space-y-2.5">
              {SERVICES.map((s) => (
                <FlowPill
                  key={s.id}
                  icon={s.id === "gateway" ? Server : Cpu}
                  label={s.name}
                  active={active === s.id}
                  onClick={() => setActive(s.id)}
                  testid={`service-node-${s.id}`}
                />
              ))}
            </div>
            <Connector />
            <div className="rounded-xl border border-border bg-card/60 px-4 py-3 flex items-center gap-3">
              <DbIcon size={17} className="text-primary" />
              <span className="text-sm font-medium text-foreground/80">Data Stores</span>
            </div>
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="rounded-3xl border border-border bg-card p-8"
              data-testid="service-detail"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">{service.name}</h3>
                  <p className="text-sm text-primary font-mono">{service.tagline}</p>
                </div>
                <span className="h-11 w-11 grid place-items-center rounded-xl bg-primary/10 border border-primary/30">
                  <Cpu size={20} className="text-primary" />
                </span>
              </div>

              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{service.responsibilities}</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-secondary/50 border border-border p-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Database</p>
                  <p className="text-sm text-foreground/85">{service.database}</p>
                </div>
                <div className="rounded-xl bg-secondary/50 border border-border p-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Communication</p>
                  <p className="text-sm text-foreground/85">{service.communication}</p>
                </div>
              </div>

              <div className="mt-5">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Endpoints</p>
                <div className="space-y-1.5">
                  {service.endpoints.map((e) => (
                    <div key={e} className="flex items-center gap-2 rounded-lg bg-[#020617] border border-border px-3 py-2">
                      <ArrowRight size={13} className="text-primary" />
                      <code className="font-mono text-xs text-foreground/80">{e}</code>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.stack.map((t) => (
                  <span key={t} className="rounded-md bg-secondary/70 px-2.5 py-1 text-xs text-foreground/70 border border-border">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
