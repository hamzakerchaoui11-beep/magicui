"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <p className="text-sm font-bold text-foreground">Pulse<span className="text-accent">App</span></p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link href="#" className="hover:text-foreground">Privacy</Link>
          <Link href="#" className="hover:text-foreground">Terms</Link>
          <Link href="#" className="hover:text-foreground">Support</Link>
        </div>
        <p className="text-xs text-muted-foreground">Built with Magic UI</p>
      </div>
    </footer>
  );
}
