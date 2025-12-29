import "./ContactOption.css";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function ContactOption() {
  return (
    <section className="contact-option">
      <div className="contact-option-container">
        <h2>You Can Contact Us Through</h2>
        <p>
          Choose the most convenient way to connect with us. Our team is always
          ready to assist you with your queries and guidance.
        </p>

        <div className="option-grid">
          {/* CALL */}
          <a href="#" className="option-card call">
            <FaPhoneAlt className="icon" />
            <h4>Call Us Now</h4>
            <span>9297753276 <br /> Quick Support & Guidance</span>
          </a>

          {/* WHATSAPP */}
          <a href="https://wa.me/qr/GKE45JDSL5JNC1" className="option-card whatsapp">
            <FaWhatsapp className="icon" />
            <h4>WhatsApp</h4>
            <span>Chat With Our Team</span>
          </a>

          {/* INSTAGRAM */}
          <a href="https://www.instagram.com/adhyeta_classes?igsh=MTNmdHdyM2o1ZmllZg==" className="option-card instagram">
            <FaInstagram className="icon" />
            <h4>Instagram</h4>
            <span>Follow & Message Us</span>
          </a>

          {/* FACEBOOK */}
          <a href="https://www.facebook.com/profile.php?id=61585383008364" className="option-card facebook">
            <FaFacebookF className="icon" />
            <h4>Facebook</h4>
            <span>Stay Connected</span>
          </a>
        </div>
      </div>
    </section>
  );
}
