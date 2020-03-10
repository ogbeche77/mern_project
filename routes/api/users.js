const express = require("express");
const router = express.Router();
const bcrypt = require ("bcryptjs");

//User Model
const Item = require("../../models/User"); //we bring in item models

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
                res.json({
                    user: {
                        id: user.id,
                        name:user.name,
                        email: user.email
                    }
                });
            });
        })
    })
})
});
   
module.exports = router;