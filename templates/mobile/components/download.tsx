"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Smartphone } from "lucide-react";

export function Download() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Start building better habits today
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Free to download. Premium features from $4.99/month.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#" className="flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90">
              <Smartphone className="size-4" />
              Download on App Store
            </Link>
            <Link href="#" className="flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium text-muted-foreground hover:border-foreground/30 hover:text-foreground">
              <Smartphone className="size-4" />
              Get it on Google Play
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
