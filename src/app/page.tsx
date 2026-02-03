import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import StatsSection from "@/components/StatsSection";
import MajorSection from "@/components/MajorSection";
import NewsSection from "@/components/NewsSection";
import OnlineFacilities from "@/components/OnlineFacilities"; // 1. Import
import LocationSection from "@/components/LocationSection"; // 2. Import
import Footer from "@/components/Footer"; // 3. Import

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <WelcomeSection />
      <StatsSection />
      <MajorSection />
      <NewsSection />
      
      {/* SECTION BARU */}
      <OnlineFacilities />
      <LocationSection />
      <Footer />
      
    </main>
  );
}