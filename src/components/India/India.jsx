import "./India.css";

export default function India() {
  return (
    <section className="india-section">
      <div className="india-container">

        {/* Heading */}
        <div className="india-heading">
          <span className="india-top">INDIA’S FIRST</span>

          <h2 className="india-main">
            EdTech Platform <span>That Provides</span>
          </h2>

          <h3 className="india-sub">
            Smart Learning • Flexible Payments • Complete Subjects • Personal Guidance
          </h3>

          <p>
            A next-generation education ecosystem built specially for school students,
            delivering quality teaching, flexible learning models and student-focused
            mentorship — all under one trusted platform.
          </p>
        </div>

        {/* Plus Layout */}
        <div className="india-plus">

          <div className="india-box">
            <h3>3 Days Demo Classes</h3>
            <p>
              Attend live demo classes before enrollment to understand our
              teaching quality, methodology and interaction style with full clarity.
            </p>
          </div>

          <div className="india-box">
            <h3>Payment Flexibility</h3>
            <p>
              Choose fee plans that suit you best — Monthly, Quarterly,
              Half-Yearly or Annually. No financial pressure on parents.
            </p>
          </div>

          <div className="india-box">
            <h3>All Important Subjects Covered</h3>
            <p>
              Complete coverage of core subjects with structured syllabus,
              regular practice, tests and revision for strong fundamentals.
            </p>
          </div>

          <div className="india-box">
            <h3>Student-Centered Learning</h3>
            <p>
              Small batches, individual attention, doubt-clearing sessions
              and continuous progress tracking for every student.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
