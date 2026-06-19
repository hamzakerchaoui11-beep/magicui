import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Screenshots } from "@/components/screenshots";
import { Reviews } from "@/components/reviews";
import { Download } from "@/components/download";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <Reviews />
      <Download />
      <Footer />
    </main>
  );
}
