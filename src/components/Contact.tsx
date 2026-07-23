import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "achref-ben-abdallah", href: profile.socials.linkedin },
  { icon: Github, label: "GitHub", value: "achrefbenabdallah", href: profile.socials.github },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="section">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-accent/20 blur-[80px]" />

            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Let&apos;s work together
              </p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
                Have a product to build or a{" "}
                <span className="text-gradient">campaign to scale?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                I&apos;m open to engineering and media-buying roles, freelance work, and
                relocation. The fastest way to reach me is email.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-xl accent-gradient px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
                >
                  Say hello
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="card flex items-center gap-3 p-4 text-left"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-accent">
                      <c.icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted">{c.label}</span>
                      <span className="block truncate text-sm font-medium">{c.value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
