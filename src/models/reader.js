const mongoose = require('mongoose');
const readerSchema = new mongoose.Schema({
    name: {
        type: String,
        requied: true, // Является обязательным
        minlength: 2,
    },
    lastName: {
        type: String,
        requied: true,
        minlength: 2,
    },
    userName: {
        type: String,
        requied: true,
        minlength: 5,  
    },
    books: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'book'}],
        default: [],
    }
});
module.exports = mongoose.model('reader', readerSchema);