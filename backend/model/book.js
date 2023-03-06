const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    name:{
        type:String
    },
    price:{
        type:String
    },
    description:{
        type:String
    }
});


const Book = mongoose.model("Book",bookSchema);
module.exports=Book;