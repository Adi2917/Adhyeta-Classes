import React from "react";
import "./Facility.css";
import {
  FaClipboardCheck,
  FaQuestionCircle,
  FaBookReader,
  FaUserFriends,
  FaCalendarAlt,
  FaChartLine
} from "react-icons/fa";
import facilityImg from "../../assets/facility.webp";

const Facility = () => {
  return (
    <section className="facility">
      <h2 className="facility-title">Our Facilities</h2>
      <p className="facility-subtitle">
        Adhyeta Classes provides a structured, supportive and result-oriented
        learning environment for students of Class 1 to 6.
      </p>

      {/* TOP SECTION */}
      <div className="facility-top">
        {/* Image */}
        <div className="facility-image">
          <img src={facilityImg} alt="Adhyeta Classes Facilities" />
        </div>

        {/* Right 2 Facilities */}
        <div className="facility-side">
          <div className="facility-card">
            <FaClipboardCheck className="facility-icon" />
            <h4>Weekly Tests</h4>
            <p>
              Weekly assessments to monitor understanding and improve academic
              performance.
            </p>
          </div>

          <div className="facility-card">
            <FaQuestionCircle className="facility-icon" />
            <h4>Doubt Solving Classes</h4>
            <p>
              Special doubt-clearing sessions so that no concept remains unclear.
            </p>
          </div>
        </div>
      </div>

      {/* MIDDLE FULL WIDTH */}
      <div className="facility-row">
        <div className="facility-card wide">
          <FaBookReader className="facility-icon" />
          <h4>Daily Practice & Homework Support</h4>
          <p>
            Daily practice questions and homework guidance to strengthen learning
            and boost confidence.
          </p>
        </div>

        <div className="facility-card wide">
          <FaUserFriends className="facility-icon" />
          <h4>Small Batch Size</h4>
          <p>
            Limited students per batch ensuring personal attention and better
            teacher-student interaction.
          </p>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="facility-row">
        <div className="facility-card">
          <FaCalendarAlt className="facility-icon" />
          <h4>Regular Parent Interaction</h4>
          <p>
            Parents are regularly informed about student performance and
            improvement areas.
          </p>
        </div>

        <div className="facility-card">
          <FaChartLine className="facility-icon" />
          <h4>Progress Monitoring</h4>
          <p>
            Continuous tracking of student growth to ensure steady improvement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facility;
