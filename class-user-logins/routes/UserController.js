const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router(); 


router.get('/info', (req, res) => {
    if(req.session && req.session.user){
        //there is a user login
        res.json({username: req.session.user.username});
    }
    else{
        res.status(401).json({message: 'User not logged in'});
    }
});

//user registration
router.post('/register', async (req, res) => {
    //get the data from the post body in the register.js
    const username = req.body.username;
    const password = req.body.password;

    //check if the user already exists
    const userExists = await User.findOne({where: {username}});
    if(userExists){
        return res.status(400).json({message: 'Username taken'});
    }

    // create the new user 

    //hash the password 
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        username,
        password: hashedPassword
    });
    // await is a database call

    //initialize session (Logging in user right now)
    req.session.user = newUser;
    res.json({message: "Successful registration", newUser});
});

//user login
router.post('/login', async (req, res) => {
    //get data from post body
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({where: {username}});
    if(!user){
        return res.status(404).json({message: 'User not found'});
    }

    //Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword){
        return res.status(401).json({message: 'Invalid password'});
    }

    //login the user
    req.session.user = user;
    res.json({message: 'Logged in successfully'});


});


//user logout
router.post('/logout', (req, res) => {
    // destroy the session 
    req.session.destroy((err) => {
        if(err){
            return res.status(500).json({message: 'Could not log out.'});
        }
        else{
            return res.json({message: 'Logged out was successfully'})
        }
    });
});



module.exports = router;