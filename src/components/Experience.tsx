import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { certifications, experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-24">
      <div className="section">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_18rem]">
          {/* Timeline */}
          <div className="relative border-l border-border pl-8">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.1}>
                <div className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[2.15rem] top-1 grid h-4 w-4 place-items-center rounded-full border border-accent/40 bg-background">
                    <span className="h-1.5 w-1.5 rounded-full accent-gradient" />
                  </span>

                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">
                      {job.role}{" "}
                      <span className="text-accent">· {job.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{job.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Education + certs */}
          <div className="space-y-4">
            <Reveal>
              <div className="card p-5">
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                  Education
                </h3>
                <div className="mt-3 space-y-3 text-sm">
                  <div>
                    <p className="font-medium">Engineering Degree — Software Engineering & Information Systems</p>
                    <p className="text-muted">TekUp University, Tunis · 2022</p>
                  </div>
                  <div>
                    <p className="font-medium">Applied License in Information Technology</p>
                    <p className="text-muted">ISET Nabeul · 2019</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card p-5">
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                  Certifications
                </h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {certifications.map((c) => (
                    <li key={c.name} className="flex items-baseline justify-between gap-2">
                      <span className="font-medium">{c.name}</span>
                      <span className="text-xs text-muted">
                        {c.issuer} · {c.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
