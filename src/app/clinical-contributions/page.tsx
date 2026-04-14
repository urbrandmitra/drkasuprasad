import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { generateMetadata } from "../components/PageMeta";

export const metadata = generateMetadata({
  title: "Clinical Contributions — Dr. Kasu Prasad Reddy | Ophthalmologist",
  description: "A record of Dr. Kasu Prasad Reddy's clinical contributions to ophthalmology across three decades — refractive surgery, cataract innovation, glaucoma research, and international trial participation.",
  canonicalUrl: "https://www.drkasuprasad.com/clinical-contributions/",
});

export default function ClinicalContributionsPage() {
  return (
    <Layout>

      {/* HERO */}
      <section className="clinical-hero">
        <div className="site-container">
          <p className="clinical-hero__label">Clinical Record</p>
          <h1 className="clinical-hero__heading">Clinical Contributions to Ophthalmology</h1>
          <p className="clinical-hero__summary read">
            A record of clinical contributions spanning refractive surgery, cataract innovation, glaucoma research, and participation in international clinical trials across three decades of practice in India.
          </p>
        </div>
      </section>

      {/* LASIK */}
      <section className="clinical-section clinical-section--light">
        <div className="site-container clinical-section__inner">
          <div>
            <p className="clinical-section__label">Refractive Surgery</p>
            <h2 className="clinical-section__heading">Introduction of LASIK in India</h2>
            <p className="clinical-section__body read">
              Dr. Kasu Prasad Reddy introduced LASIK refractive surgery in India in 1996, following specialist LASIK training at St. George Corrective Vision Center, Chicago in 1995. Prior to this, laser refractive correction in India was limited to PRK in isolated centres.
            </p>
            <p className="clinical-section__body read">
              His prior clinical experience with laser refractive surgery extended to 1991, when he joined the Corneal Laser Centre in Chester, where PRK was performed using early excimer laser platforms. He adopted successive generations of laser technology as they became available, including the Technolas excimer laser platform from Munich.
            </p>
          </div>
          <div>
            <img
              src="/images/dr-reddy-surgery.jpg"
              alt="Dr. Kasu Prasad Reddy performing ophthalmic surgery at Maxivision Eye Hospitals"
              className="clinical-image clinical-image--portrait"
            />
          </div>
        </div>
      </section>

      {/* PHAKIC IOL */}
      <section className="clinical-section clinical-section--alt">
        <div className="site-container">
          <p className="clinical-section__label">High Myopia</p>
          <h2 className="clinical-section__heading">Phakic Intraocular Lenses</h2>
          <p className="clinical-section__body read">
            For patients with high myopia beyond the treatable range of LASIK, Dr. Reddy travelled to Groningen, Netherlands, to train with Professor John Worst, developer of the Artisan iris-clip phakic intraocular lens. He introduced the Artisan lens to India around the year 2000, obtaining an import licence to source the device directly during a period of import restrictions.
          </p>
          <p className="clinical-section__body read">
            He also participated in the introduction of the Implantable Collamer Lens to India, placing among the first procedures in the country alongside Dr. Sri Ganeshan of Bangalore.
          </p>
          <p className="clinical-section__body read">
            Published in: <Link href="/publications/" className="clinical-section__link">Indian Journal of Ophthalmology, 2006</Link>
          </p>
        </div>
      </section>

      {/* VICTUS */}
      <section className="clinical-section clinical-section--dark">
        <div className="site-container clinical-section__inner--victus">
          <div>
            <p className="clinical-section__label">Femtosecond Laser Cataract Surgery</p>
            <h2 className="clinical-section__heading">VICTUS Platform — Research and Inauguration</h2>
            <p className="clinical-section__body read">
              Dr. Reddy served as a primary investigator in prototype research for the VICTUS femtosecond laser platform developed by Bausch and Lomb Technolas, Munich, contributing a high volume of cases across a concentrated research period. He is the first and corresponding author of a randomised controlled trial examining VICTUS platform outcomes, published in the Journal of Cataract and Refractive Surgery in 2013. The study was conducted in collaboration with Technolas Perfect Vision, Munich and the University of Heidelberg, Germany.
            </p>
            <p className="clinical-section__body read">
              The VICTUS platform was inaugurated at Maxivision Eye Hospitals on 31 January 2012, an occasion attended by former President of India Dr. A.P.J. Abdul Kalam.
            </p>
            <p className="clinical-section__body read">
              Published in: <Link href="/publications/" className="clinical-section__link--light">Journal of Cataract and Refractive Surgery, 2013</Link>
            </p>
          </div>
          <div>
            <div className="clinical-kalam-image">
              <Image
                src="/images/kalam-victus-inauguration-2012.jpg"
                alt="Dr. Kasu Prasad Reddy with former President of India Dr. A.P.J. Abdul Kalam at the inauguration of the VICTUS Femtosecond Laser Cataract Surgery system at Maxivision Eye Hospitals, 31 January 2012"
                width={3872}
                height={2592}
                style={{ width: "100%", height: "auto", display: "block", maxWidth: "460px", margin: "0 auto" }}
              />
            </div>
            <p className="clinical-image__caption" style={{ color: "rgba(255,255,255,0.5)" }}>
              Former President of India Dr. A.P.J. Abdul Kalam at the inauguration of the VICTUS Femtosecond Laser Cataract Surgery system at Maxivision Eye Hospitals, 31 January 2012.
            </p>
          </div>
        </div>
      </section>

      {/* GLAUCOMA */}
      <section className="clinical-section clinical-section--light">
        <div className="site-container">
          <p className="clinical-section__label">Glaucoma Research</p>
          <h2 className="clinical-section__heading">Clinical Trial Participation</h2>
          <p className="clinical-section__body read">
            Dr. Reddy served as a principal investigator in the STAR-I clinical trial for the MINIject glaucoma drainage device developed by iSTAR Medical. He also participated in research into High Intensity Focused Ultrasound for glaucoma treatment in collaboration with EyeTechCare.
          </p>
          <p className="clinical-section__body read">
            Published in: <Link href="/publications/" className="clinical-section__link">Ophthalmology Glaucoma, 2019</Link> and <Link href="/publications/" className="clinical-section__link">British Journal of Ophthalmology, 2022</Link>
          </p>
        </div>
      </section>

      {/* PRESBYOPIA */}
      <section className="clinical-section clinical-section--alt">
        <div className="site-container">
          <p className="clinical-section__label">Presbyopia</p>
          <h2 className="clinical-section__heading">Intracor and Presbyopic Laser Correction</h2>
          <p className="clinical-section__body read">
            Dr. Reddy trained with Professor Luis Antonio Ruiz in Bogota, Colombia, in the technique of Intracor, subsequently introducing the approach to India. From this research, and drawing on the underlying principles of corneal reshaping, he contributed to the development of what became known as presbyopic laser correction.
          </p>
        </div>
      </section>

    </Layout>
  );
}