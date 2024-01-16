const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title : {type: String, required: true },
    author : {type: String ,  required: true},
    description : {type: String },
    image : {type: String },
    price : {type: String,  required: true }
})

module.exports = new mongoose.model("books" , bookSchema)