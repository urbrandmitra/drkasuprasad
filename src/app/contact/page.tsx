'use client';

import { useState } from 'react';
import Layout from '../components/Layout';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    email: '',
    enquiryType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Layout>
      <section className="con-page-header">
        <div className="site-container">
          <p className="con-section-label">Contact</p>
          <h1 className="con-h1">Contact</h1>
          <div className="con-header-rule" />
        </div>
      </section>

      <section className="con-section">
        <div className="site-container con-grid">
          <div className="con-form-col">
            <h2 className="con-h2">Professional Enquiries</h2>
            <p className="con-body">
              This website is the permanent public record of Dr. Kasu Prasad Reddy&apos;s career
              and contributions. For professional enquiries, media requests, or academic
              correspondence, please use the form below.
            </p>

            {submitted ? (
              <div className="con-success">
                <p className="con-success-text">
                  Your message has been received. We will respond to professional enquiries in due
                  course.
                </p>
              </div>
            ) : (
              <div className="con-form">
                <div className="con-field">
                  <label className="con-label" htmlFor="fullName">
                    Full name
                  </label>
                  <input
                    className="con-input"
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>

                <div className="con-field">
                  <label className="con-label" htmlFor="organisation">
                    Organisation
                  </label>
                  <input
                    className="con-input"
                    type="text"
                    id="organisation"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    autoComplete="organization"
                  />
                </div>

                <div className="con-field">
                  <label className="con-label" htmlFor="email">
                    Email address
                  </label>
                  <input
                    className="con-input"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>

                <div className="con-field">
                  <label className="con-label" htmlFor="enquiryType">
                    Nature of enquiry
                  </label>
                  <div className="con-select-wrap">
                    <select
                      className="con-select"
                      id="enquiryType"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Media">Media</option>
                      <option value="Academic">Academic</option>
                      <option value="Professional">Professional</option>
                      <option value="Other">Other</option>
                    </select>
                    <span className="con-select-arrow" aria-hidden="true">
                      &#8964;
                    </span>
                  </div>
                </div>

                <div className="con-field">
                  <label className="con-label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="con-textarea"
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button className="con-submit" onClick={handleSubmit} type="button">
                  Submit
                </button>
              </div>
            )}
          </div>

          <aside className="con-aside-col">
            <h2 className="con-h2">Clinical Appointments</h2>
            <p className="con-body">
              For clinical appointments, please contact Maxivision Eye Hospitals directly.
            </p>

            <address className="con-address">
              <p className="con-address-name">Maxivision Eye Hospitals</p>
              <p className="con-address-line">Raj Bhavan Road, Somajiguda</p>
              <p className="con-address-line">Hyderabad, Telangana 500082</p>
            </address>
          </aside>
        </div>
      </section>
    </Layout>
  );
}