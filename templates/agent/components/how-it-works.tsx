"use client";

import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Define your goal", description: "Describe what you want in plain English. No special syntax or programming required." },
  { step: "02", title: "Agent plans & acts", description: "Your agent breaks the goal into steps, uses tools, browses the web, and executes autonomously." },
  { step: "03", title: "Review & iterate", description: "See exactly what the agent did, give feedback, and refine until it's perfect." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">How it works</p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">Three steps to full automation</h2>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-8">
              <span className="mb-4 block text-4xl font-black text-accent/20">{s.step}</span>
              <h3 className="mb-3 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
