import Layout from '../components/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publications — Dr. Kasu Prasad Reddy | Ophthalmologist',
  description:
    'Peer-reviewed publications and clinical research by Dr. Kasu Prasad Reddy, ophthalmologist and founder of Maxivision Eye Hospitals, Hyderabad.',
  alternates: {
    canonical: 'https://drkasuprasad.com/publications',
  },
};

export default function Publications() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="pub-page-header">
        <div className="pub-container">
          <p className="pub-section-label">Publications</p>
          <h1 className="pub-h1">Publications and Research</h1>
          <div className="pub-header-rule" />
        </div>
      </section>

      {/* JCRS 2013 */}
      <section className="pub-section">
        <div className="pub-container">
          <article className="pub-entry">
            <div className="pub-entry-meta">
              <span className="pub-year">2013</span>
              <span className="pub-journal">Journal of Cataract and Refractive Surgery</span>
            </div>
            <div className="pub-entry-content">
              <h2 className="pub-h2">Journal of Cataract and Refractive Surgery — 2013</h2>
              <p className="pub-body">
                Dr. Kasu Prasad Reddy is the first and corresponding author of a randomised controlled
                trial published in the Journal of Cataract and Refractive Surgery, Volume 39, Issue 9,
                2013. The study examined outcomes of the VICTUS femtosecond laser platform and was
                conducted in collaboration with Technolas Perfect Vision, Munich and the University of
                Heidelberg, Germany. The Journal of Cataract and Refractive Surgery is among the most
                cited peer-reviewed journals in the specialty globally.
              </p>
              <div className="pub-detail-row">
                <span className="pub-detail-label">Role</span>
                <span className="pub-detail-value">First and corresponding author</span>
              </div>
              <div className="pub-detail-row">
                <span className="pub-detail-label">Study type</span>
                <span className="pub-detail-value">Randomised controlled trial</span>
              </div>
              <div className="pub-detail-row">
                <span className="pub-detail-label">Collaborators</span>
                <span className="pub-detail-value">
                  Technolas Perfect Vision, Munich &middot; University of Heidelberg, Germany
                </span>
              </div>
              <div className="pub-detail-row">
                <span className="pub-detail-label">Credentials listed</span>
                <span className="pub-detail-value">MB, DO, MRCOphth (UK)</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className="pub-divider" />

      {/* Indian Journal of Ophthalmology 2006 */}
      <section className="pub-section">
        <div className="pub-container">
          <article className="pub-entry">
            <div className="pub-entry-meta">
              <span className="pub-year">2006</span>
              <span className="pub-journal">Indian Journal of Ophthalmology</span>
            </div>
            <div className="pub-entry-content">
              <h2 className="pub-h2">Indian Journal of Ophthalmology — 2006</h2>
              <p className="pub-body">
                Dr. Reddy is a contributing author on a publication in the Indian Journal of
                Ophthalmology in 2006, relating to the introduction of the Artisan phakic
                intraocular lens in India.
              </p>
              <div className="pub-detail-row">
                <span className="pub-detail-label">Role</span>
                <span className="pub-detail-value">Contributing author</span>
              </div>
              <div className="pub-detail-row">
                <span className="pub-detail-label">Subject</span>
                <span className="pub-detail-value">
                  Artisan phakic intraocular lens — introduction to India
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className="pub-divider" />

      {/* Glaucoma Research */}
      <section className="pub-section">
        <div className="pub-container">
          <article className="pub-entry">
            <div className="pub-entry-meta">
              <span className="pub-year">2019&thinsp;&ndash;&thinsp;2022</span>
              <span className="pub-journal">Glaucoma Research</span>
            </div>
            <div className="pub-entry-content">
              <h2 className="pub-h2">Glaucoma Research — Clinical Trial Publications</h2>
              <p className="pub-body">
                Dr. Reddy&apos;s participation as a principal investigator in the STAR-I trial for
                the MINIject glaucoma drainage device resulted in publications in Ophthalmology
                Glaucoma in 2019 and the British Journal of Ophthalmology in 2022.
              </p>
              <div className="pub-detail-row">
                <span className="pub-detail-label">Role</span>
                <span className="pub-detail-value">Principal investigator — STAR-I trial</span>
              </div>
              <div className="pub-detail-row">
                <span className="pub-detail-label">Device</span>
                <span className="pub-detail-value">MINIject glaucoma drainage device — iSTAR Medical</span>
              </div>
              <div className="pub-detail-row">
                <span className="pub-detail-label">Publications</span>
                <span className="pub-detail-value">
                  Ophthalmology Glaucoma, 2019 &middot; British Journal of Ophthalmology, 2022
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className="pub-divider" />

      {/* Media Citations */}
      <section className="pub-section pub-section-last">
        <div className="pub-container">
          <article className="pub-entry">
            <div className="pub-entry-meta">
              <span className="pub-year">Media</span>
              <span className="pub-journal">Press Coverage</span>
            </div>
            <div className="pub-entry-content">
              <h2 className="pub-h2">Media Citations</h2>
              <p className="pub-body">
                Dr. Reddy&apos;s clinical work has been documented in Indian national press, including
                <em> The Hindu</em> and the <em>Deccan Chronicle</em>, particularly in relation to the
                introduction of advanced ophthalmic technologies and institutional developments.
              </p>

              <div className="pub-photo-grid">
                <figure className="pub-photo-figure">
                  <div className="pub-photo-frame">
                    <img
                      src="/images/the-hindu-2012.jpeg"
                      alt="The Hindu coverage of the inauguration of the VICTUS femtosecond platform at Maxivision Eye Hospital, Hyderabad, February 2012."
                      className="pub-photo-img"
                    />
                  </div>
                  <figcaption className="pub-photo-caption">
                    <em>The Hindu</em>, Hyderabad Edition, February 2012 — Coverage of the inauguration
                    of the VICTUS femtosecond platform at Maxivision Eye Hospital, attended by former
                    President Dr. A.P.J. Abdul Kalam.
                  </figcaption>
                </figure>

                <figure className="pub-photo-figure">
                  <div className="pub-photo-frame">
                    <img
                      src="/images/deccan-chronicle-2012.jpeg"
                      alt="Deccan Chronicle coverage of the introduction of femtosecond laser technology at Maxivision Eye Hospital, Hyderabad, February 2012."
                      className="pub-photo-img"
                    />
                  </div>
                  <figcaption className="pub-photo-caption">
                    <em>Deccan Chronicle</em>, Hyderabad Edition, February 2012 — Report on the
                    introduction of femtosecond laser technology in cataract surgery at Maxivision Eye
                    Hospital.
                  </figcaption>
                </figure>
              </div>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
}