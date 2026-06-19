"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "We went from idea to launch in 3 days. The template handled everything we didn't want to think about.",
    author: "Sarah Chen",
    role: "Co-founder, Novu",
    avatar: "SC",
  },
  {
    quote:
      "Saved us weeks of boilerplate. The design system is cohesive and the code quality is exceptional.",
    author: "Marcus Webb",
    role: "CTO, Raycast",
    avatar: "MW",
  },
  {
    quote:
      "This is the template we wish existed when we started. Clean, fast, and easy to customize.",
    author: "Priya Patel",
    role: "Founder, Linear",
    avatar: "PP",
  },
];

const logos = ["Vercel", "Linear", "Raycast", "Loom", "Notion", "Figma"];

export function SocialProof() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-sm text-muted-foreground"
        >
          Trusted by teams at
        </motion.p>

        {/* Logo row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-wrap items-center justify-center gap-8"
        >
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-lg font-semibold text-muted-foreground/40"
            >
              {logo}
            </span>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <p className="mb-6 text-sm leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/20 text-xs font-bold text-accent">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.author}
                  </p>
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
