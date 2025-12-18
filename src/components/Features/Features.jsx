import React from "react";
import "./Features.css";
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaUserGraduate,
  FaClipboardList,
  FaBrain,
  FaClock,
  FaSchool,
  FaHandsHelping
} from "react-icons/fa";

const Features = () => {
  return (
    <section className="features">
      <div className="features-top">
        <h2>Our Key Features</h2>
        <p>
          Adhyeta Classes is specially designed for students from Class 1 to 6,
          where learning is not only about marks but about building strong
          fundamentals, discipline and confidence for the future.
        </p>
      </div>

      <div className="features-container">

        <div className="feature-box">
          <FaChalkboardTeacher className="feature-icon" />
          <h3>Experienced & Caring Teachers</h3>
          <p>
            Our teachers are experienced, patient and child-friendly. They
            understand that every student learns differently and focus on
            explaining concepts in the simplest way possible.
          </p>
        </div>

        <div className="feature-box">
          <FaBookOpen className="feature-icon" />
          <h3>Strong Foundation Learning</h3>
          <p>
            We focus on basic concepts of Maths, English, Science and other
            subjects so that students develop a strong academic foundation from
            an early stage.
          </p>
        </div>

        <div className="feature-box">
          <FaUserGraduate className="feature-icon" />
          <h3>Personal Attention to Every Student</h3>
          <p>
            Small batch sizes ensure that each student receives individual
            attention, doubt-clearing support and motivation to improve
            continuously.
          </p>
        </div>

        <div className="feature-box">
          <FaClipboardList className="feature-icon" />
          <h3>Regular Tests & Performance Tracking</h3>
          <p>
            Weekly tests, monthly evaluations and regular feedback help parents
            track their child’s progress and identify areas that need
            improvement.
          </p>
        </div>

        <div className="feature-box">
          <FaBrain className="feature-icon" />
          <h3>Concept-Based Teaching Approach</h3>
          <p>
            Instead of rote learning, we encourage understanding, logical
            thinking and problem-solving skills so students can apply concepts
            confidently.
          </p>
        </div>

        <div className="feature-box">
          <FaClock className="feature-icon" />
          <h3>Disciplined Study Environment</h3>
          <p>
            Fixed schedules, regular homework, revision sessions and classroom
            discipline help students develop good study habits from childhood.
          </p>
        </div>

        <div className="feature-box">
          <FaSchool className="feature-icon" />
          <h3>School & Exam Oriented Preparation</h3>
          <p>
            Our teaching pattern is fully aligned with school syllabus and exam
            requirements, helping students perform better in school exams.
          </p>
        </div>

        <div className="feature-box">
          <FaHandsHelping className="feature-icon" />
          <h3>Supportive & Friendly Atmosphere</h3>
          <p>
            We maintain a positive, motivating and friendly environment where
            students feel comfortable asking questions and expressing doubts.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;
