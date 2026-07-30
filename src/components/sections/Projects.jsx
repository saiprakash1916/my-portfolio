import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../../constants/data";
import { fadeUp, staggerContainer, EASE } from "../../animations/variants";
import SectionHeading from "../../common/SectionHeading";

function ProjectCard({ project, featured }) {
  return (
    <motion.article
      variants={fadeUp}
      className={`group relative overflow-hidden rounded-3xl border border-border bg-card ${
        featured ? "lg:col-span-2" : ""
      }`}
      data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            featured ? "h-72" : "h-56"
          }`}
        />
        <span className="absolute top-4 left-4 z-20 rounded-full glass px-3 py-1 text-xs font-mono text-primary">
          {project.category}
        </span>
      </div>

      <div className="relative z-20 p-6 -mt-10">
        <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-lg">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-md bg-secondary/70 px-2.5 py-1 text-xs text-foreground/70 border border-border">
              {t}
            </span>
          ))}
        </div>
        {project.status === "in-progress" && (
          <span className="absolute top-4 right-4 z-20 rounded-full bg-yellow-500/20 border border-yellow-500/30 px-3 py-1 text-xs font-medium text-yellow-400">
            🚧 Under Development
          </span>
        )}
        <div className="mt-6 flex items-center gap-4">
          {project.status === "Completed" ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                >
                  Live Demo <ArrowUpRight size={15} />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-yellow-400 cursor-not-allowed">
                  🚧 Demo Coming Soon
                </span>
              )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors"
            data-testid="project-github-link"
          >
            <FaGithub size={15} /> Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36 px-6" data-testid="projects">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="Selected work."
          subtitle="Backend systems built to stay fast, safe and observable under real load."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} featured={p.featured} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
