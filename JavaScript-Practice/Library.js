
class Library {
    constructor(LibraryName){
        this.name = LibraryName;
        this.books = [];
    }
    addBook(book){
        this.books.push(book);
    }

    removeBook(book){
        this.book = this.book.filter(indivBook => indivBook !== book);

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
        this.book = this.book.find(book => book.isCheckOut == true);
    }

    checkInBook(book){
        this.book = this.book.find(book => book.isCheckOut == false);
    }

    findBookByTitle(title){
        this.title = this.title.find(title => title);
    }

    findBooksByAuthor(author){
        this.author.filter(author => this.book);
    }

    getAllCheckedOutBooks(){
        for(int i = 0; i < this.book; i++){
            if(!this.isCheckOut){
                this.isCheckOut == true;
            }
        }
    }

    getAllOverDueBook(){

    }

    updateBook(title, bookDataObj){

    }

    compareTwoBook(bookOne, bookTwo){

    }

    AddMultipleBooks(booksArr){

    }

    saveToLocalStorage(){
        let book1 = this.book;
        localStorage.setItem('book', JSON.stringify(book1));
    }

    loadFromLocalStorage(){

    }
    

    saveToLocalStorage() {
        localStorage.setItem('libraryBooks', JSON.stringify(this.books));
        }
        // Load books from localStorage
        loadFromLocalStorage() {
        //attempts to load the value from localStorage, but if there is
        //nothing there yet, then an empty array is returned. That is what
        //the || [] is doing.
        this.books = JSON.parse(localStorage.getItem('libraryBooks')) || [];
    }

    
}




    