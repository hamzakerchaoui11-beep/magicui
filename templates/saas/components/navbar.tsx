"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-sm font-bold text-foreground">
          SaaSify
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Sign in</Link>
          <Link href="#" className="rounded-lg bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground hover:opacity-90">
            Start free
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="size-5 text-foreground" /> : <Menu className="size-5 text-foreground" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground">
              {l.label}
            </Link>
          ))}
          <Link href="#" className="mt-3 block w-full rounded-lg bg-accent py-2 text-center text-sm font-semibold text-accent-foreground">
            Start free
          </Link>
        </div>
      )}
    </header>
  );
}
