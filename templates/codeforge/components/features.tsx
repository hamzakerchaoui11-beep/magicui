"use client";

import { motion } from "framer-motion";
import { Zap, GitBranch, Users, Bot, ShieldCheck, Layers } from "lucide-react";

const features = [
  { icon: Zap, title: "Instant startup", description: "Opens your project in under 100ms. No waiting, no loading screens." },
  { icon: Bot, title: "AI copilot", description: "Context-aware autocomplete and refactoring powered by the latest code LLMs." },
  { icon: Users, title: "Live collaboration", description: "Code together in real time with your team, like Google Docs for your IDE." },
  { icon: GitBranch, title: "Built-in Git", description: "Stage, commit, branch, and merge without leaving the editor." },
  { icon: ShieldCheck, title: "Zero-config linting", description: "ESLint, Prettier, and TypeScript checks run automatically on save." },
  { icon: Layers, title: "Extension API", description: "A rich plugin system lets you extend anything in the editor with TypeScript." },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-widest text-accent">Features</p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">Every tool a developer needs</h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-2.5"><f.icon className="size-5 text-accent" /></div>
              <h3 className="mb-2 font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
