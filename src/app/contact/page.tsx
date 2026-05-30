import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <main className="page-shell contact-page">
      <Header />

      <section className="contact-hero">
        <div className="container contact-grid">
          <div className="contact-copy">
            <h1>Drop a line</h1>
            <p>
              I’m actively seeking literary representation and am thrilled to share my portfolio of work with interested agents and editors.
            </p>
            <p>author.e.duffy at gmail.com</p>
          </div>

          <form className="contact-form" action="#" method="post">
            <div className="contact-row">
              <label>
                <span className="sr-only">Name</span>
                <input type="text" name="name" placeholder="Name" />
              </label>
              <label>
                <span className="sr-only">Email address</span>
                <input type="email" name="email" placeholder="Email address" />
              </label>
            </div>
            <label>
              <span className="sr-only">Subject</span>
              <input type="text" name="subject" placeholder="Subject" />
            </label>
            <label>
              <span className="sr-only">Message</span>
              <textarea name="message" placeholder="Message" rows={8} />
            </label>
            <button type="submit">Send me a message</button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
