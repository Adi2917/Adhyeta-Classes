import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
import logoImg from '../../assets/logo.jpeg'// 👈 apna logo yahan rakho

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">

          {/* ===== Brand ===== */}
          <div className="footer-brand">
            <div className="brand-header">
              <div className="logo-box">
                <img src={logoImg} alt="Adhyeta Classes Logo" />
              </div>
              <h2>
                Adhyeta <span>Classes</span>
              </h2>
            </div>

            <p className="brand-desc">
              Trusted coaching institute delivering quality education with
              discipline, clarity and result-oriented teaching.
            </p>

            <div className="socials">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Whatsapp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* ===== Links ===== */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/class">Classes</Link></li>
              <li><Link to="/admission">Admission</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* ===== Contact ===== */}
          <div className="footer-section">
            <h3>Contact</h3>
            <p><FaMapMarkerAlt /> Purnia, Bihar</p>
            <p className="muted">India – 854301</p>

            <p>
              <FaPhoneAlt />
              <a href="tel:7485875137"> +91 7485875137</a>
            </p>

            <p>
              <FaEnvelope />
              <a href="mailto:adhyetaclasses1729@gmail.com">
                adhyetaclasses1729@gmail.com
              </a>
            </p>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Adhyeta Classes. All rights reserved.
      </div>
    </footer>
  );
}
