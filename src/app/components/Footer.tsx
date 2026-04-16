"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-container">
        <div className="site-footer__inner">
          <div className="site-footer__top">
            <div className="site-footer__brand">
              <Link
                href="/"
                className="site-footer__brand-link"
                aria-label="Dr. Kasu Prasad Reddy — Home"
              >
                <img
                  src="/logo-dark.svg"
                  alt="Dr. Kasu Prasad Reddy"
                  className="site-footer__logo"
                />
              </Link>

              <p className="site-footer__brand-text">
                Ophthalmologist, founder, mentor, and public-facing archival record of clinical
                work, research, and recognition.
              </p>
            </div>

            <nav className="site-footer__column" aria-label="Footer navigation">
              <p className="site-footer__heading">Navigation</p>
              <div className="site-footer__stack">
                <Link href="/biography" className="site-footer__link">Biography</Link>
                <Link href="/clinical-contributions" className="site-footer__link">Clinical Contributions</Link>
                <Link href="/recognition-impact" className="site-footer__link">Recognition &amp; Impact</Link>
                <Link href="/publications" className="site-footer__link">Publications</Link>
                <Link href="/contact" className="site-footer__link">Contact</Link>
              </div>
            </nav>

            <div className="site-footer__column">
              <p className="site-footer__heading">Connect</p>
              <div className="site-footer__stack">
                <a
                  href="https://www.linkedin.com/in/drkasuprasad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__link"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.youtube.com/@DrKasuPrasadReddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__link"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>

          <div className="site-footer__bottom">
            <span className="site-footer__copyright">
              &copy; {currentYear} Dr. Kasu Prasad Reddy
            </span>
            <div className="site-footer__legal-links">
              <Link href="/privacy-policy" className="site-footer__legal">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}