const express = require("express");
const router = express.Router(); //create router var & set to router object (express.Router)
const auth = require("../../middleware/auth");

//Item Model
const Item = require("../../models/Item"); //we bring in item models to make queries

//actual route is to GET request from api/items
//Get all Items
//Public access

router.get("/", (req, res)=> {
Item.find() //call find method to fetch all items from the database
.sort({ date: -1}) //sorting by date
.then(items => res.json(items));
});

//actual route to post request (/api/items)
//Create an item
//Private with authentication

router.post("/", auth, (req, res)=> {  // To protect post request, we add auth parameter
    const newItem = new Item ({  //here is the object that is expected in the DB
        name: req.body.name //pass in an object
    });

    newItem.save().then(item => res.json(item)); //save item in DB & output as json
    });


    //actual route delete request to api/items/:id
//Delete an item
//Private with authentication

router.delete("/:id", auth, (req, res)=> {  // // To protect delete request, we also add auth parameter
    Item.findById(req.params.id) //this returns a promise
    .then(item => item.remove().then(()=> res.json({success: true})))
    .catch(err => res.status(404).json({success:false}));
});
   
module.exports = router; // necessasy, so other files can read the content of this file