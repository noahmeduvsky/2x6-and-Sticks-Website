const pool = require('../config/db');

const createContact = async (name, email, phone, message) => {
  return pool.query(
    'INSERT INTO contact (name, email, phone, message) VALUES ($1, $2, $3, $4)',
    [name, email, phone, message]
  );
};

module.exports = {
  createContact
};
