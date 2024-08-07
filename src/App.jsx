import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
