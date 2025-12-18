import React from "react";
import "./AdmissionHero.css";
import { IoArrowDownOutline } from "react-icons/io5";

export default function AdmissionHero() {
  const scrollToForm = () => {
    const el = document.getElementById("admission-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="admission-hero">
      <div className="hero-content">
        <h1>
          Admissions Open for <span>Class 6 to 10</span>
        </h1>

        <p className="hero-main">
          Strong foundation, concept clarity and regular practice for
          <strong> Class 6th to Class 10th</strong> students.
        </p>

        <p className="hero-extra">
          Extra classes also available for{" "}
          <strong>Class 11th</strong>,{" "}
          <strong>Class 12th</strong> and{" "}
          <strong>Competitive Exams</strong>.
          <br />
          Learn from experienced teachers with proper guidance and support.
        </p>

        <div className="hero-scroll" onClick={scrollToForm}>
          For admission, you can fill the form below
          <IoArrowDownOutline />
        </div>
      </div>
    </section>
  );
}
