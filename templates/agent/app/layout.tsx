import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agent — AI-Powered Automation",
  description:
    "The AI agent landing page template. Built with Next.js, Tailwind CSS, and Magic UI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
