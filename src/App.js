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
import { researchData } from "./constants/data/researchData";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ResearchDetail from "./pages/ResearchDetail";
import Video from "./pages/Video";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Navigate to="/airlab" Home />} />
            <Route path="/airlab" element={<Home />} />
            <Route path="/airlab/team" element={<Team />} />
            <Route path="/airlab/research" element={<Research />} />
            <Route path="/airlab/publication" element={<Publication />} />
            <Route path="/airlab/news" element={<News />} />
            <Route path="/airlab/contact" element={<Contact />} />
            {homeCardData && homeCardData.map((item,index) => {
              const path = item.title.toLowerCase().replace(/\s/g, "-"); // Converting spaces to hyphens for URL path
              return (
                <Route key={index} path={`/airlab/about/${path}`} element={<About aboutData={item}/>} />
              )
            })}
            {researchData && researchData.map((item, index) => {
              const pathTitle = item.title.toLowerCase().replace(/\s/g, "-"); // Converting spaces to hyphens for URL path
              return (
                <Route key={index} path={`/airlab/research/${pathTitle}-${item.id}`} element={<ResearchDetail researchDetail={item}/>} />
              )
            })}
            (<Route path="airlab/video" element={<Video />} />)
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
