import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Research from "./pages/Research";
import Publication from "./pages/Publication";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import News from "./pages/News";
import About from "./pages/About";
import { homeCardData  } from "./constants/data/homeData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
            {homeCardData && homeCardData.map((item,index) => {
              const path = item.title.toLowerCase().replace(/\s/g, "-"); // Converting spaces to hyphens for URL path
              return (
                <Route key={index} path={`/about/${path}`} element={<About aboutData={item}/>} />
              )
            })}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
