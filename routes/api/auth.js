const express = require("express");
const router = express.Router();
const bcrypt = require ("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

//User Model
const Item = require("../../models/User"); //we bring in item models

//actual route is to POST request from api/auth
//Authenticate user
//Public access

router.post("/", (req, res)=> {
const {email, password} = req.body;


//Validation
if( !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields"});
}

//Check if user exists
User.findOne({ email })
.then(user => {
    if(!user) return res.status(400).json({ msg: "User doesn't exist"});
    
  //Validating password
  bcrypt.compare(password, user.password)
  .then(isMatch =>{
      if(!isMatch) return res.status(400).json({ msg: "invalid crrdentials" });
      jwt.sign(
        {id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600},//token to last for an hour
         (err, token)=>{
             if(err) throw err;
             res.json({
                 token,
                user: {
                    id: user.id,
                    name:user.name,
                    email: user.email
                }
            });
         }
    )
  })          
})
});
   
module.exports = router;