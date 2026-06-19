"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-14">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-accent) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <div className="mb-6 flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
          <TrendingUp className="size-3.5" />
          Trusted by 5,000+ growing teams
        </div>
        <h1 className="max-w-4xl text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          The SaaS platform that{" "}
          <span className="text-accent">scales with you</span>
        </h1>
        <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground">
          Automate your workflows, track your metrics, and delight your
          customers — all in one place.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="#"
            className="group flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
          >
            Start for free
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link href="#features" className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-muted-foreground hover:border-foreground/30 hover:text-foreground">
            See how it works
          </Link>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">No credit card · 14-day trial · Cancel anytime</p>
      </motion.div>
    </section>
  );
}
