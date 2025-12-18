import { useState } from "react";
import "./Hero.css";
import heroImg from "../../assets/study.jpg";

export default function Hero() {
  const [openForm, setOpenForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/mrbnndgp", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    alert("Form successfully submitted ✅\nPlease wait for call and message.");

    window.location.reload(); // 🔥 page refresh after alert
  };

  return (
    <>
      <section className="hero">
        <div className="hero-container">
          {/* Left */}
          <div className="hero-text">
            <h1>
              Empowering Your <span>Success</span>
            </h1>

            <p>
              Online Coaching for <br />
              <span>(Class 6 to 10)</span>
            </p>

            <button onClick={() => setOpenForm(true)}>Join Now</button>
          </div>

          {/* Right */}
          <div className="hero-image">
            <img src={heroImg} alt="Student Studying" />
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {openForm && (
        <div className="modal">
          <div className="overlay" onClick={() => setOpenForm(false)}></div>

          <div className="form-wrapper">
            <button className="close" onClick={() => setOpenForm(false)}>
              ✕
            </button>

            <h2>Student Registration</h2>

            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Full Name" required />
              <input
                type="text"
                name="father"
                placeholder="Father's Name"
                required
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />

              <select name="class" required>
                <option value="">Select Class</option>
                <option>Class 6</option>
                <option>Class 7</option>
                <option>Class 8</option>
                <option>Class 9</option>
                <option>Class 10</option>
              </select>

              <textarea
                name="address"
                placeholder="Address"
                required
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
