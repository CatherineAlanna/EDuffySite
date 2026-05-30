export default function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="container hero-content">
        <div className="hero-image-frame" aria-hidden="true">
          <img src="/images/home.jpg" alt="Elizabeth Duffy in a garden" />
        </div>

        <div className="hero-copy">
          <h1 id="hero-heading">Elizabeth Duffy</h1>
          <p>
            Heartwarming picture books that validate childhood experiences, echo the comforts of the heart’s home, and spark wonder of the wider world for curious readers.
          </p>
        </div>
      </div>
    </section>
  );
}
