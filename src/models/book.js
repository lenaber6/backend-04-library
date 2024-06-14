const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    heading: {
        type:String,
        required: true,
        minlength: 2,
    },
    author: {
        type:String,
        required: true,
        minlength: 2,
    },
    releaseYear: {
        type:Number,
        required: true,
    },
});
module.exports = mongoose.model('book', bookSchema);