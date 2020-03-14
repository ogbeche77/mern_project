const express = require("express");
const router = express.Router();
const bcrypt = require ("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

//User Model
const User = require("../../models/User"); //we bring in item models

//actual route is to POST request from api/users
//Register new user
//Public access

router.post("/", (req, res)=> {
const {name, email, password} = req.body;


//Validation
if(!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields"});
}

//Check if user exists
User.findOne({ email })
.then(user => {
    if(user) return res.status(400).json({ msg: "User already exist"});
     
    const newUser = new User({ 
        name,
        email,
        password
    }); 
    
    // Salt created and hashed
    bcrypt.genSalt(10,(err, salt)=> {
        bcrypt.hash(newUser.password, salt, (err, hash) =>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
            .then(user=> {
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
              
            });
        })
    })
})
});
   
module.exports = router;