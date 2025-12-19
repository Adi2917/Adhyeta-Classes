import React from "react";
import "./Extra.css";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function Extra() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      alert("Thanks for submit 😊\nPlease wait for call and message");
      window.location.reload(); // 🔥 clean reset
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="extra-section">
      <div className="extra-container">

        {/* LEFT SIDE */}
        <div className="extra-info">
          <h2>Extra Curriculum Programs</h2>
          <p>
            Different types of professional program for Class 11th, <br />
            Class 12th aur Competitive exams.
          </p>

          <div className="program-list">
            <div className="program-card">
              <IoChevronForwardOutline /> Class 11th Program
            </div>
            <div className="program-card">
              <IoChevronForwardOutline /> Class 12th Program
            </div>
            <div className="program-card">
              <IoChevronForwardOutline /> Competitive Preparation
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="extra-form">
          <h3>For this you can fill the form</h3>

          <form
            action="https://formspree.io/f/xykggqbz"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* ✅ PERFECT MOBILE VALIDATION */}
            <div className="form-group">
              <label>Mobile Number *</label>
              <input
                type="text"
                name="mobile"
                placeholder="10 digit mobile number"
                required
                maxLength="10"
                inputMode="numeric"
                pattern="[0-9]{10}"
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, "");
                }}
                title="Enter valid 10 digit mobile number"
              />
            </div>

            <div className="form-group">
              <label>Select Program *</label>
              <select name="program" required>
                <option value="">-- Select --</option>
                <option value="Class 11th">Class 11th</option>
                <option value="Class 12th">Class 12th</option>
                <option value="Competition">Competition</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">
              Submit <IoChevronForwardOutline />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
