import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link with form data
    const mailtoLink = `mailto:hariniavish@gmail.com?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;

    window.location.href = mailtoLink;

    // Reset form and show success message
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-page-title">Contact Me</h1>
      <div className="contact-container">
        {/* Left side - Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <div className="info-item">
            <i className="bi bi-person-fill"></i>
            <div>
              <p className="info-label">Name</p>
              <p className="info-value">Shiva Harini Balakumaran</p>
            </div>
          </div>

          <div className="info-item">
            <i className="bi bi-geo-alt-fill"></i>
            <div>
              <p className="info-label">Location</p>
              <p className="info-value">Seattle, US</p>
            </div>
          </div>

          <div className="info-item">
            <i className="bi bi-envelope-fill"></i>
            <div>
              <p className="info-label">Email</p>
              <p className="info-value">
                <a href="mailto:hariniavish@gmail.com">hariniavish@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="contact-form-wrapper">
          <h2>Message Me</h2>

          {submitted && (
            <div className="success-message">
              Thank you! Your message will be sent via your default email
              client.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="form-input full-width"
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
              rows="5"
            ></textarea>

            <button type="submit" className="btn btn-contact">
              Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
