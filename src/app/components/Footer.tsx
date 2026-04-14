"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-container site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__identity">
            <Link
              href="/"
              className="site-footer__logo-link"
              aria-label="Dr. Kasu Prasad Reddy — Home"
            >
              <span className="site-footer__wordmark">
                Dr. Kasu Prasad Reddy
              </span>
            </Link>
          </div>

          <nav className="site-footer__nav" aria-label="Footer navigation">
            {[
              { label: "Biography", href: "/biography" },
              { label: "Clinical Contributions", href: "/clinical-contributions" },
              { label: "Recognition & Impact", href: "/recognition-impact" },
              { label: "Publications", href: "/publications" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="site-footer__link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-footer__copyright-wrap">
            <span className="site-footer__copyright">
              &copy; {currentYear} Dr. Kasu Prasad Reddy
            </span>
          </div>
        </div>

        <div className="site-footer__bottom">
          <Link href="/privacy-policy" className="site-footer__legal">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}