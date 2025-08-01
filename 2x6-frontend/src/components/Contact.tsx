import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const location = useLocation();
  const selectedService = location.state?.selectedService;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    services: {
      roughFraming: false,
      roofing: false,
      customDeckBuilds: false,
      deckRepair: false,
      basementFinishing: false,
      siding: false,
      pergolasPavilions: false,
      stormDamageRepair: false,
      gutterCleaningRepair: false,
      barnsSheds: false,
      other: false
    }
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-select service if one was chosen from the services page
  useEffect(() => {
    if (selectedService) {
      const serviceKey = selectedService.toLowerCase().replace(/\s+/g, '').replace(/&/g, '');
      const serviceMap: { [key: string]: string } = {
        'roughframing': 'roughFraming',
        'roofing': 'roofing',
        'customdeckbuilds': 'customDeckBuilds',
        'deckrepair': 'deckRepair',
        'basementfinishing': 'basementFinishing',
        'siding': 'siding',
        'pergolaspavilions': 'pergolasPavilions',
        'stormdamagerepair': 'stormDamageRepair',
        'guttercleaningrepair': 'gutterCleaningRepair',
        'barnsandsheds': 'barnsSheds'
      };

      const serviceKeyToCheck = serviceMap[serviceKey];
      if (serviceKeyToCheck && formData.services.hasOwnProperty(serviceKeyToCheck)) {
        setFormData(prev => ({
          ...prev,
          services: {
            ...prev.services,
            [serviceKeyToCheck]: true
          }
        }));
      }
    }
  }, [selectedService]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsSubmitting(true);

    // Get selected services as a string
    const selectedServices = Object.entries(formData.services)
      .filter(([_, checked]) => checked)
      .map(([key]) => key.replace(/([A-Z])/g, ' $1'))
      .map(s => s.charAt(0).toUpperCase() + s.slice(1))
      .join(', ');

    // Create form data for Netlify
    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);
    formDataObj.append('services', selectedServices || 'None selected');

    // Submit the form
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataObj as any).toString()
    })
    .then(() => {
      setStatus("Message sent successfully!");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        services: {
          roughFraming: false,
          roofing: false,
          customDeckBuilds: false,
          deckRepair: false,
          basementFinishing: false,
          siding: false,
          pergolasPavilions: false,
          stormDamageRepair: false,
          gutterCleaningRepair: false,
          barnsSheds: false,
          other: false
        }
      });
      form.reset();
    })
    .catch(() => {
      setStatus("Error sending message.");
      setIsSubmitting(false);
    });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      
      {selectedService && (
        <div className="selected-service-notice">
          <p>You're requesting a quote for: <strong>{selectedService}</strong></p>
        </div>
      )}

      <form 
        name="contact" 
        method="POST" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit} 
        className="contact-form"
      >
        {/* Netlify form detection */}
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          disabled={isSubmitting}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          disabled={isSubmitting}
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          disabled={isSubmitting}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Brief Description"
          required
          disabled={isSubmitting}
        />

        <label className="service-label">What services are you interested in?</label>
        <div className="services-checkboxes">
          <label>
            <input
              type="checkbox"
              name="roughFraming"
              checked={formData.services.roughFraming}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            Rough Framing
          </label>
          <label>
            <input
              type="checkbox"
              name="roofing"
              checked={formData.services.roofing}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            Roofing
          </label>
          <label>
            <input
              type="checkbox"
              name="customDeckBuilds"
              checked={formData.services.customDeckBuilds}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            Custom Deck Builds
          </label>
          <label>
            <input
              type="checkbox"
              name="deckRepair"
              checked={formData.services.deckRepair}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            Deck Repair
          </label>
          <label>
            <input
              type="checkbox"
              name="basementFinishing"
              checked={formData.services.basementFinishing}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            Basement Finishing
          </label>
          <label>
            <input
              type="checkbox"
              name="siding"
              checked={formData.services.siding}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            Siding
          </label>
          <label>
            <input
              type="checkbox"
              name="pergolasPavilions"
              checked={formData.services.pergolasPavilions}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            Pergolas & Pavilions
          </label>
          <label>
            <input
              type="checkbox"
              name="stormDamageRepair"
              checked={formData.services.stormDamageRepair}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            Storm Damage Repair
          </label>
          <label>
            <input
              type="checkbox"
              name="gutterCleaningRepair"
              checked={formData.services.gutterCleaningRepair}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            Gutter Cleaning and Repair
          </label>
          <label>
            <input
              type="checkbox"
              name="barnsSheds"
              checked={formData.services.barnsSheds}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            Barns and Sheds
          </label>
          <label>
            <input
              type="checkbox"
              name="other"
              checked={formData.services.other}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            Other
          </label>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );
}

export default Contact;

