import './App.css';
import logo from '/Logo.png';
import Contact from './components/Contact';
import SeeOurWork from './components/SeeOurWork';
import OurStory from './components/OurStory'; // new import
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="landing-page">
              <div className="logo-container">
                <img src={logo} alt="Modern FrameCraft Logo" />
              </div>
              <section className="hero">
                <h1>MODERN FRAMECRAFT</h1>
                <h2 className="tagline">Your Project. Built to Last.</h2>
                <p className="company-philosophy">
                  At Modern FrameCraft, we don't just build structures—we build trust. 
                  When you hire us, you're getting a reliable partner who shows up ready to work, 
                  communicates clearly, and treats your property with respect.
                </p>
                <p className="services-intro">
                  Looking to bring your home improvement ideas to life? Modern FrameCraft is the area's 
                  trusted partner for construction and interior/exterior services. With over 10 years of 
                  combined experience, our energetic team delivers fast, detailed, and reliable craftsmanship 
                  — on time and within budget.
                </p>
                <p className="contact-info">
                  <strong>Contact Us:</strong><br />
                  (248) 977-6310<br />
                  (810) 751-0852
                </p>
                <div className="cta-buttons">
                  <Link to="/contact">Get Free Estimate</Link>
                  <Link to="/work">See Our Work!</Link>
                  <Link to="/our-story">Our Story</Link>
                </div>
              </section>
            </div>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<SeeOurWork />} />
        <Route path="/our-story" element={<OurStory />} /> {/* new route */}
      </Routes>
    </Router>
  );
}

export default App;

