const dotenv = require("dotenv");

dotenv.config();

const {
  PORT, 
  API_URL,
} = process.env;

const loggerBook = (request, response, next) => {
    console.log(`Адрес данной книги: ${API_URL}:${PORT}/books/${book_id}`);

    next();
}

module.exports = loggerBook;