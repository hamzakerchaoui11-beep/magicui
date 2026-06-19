"use client";

import { motion } from "framer-motion";

const cases = [
  { title: "Research & Reporting", description: "Gather data from multiple sources, analyze trends, and generate a formatted report in minutes." },
  { title: "Lead Outreach", description: "Find qualified leads, draft personalized emails, and schedule follow-ups automatically." },
  { title: "Code Review", description: "Scan pull requests, identify bugs and security issues, and post detailed review comments." },
  { title: "Customer Support", description: "Answer common questions, escalate complex issues, and update your CRM without lifting a finger." },
];

export function UseCases() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Use cases</p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">What will you automate?</h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-8">
              <h3 className="mb-3 text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
