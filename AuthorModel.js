const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://fouziah:fouziahh@cluster0.w7q6h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;