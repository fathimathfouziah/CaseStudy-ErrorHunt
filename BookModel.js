const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://fouziah:fouziahh@cluster0.w7q6h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;