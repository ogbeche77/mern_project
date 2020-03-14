const mongoose = require("mongoose");
const Schema = mongoose.Schema; //creating schema

//Create schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        default:Date.now
    }
});

module.exports = Item = mongoose.model("item", ItemSchema); // we create a model that takes in a name and a schema