// Create some book instances
let book1 = new Book('Moby Dick', 'Herman Melville', 704, false, new Date(2023, 6, 5));

let book2 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 200, false, new Date(2023, 7, 8));
let book3 = new Book('1984', 'George Orwell', 328, false, new Date(2023, 6, 16));
// Create a library instance and add the books to it
let library = new Library("Main Library");
library.addBook(book1);
library.addBook(book2);
// Test adding a book
console.log('Adding a book...');
library.addBook(book3);
console.log(library.getBooks()); // Should now include book3
// Test removing a book
console.log('Removing a book...');
library.removeBook(book1.title);
console.log(library.getBooks()); // Should no longer include book1
// Test finding a book
console.log('Finding a book...');
let foundBook = library.findBookByTitle('1984');
console.log(foundBook); // Should return book3
// Test updating a book
console.log('Updating a book...');
library.updateBook(foundBook.title,
{ title: 'Nineteen Eighty-Four',
author: 'George Orwell',
numPages: 328,
isCheckedOut: false,
dueDate: new Date(2023, 6, 16)});
console.log(library.getBooks()); // Book3's title should now be 'Nineteen Eighty-Four'
// Test saving to localStorage
console.log('Saving to localStorage...');
library.saveToLocalStorage();
// Test loading from localStorage
console.log('Loading from localStorage...');
let newLibrary = new Library();
newLibrary.loadFromLocalStorage();
console.log(newLibrary.getBooks()); // Should be the same books as the old library (minus book1)