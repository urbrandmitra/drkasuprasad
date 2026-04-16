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

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <section className="pp-page-header">
        <div className="site-container">
          <p className="pp-section-label">Legal</p>
          <h1 className="pp-h1">Privacy Policy</h1>
          <div className="pp-header-rule" />
          <p className="pp-effective">Effective date: 1 May 2025</p>
        </div>
      </section>

      <section className="pp-section">
        <div className="site-container pp-content">
          <div className="pp-block">
            <h2 className="pp-h2">About this website</h2>
            <p className="pp-body">
              This website, drkasuprasad.com, is the official public record of Dr. Kasu Prasad
              Reddy. It is an informational website intended to document professional history,
              contributions, and public-facing reference material. It does not provide medical
              advice, diagnosis, treatment, or appointment booking.
            </p>
          </div>

          <div className="pp-block">
            <h2 className="pp-h2">Information you choose to provide</h2>
            <p className="pp-body">
              If you use the contact form on this website, you may choose to provide your full
              name, organisation, email address, nature of enquiry, and message content. Such
              information is intended only for professional, media, academic, or related
              correspondence.
            </p>
          </div>

          <div className="pp-block">
            <h2 className="pp-h2">How information is used</h2>
            <p className="pp-body">
              Information submitted through the contact form, when contact handling is enabled,
              is used solely for reviewing and responding to the enquiry received. It is not
              intended for advertising, promotional mailing lists, or unrelated marketing use.
            </p>
          </div>

          <div className="pp-block">
            <h2 className="pp-h2">Analytics and tracking</h2>
            <p className="pp-body">
              This website may use standard website analytics or tag management tools for
              technical measurement, performance monitoring, and aggregate usage insights when
              such services are enabled. Any implementation of analytics on this website is
              intended for site administration and editorial understanding only, not for
              behavioural advertising.
            </p>
          </div>

          <div className="pp-block">
            <h2 className="pp-h2">Cookies</h2>
            <p className="pp-body">
              Basic cookies or similar technologies may be used where required for website
              functionality, performance measurement, or analytics implementation. You may
              control or disable cookies through your browser settings, subject to browser and
              device limitations.
            </p>
          </div>

          <div className="pp-block">
            <h2 className="pp-h2">Third-party services</h2>
            <p className="pp-body">
              Where enabled, this website may use limited third-party infrastructure or analytics
              services for hosting, performance monitoring, or aggregate traffic analysis. Such
              services are used only to support operation of the website and are not intended to
              expand the website into a commercial advertising platform.
            </p>
          </div>

          <div className="pp-block">
            <h2 className="pp-h2">Data retention</h2>
            <p className="pp-body">
              Information voluntarily submitted through this website is retained only for as long
              as reasonably necessary for correspondence, record keeping, technical review, or
              lawful administrative purposes.
            </p>
          </div>

          <div className="pp-block">
            <h2 className="pp-h2">Your rights</h2>
            <p className="pp-body">
              You may request access to, correction of, or deletion of personal information you
              have voluntarily submitted through this website, subject to applicable legal and
              administrative requirements.
            </p>
          </div>

          <div className="pp-block">
            <h2 className="pp-h2">Changes to this policy</h2>
            <p className="pp-body">
              This privacy policy may be updated from time to time to reflect editorial,
              technical, or legal changes. The effective date shown above will be revised when
              material updates are made.
            </p>
          </div>

          <div className="pp-block">
            <h2 className="pp-h2">Contact</h2>
            <p className="pp-body">
              For questions relating to this privacy policy, please use the{' '}
              <a className="pp-link" href="/contact">
                contact page
              </a>{' '}
              on this website.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}