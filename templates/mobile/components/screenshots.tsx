"use client";

import { motion } from "framer-motion";

const screens = [
  { label: "Dashboard", bg: "bg-accent/10" },
  { label: "Habits", bg: "bg-accent/20" },
  { label: "Insights", bg: "bg-accent/10" },
];

export function Screenshots() {
  return (
    <section id="screenshots" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Screenshots</p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">Beautiful by design</h2>
          <p className="mt-4 text-lg text-muted-foreground">Every screen is crafted with care. Dark mode always on.</p>
        </motion.div>
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          {screens.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`flex h-[480px] w-[240px] shrink-0 flex-col items-center justify-center rounded-[2.5rem] border-4 border-border ${s.bg}`}
              style={{ transform: `rotate(${(i - 1) * 3}deg)` }}>
              <span className="text-sm font-semibold text-muted-foreground">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
