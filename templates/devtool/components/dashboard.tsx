"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Clock } from "lucide-react";

const builds = [
  { branch: "main", status: "success", duration: "1m 42s", time: "2 min ago" },
  { branch: "feat/new-dashboard", status: "success", duration: "1m 28s", time: "15 min ago" },
  { branch: "fix/auth-bug", status: "failed", duration: "0m 53s", time: "1h ago" },
  { branch: "chore/deps-update", status: "running", duration: "...", time: "just now" },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "success") return <CheckCircle2 className="size-4 text-green-400" />;
  if (status === "failed") return <XCircle className="size-4 text-red-400" />;
  return <Clock className="size-4 animate-pulse text-accent" />;
};

export function Dashboard() {
  return (
    <section id="dashboard" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Dashboard</p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">Your builds at a glance</h2>
          <p className="mt-4 text-lg text-muted-foreground">Monitor every deployment across all your projects in real time.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="border-b border-border px-6 py-4">
            <h3 className="text-sm font-semibold text-foreground">Recent Builds</h3>
          </div>
          <div className="divide-y divide-border">
            {builds.map((build, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                  <StatusIcon status={build.status} />
                  <span className="font-mono text-sm text-foreground">{build.branch}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs text-muted-foreground">{build.duration}</span>
                  <span className="text-xs text-muted-foreground">{build.time}</span>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    build.status === "success" ? "bg-green-400/10 text-green-400" :
                    build.status === "failed" ? "bg-red-400/10 text-red-400" :
                    "bg-accent/10 text-accent"
                  }`}>
                    {build.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
