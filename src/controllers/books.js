const Book = require('../models/book');

const getBooks = (request, response) => {
  // Get all books
  return Book.find({})
  .then((data) => {
    response.status(200).send(data);
  })
  .catch(e => {
    response.status(500).send(e.message);
  });
};
const getBook = (request, response) => {
  // Get a book by id
  const {book_id} = request.params;
  return Book.findById(book_id)
  .then((book) => {
    response.status(200).send(book);
  })
  .catch(e => {
    response.status(500).send(e.message);
  });
};
const updateBook = (request, response) => {
  // Update a book by id
  const {book_id} = request.params;
  const data = {...request.body};
  return Book.findByIdAndUpdate(book_id, data, {new:true, runValidators: true})
  .then((book) => {
    response.status(200).send(book);
  })
  .catch(e => {
    response.status(500).send(e.message);
  });
};
const deleteBook = (request, response) => {
    // Delete a book by id
    return Book.findByIdAndDelete(book_id)
    .then((book) => {
      response.status(200).send("Deleted");
    })
    .catch(e => {
      response.status(500).send(e.message);
    });
  };
  module.exports = {
    getBooks,
    getBook,
    updateBook,
    deleteBook,
  };