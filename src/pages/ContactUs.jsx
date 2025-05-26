import React from 'react';
import '../styles/ContactUs.css';
import { Link } from 'react-router-dom';
import qrCodeImage from '../assets/whatsapp.png'; // Replace with your actual QR code image

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <h1>CONTACT US</h1>
        <p><Link to="/" className="plain-link">Home</Link> &gt; Contact Us</p>
      </div>

      {/* Contact Form */}
      <div className="contact-form-section">
        <h2><span>Get in Touch</span> With Us</h2>
        <form className="contact-form">
          <input type="email" placeholder="Your Email Address" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* WhatsApp Section */}
      <div className="whatsapp-section">
        <h3>Chat with us on WhatsApp</h3>
        <img src={qrCodeImage} alt="WhatsApp QR" className="qr-code" />
        <p className="whatsapp-number">+91 82776 08357</p>
      </div>

      {/* Address Section */}
      <div className="address-section">
        <h3>Our Address</h3>
        <p>Medal Investments Pvt. Ltd.<br />#238 Old Tharagupete, Bengaluru</p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Medal Investments. All rights reserved.</p>
        <p className="disclaimer">Disclaimer: Mutual Fund investments are subject to market risks, read all scheme related documents carefully. The NAVs of the schemes may go up or down depending upon the factors and forces affecting the securities market including the fluctuations in the interest rates. The past performance of the mutual funds is not necessarily indicative of future performance of the schemes. The Mutual Fund is not guaranteeing or assuring any dividend under any of the schemes and the same is subject to the availability and adequacy of distributable surplus. Investors are requested to review the prospectus carefully and obtain expert professional advice with regard to specific legal, tax and financial implications of the investment/participation in the scheme.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
