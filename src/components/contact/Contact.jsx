import "./Contact.css";

export default function Contact() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/mldqqyre", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    alert(
      "Thanks for contacting Adhyeta Classes 😊\nPlease wait for call and message."
    );

    window.location.reload(); // 🔥 refresh after alert
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
            Have any questions regarding admission, classes or courses?
            We’re here to help you. Just fill out the form and our team will
            contact you shortly.
          </p>

          <ul>
            <li>✔ Trusted Online Coaching</li>
            <li>✔ Classes 1 to 6 (Concept Based Learning)</li>
            <li>✔ Experienced & Dedicated Faculty</li>
            <li>✔ Personalized Guidance</li>
          </ul>
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

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              pattern="[0-9]{10}"
              maxLength="10"
              required
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
