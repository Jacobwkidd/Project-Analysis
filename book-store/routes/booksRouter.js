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

// GET localhost:3000/books/search?title={title}
router.get('/search', (req, res) => {
    //get the title from query params
    //search the array of books for a book with the title given
    const bookName = req.query.title;
    //console.log(req.query);
    const requestbook = books.find(searchBook => searchBook.title === bookName);
    //console.log(requestbook);
    if(requestbook){
        // we found a book, return it
        res.json(requestbook);
    }
    else{
        // we didnt find it so we return a status of 404
        res.status(404).json({error: "book wasn't found"});
    }
});

//POST localhost:3000/books
router.post('/', (req, res) => {
    const newBook = req.body;
    //create id for the new book. Make if the length of the books array + 1

    newBook.id = books.length + 1;
    
    //add the new book to the books array
    books.push(newBook);
    //write out the books array to the json file (out "database")
    fs.writeFile(bookFile, JSON.stringify(books), (err) => {
        if(err){
            console.log("Error writing file: ", err);
        }
        else{
            console.log("Successfully wrote file");
        }
    });
    //return a 201 status code 

    res.status(201).json({success: true, message: "Book created successfully"});


});

module.exports = router;
