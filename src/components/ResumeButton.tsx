"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Download, FileText } from "lucide-react";
import { profile } from "@/lib/data";

export default function ResumeButton({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-accent/50 hover:text-accent"
      >
        <Download size={16} />
        Download CV
        <ChevronDown
          size={15}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-40 mt-2 w-72 overflow-hidden rounded-xl border border-border bg-surface/95 p-1.5 shadow-2xl backdrop-blur-md"
        >
          {profile.resumes.map((r) => (
            <a
              key={r.file}
              href={r.file}
              download
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-surface-2"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-surface-2 text-accent">
                <FileText size={16} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium">{r.label}</span>
                <span className="block truncate text-xs text-muted">{r.description}</span>
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
