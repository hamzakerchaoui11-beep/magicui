"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <>
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">Ship with confidence</h2>
            <p className="mt-4 text-lg text-muted-foreground">Free for 3 projects. No credit card required.</p>
            <Link href="#" className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground hover:opacity-90">
              Get started free <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
          <p className="text-sm font-bold text-foreground">Dev<span className="text-accent">Tool</span></p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground">Docs</Link>
            <Link href="#" className="hover:text-foreground">Privacy</Link>
            <Link href="#" className="hover:text-foreground">Terms</Link>
          </div>
          <p className="text-xs text-muted-foreground">Built with Magic UI</p>
        </div>
      </footer>
    </>
  );
}
