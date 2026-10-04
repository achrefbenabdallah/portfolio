import { Code2, Megaphone, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";

const pillars = [
  {
    icon: Code2,
    title: "Engineering",
    text: "3+ years shipping full-stack apps in Angular, React, Node.js & Spring Boot — now leading a team of 15 as Technical Project Lead.",
  },
  {
    icon: Megaphone,
    title: "Media Buying",
    text: "Meta Ads from strategy to creative to optimization — ABO/CBO structures tuned against ROAS, CPA and CVR.",
  },
  {
    icon: Rocket,
    title: "End-to-end",
    text: "From landing page to ad creative, I own the full growth loop and move fast without hand-offs.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="section">
        <SectionHeading
          eyebrow="About"
          title="Two disciplines, one operator"
        />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {profile.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="text-base">
                Based in {profile.location}.{" "}
                <span className="text-foreground">{profile.availability}.</span>
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="card flex gap-4 p-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-accent">
                    <p.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
