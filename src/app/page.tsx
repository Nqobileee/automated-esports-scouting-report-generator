import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsGrid from "@/components/StatsGrid";
import DataRelationships from "@/components/DataRelationships";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12">
        <HeroSection />
        <StatsGrid />
        <DataRelationships />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
