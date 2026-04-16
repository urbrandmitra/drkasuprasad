"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Biography", href: "/biography" },
  { label: "Clinical Contributions", href: "/clinical-contributions" },
  { label: "Recognition & Impact", href: "/recognition-impact" },
  { label: "Publications", href: "/publications" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header" role="banner">
      <div className="site-container site-header__inner">

        <Link href="/" className="site-header__logo-link" aria-label="Dr. Kasu Prasad Reddy — Home">
          <img
            src="/logo-dark.svg"
            alt="Dr. Kasu Prasad Reddy"
            className="site-header__logo-full"
          />
          <img
            src="/logo-dark-compact.svg"
            alt="Dr. Kasu Prasad Reddy"
            className="site-header__logo-compact"
          />
        </Link>

        <nav className="site-header__nav" role="navigation" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="site-header__link">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="site-header__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="site-header__burger-bar" />
          <span className="site-header__burger-bar" />
          <span className="site-header__burger-bar" />
        </button>

      </div>

      {menuOpen && (
        <nav className="site-header__mobile-nav" role="navigation" aria-label="Mobile navigation">
          <div className="site-container">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="site-header__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}