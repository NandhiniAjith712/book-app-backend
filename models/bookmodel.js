const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    bookid:String,
    booktitle:String,
    bookauthor:String,
    bookprice:String
})

module.exports=mongoose.model("book_entry",bookSchema)