import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus(data.error || 'Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Server error.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required />
      <button type="submit">Send</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;
