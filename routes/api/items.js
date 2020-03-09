const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/Item"); //we bring in item models

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
//Public access since no authentication

router.post("/", (req, res)=> {  // making a post request
    const newItem = new Item ({  //here is the object that is expected in the DB
        name: req.body.name //pass in an object
    });

    newItem.save().then(item => res.json(item)); //save item in DB & output as json
    });


    //actual route delete request to api/items/:id
//Delete an item
//Public access since no authentication

router.delete("/:id", (req, res)=> {
    Item.findById(req.params.id)
    .then(item => item.remove().then(()=> res.json({success: true})))
    .catch(err => res.status(404).json({success:false}));
});
   
module.exports = router;