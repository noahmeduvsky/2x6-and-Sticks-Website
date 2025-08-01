import './App.css';
import Contact from './components/Contact';
import SeeOurWork from './components/SeeOurWork';
import OurStory from './components/OurStory';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <div style={{ marginTop: '70px' }}>
                  <div className="landing-page">
                    <div className="logo-container">
                      <img src="/Logo.png" alt="Modern FrameCraft Logo" />
                    </div>
                    <section className="hero">
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
                    </section>
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div>
                <Header />
                <div style={{ marginTop: '70px' }}>
                  <Contact />
                </div>
              </div>
            }
          />
          <Route
            path="/work"
            element={
              <div>
                <Header />
                <div style={{ marginTop: '70px' }}>
                  <SeeOurWork />
                </div>
              </div>
            }
          />
          <Route
            path="/our-story"
            element={
              <div>
                <Header />
                <div style={{ marginTop: '70px' }}>
                  <OurStory />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
