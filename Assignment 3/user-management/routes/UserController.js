const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router(); 

//to see if they are logged in
router.get('/info', (req, res) => {
    if(req.session && req.session.user){
        res.json({username: req.session.user.username});
    }
    else{
        res.status(401).json({message: 'User not logged in'});
    }
});

router.post('/register', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // check if the user is already taken
    const existUser = await User.findOne({where: {username}});
    if(existUser){
        return res.status(400).json({message: 'Username taken'});
    }

    //create the new user

    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        username, 
        password: hashedPass
    });

    //await is a database call

    //initialize session (logging in user right now)
    req.session.user = newUser;
    res.json({message: "Successful registration", newUser});

});


//user login
router.post('/login', async (req, res) => {
    //get data from post body
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = await User.findOne({where: {username}});
    if(!foundUser){
        return res.status(404).json({message: 'User not found'});
    }

    //check password
    const validPassword = await bcrypt.compare(password, foundUser.password);
    if(!validPassword){
        return res.status(401).json({message: 'Invalid password'});
    }

    //login the user
    req.session.user = foundUser; //they login and we want to set them to the session
    res.json({message: 'Logged in successful'})
});

router.put('/update', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    //not found user
    if(!req.session || ! req.session.user){
        return res.status(401).json({message: 'Not logged in'});
    }

    //find user
    const user = await User.findByPK(req.session.user.id);
    if(!user){
        return res.status(401).json({message: 'User not found'});
    }

    //update the username
    if(username){ // found the user.. user is found by the pk then user.username is eqaul to the new username
        user.username = username;
    }

    if(password){
        //hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);
        // set the users password to the new hashed password
        user.password = hashedPassword;
    }

    await user.save();

    res.json({message: 'Updated User Successfully'});
});


router.post('/logout', async (req, res) => {
    req.session.destory((err) => {
        if(err){
            return res.status(500).json({message: 'Could not log out'});
        }
        else{
            return res.json({message: 'Logged out was successfully'});
        }
    });
});

module.exports = router;