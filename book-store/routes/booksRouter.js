const express = require('express');
const router = express.Router();
const fs = require('fs'); // fs = file System

const bookFile = './database/books.json';
let books = [];
    // where would you like to read, 
fs.readFile(bookFile, (err, data) => {
    if(err){
        throw err;
    }
    books = JSON.parse(data);
});

/* GET home page. */



router.get('/', (req, res) => {
    res.json(books); //required
});


router.get('/search', (req, res) => {
    const productName = req.query.name;
    const requestProduct = books.find(prod => prod.name === productName);
    if(requestProduct){
        // we found it 
        res.json(requestProduct);
    }
    else{
        // we didnt find it
        res.status(404).json({error: "Product not found"});
    }
});


module.exports = router;
