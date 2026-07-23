import { Check, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { mediaHighlights, mediaStats } from "@/lib/data";

export default function MediaBuying() {
  return (
    <section id="media-buying" className="scroll-mt-20 py-24">
      <div className="section">
        <SectionHeading
          eyebrow="Media Buying"
          title="Paid growth that actually pays back"
          description="A live case study — the Meta ad account I run for Dawema, an e-commerce platform I helped launch and scale."
        />

        <div className="mt-10 overflow-hidden rounded-3xl border border-border">
          {/* Header band */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-surface px-6 py-5 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl accent-gradient text-black">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="font-display font-semibold">Dawema — Meta Ads</p>
                <p className="text-sm text-muted">E-commerce · ABO & CBO · May–Jul 2026</p>
              </div>
            </div>
            <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              Live account data
            </span>
          </div>

          <div className="grid gap-px bg-border lg:grid-cols-[1fr_1fr]">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-border">
              {mediaStats.map((s) => (
                <div key={s.label} className="bg-surface px-6 py-7">
                  <p className="font-display text-4xl font-bold text-gradient">{s.value}</p>
                  <p className="mt-2 text-sm font-medium">{s.label}</p>
                  {s.sub && <p className="text-xs text-muted">{s.sub}</p>}
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="bg-surface px-6 py-7 sm:px-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                What I did
              </p>
              <ul className="mt-4 space-y-4">
                {mediaHighlights.map((h, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <li className="flex gap-3 text-sm text-muted">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span>{h}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
