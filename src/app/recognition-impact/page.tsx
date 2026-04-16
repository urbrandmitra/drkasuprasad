import Layout from '../components/Layout';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recognition & Impact — Dr. Kasu Prasad Reddy | Ophthalmologist',
  description:
    'Awards, professional affiliations, institutional recognition, and philanthropic contribution of Dr. Kasu Prasad Reddy, ophthalmologist and founder of Maxivision Eye Hospitals, Hyderabad.',
  alternates: {
    canonical: 'https://drkasuprasad.com/recognition-impact',
  },
};

export default function RecognitionImpact() {
  return (
    <Layout>

      {/* Page Header */}
      <section className="ri-page-header">
        <div className="ri-container">
          <p className="ri-section-label">Recognition &amp; Impact</p>
          <h1 className="ri-h1">Recognition and Professional Impact</h1>
          <div className="ri-header-rule" />
        </div>
      </section>

      {/* Awards and Recognitions */}
      <section className="ri-section">
        <div className="ri-container ri-two-col">
          <div className="ri-col-label">
            <span className="ri-label-text">Awards</span>
          </div>
          <div className="ri-col-content">
            <h2 className="ri-h2">Awards and Recognitions</h2>
            <p className="ri-body">
              Dr. Kasu Prasad Reddy received the D. Malleshwar Rao Oration Medal from the Andhra Pradesh
              Ophthalmological Society in 2002, recognising his contribution to ophthalmology within the
              professional community. In 2013 he received the Lifetime Achievement Award from the North
              American Telugu Association.
            </p>
            <div className="ri-award-list">
              <div className="ri-award-item">
                <span className="ri-award-year">2002</span>
                <div className="ri-award-detail">
                  <p className="ri-award-title">D. Malleshwar Rao Oration Medal</p>
                  <p className="ri-award-body">Andhra Pradesh Ophthalmological Society</p>
                </div>
              </div>
              <div className="ri-award-item">
                <span className="ri-award-year">2013</span>
                <div className="ri-award-detail">
                  <p className="ri-award-title">Lifetime Achievement Award</p>
                  <p className="ri-award-body">North American Telugu Association</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ri-divider" />

      {/* Presidential Association */}
      <section className="ri-section">
        <div className="ri-container">
          <div className="ri-two-col">
            <div className="ri-col-label">
              <span className="ri-label-text">Presidential Association</span>
            </div>
            <div className="ri-col-content">
              <h2 className="ri-h2">Presidential Association</h2>
              <p className="ri-body">
                On 31 January 2012, former President of India Dr. A.P.J. Abdul Kalam attended the
                inauguration of the VICTUS Femtosecond Laser Cataract Surgery system at Maxivision Eye
                Hospital, Hyderabad. The occasion followed Dr. Reddy&apos;s participation as a primary
                investigator in the platform&apos;s prototype research programme. The event was reported
                by The Hindu and the Deccan Chronicle on 1 February 2012.
              </p>
            </div>
          </div>

          <div className="ri-photo-grid">
            <figure className="ri-photo-figure">
              <div className="ri-photo-frame">
                <Image
                  src="/images/kalam-victus-inauguration-2012.jpg"
                  alt="Former President of India Dr. A.P.J. Abdul Kalam at the inauguration of the VICTUS Femtosecond Laser Cataract Surgery system at Maxivision Eye Hospital, Hyderabad, 31 January 2012."
                  fill
                  className="ri-photo-img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="ri-photo-caption">
                Former President of India Dr. A.P.J. Abdul Kalam at the inauguration of the VICTUS
                Femtosecond Laser Cataract Surgery system at Maxivision Eye Hospital, Hyderabad,
                31 January 2012.
              </figcaption>
            </figure>

            <figure className="ri-photo-figure">
              <div className="ri-photo-frame ri-photo-placeholder">
                <span className="ri-placeholder-text">DIGNITARY PHOTOGRAPH — TO BE SUPPLIED</span>
              </div>
              <figcaption className="ri-photo-caption ri-caption-placeholder">
                Caption to be confirmed on availability and occasion verification.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <div className="ri-divider" />

      {/* Professional Society Leadership */}
      <section className="ri-section">
        <div className="ri-container ri-two-col">
          <div className="ri-col-label">
            <span className="ri-label-text">Leadership</span>
          </div>
          <div className="ri-col-content">
            <h2 className="ri-h2">Professional Society Leadership</h2>
            <p className="ri-body">
              Dr. Reddy was elected President of the Hyderabad Ophthalmological Association by unanimous
              vote of its membership. On completion of his term he declined a second consecutive term,
              recommending that the most senior ophthalmologist in active practice assume the role. That
              convention has continued within the association.
            </p>
          </div>
        </div>
      </section>

      <div className="ri-divider" />

      {/* Professional Memberships */}
      <section className="ri-section">
        <div className="ri-container ri-two-col">
          <div className="ri-col-label">
            <span className="ri-label-text">Memberships</span>
          </div>
          <div className="ri-col-content">
            <h2 className="ri-h2">Professional Memberships</h2>
            <p className="ri-body">
              Dr. Reddy holds membership of the Royal College of Ophthalmologists, United Kingdom, and
              Full Registration with the General Medical Council of the United Kingdom. He is affiliated
              with the European Society of Cataract and Refractive Surgeons, the American Society of
              Cataract and Refractive Surgeons, the American Academy of Ophthalmology, the All India
              Ophthalmological Society, and the Andhra Pradesh Ophthalmological Society.
            </p>
            <div className="ri-membership-list">
              <div className="ri-membership-item">
                <span className="ri-membership-abbr">GMC</span>
                <span className="ri-membership-name">General Medical Council, United Kingdom — Full Registration</span>
              </div>
              <div className="ri-membership-item">
                <span className="ri-membership-abbr">MRCOphth</span>
                <span className="ri-membership-name">Royal College of Ophthalmologists, United Kingdom</span>
              </div>
              <div className="ri-membership-item">
                <span className="ri-membership-abbr">ESCRS</span>
                <span className="ri-membership-name">European Society of Cataract and Refractive Surgeons</span>
              </div>
              <div className="ri-membership-item">
                <span className="ri-membership-abbr">ASCRS</span>
                <span className="ri-membership-name">American Society of Cataract and Refractive Surgeons</span>
              </div>
              <div className="ri-membership-item">
                <span className="ri-membership-abbr">AAO</span>
                <span className="ri-membership-name">American Academy of Ophthalmology</span>
              </div>
              <div className="ri-membership-item">
                <span className="ri-membership-abbr">AIOS</span>
                <span className="ri-membership-name">All India Ophthalmological Society</span>
              </div>
              <div className="ri-membership-item">
                <span className="ri-membership-abbr">APOS</span>
                <span className="ri-membership-name">Andhra Pradesh Ophthalmological Society</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ri-divider" />

      {/* Philanthropy */}
      <section className="ri-section">
        <div className="ri-container ri-two-col">
          <div className="ri-col-label">
            <span className="ri-label-text">Philanthropy</span>
          </div>
          <div className="ri-col-content">
            <h2 className="ri-h2">Philanthropy</h2>
            <p className="ri-body">
              In 1999, Dr. Reddy established the KVR Memorial Trust in the name of his father,
              Sri Kasu Vengal Reddy, to fund ophthalmic procedures for patients without means.
              The Trust enabled a single standard of clinical care across all patients regardless
              of financial position.
            </p>
          </div>
        </div>
      </section>

      <div className="ri-divider" />

      {/* Media Coverage */}
      <section className="ri-section">
        <div className="ri-container ri-two-col">
          <div className="ri-col-label">
            <span className="ri-label-text">Media</span>
          </div>
          <div className="ri-col-content">
            <h2 className="ri-h2">Media Coverage</h2>
            <p className="ri-body">
              Dr. Reddy&apos;s clinical work has been documented in Indian national press, including
              The Hindu and the Deccan Chronicle, particularly in relation to the introduction of
              advanced ophthalmic technologies and institutional developments.
            </p>
          </div>
        </div>
      </section>

      <div className="ri-divider" />

      {/* Clinical Education */}
      <section className="ri-section ri-section-last">
        <div className="ri-container ri-two-col">
          <div className="ri-col-label">
            <span className="ri-label-text">Clinical Education</span>
          </div>
          <div className="ri-col-content">
            <h2 className="ri-h2">Clinical Education</h2>
            <p className="ri-body">
              Dr. Reddy discusses LASIK refractive surgery — candidacy, corneal health, and clinical
              considerations. A guide for patients and clinicians on the decision-making process behind
              modern refractive correction.
            </p>
            <div className="ri-video-slot">
              <div className="ri-video-embed">
                <iframe
                  src="https://www.youtube.com/embed/hH1zgi2SXV0"
                  title="LASIK Eye Surgery — Dr. Kasu Prasad Reddy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}