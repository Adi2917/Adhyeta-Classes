import React from "react";
import "./Subject.css";
import {
  FaCalculator,
  FaFlask,
  FaGlobeAsia,
  FaBookOpen,
  FaLanguage,
  FaLaptopCode,
} from "react-icons/fa";

export default function Subject() {
  const subjects = [
    {
      name: "Mathematics",
      icon: <FaCalculator />,
      desc: "Concept-based learning with regular practice to build strong problem-solving skills.",
    },
    {
      name: "Science",
      icon: <FaFlask />,
      desc: "Clear explanation of Physics, Chemistry and Biology with practical examples.",
    },
    {
      name: "Social Science",
      icon: <FaGlobeAsia />,
      desc: "Easy understanding of History, Geography, Civics and Economics.",
    },
    {
      name: "Hindi",
      icon: <FaBookOpen />,
      desc: "Grammar, literature and writing skills to improve language confidence.",
    },
    {
      name: "English",
      icon: <FaLanguage />,
      desc: "Focus on reading, writing, grammar and spoken English development.",
    },
    
  ];

  return (
    <section className="subject-section">
      <h2>
        Our <span>Subjects</span>
      </h2>
      <p className="subject-subtitle">
        We provide complete syllabus coverage for <strong>Class 6 to 10</strong>{" "}
        with a structured and result-oriented teaching approach.
      </p>

      <div className="subject-grid">
        {subjects.map((sub, index) => (
          <div className="subject-card" key={index}>
            <div className="subject-icon">{sub.icon}</div>
            <h3>{sub.name}</h3>
            <p>{sub.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
