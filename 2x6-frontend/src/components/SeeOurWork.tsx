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
  {
    name: "Rough Framing",
    description: "Professional structural framing for new construction and additions. We handle walls, floors, ceilings, and roof trusses with precision and code compliance."
  },
  {
    name: "Roofing",
    description: "Complete roofing solutions including shingle replacement, metal roofing, and emergency repairs. We work with all major roofing materials and provide warranty coverage."
  },
  {
    name: "Custom Deck Builds",
    description: "Custom deck design and construction using premium materials like Trex, composite, and pressure-treated lumber. We handle permits, design, and complete installation."
  },
  {
    name: "Deck Repair",
    description: "Expert deck repair and maintenance services. We fix loose boards, replace damaged sections, and restore structural integrity to extend your deck's lifespan."
  },
  {
    name: "Basement Finishing",
    description: "Complete basement finishing including framing, drywall, electrical rough-in, and finishing touches. We transform unfinished basements into livable spaces."
  },
  {
    name: "Siding",
    description: "Professional siding installation and repair for vinyl, fiber cement, and wood siding. We ensure proper weatherproofing and aesthetic appeal."
  },
  {
    name: "Pergolas & Pavilions",
    description: "Custom outdoor structures including pergolas, pavilions, and gazebos. We design and build beautiful outdoor living spaces that enhance your property."
  },
  {
    name: "Storm Damage Repair",
    description: "Emergency storm damage repair and restoration services. We respond quickly to assess damage and provide immediate repairs to protect your property."
  },
  {
    name: "Gutter Cleaning and Repair",
    description: "Comprehensive gutter services including cleaning, repair, replacement, and installation of gutter guards. We ensure proper drainage and prevent water damage."
  },
  {
    name: "Barns and Sheds",
    description: "Custom barn and shed construction for storage, workshops, and agricultural needs. We build durable structures that meet your specific requirements."
  }
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
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  const toggleServiceExpansion = (serviceName: string) => {
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(serviceName)) {
      newExpanded.delete(serviceName);
    } else {
      newExpanded.add(serviceName);
    }
    setExpandedServices(newExpanded);
  };

  return (
    <div className="work-page">
      <div className="work-container">
        {/* Left Section - Company Overview */}
        <div className="work-left-section">
          <h1>PROPERTY MANAGEMENT</h1>
          <p>
            Maintaining your commercial office or building, our property management team ensures 
            a space you never have to worry about. From rough framing to custom deck builds, 
            we deliver professional carpentry services with quality craftsmanship and honest communication.
          </p>
          <div className="cta-buttons">
            <button 
              className="cta-button"
              onClick={() => navigate('/contact', { state: { selectedService: 'General Quote' } })}
            >
              Submit Maintenance Request
            </button>
            <button 
              className="cta-button"
              onClick={() => navigate('/contact', { state: { selectedService: 'Service Inquiry' } })}
            >
              Inquire About Our Services
            </button>
            <button 
              className="cta-button"
              onClick={() => navigate('/our-story')}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section - Services List */}
        <div className="work-right-section">
          <h2>Our Services</h2>
          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-list-item">
                <div className="service-header">
                  <span className="service-name">{service.name}</span>
                  <button 
                    className="expand-button"
                    onClick={() => toggleServiceExpansion(service.name)}
                    aria-label={expandedServices.has(service.name) ? "Collapse" : "Expand"}
                  >
                    {expandedServices.has(service.name) ? "−" : "+"}
                  </button>
                </div>
                {expandedServices.has(service.name) && (
                  <div className="service-description">
                    {service.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

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
