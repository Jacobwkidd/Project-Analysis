
let user = {name: "John", age: 30};
localStorage.setItem('western-class', JSON.stringify(user)); 

let user2 = {name: "John The Second", age: 30};
localStorage.setItem('western-test', JSON.stringify(user2));  // use common javascript functions and javascript practice

let item = JSON.parse(localStorage.getItem('western-class')); // save a step 
localStorage.removeItem('western-test'); //removing an item

// let item = localStorage.getItem('western-class'); // another way of local storage
// item = JSON.parse(item);

console.log(item);
