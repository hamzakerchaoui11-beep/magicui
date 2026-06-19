import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { CodeDemo } from "@/components/code-demo";
import { Integrations } from "@/components/integrations";
import { Pricing } from "@/components/pricing";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <CodeDemo />
      <Integrations />
      <Pricing />
      <Footer />
    </main>
  );
}
