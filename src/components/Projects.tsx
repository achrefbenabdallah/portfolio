import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCover from "./ProjectCover";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-20 py-24">
      <div className="section">
        <SectionHeading
          eyebrow="Selected Work"
          title="Products I've engineered"
          description="A selection of full-stack projects spanning SaaS, cloud and healthcare — including my end-of-studies internship in Germany."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 2) * 0.1}>
              <article className="card group flex h-full flex-col overflow-hidden">
                {/* Cover */}
                <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.05]">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.name} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 560px"
                        className="object-cover"
                      />
                    ) : (
                      <ProjectCover cover={project.cover} />
                    )}
                  </div>
                  {project.featured && (
                    <span className="absolute left-3 top-3 rounded-full border border-accent/30 bg-background/70 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-accent backdrop-blur">
                      Featured
                    </span>
                  )}
                </div>

                <div className={`flex flex-1 flex-col p-6 ${project.featured ? "md:p-7" : ""}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{project.name}</h3>
                    <p className="mt-1 text-xs text-muted">{project.context}</p>
                  </div>
                  <span className="font-mono text-xs text-muted">{project.period}</span>
                </div>

                <p className="mt-4 text-sm text-muted">{project.description}</p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-muted">
                      <ArrowUpRight size={15} className="mt-0.5 shrink-0 text-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
