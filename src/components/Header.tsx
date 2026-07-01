"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Elizabeth Duffy homepage">
          <img src="/icons/logo.png" alt="Elizabeth Duffy logo" className="brand-logo" />
        </Link>

        <button
          type="button"
          className="mobile-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className="hamburger" aria-hidden="true"></span>
        </button>

        <nav aria-label="Primary navigation" className="primary-nav">
          <Link href="/" className={pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
          <Link href="/about" className={pathname === "/about" ? "nav-link active" : "nav-link"}>
            About
          </Link>
          <Link href="/contact" className={pathname === "/contact" ? "nav-link active" : "nav-link"}>
            Contact
          </Link>
        </nav>

        <div className={`mobile-drawer ${open ? "open" : ""}`} role="dialog" aria-modal={open} aria-label="Main menu">
          <button className="drawer-close" aria-label="Close menu" onClick={() => setOpen(false)}>
            ×
          </button>
          <nav className="drawer-nav" aria-label="Mobile navigation">
            <Link href="/" onClick={() => setOpen(false)} className={pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className={pathname === "/about" ? "nav-link active" : "nav-link"}>
              About
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className={pathname === "/contact" ? "nav-link active" : "nav-link"}>
              Contact
            </Link>
          </nav>
        </div>

        <div className={`drawer-scrim ${open ? "open" : ""}`} onClick={() => setOpen(false)} aria-hidden={!open} />
      </div>
    </header>
  );
}
