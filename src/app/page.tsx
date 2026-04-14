import Link from "next/link";
import Layout from "./components/Layout";
import PersonSchema from "./components/PersonSchema";
import { generateMetadata } from "./components/PageMeta";

export const metadata = generateMetadata({
  title: "Dr. Kasu Prasad Reddy — Ophthalmologist",
  description:
    "The official website of Dr. Kasu Prasad Reddy — surgeon and ophthalmologist, Member of the Royal College of Ophthalmologists, and founder of Maxivision Eye Hospitals.",
  canonicalUrl: "https://www.drkasuprasad.com/",
});

export default function HomePage() {
  return (
    <Layout>
      <PersonSchema
        name="Dr. Kasu Prasad Reddy"
        jobTitle="Surgeon and Ophthalmologist"
        description="Surgeon and ophthalmologist with a clinical career spanning five decades across India and the United Kingdom. Founder of Maxivision Eye Hospitals."
        url="https://www.drkasuprasad.com"
        worksFor="Maxivision Eye Hospitals"
        awards={[
          "D. Malleshwar Rao Oration Medal, Andhra Pradesh Ophthalmological Society, 2002",
          "Lifetime Achievement Award, North American Telugu Association, 2013",
        ]}
        memberOf={[
          "Royal College of Ophthalmologists",
          "General Medical Council of the United Kingdom",
          "European Society of Cataract and Refractive Surgeons",
          "American Society of Cataract and Refractive Surgeons",
          "American Academy of Ophthalmology",
          "All India Ophthalmological Society",
          "Andhra Pradesh Ophthalmological Society",
        ]}
        sameAs={["https://www.linkedin.com/in/drkasuprasad"]}
      />

      {/* HERO */}
      <section className="home-hero">
        <div className="site-container home-hero__inner">
          <div className="home-hero__image">
            <img
              src="/images/dr-reddy-portrait.jpg"
              alt="Dr. Kasu Prasad Reddy — Surgeon and Ophthalmologist"
              className="home-hero__image-img"
            />
          </div>
          <div className="home-hero__content">
            <p className="home-hero__label">Surgeon and Ophthalmologist</p>
            <h1 className="home-hero__name">Dr. Kasu Prasad Reddy</h1>
            <div className="home-hero__credentials">
              <p className="read home-hero__credential-line">
                A career spanning general surgery, orthopaedic surgery, neurosurgery, and ophthalmology across five decades in India and the United Kingdom.
              </p>
              <p className="read home-hero__credential-line">
                Registered with the General Medical Council of the United Kingdom. Member of the Royal College of Ophthalmologists. Founder of Maxivision Eye Hospitals.
              </p>
              <p className="read home-hero__credential-line">
                First and corresponding author of a randomised controlled trial published in the Journal of Cataract and Refractive Surgery, 2013.
              </p>
            </div>
            <div className="home-hero__metrics">
              {[
                { value: "50+", label: "Years in practice" },
                { value: "1977", label: "GMC registered" },
                { value: "MRCOphth", label: "Royal College, UK" },
              ].map((m) => (
                <div key={m.label} className="home-hero__metric">
                  <span className="home-hero__metric-value">{m.value}</span>
                  <span className="home-hero__metric-label">{m.label}</span>
                </div>
              ))}
            </div>
            <nav className="home-hero__nav" aria-label="Page shortcuts">
              {[
                { label: "Biography", href: "/biography/" },
                { label: "Clinical Contributions", href: "/clinical-contributions/" },
                { label: "Publications", href: "/publications/" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="home-hero__nav-link">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* CAREER */}
      <section className="home-section home-section--light">
        <div className="site-container">
          <hr className="divider-gold home-section__rule" />
          <h2 className="home-section__heading">Career</h2>
          <p className="read home-section__body">
            Dr. Reddy trained and practised in the United Kingdom from 1978, joining the Corneal Laser Centre in Chester in 1991 — one of the first dedicated laser refractive surgery centres in the United Kingdom. He returned to India in 1996, founding what became Maxivision Eye Hospitals, initially established as Maxivision Laser Centre.
          </p>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="home-section home-section--alt">
        <div className="site-container">
          <hr className="divider-gold home-section__rule" />
          <h2 className="home-section__heading">Research</h2>
          <p className="read home-section__body">
            Dr. Reddy is the first and corresponding author of a randomised controlled trial published in the Journal of Cataract and Refractive Surgery in 2013, conducted in collaboration with Technolas Perfect Vision, Munich and the University of Heidelberg, Germany.
          </p>
        </div>
      </section>
    </Layout>
  );
}