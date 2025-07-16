import './App.css';
import logo from '/Logo.png';
import Contact from './components/Contact';
import SeeOurWork from './components/SeeOurWork'; 
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
                <img src={logo} alt="Modern Framecraft and Sticks Logo" />
              </div>
              <section className="hero">
                <h1>Welcome to Modern Framecraft</h1>
                <p>
                  We’re two young carpenters dedicated to delivering precision-crafted structures
                  with the utmost professionalism. Let us help bring your ideas to life—from custom
                  decks to personalized framing projects.
                </p>
                <p>
                  Call us today at: <br />
                  (248) 977-6310 <br />
                  (810) 751-0852
                </p>
                <div className="cta-buttons">
                  <Link to="/contact">Contact Us</Link>
                  <Link to="/work" style={{ marginLeft: '1rem' }}>See Our Work!</Link>
                </div>
              </section>
            </div>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<SeeOurWork />} />
      </Routes>
    </Router>
  );
}

export default App;
