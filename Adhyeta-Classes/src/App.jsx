import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Class from "./pages/Class";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 MAGIC LINE */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class" element={<Class />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
