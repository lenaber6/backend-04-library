const router1 = require('express').Router();
const {getBooks, getBook, updateBook, deleteBook} = require('../controllers/books');

router1.get('/books', getBooks);
router1.get('/books/:book_id', getBook);
router1.patch('/books/:book_id', updateBook);
router1.delete('/books/:book_id', deleteBook);

module.exports = router1;