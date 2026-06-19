"use client";

import { motion } from "framer-motion";
import { Activity, AlertTriangle, BarChart3, Clock, GitBranch, Layers } from "lucide-react";

const features = [
  { icon: Activity, title: "Live Build Monitoring", description: "Watch every build step in real time. Catch failures the moment they happen." },
  { icon: AlertTriangle, title: "Smart Alerting", description: "Get notified via Slack, email, or PagerDuty when something goes wrong — not after." },
  { icon: BarChart3, title: "Performance Metrics", description: "Track build times, test coverage, and deployment frequency across all your projects." },
  { icon: Clock, title: "Deployment History", description: "Full audit trail of every deploy with the ability to roll back in one click." },
  { icon: GitBranch, title: "Branch Previews", description: "Automatic preview deployments for every pull request, with live URLs in your PR." },
  { icon: Layers, title: "Multi-Environment", description: "Manage dev, staging, and production environments from a single unified dashboard." },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Features</p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">Full visibility, zero surprises</h2>
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
