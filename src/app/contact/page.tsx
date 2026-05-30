import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <main className="page-shell">
      <Header />

      <section className="page-section">
        <div className="container">
          <h1>Contact</h1>
          <p>
            Ready to bring your website to life? Reach out to discuss your project, timeline, and goals.
          </p>
          <div className="feature-card">
            <h3>Get in touch</h3>
            <p>Email: hello@eduffy.example</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
