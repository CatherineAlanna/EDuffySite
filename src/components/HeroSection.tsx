export default function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="container hero-content">
        <div className="hero-image-frame" aria-hidden="true">
          <img src="/images/home.jpg" alt="Elizabeth Duffy in a garden" className="hero-image" />
          <div className="hero-gradient-overlay" />
          <h1 id="hero-heading" className="hero-title">Elizabeth Duffy</h1>
        </div>

        <p className="hero-subheader">
          Heartwarming picture books that validate childhood experiences, echo the comforts of the heart’s home, and spark wonder of the wider world for curious readers.
        </p>
      </div>
    </section>
  );
}
