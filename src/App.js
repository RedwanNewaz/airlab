import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Research from "./pages/Research";
import Publication from "./pages/Publication";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import News from "./pages/News";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
