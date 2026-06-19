"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { quote: "The best habit app I have ever tried. The reminders are smart and never annoying.", author: "Emma W.", stars: 5 },
  { quote: "Finally an app that keeps me accountable without feeling like a chore. Love the widgets.", author: "James T.", stars: 5 },
  { quote: "Minimal, clean, and it actually works. Highly recommend to anyone building new habits.", author: "Sofia M.", stars: 5 },
];

export function Reviews() {
  return (
    <section id="reviews" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Reviews</p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">People love PulseApp</h2>
          <p className="mt-4 text-lg text-muted-foreground">4.9 stars on the App Store and Google Play.</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div key={r.author} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-foreground">&ldquo;{r.quote}&rdquo;</p>
              <p className="text-sm font-semibold text-muted-foreground">{r.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
