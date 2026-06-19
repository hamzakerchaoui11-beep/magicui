"use client";

import { motion } from "framer-motion";

const testimonials = [
  { quote: "SaaSify cut our onboarding time by 60%. Our customers are happier and our support tickets dropped overnight.", author: "Alex Kim", role: "Head of Product, Acme", avatar: "AK" },
  { quote: "The analytics alone are worth it. We finally have one source of truth for all our team's KPIs.", author: "Jordan Lee", role: "CEO, Stackr", avatar: "JL" },
  { quote: "Setup took 20 minutes. We had our first automation running before lunch on day one.", author: "Riley Morgan", role: "Operations Lead, Loop", avatar: "RM" },
];

export function Testimonials() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">Loved by growing teams</h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={t.author} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6">
              <p className="mb-6 text-sm leading-relaxed text-foreground">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/20 text-xs font-bold text-accent">{t.avatar}</div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
