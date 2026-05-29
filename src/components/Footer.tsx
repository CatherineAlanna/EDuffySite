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
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.5 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm-4.25 1.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
              </svg>
            </a>
            <a href="mailto:hello@example.com" className="social-link" aria-label="Email">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-13Zm1.5.5v12h13v-12h-13Zm.65-1.2 5.1 4.07a1 1 0 0 0 1.14 0l5.1-4.07H5.65Z" />
              </svg>
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
