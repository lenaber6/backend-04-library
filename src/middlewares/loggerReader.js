const dotenv = require("dotenv");

dotenv.config();

const {
  PORT, 
  API_URL,
} = process.env;

const loggerReader = (request, response, next) => {
    console.log(`Адрес данного читателя: ${API_URL}:${PORT}/readers/${reader_id}`);
    next();
}

module.exports = loggerReader;