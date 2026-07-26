"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import ResumeButton from "./ResumeButton";
import { profile, mediaStats } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-bg" />

      <div className="section relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.firstName}
            <br />
            <span className="text-gradient">Ben Abdallah</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-xl text-lg text-muted"
          >
            <span className="text-foreground">Software Engineer</span> &{" "}
            <span className="text-foreground">Media Buyer</span>. {profile.tagline}
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-accent" /> {profile.location}
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span>{profile.availability}</span>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl accent-gradient px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              Get in touch
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-accent/50 hover:text-accent"
            >
              View my work
            </a>
            <ResumeButton />
            <div className="ml-1 flex items-center gap-1">
              {[
                { icon: Github, href: profile.socials.github, label: "GitHub" },
                { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/20 to-accent-2/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border">
            <div className="aspect-4/5 relative">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl glass px-4 py-3">
              <div>
                <p className="font-display text-sm font-semibold">{profile.name}</p>
                <p className="text-xs text-muted">Building & scaling products</p>
              </div>
              <span className="rounded-lg accent-gradient px-2 py-1 text-xs font-bold text-black">
                5.6× ROAS
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stat strip */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="section mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4"
      >
        {mediaStats.map((s) => (
          <div key={s.label} className="bg-surface px-5 py-6 text-center sm:text-left">
            <p className="font-display text-3xl font-bold text-gradient">{s.value}</p>
            <p className="mt-1 text-sm font-medium">{s.label}</p>
            {s.sub && <p className="text-xs text-muted">{s.sub}</p>}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
