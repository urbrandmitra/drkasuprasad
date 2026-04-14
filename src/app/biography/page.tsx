import Layout from "../components/Layout";
import PersonSchema from "../components/PersonSchema";
import { generateMetadata } from "../components/PageMeta";

export const metadata = generateMetadata({
  title: "Dr. Kasu Prasad Reddy — Biography | Surgeon and Ophthalmologist",
  description: "The career biography of Dr. Kasu Prasad Reddy — surgeon, ophthalmologist, and founder of Maxivision Eye Hospitals. A five-decade record spanning India and the United Kingdom.",
  canonicalUrl: "https://www.drkasuprasad.com/biography/",
});

const timelineItems = [
  { year: "1949", title: "Born, Biccavolu, East Godavari District", desc: "Born on 2 May 1949. Raised from the age of six in Narasaraopet, Guntur District, Andhra Pradesh." },
  { year: "1973", title: "MBBS, Andhra University", desc: "Passed the MBBS examination from Andhra University. Completed internship at Government General Hospital, Guntur in October 1974." },
  { year: "1977", title: "GMC Full Registration, United Kingdom", desc: "Registered with the General Medical Council of the United Kingdom. Registration number 2395872." },
  { year: "1978", title: "Departed for the United Kingdom", desc: "Undertook postgraduate studies in General Surgery at Stanley Medical College, Chennai before departing for the United Kingdom." },
  { year: "1984", title: "Diploma in Ophthalmology, RCPI and RCSI", desc: "Obtained the Diploma in Ophthalmology from the Royal College of Physicians and Surgeons of Ireland." },
  { year: "1989", title: "MRCOphth, Royal College of Ophthalmologists", desc: "Admitted as a Member of the Royal College of Ophthalmologists, United Kingdom." },
  { year: "1991", title: "Corneal Laser Centre, Chester, UK", desc: "Joined the Corneal Laser Centre in Chester, one of the first dedicated laser refractive surgery centres in the United Kingdom. Trained under Dr. Terry Ramsdale." },
  { year: "1995", title: "LASIK Training, Chicago", desc: "Completed specialist LASIK training at St. George Corrective Vision Center, Chicago." },
  { year: "1996", title: "Return to India — Maxivision Laser Centre Founded", desc: "Returned to India and launched refractive surgery services, founding what was initially established as Maxivision Laser Centre, later expanded and renamed Maxivision Eye Hospitals." },
  { year: "1999", title: "KVR Memorial Trust, Founded", desc: "Established the KVR Memorial Trust in memory of his father, Sri Kasu Vengal Reddy, to fund ophthalmic care for patients without means." },
  { year: "2012", title: "VICTUS Platform Inauguration", desc: "The VICTUS femtosecond laser platform was inaugurated at Maxivision Eye Hospitals, an occasion attended by former President of India Dr. A.P.J. Abdul Kalam." },
];

const credentials = [
  { name: "GMC Registration", detail: "No. 2395872 — United Kingdom", year: "1977" },
  { name: "DO, RCPI and RCSI", detail: "Dublin", year: "1984" },
  { name: "MRCOphth", detail: "Royal College of Ophthalmologists", year: "1989" },
  { name: "MBBS", detail: "Andhra University", year: "1973" },
];

const narrativeSections = [
  {
    heading: "Early Life and Education",
    body: "Dr. Kasu Prasad Reddy was born on 2 May 1949 in Biccavolu, East Godavari District, Andhra Pradesh, and raised from the age of six in Narasaraopet, Guntur District. He completed his schooling at Sainik School, Korukonda, and passed his MBBS examination from Andhra University in 1973. He undertook postgraduate studies in General Surgery at Stanley Medical College, Chennai, completing the primary examination before departing for the United Kingdom in 1978.",
  },
  {
    heading: "Training and Qualification in the United Kingdom",
    body: "In the United Kingdom, Dr. Reddy trained across orthopaedic surgery, accident and emergency, and neurosurgery before entering ophthalmology. He obtained his Diploma in Ophthalmology from the Royal College of Physicians and Surgeons of Ireland in 1984 and was admitted as a Member of the Royal College of Ophthalmologists in 1989. He holds Full Registration with the General Medical Council of the United Kingdom from 1977.",
  },
  {
    heading: "Refractive Surgery, United Kingdom",
    body: "In February 1991, Dr. Reddy joined the Corneal Laser Centre in Chester, one of the first dedicated laser refractive surgery centres in the United Kingdom. He trained under Dr. Terry Ramsdale and held a stakeholder position in the centre. The organisation subsequently expanded across the United Kingdom and was later acquired and renamed Ultralase.",
  },
];

