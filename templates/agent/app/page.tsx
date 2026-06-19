import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Capabilities } from "@/components/capabilities";
import { HowItWorks } from "@/components/how-it-works";
import { UseCases } from "@/components/use-cases";
import { Pricing } from "@/components/pricing";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Capabilities />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <Footer />
    </main>
  );
}
