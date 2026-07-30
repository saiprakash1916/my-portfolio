import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { PROFILE, NAV_LINKS } from "../../constants/data";

export default function Footer() {
  const socials = [
    { icon: FaGithub, href: PROFILE.socials.github, label: "GitHub" },
    { icon: FaLinkedinIn, href: PROFILE.socials.linkedin, label: "LinkedIn" },
    { icon: FaEnvelope, href: PROFILE.socials.email, label: "Email" },
  ];
  return (
    <footer className="relative border-t border-border/60 bg-[#020617]" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-sm">
            <a href="#home" data-scroll className="font-display text-2xl font-semibold text-foreground">
              {PROFILE.name}<span className="text-primary">.</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {PROFILE.role} crafting resilient, observable backend systems.
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Navigate</p>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((l) => (
                  <li key={l.id}>
                    <a href={`#${l.id}`} data-scroll className="text-sm text-foreground/70 hover:text-primary transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Connect</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    data-testid={`footer-social-${s.label.toLowerCase()}`}
                    className="grid place-items-center h-10 w-10 rounded-full border border-border text-foreground/70 hover:text-primary hover:border-primary/60 transition-colors"
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <p className="font-mono">Built with React · Three.js · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
