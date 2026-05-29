import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Elizabeth Duffy homepage">
          <span>ED</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/" className="nav-link active">
            Home
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
