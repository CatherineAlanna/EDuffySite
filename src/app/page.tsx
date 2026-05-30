import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeatureCards from "../components/FeatureCards";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="home-page">
      <Header />
      <HeroSection />
      <div className="section-marker" aria-hidden="true">
        <img src="/Star.png" alt="" className="section-divider" />
      </div>
      <FeatureCards />
      <Footer />
    </main>
  );
}
