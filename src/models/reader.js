const mongoose = require('mongoose');
const readerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Является обязательным
        minlength: 2,
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
    },
    userName: {
        type: String,
        required: true,
        minlength: 5,  
    },
    books: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'book'}],
        default: [],
    }
});
module.exports = mongoose.model('reader', readerSchema);