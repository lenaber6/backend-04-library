const dotenv = require("dotenv");

dotenv.config();

const {
  PORT, 
  API_URL,
} = process.env;

const loggerBook = (request, response, next) => {
  const{book_id} = request.params;
  // book.findById(book_id);

    console.log(`Адрес данной книги: ${API_URL}:${PORT}/books/${book_id}`);

    next();
}

module.exports = loggerBook;