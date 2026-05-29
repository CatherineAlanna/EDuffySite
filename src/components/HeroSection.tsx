export default function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="home-title">
      <div className="container hero-banner">
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-frame">
            <img
              src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1000&q=80"
              alt="Flowers in a garden"
            />
          </div>
        </div>

        <div className="hero-copy">
          <h1 id="home-title">Elizabeth Duffy</h1>
          <p>
            Heartwarming picture books that validate childhood experiences, echo the comforts of the heart’s home, and spark wonder of the wider world for curious readers.
          </p>
        </div>
      </div>
    </section>
  );
}
