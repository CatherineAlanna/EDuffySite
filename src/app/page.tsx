import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeatureCards from "../components/FeatureCards";
import InstagramGallery from "../components/InstagramGallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="home-page">
      <Header />
      <HeroSection />
      <div className="section-marker" aria-hidden="true">
        <span className="star-marker" />
      </div>
      <FeatureCards />
      <div className="section-marker" aria-hidden="true">
        <span className="star-marker" />
      </div>
      <InstagramGallery />
      <Footer />
    </main>
  );
}
