const dotenv = require('dotenv')
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 5000,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
};
