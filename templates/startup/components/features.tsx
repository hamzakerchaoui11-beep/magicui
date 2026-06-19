"use client";

import { motion } from "framer-motion";
import { Zap, Shield, BarChart3, Globe, Code2, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Blazing Fast",
    description:
      "Built on Next.js App Router with static generation for sub-second load times out of the box.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "Authentication, authorization, and data validation baked in so you never ship vulnerabilities.",
  },
  {
    icon: BarChart3,
    title: "Built-in Analytics",
    description:
      "Track your most important metrics without a third-party script slowing down your app.",
  },
  {
    icon: Globe,
    title: "Global Edge Network",
    description:
      "Deploy to 40+ regions with a single command. Your users always hit the nearest server.",
  },
  {
    icon: Code2,
    title: "Developer First",
    description:
      "TypeScript, ESLint, Prettier and Husky all pre-configured so you stay in the flow.",
  },
  {
    icon: Layers,
    title: "Composable UI",
    description:
      "shadcn/ui and Magic UI components let you build polished interfaces without starting from scratch.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Features
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Everything you need to ship
          </h2>
          <p className="mt-4 text-balance text-lg text-muted-foreground">
            Stop configuring, start building. Every tool you need is already
            set up and working together.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-2.5">
                <feature.icon className="size-5 text-accent" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
