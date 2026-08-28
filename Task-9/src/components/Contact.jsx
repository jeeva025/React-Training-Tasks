import React from 'react'

function Contact() {
  return (
    <div className="page">

      <div className="page-header">
        <h1>Contact Us</h1>
        <p>
          Have a project in mind? We'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            Feel free to contact us for any questions,
            projects or business enquiries.
          </p>

          <div className="contact-item">
            <strong>📧 Email</strong>
            <p>jeeva@gmail.com</p>
          </div>

          <div className="contact-item">
            <strong>📞 Phone</strong>
            <p>+91 9087654321</p>
          </div>

          <div className="contact-item">
            <strong>📍 Location</strong>
            <p>Chennai, Tamil Nadu</p>
          </div>

        </div>

        {/* <div className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
          ></textarea>

          <button>Send Message</button>

        </div> */}

      </div>

    </div>
  )
}

export default Contact