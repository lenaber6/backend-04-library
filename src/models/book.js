const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    heading: {
        type:String,
        requied: true,
        minlength: 2,
    },
    author: {
        type:String,
        requied: true,
        minlength: 2,
    },
    releaseYear: {
        type:Number,
        requied: true,
    },
});
module.exports = mongoose.model('book', bookSchema);