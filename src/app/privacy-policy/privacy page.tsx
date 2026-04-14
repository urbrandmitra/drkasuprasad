import Layout from '../components/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Dr. Kasu Prasad Reddy',
  description:
    'Privacy policy for drkasuprasad.com — the official website of Dr. Kasu Prasad Reddy, ophthalmologist and founder of Maxivision Eye Hospitals, Hyderabad.',
  alternates: {
    canonical: 'https://drkasuprasad.com/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <Layout>

      {/* Page Header */}
      <section className="pp-page-header">
        <div className="pp-container">
          <p className="pp-section-label">Legal</p>
          <h1 className="pp-h1">Privacy Policy</h1>
          <div className="pp-header-rule" />
          <p className="pp-effective">Effective date: 1 May 2025</p>
        </div>
      </section>

      {/* Policy body */}
      <section className="pp-section">
        <div className="pp-container pp-content">

          <div className="pp-block">
            <h2 className="pp-h2">About this website</h2>
            <p className="pp-body">
              This website, drkasuprasad.com, is the official public record of Dr. Kasu Prasad
              Reddy. It is an informational website and does not offer clinical services, appointments,
              or medical advice. Clinical enquiries should be directed to Maxivision Eye Hospitals,
              Hyderabad.
            </p>
          </div>

          <div className="pp-block">
            <h2 className="pp-h2">Information we collect</h2>
            <p className="pp-body">
              This website collects information only when you voluntarily submit the contact form.
              The fields collected are: full name, organisation, email address, nature of enquiry,
              and message content. This information is used solely to respond to your enquiry and
              is not used for marketing or shared with third parties.
            </p>
            <p className="pp-body">
              We also collect standard anonymised analytics data through Google Analytics 4,
              including pages visited, time on page, device type, and geographic region. This data
              does not identify you personally and is used only to understand how this website is used.
            </p>
          </div>

          <div className="pp-block">
            <h2 className="pp-h2">Cookies</h2>
            <p className="pp-body">
              This website uses cookies set by Google Analytics 4 and Google Tag Manager to collect
              anonymised usage data. No advertising cookies or third-party tracking cookies are
              placed on this website. You may disable cookies in your browser settings at any time.
            </p>
          </div>

          <div className="pp-block">
            <h2 className="pp-h2">Data retention</h2>
            <p className="pp-body">
              Contact form submissions are retained only for as long as necessary to respond to
              your enquiry. Anonymised analytics data is retained in accordance with Google
              Analytics 4 default retention settings.
            </p>
          </div>

          <div className="pp-block">
            <h2 className="pp-h2">Third-party services</h2>
            <p className="pp-body">
              This website uses Google Analytics 4 and Google Tag Manager, operated by Google LLC.
              Google&apos;s privacy policy is available at{' '}
              <a
                className="pp-link"
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                policies.google.com/privacy
              </a>
              . No other third-party services are used on this website.
            </p>
          </div>

          <div className="pp-block">
            <h2 className="pp-h2">Your rights</h2>
            <p className="pp-body">
              You have the right to request access to, correction of, or deletion of any personal
              information you have submitted through this website. To make such a request, please
              use the contact form on this website, selecting &ldquo;Other&rdquo; as the nature
              of enquiry.
            </p>
          </div>

          <div className="pp-block">
            <h2 className="pp-h2">Changes to this policy</h2>
            <p className="pp-body">
              This privacy policy may be updated from time to time. The effective date above will
              be revised when changes are made. Continued use of this website after any revision
              constitutes acceptance of the updated policy.
            </p>
          </div>

          <div className="pp-block">
            <h2 className="pp-h2">Contact</h2>
            <p className="pp-body">
              For any questions relating to this privacy policy, please use the{' '}
              <a className="pp-link" href="/contact">
                contact form
              </a>{' '}
              on this website.
            </p>
          </div>

        </div>
      </section>

    </Layout>
  );
}
