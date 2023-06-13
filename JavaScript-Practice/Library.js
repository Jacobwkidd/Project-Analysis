

class Library {
    constructor(LibraryName){
        this.name = LibraryName;
        this.books = [];
    }
    getBooks(){
        return this.books;
    }

    addBook(book){
        this.books.push(book);
    }


    removeBook(title){
        this.books = this.books.filter(indivBook => indivBook.title !== title);
        


        //or
        /*   - The old way of programming
            let newBookArr = [];
            for(const indivBook in this.book){
                if(indivBook !== book){
                    newBookArr.push(indivBook);
                }
            }
            this.books = newBookArr;
       
        */
    }


    checkOutBook(book){
        let foundBook = this.books.find(b => b == book);
        foundBook.isCheckedOut = true;
        
    }


    checkInBook(book){
        let foundBook = this.books.find(b => b == book);
        foundBook.isCheckedOut = false;
    }


    findBookByTitle(title){
        return this.books.find(book => book.title == title);
    }


    findBooksByAuthor(author){
        author = this.books.filter(book => book.author == author);
        return author;
    }


    getAllCheckedOutBooks(){


        return this.books.filter(book => book.isCheckOut == true);  

        // let checkedOut = [];
        // for(const indBook in this.book){
        //     if(indBook !== indBook.isCheckOut){
        //         indBook.isCheckOut == true;
        //         checkOutBook.push(indBook);
        //     }
        // }
        // this.book = checkedOut;
    }


    getAllOverdueBooks(){
        return this.books.filter(book => book.dueDate < Date.now());
    }


    updateBook(title, bookDataObj){
      
        let book = this.books.find(book => book.title == title);
        book.title = bookDataObj.title;
        book.author = bookDataObj.author;
        book.numPages = bookDataObj.numPages;
        book.isCheckedOut = bookDataObj.isCheckedOut;
        book.dueDate = bookDataObj.dueDate;
    }

    findMostPopularAuthor(){
        let PopularAuthor = this.books.filter(book => book.author.title > book.title);
        return PopularAuthor;
    }


    compareTwoBooks(bookOne, bookTwo){
        
        console.log(bookOne);
        console.log(bookTwo);

        if(bookOne.numPages < bookTwo.numPages){
            console.log(bookTwo.numPage);
            return bookTwo;
        }
        else if(bookOne.numPages > bookTwo.numPages){
            return bookOne;
        }
        else{
            console.log("They are the same amount of pages");
        }
    }


    addMultipleBooks(booksArr){ // couldn't get this.
        booksArr.forEach( book =>{
            this.addBook(book);
        });
    }


    saveToLocalStorage(){
        // let book1 = this.book;
        // localStorage.setItem('book', JSON.stringify(book1));
    }


    loadFromLocalStorage(){
        
        // localItem = localStorage.getItem(book);
        // JSON.parse(localItem);
    }
   


    saveToLocalStorage() {
        // localStorage.setItem('libraryBooks', JSON.stringify(this.books));
        // }
        // // Load books from localStorage
        // loadFromLocalStorage() {
        // //attempts to load the value from localStorage, but if there is
        // //nothing there yet, then an empty array is returned. That is what
        // //the || [] is doing.
        // this.books = JSON.parse(localStorage.getItem('libraryBooks')) || [];
    }


   
}








   

