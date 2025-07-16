import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SeeOurWork.css";
import photo1 from "../assets/work/photo1.jpeg";
import photo2 from "../assets/work/photo2.jpeg";
import photo3 from "../assets/work/photo3.jpeg";
import photo4 from "../assets/work/photo4.jpeg";
import photo5 from "../assets/work/photo5.jpeg";
import photo6 from "../assets/work/photo6.jpeg";
import homeIcon from "../assets/home-button.jpg";

const projects = [
  { image: photo1 },
  { image: photo2 },
  { image: photo3 },
  { image: photo4 },
  { image: photo5 },
  { image: photo6 },
];

const SeeOurWork: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="work-page">
      {/* Home button */}
      <Link to="/" className="home-button">
        <img src={homeIcon} alt="Home" />
      </Link>

      <h1>See Our Work</h1>
      <p>Explore some of our recent, but not limited to projects and carpentry craftsmanship.</p>

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

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Enlarged view" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default SeeOurWork;
