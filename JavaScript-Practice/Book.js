

class Book{
    constructor(title, author, numPage, isCheckOut, dueDate){
        this.title = title;
        this.author = author;
        this.numPage = numPage;
        this.isCheckOut = isCheckOut;
        this.dueDate = dueDate;
    }

    checkOutBook(){
        this.isCheckOut = true;
    }
    checkInBook(){
        this.isCheckOut = false;
    }
}