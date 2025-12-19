import "./ContactHero.css";

export default function ContactHero({ children }) {
  return (
    <section className="contact-hero">
      <div className="contact-overlay"></div>

      <div className="contact-inner">
        {/* LEFT CONTENT */}
        <div className="contact-text">
          <h1>Get In Touch With Us</h1>

          <p className="main-text">
            We believe every student deserves the right guidance at the right time.
            Our team is always ready to support students and parents with the
            correct academic direction.
          </p>

          <p className="sub-text">
            You can fill the below form for any queries related to admission,
            courses, batches or guidance. Our team will connect with you shortly.
          </p>
        </div>

        
      </div>
    </section>
  );
}
