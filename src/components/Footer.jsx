import React from "react";
import "../styles/footer.css"; // Ensure correct path
import { 
  FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp, 
  FaPinterestP, FaXTwitter, FaYoutube 
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section - Office Locations */}
      <div className="footer-top">
        <div className="office">
          <h4>Registered Office</h4>
          <p>No 10, 8th Main, 12th Cross, Vinayaka Nagar B Block, Bangalore - 560017</p>
        </div>
        <div className="office">
          <h4>Headquarters</h4>
          <p>No 32, Global Incubation Services, CA Site, No 1, HAL 3rd Stage EXTN, Bengaluru - 560008</p>
        </div>
        <div className="office">
          <h4>Goa Office</h4>
          <p>No. 66, Phase IV, Verna Industrial Estate, Verna, Goa - 403722</p>
        </div>
        <div className="office">
          <h4>Nairobi Office</h4>
          <p>Westpark Towers, Muthithi Road, Nairobi, P.O. Box: 6950 Postal Code - 00100</p>
        </div>
      </div>

      {/* Contact & Social Icons - Now Above the Underline */}
      <div className="footer-info">
        <div className="contact-us">
          <h4>Contact Us</h4>
          <p>📞 +91 9141001434</p>
          <p>📧 support@travelunbounded.com</p>
        </div>

        <div className="follow-us">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin"><FaLinkedin /></a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="whatsapp"><FaWhatsapp /></a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="pinterest"><FaPinterestP /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter"><FaXTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="youtube"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* ✅ Underline Now Below Contact & Follow Us */}
      <hr className="footer-line" />

      {/* Footer Links */}
      <div className="footer-links">
        <p>© 2025 Big Cats Week. All rights reserved.</p>
        <a href="/privacy-policy">Privacy Policy</a> | 
        <a href="/terms"> Terms & Conditions</a> | 
        <a href="/refund-policy"> Cancellation & Refund Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
