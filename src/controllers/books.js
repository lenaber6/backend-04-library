const Book = require("../models/book");
const bookSchema = require("../models/book");


const getBooks = (request, response) => {
  // Get all books
  if (request.schema === bookSchema) {
  return Book.find({})
    .then((data) => {
      response.status(200).send(data);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
  } else {
    response.status(404).send("Такие книги не найдены");
  }
};
const getBook = (request, response) => {
  // Get a book by id
  const { book_id } = request.params;
  if (request.schema === bookSchema) {
  return Book.findById(book_id)
    .then((book) => {
      response.status(200).send(book);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
  } else {
    response.status(404).send("Книга не найдена");
  }
};

const createBook = (request, response) => {
  // Create new book
  return Book.create({ ...request.body })
    .then((book) => {
      response.status(201).send(book);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const updateBook = (request, response) => {
  // Update a book by id
  const { book_id } = request.params;
  const data = { ...request.body };
  if (request.schema === bookSchema) {
  return Book.findByIdAndUpdate(book_id, data, {
    new: true,
    runValidators: true,
  })
    .then((book) => {
      response.status(200).send(book);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
  } else {
    response.status(404).send("Книга не найдена");
  }
};
const deleteBook = (request, response) => {
  // Delete a book by id
  const { book_id } = request.params;
  if (request.schema === bookSchema) {
  return Book.findByIdAndDelete(book_id)
    .then((book) => {
      response.status(200).send("Book deleted");
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
  } else {
    response.status(404).send("Книга не найдена");
  }
};
module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
