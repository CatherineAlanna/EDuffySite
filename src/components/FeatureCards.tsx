const features = [
  {
    title: "Adventures with Heart",
    description: "Curiosity-driven stories that expand children’s ideas of what they’re capable of."
  },
  {
    title: "Slice of Life",
    description: "Stories that validate the everyday experiences of childhood."
  },
  {
    title: "Stories in Rhyme",
    description: "Memorable stories that bounce and flow, for satisfying read-aloud time."
  }
];

export default function FeatureCards() {
  return (
    <section className="feature-section">
      <div className="container feature-intro">
        <p className="section-label">A glimpse into the worlds currently being built.</p>
        <p className="section-copy">
          I write stories aimed at traditional publications. If you are an agent or an editor looking for a fresh voice to fill spaces in children’s literature, I would be thrilled to connect and share my portfolio of work.
        </p>
      </div>
      <div className="container cards-grid" aria-label="Story categories">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
