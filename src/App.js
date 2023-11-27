import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/project";
import Contact from "./components/Contact Us/contact";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/skills" element={<Skills />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer/>
       
      </Router>
      
      
    </div>
  );
}

export default App;
