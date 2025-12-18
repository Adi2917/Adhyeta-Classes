import { FaChalkboardTeacher, FaUserGraduate, FaClipboardCheck, FaClock, FaLaptop } from "react-icons/fa";
import "./Why.css";

export default function Why() {
  return (
    <section className="why-section" id="why">
      <div className="why-container">

        {/* Heading */}
        <div className="why-heading">
          <h2>
            Why <span>Choose Us</span>
          </h2>
          <p>
            We focus on quality teaching, strong fundamentals, and personalized
            learning to ensure every student grows with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="why-cards">

          <div className="why-card">
            <FaChalkboardTeacher className="icon" />
            <h3>Expert Educators</h3>
            <p>
              Learn from experienced and dedicated teachers who simplify
              concepts and guide students with care.
            </p>
          </div>

          <div className="why-card">
            <FaUserGraduate className="icon" />
            <h3>Strong Foundation</h3>
            <p>
              We focus on building clear concepts from an early stage for long-
              term academic success.
            </p>
          </div>

          <div className="why-card primary">
            <FaLaptop className="icon" />
            <h3>Smart Online Learning</h3>
            <p>
              Interactive online classes designed to keep students engaged and
              motivated.
            </p>
          </div>

          <div className="why-card">
            <FaClipboardCheck className="icon" />
            <h3>Regular Assessment</h3>
            <p>
              Continuous evaluation through tests and feedback to track student
              progress.
            </p>
          </div>

          <div className="why-card">
            <FaClock className="icon" />
            <h3>Flexible Schedule</h3>
            <p>
              Well-planned class timings that suit students and parents
              convenience.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
