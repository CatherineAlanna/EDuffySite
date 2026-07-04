"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const RECIPIENT_EMAIL = "author.e.duffy@gmail.com";

export default function ContactPage() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = formValues.subject.trim() || "Website enquiry";
    const body = [
      `Name: ${formValues.name.trim()}`,
      `Email: ${formValues.email.trim()}`,
      "",
      formValues.message.trim(),
    ].join("\n");

    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
  };

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
            <p>
              <a href={`mailto:${RECIPIENT_EMAIL}`}>{RECIPIENT_EMAIL}</a>
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-row">
              <label>
                <span className="sr-only">Name</span>
                <input type="text" name="name" placeholder="Name" value={formValues.name} onChange={handleChange} />
              </label>
              <label>
                <span className="sr-only">Email address</span>
                <input type="email" name="email" placeholder="Email address" value={formValues.email} onChange={handleChange} />
              </label>
            </div>
            <label>
              <span className="sr-only">Subject</span>
              <input type="text" name="subject" placeholder="Subject" value={formValues.subject} onChange={handleChange} />
            </label>
            <label>
              <span className="sr-only">Message</span>
              <textarea name="message" placeholder="Message" rows={8} value={formValues.message} onChange={handleChange} />
            </label>
            <button type="submit">Send me a message</button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
