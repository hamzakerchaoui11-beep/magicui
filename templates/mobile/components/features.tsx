"use client";

import { motion } from "framer-motion";
import { Heart, Moon, BarChart3, Bell, Repeat, Smartphone } from "lucide-react";

const features = [
  { icon: Heart, title: "Habit Tracking", description: "Build streaks, track completion rates, and visualize your progress over time." },
  { icon: Moon, title: "Smart Reminders", description: "AI-powered nudges that know when you need a push — without being annoying." },
  { icon: BarChart3, title: "Insights Dashboard", description: "Beautiful charts that show trends, patterns, and correlations in your habits." },
  { icon: Repeat, title: "Daily Check-ins", description: "A quick 60-second morning check-in to set your intentions for the day." },
  { icon: Bell, title: "Widgets", description: "Home screen and lock screen widgets to keep your goals front and center." },
  { icon: Smartphone, title: "Works Offline", description: "Everything syncs when you reconnect. Your data is always on your device." },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Features</p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">Designed to keep you on track</h2>
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
