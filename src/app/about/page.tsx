import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <main className="page-shell about-page">
      <Header />

      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-image-frame" aria-hidden="true">
            <img src="/images/about.jpg" alt="Author working with books and notes" />
          </div>

          <div className="about-copy">
            <p className="eyebrow">Hello there</p>
            <h1>About Elizabeth Duffy</h1>
            <p>
              I write gentle, curious picture books that centre children’s inner lives, quiet family moments, and the joy of discovery. Each story is crafted to feel like a warm invitation for young readers.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container section-grid">
          <article className="feature-card">
            <h2>Who I am</h2>
            <p>Storytelling shaped by lived kindness, a love of nature, and empathy for the small moments that matter.</p>
          </article>
          <article className="feature-card">
            <h2>What I write</h2>
            <p>Beautifully simple picture books for readers who love gentle humour, emotional honesty, and playful wonder.</p>
          </article>
          <article className="feature-card">
            <h2>Why it matters</h2>
            <p>Books that help children feel seen, grounded, and excited to explore their own world.</p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
