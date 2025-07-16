const express = require('express');
const router = express.Router();

// Static list of carpentry services
const services = [
  {
    id: 1,
    name: 'Custom Deck Construction',
    description: 'Design and build custom decks tailored to your home and style.'
  },
  {
    id: 2,
    name: 'Interior Framing',
    description: 'Precise framing services for walls, ceilings, and room layouts.'
  },
  {
    id: 3, 
    name: 'Roofing',
    descriptionN: 'Fast efficient roofing services; including truss and sheeting, as well as shingling.'
  },
  
];

// Route: GET /api/services
router.get('/', (req, res) => {
  res.status(200).json(services);
});

module.exports = router;
