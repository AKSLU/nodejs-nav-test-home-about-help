import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Help from "./components/Help";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/" style={{ marginRight: 15 }}>Home</Link>
        <Link to="/about" style={{ marginRight: 15 }}>About</Link>
        <Link to="/help">Help</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}
