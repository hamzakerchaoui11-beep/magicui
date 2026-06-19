"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <>
      {/* CTA */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Ready to launch?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of founders who ship faster with this template.
            </p>
            <Link
              href="#"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Get started free
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm font-bold text-foreground">Startup</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground">Privacy</Link>
              <Link href="#" className="hover:text-foreground">Terms</Link>
              <Link href="#" className="hover:text-foreground">Contact</Link>
            </div>
            <p className="text-xs text-muted-foreground">
              Built with Magic UI
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
