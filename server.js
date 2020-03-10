const express =require("express");
const mongoose =require("mongoose"); // Mongoose to interact with MONGODB database
const bodyParser =require("body-parser"); //To post request & get data from the body
const path = require("path");
  

const app = express(); // initialise express to var app

//Bodyparser middleware
app.use(bodyParser.json());

//Database Config to bring in mongoDB/Mongoose
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose
.connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
.then(()=> console.log("MongoDB is connected")) //shows in terminal to show we are connected
.catch(err => console.log(err));


//Use Routes
app.use("/api/items", require("./routes/api/items")); //ensures all requests go to items variable
app.use("/api/users", require("./routes/api/users"));



// Serve static assets if in production
if(process.env.NODE_ENV ==="production") {
    //Set static folder
    app.use(express.static('client/build'));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));

    });
}



const port = process.env.PORT || 5000  //because we may deloy to heroku (process.env.port)

app.listen(port, ()=> console.log(`Server started on port ${port}`));