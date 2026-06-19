"use client";

import { motion } from "framer-motion";

const codeLines = [
  { indent: 0, content: "async function fetchUser(id: string) {", color: "text-foreground" },
  { indent: 1, content: "const response = await fetch(`/api/users/${id}`);", color: "text-foreground" },
  { indent: 1, content: "if (!response.ok) {", color: "text-foreground" },
  { indent: 2, content: 'throw new Error("User not found");', color: "text-red-400" },
  { indent: 1, content: "}", color: "text-foreground" },
  { indent: 1, content: "return response.json() as Promise<User>;", color: "text-foreground" },
  { indent: 0, content: "}", color: "text-foreground" },
  { indent: 0, content: "", color: "" },
  { indent: 0, content: "// AI suggestion: add retry logic", color: "text-accent/60" },
  { indent: 0, content: "const user = await fetchUser(userId);", color: "text-accent" },
];

export function CodeDemo() {
  return (
    <section id="code-demo" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-widest text-accent">Demo</p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">See the AI in action</h2>
          <p className="mt-4 text-lg text-muted-foreground">The AI copilot understands your codebase and suggests the right fix in context.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <div className="size-3 rounded-full bg-red-500/60" />
            <div className="size-3 rounded-full bg-yellow-500/60" />
            <div className="size-3 rounded-full bg-green-500/60" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">users.ts</span>
          </div>
          <div className="p-6">
            <pre className="font-mono text-sm leading-7">
              {codeLines.map((line, i) => (
                <div key={i} className={line.color}>
                  <span className="mr-6 select-none text-muted-foreground/30">{(i + 1).toString().padStart(2, " ")}</span>
                  {"  ".repeat(line.indent)}
                  {line.content}
                </div>
              ))}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
