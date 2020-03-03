const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/Items");

//actual route is to GET request from api/items
//Get all Itemss
//Public access

router.get("/", (req, res)=> {
Item.find()
.sort({ date: -1})
.then(items => res.json(items))
});

//actual route is to post request to api/items
//Create an item
//Public access since no authentication

router.post("/", (req, res)=> {
    const newItem = new Item ({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
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