"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "Perfect for side projects and early exploration.",
    features: [
      "Up to 3 projects",
      "1,000 monthly active users",
      "Community support",
      "Basic analytics",
    ],
    cta: "Get started free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For startups ready to grow.",
    features: [
      "Unlimited projects",
      "50,000 monthly active users",
      "Priority support",
      "Advanced analytics",
      "Custom domain",
      "Team members",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For companies with specific requirements.",
    features: [
      "Everything in Pro",
      "Unlimited MAUs",
      "SLA guarantee",
      "SSO & SAML",
      "Dedicated support",
      "Custom contracts",
    ],
    cta: "Contact us",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Pricing
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-xl border p-8 ${
                plan.highlighted
                  ? "border-accent bg-accent/5"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-accent-foreground">
                  Most popular
                </span>
              )}
              <p className="text-sm font-semibold text-muted-foreground">
                {plan.name}
              </p>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="mb-1 text-sm text-muted-foreground">
                    /{plan.period}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <ul className="my-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="size-4 shrink-0 text-accent" />
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className={`block w-full rounded-lg py-2.5 text-center text-sm font-semibold transition-opacity hover:opacity-90 ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground"
                    : "border border-border text-foreground hover:border-foreground/30"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
