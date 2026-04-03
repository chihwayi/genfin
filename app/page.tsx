import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Mission from "@/components/Mission";
import Plans from "@/components/Plans";
import Benefits from "@/components/Benefits";
import WhyChooseUs from "@/components/WhyChooseUs";
import Branches from "@/components/Branches";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Mission />
        <Plans />
        <Benefits />
        <WhyChooseUs />
        <Branches />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
