import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/globals.css";

export default function AboutPage() {
  return (
    <main className="page-shell">
      <Header />

      <section className="page-section">
        <div className="container">
          <h1>About E.Duffy</h1>
          <p>
            This page introduces your brand and purpose. It is designed to reflect the same polished
            aesthetic as the homepage while providing room for your story, values, and process.
          </p>
          <div className="section-grid">
            <article className="feature-card">
              <h3>Who we are</h3>
              <p>Brand-focused website design with clarity, professionalism, and a memorable user experience.</p>
            </article>
            <article className="feature-card">
              <h3>What we do</h3>
              <p>Work with clients to create sites that convert and feel delightful on every device.</p>
            </article>
            <article className="feature-card">
              <h3>How we work</h3>
              <p>A collaborative process that starts with strategy, moves through design, and ends with launch.</p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
