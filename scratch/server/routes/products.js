const express = require('express');

const router = express.Router();

const products = [
    { id: 1, name: 'Guitar', price: 10 },
    { id: 2, name: 'Piano', price: 20 },
    { id: 3, name: 'Drum', price: 30 },
];


//GET localhost:3000/products
router.get('/', (req, res) => {
    res.json(products);
});



// get localhost:3000/products/search 
router.get('/search', (req, res) => {
    const productName = req.query.name;
    const requestProduct = products.find(prod => prod.name === productName);
    if(requestProduct){
        // we found it 
        res.json(requestProduct);
    }
    else{
        // we didnt find it
        res.status(404).json({error: "Product not found"});
    }
    
});

// get localhost:3000/products/:id
router.get('/:id', (req, res) => {
    res.json(products.id);
});


module.exports = router;