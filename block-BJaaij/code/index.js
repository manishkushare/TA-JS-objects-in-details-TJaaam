class Book{
    constructor(title,category,author,isRead,finishedDate){
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
    }
    markBookAsRead(){
        this.isRead = true;
        // this.finishedDate = new Date().Date.now 
    }
}

class BookList{
    constructor(bookArray, currentBookIndex = 0){
        this.bookArray = bookArray;
        this.currentBookIndex = currentBookIndex;
    }
    add(...book){
        this.bookArray.push(book);
        return this.bookArray;
    }
    getCurrentBook(){
        return this.currentBookIndex;
    }
    getNextBook(){
        return this.bookArray[this.currentBookIndex+1];
    }
    getPrevBook(){
        return this.bookArray[this.currentBookIndex-1];
    }
    changeCurrentBook(newIndex){
        this.currentBookIndex = newIndex;
        return this.currentBookIndex;
    }
}

let book1 = new Book("Rich dad Poor Dad","Motivational and finance", "Robert", false,"5/5/21");
let book2 = new Book ("The magic of believing", "motivational, mind-science","Bristol",false, "10/5/21");

let bookList = new BookList([book1.title,book2.title]);