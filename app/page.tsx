import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import StatsBar from "@/components/landing/StatsBar";
import GamesShowcase from "@/components/landing/GamesShowcase";
import Features from "@/components/landing/Features";
import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080810]">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <GamesShowcase />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