export default function BiographyPage() {
  return (
    <Layout>
      <PersonSchema
        name="Dr. Kasu Prasad Reddy"
        jobTitle="Surgeon and Ophthalmologist"
        description="Surgeon and ophthalmologist with a clinical career spanning five decades across India and the United Kingdom. Founder of Maxivision Eye Hospitals."
        url="https://www.drkasuprasad.com/biography"
        birthPlace="Biccavolu, East Godavari District, Andhra Pradesh"
        dateOfBirth="1949-05-02"
        nationality="Indian"
        worksFor="Maxivision Eye Hospitals"
        memberOf={[
          "Royal College of Ophthalmologists",
          "General Medical Council of the United Kingdom",
        ]}
        sameAs={["https://www.linkedin.com/in/drkasuprasad"]}
      />

      {/* HERO */}
      <section className="bio-hero">
        <div className="site-container bio-hero__inner">
          <div className="bio-hero__image">
            <img
              src="/images/dr-reddy-home.jpg"
              alt="Dr. Kasu Prasad Reddy — Surgeon and Ophthalmologist"
              className="bio-hero__image-img"
            />
          </div>
          <div className="bio-hero__content">
            <p className="bio-hero__label">Surgeon and Ophthalmologist</p>
            <h1 className="bio-hero__name">Dr. Kasu Prasad Reddy</h1>
            <p className="bio-hero__pull">
              Five decades of clinical practice. Two countries. One unbroken standard of care.
            </p>
            <p className="bio-hero__summary read">
              Registered with the General Medical Council of the United Kingdom. Member of the Royal College of Ophthalmologists. Founder of Maxivision Eye Hospitals.
            </p>
          </div>
        </div>
      </section>

      {/* NARRATIVE */}
      <section className="bio-narrative">
        <div className="site-container bio-narrative__inner">
          <div className="bio-narrative__sections">
            {narrativeSections.map((s) => (
              <div key={s.heading} className="bio-narrative__section">
                <h2>{s.heading}</h2>
                <p className="read">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="bio-sidebar">
            <div className="bio-sidebar__panel">
              <p className="bio-sidebar__heading">Verified Qualifications</p>
              {credentials.map((c) => (
                <div key={c.name} className="bio-sidebar__item">
                  <p className="bio-sidebar__item-name">{c.name}</p>
                  <p className="bio-sidebar__item-detail">{c.detail}</p>
                  <p className="bio-sidebar__item-year">{c.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bio-timeline">
        <div className="site-container">
          <h2 className="bio-timeline__heading">Career Timeline</h2>
          <div className="bio-timeline__items">
            {timelineItems.map((item, index) => (
              <div key={item.year + index} className="bio-timeline__item">
                <div className="bio-timeline__year">{item.year}</div>
                <div className="bio-timeline__marker">
                  <div className="bio-timeline__dot" />
                  {index < timelineItems.length - 1 && (
                    <div className="bio-timeline__line" />
                  )}
                </div>
                <div className="bio-timeline__content">
                  <h3 className="bio-timeline__title">{item.title}</h3>
                  <p className="bio-timeline__desc read">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RETURN TO INDIA */}
      <section className="bio-return">
        <div className="site-container bio-return__inner">
          <div>
            <h2 className="bio-return__heading">Return to India</h2>
            <p className="bio-return__body read">
              In 1996, Dr. Reddy returned to India and launched refractive surgery services, founding what was initially established as Maxivision Laser Centre. The practice grew into Maxivision Eye Hospitals. In 1999 he established the KVR Memorial Trust to fund ophthalmic care for patients without means.
            </p>
          </div>
          <div className="bio-return__events">
            {[
              { year: "1996", text: "Returned to India — Maxivision Laser Centre founded" },
              { year: "1999", text: "KVR Memorial Trust established" },
              { year: "2012", text: "VICTUS platform inaugurated — attended by President A.P.J. Abdul Kalam" },
            ].map((e) => (
              <div key={e.year} className="bio-return__event">
                <span className="bio-return__event-year">{e.year}</span>
                <span className="bio-return__event-text">{e.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVIATION */}
      <section className="bio-aviation">
        <div className="site-container bio-aviation__inner">
          <div>
            <p className="bio-aviation__label">Beyond Medicine</p>
            <h2 className="bio-aviation__heading">Aviation</h2>
            <p className="bio-aviation__body read">
              Dr. Reddy holds a British Private Pilot Licence and qualified as an aerobatic pilot. He completed aviation medicine training at the Royal Air Force, Farnborough, and served as an Authorised Medical Examiner for the Civil Aviation Authority of the United Kingdom.
            </p>
          </div>
        </div>
      </section>

    </Layout>
  );
}