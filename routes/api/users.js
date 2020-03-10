const express = require("express");
const router = express.Router();

//User Model
const Item = require("../../models/User"); //we bring in item models

//actual route is to POST request from api/users
//Register new user
//Public access

router.post("/", (req, res)=> {
res.send("register")
});

   
module.exports = router;