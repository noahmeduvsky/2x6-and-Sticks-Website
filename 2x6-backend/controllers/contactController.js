const { sendContactNotification } = require('../utils/mailer');

exports.submitContactForm = async (req, res) => {
  const { name, email, phone, message, services } = req.body;

  // Format selected services into a list
  const selectedServices = Object.entries(services)
    .filter(([_, checked]) => checked)
    .map(([key]) => key.replace(/([A-Z])/g, ' $1')) // Convert camelCase to readable format
    .map(s => s.charAt(0).toUpperCase() + s.slice(1)) // Capitalize first letter
    .join(', ');

  try {
    await sendContactNotification({
      name,
      email,
      phone,
      message,
      services: selectedServices || 'None selected'
    });

    res.status(200).json({ message: 'Contact form submitted successfully.' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
