import "./Who.css";

export default function Who() {
  return (
    <section className="who-section" id="who">
      <div className="who-container">

        {/* Top Content */}
        <div className="who-content">
          <h2>
            Who <span>We Are</span>
          </h2>

          <p>
            Adhyeta Classes is a dedicated online learning platform focused on
            building strong academic foundations for students from Class 1 to 6.
          </p>

          <p>
            We believe in concept clarity, disciplined learning, and personalized
            guidance to help students grow with confidence, curiosity, and
            consistency.
          </p>

          <ul>
            <li>Experienced & dedicated educators</li>
            <li>Student-centric teaching approach</li>
            <li>Structured curriculum & regular assessment</li>
          </ul>
        </div>

        {/* Cards Section */}
        <div className="who-cards">

          <div className="who-card">
            <h3>Founded By</h3>
            <p className="highlight">
              Miss. Pallavi • Mr. Aditya • Mr. Rishu
            </p>
            <p>
              A team of passionate educators committed to delivering quality
              education with clarity, discipline, and a result-oriented approach.
            </p>
          </div>

          <div className="who-card primary">
            <h3>Our Mission</h3>
            <p>
              To provide high-quality online education that strengthens
              fundamental concepts and nurtures academic excellence from an
              early stage.
            </p>
          </div>

          <div className="who-card">
            <h3>Our Vision</h3>
            <p>
              To become a trusted online learning platform that empowers young
              learners with knowledge, confidence, and lifelong learning skills.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
