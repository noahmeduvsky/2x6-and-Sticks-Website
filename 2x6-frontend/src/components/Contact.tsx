import React, { useState } from "react";
import "./Contact.css";
import homeIcon from "../assets/home-button.jpg";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    services: {
      roughCarpentry: false,
      roofing: false,
      siding: false,
      deckConstruction: false,
      basementFinishing: false,
      other: false
    }
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        services: {
          ...prev.services,
          [name]: checked
        }
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          services: {
            roughCarpentry: false,
            roofing: false,
            siding: false,
            deckConstruction: false,
            basementFinishing: false,
            other: false
          }
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="contact-container">
      <Link to="/" className="home-icon-link">
        <img src={homeIcon} alt="Home" className="home-icon" />
      </Link>

      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Brief Description"
          required
        />

        <label className="service-label">What services are you interested in?</label>
        <label>
          <input
            type="checkbox"
            name="roughCarpentry"
            checked={formData.services.roughCarpentry}
            onChange={handleChange}
          />
          Rough Carpentry
        </label>
        <label>
          <input
            type="checkbox"
            name="roofing"
            checked={formData.services.roofing}
            onChange={handleChange}
          />
          Roofing
        </label>
        <label>
          <input
            type="checkbox"
            name="siding"
            checked={formData.services.siding}
            onChange={handleChange}
          />
          Siding
        </label>
        <label>
          <input
            type="checkbox"
            name="deckConstruction"
            checked={formData.services.deckConstruction}
            onChange={handleChange}
          />
          Deck Construction
        </label>
        <label>
          <input
            type="checkbox"
            name="basementFinishing"
            checked={formData.services.basementFinishing}
            onChange={handleChange}
          />
          Finishing a Basement
        </label>
        <label>
          <input
            type="checkbox"
            name="other"
            checked={formData.services.other}
            onChange={handleChange}
          />
          Other
        </label>

        <button type="submit">Send Message</button>
        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );
}

export default Contact;
