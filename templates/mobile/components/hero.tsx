"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Smartphone, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-14">
      <div className="pointer-events-none absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(ellipse 60% 40% at 50% 0%, var(--color-accent), transparent)" }} />
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
          <Star className="size-3.5 fill-current" />
          4.9 stars · 50k+ downloads
        </div>
        <h1 className="max-w-3xl text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          The app that{" "}
          <span className="text-accent">changes everything</span>
        </h1>
        <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground">
          PulseApp helps you stay focused, track habits, and build the life you want —
          beautifully designed for iOS and Android.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link href="#" className="group flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90">
            <Smartphone className="size-4" />
            Download on App Store
          </Link>
          <Link href="#" className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-muted-foreground hover:border-foreground/30 hover:text-foreground">
            Get it on Google Play
          </Link>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Free to download. Premium from $4.99/month.</p>
      </motion.div>
    </section>
  );
}
