import React from 'react';
import '../App.css'; // using landing-page, hero, etc.

const OurStory: React.FC = () => {
  return (
    <div className="landing-page">
      <section className="hero">
        <h1>Our Story</h1>
        <p className="company-philosophy">
          At Modern FrameCraft, we don't just build structures—we build trust. 
          Our journey began with a simple belief: that quality craftsmanship and 
          honest communication should be the foundation of every project.
        </p>
        <p>
          With over 10 years of combined experience, our energetic team of Xavier 
          and Noah has grown from small-scale projects to becoming the area's trusted 
          partner for construction and interior/exterior services. We've learned that 
          the best projects come from partnerships built on mutual respect and clear communication.
        </p>
        <p>
          Every nail we drive, every board we cut, and every finish we apply reflects 
          our commitment to excellence. We show up ready to work, communicate clearly 
          throughout the process, and treat your property with the same care we'd give 
          our own homes.
        </p>
        <p>
          From rough framing to custom deck builds, from roofing to basement finishing, 
          we take pride in delivering fast, detailed, and reliable craftsmanship—on time 
          and within budget. Our mission is to turn your home improvement ideas into 
          lasting structures that you can be proud of for years to come.
        </p>
        <p className="contact-info">
          <strong>Ready to start your project?</strong><br />
          Call us today: (248) 977-6310 or (810) 751-0852
        </p>
      </section>
    </div>
  );
};

export default OurStory;
