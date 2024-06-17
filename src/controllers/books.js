const Book = require("../models/book");
const bookSchema = require("../models/book");


const getBooks = (request, response) => {
  // Get all books
  return Book.find({})
    .then((data) => {
      if (!data) {
       return response.status(404).send("Такие книги не найдены");
      }
      response.status(200).send(data);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};


const getBook = (request, response) => {
  // Get a book by id
  const { book_id } = request.params;
  return Book.findById(book_id)
    .then((book) => {
      if (!book) {
       return response.status(404).send("Книга не найдена");
      }
      response.status(200).send(book);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};


const createBook = (request, response) => {
  // Create new book
  return Book.create({ ...request.body })
    .then((book) => {
     return response.status(201).send(book);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const updateBook = (request, response) => {
  // Update a book by id
  const { book_id } = request.params;
  const data = { ...request.body };
  return Book.findByIdAndUpdate(book_id, data, {
    new: true,
    runValidators: true,
  })
    .then((book) => {
      if (!book) {
       return response.status(404).send("Книга не найдена");
      }
      response.status(200).send(book);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};


const deleteBook = (request, response) => {
  // Delete a book by id
  const { book_id } = request.params;
  return Book.findByIdAndDelete(book_id)
    .then((book) => {
      if (!book) {
       return response.status(404).send("Книга не найдена");
      }
      response.status(200).send("Book deleted");
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};


module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
