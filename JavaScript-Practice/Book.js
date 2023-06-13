

class Book{
    constructor(title, author, numPages, isCheckedOut, dueDate){
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.isCheckedOut = isCheckedOut;
        this.dueDate = dueDate;
    }

    checkOut(){
        this.isCheckedOut = true;
    }
    checkIn(){
        this.isCheckedOut = false;
    }
}