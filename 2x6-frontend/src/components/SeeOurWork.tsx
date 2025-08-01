import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SeeOurWork.css";
import photo1 from "../assets/work/photo1.jpeg";
import photo2 from "../assets/work/photo2.jpeg";
import photo3 from "../assets/work/photo3.jpeg";
import photo4 from "../assets/work/photo4.jpeg";
import photo5 from "../assets/work/photo5.jpeg";
import photo6 from "../assets/work/photo6.jpeg";

const projects = [
  { image: photo1 },
  { image: photo2 },
  { image: photo3 },
  { image: photo4 },
  { image: photo5 },
  { image: photo6 },
];

const services = [
  "Rough Framing",
  "Roofing",
  "Custom Deck Builds",
  "Deck Repair",
  "Basement Finishing",
  "Siding",
  "Pergolas & Pavilions",
  "Storm Damage Repair",
  "Gutter Cleaning and Repair",
  "Barns and Sheds"
];

const testimonials = [
  {
    name: "Athan G.",
    text: "Xavier and Noah did an excellent job with the rough framing on my basement—professional, efficient, and solid work.",
    color: "#FFD700"
  },
  {
    name: "Jordan S.",
    text: "Modern FrameCraft did a great job installing my Trex decking—the work quality was solid. Highly recommend for home improvements.",
    color: "#FF6B6B"
  },
  {
    name: "Alisha R.",
    text: "Modern FrameCraft was professional, quick, and did a fantastic job on my roof. They made the process smooth and delivered good results.",
    color: "#FFD700"
  }
];

const SeeOurWork: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleServiceClick = (service: string) => {
    // Navigate to contact form with the selected service pre-filled
    navigate('/contact', { 
      state: { selectedService: service }
    });
  };

  return (
    <div className="work-page">
      <h1>Let Us Give You a Quote on Your Next Project!</h1>
      
      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <p className="services-intro">Click on any service to get a free quote!</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-item"
              onClick={() => handleServiceClick(service)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleServiceClick(service);
                }
              }}
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Customers are Saying...</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial"
              style={{ backgroundColor: testimonial.color }}
            >
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Our Work Gallery</h2>
        <p>Explore some of our recent projects and carpentry craftsmanship.</p>

        <div className="work-gallery">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project"
              onClick={() => setLightboxImage(project.image)}
            >
              <img src={project.image} alt={`Project ${index + 1}`} />
              <p>Project {index + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Enlarged view" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default SeeOurWork;
