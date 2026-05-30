"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Elizabeth Duffy homepage">
          <img src="/icons/logo.png" alt="Elizabeth Duffy logo" className="brand-logo" />
        </Link>
        <nav aria-label="Primary navigation">
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
      </div>
    </header>
  );
}
