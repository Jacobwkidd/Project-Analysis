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

// router.get('/products/search', (req, res)) === products/products/search

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

router.post('/', (req, res) => {
    const newProduct = req.body;
    newProduct.price = parseInt(newProduct.price);
    newProduct.id = products.length + 1;
    products.push(newProduct);
    console.log(products);
    res.status(201).json(products);
});


router.get('/:id', (req, res) => {
    const productId = req.params.id;
    const product = products.find(prod => prod.id == productId);

    //console.log(req.params);
    res.json(product);
});


// this is a wild card so put this router on the bottom
// get localhost:3000/products/:id
router.get('/:id', (req, res) => {
    res.json(products.id);
});


module.exports = router;