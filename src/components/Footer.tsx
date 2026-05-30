import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-about">
          <p className="brand-footer">Elizabeth Duffy</p>
          <p>
            Heartwarming picture books that validate childhood experiences, echo the comforts of the heart’s home, and spark wonder of the wider world for curious readers.
          </p>
        </div>

        <div className="footer-links">
          <p>Explore</p>
          <nav aria-label="Footer navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer-connect">
          <p>Connect</p>
          <div className="social-actions">
            <a href="https://instagram.com" className="social-link" aria-label="Instagram">
              <img src="/icons/instagram-icon.png" alt="Instagram" className="footer-icon" />
            </a>
            <a href="mailto:hello@example.com" className="social-link" aria-label="Email">
              <img src="/icons/email-icon.png" alt="Email" className="footer-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© 2026 Elizabeth Duffy. All rights reserved.</p>
        <p>A literary world in the making.</p>
      </div>
    </footer>
  );
}
