"use client";

import { motion } from "framer-motion";

const integrations = ["GitHub", "GitLab", "Bitbucket", "Linear", "Jira", "Vercel", "AWS", "Docker", "Kubernetes", "Sentry", "Datadog", "Slack"];

export function Integrations() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-widest text-accent">Integrations</p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">Works with your stack</h2>
          <p className="mt-4 text-lg text-muted-foreground">Connect Codeforge to the tools your team already uses.</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3">
          {integrations.map((name, i) => (
            <motion.div key={name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
              className="rounded-lg border border-border bg-card px-5 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground">
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
