

class Library {
    constructor(LibraryName){
        this.name = LibraryName;
        this.books = [];
    }
    getBooks(){
        return library;
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
        //this.book = this.books.find(book => book.isCheckOut == true);
        book.isCheckOut = true;
    }


    checkInBook(book){
        //book = this.books.find(book => book.isCheckOut == false);
        book.isCheckOut = false;
    }


    findBookByTitle(title){
        return this.books.find(book => book.title == title);
    }


    findBooksByAuthor(author){
        author = this.author.filter(author => this.book.author == author);
        return author;
    }


    getAllCheckedOutBooks(){


        return this.book.filter(book => book.isCheckOut == true);  

        // let checkedOut = [];
        // for(const indBook in this.book){
        //     if(indBook !== indBook.isCheckOut){
        //         indBook.isCheckOut == true;
        //         checkOutBook.push(indBook);
        //     }
        // }
        // this.book = checkedOut;
    }


    getAllOverDueBook(){
        return this.book.filter(book => book.dueDate > dueDate);
    }


    updateBook(title, bookDataObj){
        let book = this.books.find(book => book.title == title);
        book.title = bookDataObj.title;
        book.author = bookDataObj.author;
        book.numPage = bookDataObj.numPage;
        book.isCheckOut = bookDataObj.isCheckOut;
        book.dueDate = bookDataObj.dueDate;
    }

    findMostPopularAuthor(){
        let PopularAuthor = this.book.filter(book => book.author.title > book.title);
        return PopularAuthor;
    }


    compareTwoBook(bookOne, bookTwo){
        


        if(bookOne.numPage < bookTwo.numPage){
            return bookTwo;
        }
        else if(bookOne.numPage > bookTwo.numPage){
            return bookOne;
        }
        else{
            console.log("They are the same amount of pages");
        }
    }


    AddMultipleBooks(booksArr){ // couldn't get this.
        booksArr.foreach( book =>{
            books.addBook(book);
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








   

