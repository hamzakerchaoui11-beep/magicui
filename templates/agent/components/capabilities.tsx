"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Repeat, Search, FileText, Puzzle } from "lucide-react";

const capabilities = [
  { icon: Bot, title: "Autonomous Reasoning", description: "Breaks down complex goals into sub-tasks and executes them step by step without hand-holding." },
  { icon: Globe, title: "Web Browsing", description: "Searches the web, reads pages, and extracts relevant information in real time." },
  { icon: Repeat, title: "Self-Correction", description: "Detects when a step fails and automatically retries with a different approach." },
  { icon: Search, title: "Semantic Memory", description: "Remembers past interactions and context to give smarter responses over time." },
  { icon: FileText, title: "Document Processing", description: "Reads, summarizes, and acts on PDFs, spreadsheets, and any text document." },
  { icon: Puzzle, title: "Tool Integrations", description: "Connects to your stack — Slack, Notion, GitHub, Gmail, and 200+ more." },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Capabilities</p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">An agent that can do it all</h2>
          <p className="mt-4 text-lg text-muted-foreground">Give your agent a goal. It figures out the rest.</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-2.5"><c.icon className="size-5 text-accent" /></div>
              <h3 className="mb-2 font-semibold text-foreground">{c.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
