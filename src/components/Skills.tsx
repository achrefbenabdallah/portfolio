import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24">
      <div className="section">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills & technologies"
          description="The stack I use to build products and the platforms I use to grow them."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 4) * 0.08}>
              <div className="card h-full p-5">
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 text-sm text-muted"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
