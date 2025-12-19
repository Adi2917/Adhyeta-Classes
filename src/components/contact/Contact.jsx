import "./Contact.css";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/mldqqyre", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    alert(
      "Thanks for contacting Adhyeta Classes 😊\nPlease wait for call and message."
    );

    window.location.reload();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Left Content */}
        <div className="contact-left">
          <h2>
            Contact <span>Adhyeta Classes</span>
          </h2>

          <p>
            Admissions are now open for <b>Class 6 to 10</b>.  
            Get expert online coaching with concept-based learning
            and personalized guidance.
          </p>

          <ul>
            <li>✔ Trusted Online Coaching</li>
            <li>✔ Classes 6 to 10 (CBSE / ICSE)</li>
            <li>✔ Experienced Faculty</li>
            <li>✔ Doubt Solving & Mentorship</li>
          </ul>

          {/* 🔥 Admission CTA */}
          <div className="admission-box">
            <h3>For Admission</h3>
            <button onClick={() => navigate("/admission")}>
              Click Here
            </button>
          </div>
        </div>

        {/* Right Form */}
        <div className="contact-right">
          <form onSubmit={handleSubmit} className="contact-form">
            <h3>Ask Your Queries</h3>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />

            {/* ✅ PERFECT MOBILE VALIDATION */}
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              required
              maxLength="10"
              inputMode="numeric"
              pattern="[0-9]{10}"
              onChange={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
              }}
              title="Enter valid 10 digit mobile number"
            />

            <input
              type="text"
              name="address"
              placeholder="Valid Address"
              required
            />

            <textarea
              name="message"
              placeholder="Ask your queries..."
              rows="4"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    </section>
  );
}
