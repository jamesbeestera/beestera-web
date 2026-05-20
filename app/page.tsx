import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import PromotionalMessage from "@/components/sections/PromotionalMessage";

export default function HomePage() {
  return (
    <>
      <PromotionalMessage variant="brand" />
      <Navbar theme="light" activeHref="/" />
      <main className="flex-1">
        <HeroBanner riveSrc="/images/hex-happy.riv" />
      </main>
      <Footer theme="light" />
    </>
  );
}
