"use client";

import { motion } from "framer-motion";
import { BarChart3, Bell, Lock, Repeat, Users, Zap } from "lucide-react";

const features = [
  { icon: Zap, title: "Instant Setup", description: "Get started in minutes with our guided onboarding and pre-built integrations." },
  { icon: BarChart3, title: "Real-time Analytics", description: "Monitor every metric that matters with live dashboards and custom reports." },
  { icon: Users, title: "Team Collaboration", description: "Invite your entire team, set permissions, and work together seamlessly." },
  { icon: Lock, title: "Enterprise Security", description: "SOC 2 Type II certified with SSO, SAML, and audit logs built in." },
  { icon: Repeat, title: "Workflow Automation", description: "Build no-code automations that run 24/7 so your team can focus on what matters." },
  { icon: Bell, title: "Smart Alerts", description: "Get notified instantly when something needs your attention — before it becomes a problem." },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Features</p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">Built for modern teams</h2>
          <p className="mt-4 text-lg text-muted-foreground">Everything you need to run, grow, and scale your business.</p>
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
