import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./Navbar.css";
import logoImg from "../../assets/logo.jpeg"; // apna logo yahan rakho

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* ===== Logo ===== */}
        <div className="logo">
          <div className="logo-circle">
            <img src={logoImg} alt="Adhyeta Classes Logo" />
          </div>
          <span className="logo-text">
            Adhyeta <span>Classes</span>
          </span>
        </div>

        {/* ===== Desktop Menu ===== */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/class">Class</Link></li>
          <li><Link to="/admission">Admission</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* ===== Call & WhatsApp ===== */}
        <div className="nav-contact">
          <a href="tel:7485875137" className="call-btn">
            <FaPhoneAlt />
            <span>7485875137</span>
          </a>

          <a
            href="https://wa.me/917485875137"
            target="_blank"
            rel="noreferrer"
            className="wp-btn"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* ===== Hamburger ===== */}
        <div
          className={menuOpen ? "hamburger active" : "hamburger"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      <div className={menuOpen ? "mobile-menu show" : "mobile-menu"}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/class" onClick={() => setMenuOpen(false)}>Class</Link>
        <Link to="/admission" onClick={() => setMenuOpen(false)}>Admission</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

        <div className="mobile-contact">
          <a href="tel:7485875137">
            <FaPhoneAlt /> 7485875137
          </a>
          <a
            href="https://wa.me/917485875137"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
