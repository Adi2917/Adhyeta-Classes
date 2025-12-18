import React from "react";
import "./ClassHero.css";
import classImg from "../../assets/classroom.jpg";

const ClassHero = () => {
  return (
    <section className="class-hero">
      <img src={classImg} alt="Classroom" className="hero-img" />

      <div className="hero-overlay">
        <h1>Our Classes</h1>
        <p>
          Quality education for Classes 6 to 10 with experienced teachers,
          personal attention and smart learning environment.
        </p>

        <div className="class-buttons">
          <button>Class 6 – 10</button>
        </div>
      </div>
    </section>
  );
};

export default ClassHero;
