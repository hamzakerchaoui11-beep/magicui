"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-14">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-sm text-accent">
          <Terminal className="size-3.5" />
          v2.0 — Now with AI autocomplete
        </div>
        <h1 className="max-w-4xl text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          The IDE built for{" "}
          <span className="text-accent">how you actually code</span>
        </h1>
        <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground">
          Codeforge is a blazing-fast, fully extensible IDE that integrates AI, real-time
          collaboration, and smart refactoring in one unified experience.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link href="#" className="group flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90">
            Download free
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link href="#code-demo" className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-muted-foreground hover:border-foreground/30 hover:text-foreground">
            See it in action
          </Link>
        </div>
        <p className="mt-4 font-mono text-xs text-muted-foreground">
          Works on macOS, Linux, and Windows
        </p>
      </motion.div>
    </section>
  );
}
