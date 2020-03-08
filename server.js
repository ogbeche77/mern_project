const express =require("express");
const mongoose =require("mongoose"); // Mongoose to interact with MONGODB database
const bodyParser =require("body-parser"); //To post request & get data from the body

const items = require("./route/api/items");

const app = express(); // initialise express to var app

//Bodyparser middleware
app.use(bodyParser.json());

//Database Config
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose.connect(db)
.then(()=> console.log("MongoDB is connected"))
.catch(err => console.log(err));

app.use("./api/items", items);

const port = process.env.PORT || 5000

app.listen(port, ()=> console.log(`Server started on port ${port}`));