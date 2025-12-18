import { useEffect, useState } from "react";
import { FaUsers, FaUserGraduate, FaChalkboardTeacher, FaStar } from "react-icons/fa";
import "./User.css";

function Counter({ end, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <h3>{count}+</h3>;
}

export default function User() {
  return (
    <section className="user-section">
      <div className="user-container">

        <div className="user-card">
          <FaUserGraduate className="icon" />
          <Counter end={1200} duration={2000} />
          <p>Happy Students</p>
        </div>

        <div className="user-card highlight">
          <FaUsers className="icon" />
          <Counter end={850} duration={2000} />
          <p>Active Learners</p>
        </div>

        <div className="user-card">
          <FaChalkboardTeacher className="icon" />
          <Counter end={25} duration={1500} />
          <p>Expert Teachers</p>
        </div>

        <div className="user-card">
          <FaStar className="icon" />
          <Counter end={98} duration={1800} />
          <p>Success Rate (%)</p>
        </div>

      </div>
    </section>
  );
}
