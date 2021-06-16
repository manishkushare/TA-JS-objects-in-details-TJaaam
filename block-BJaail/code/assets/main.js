console.log("test");
let submitButton = document.querySelector(".submit");
let root = document.querySelector(".root");
let inputTitle = document.querySelector(".title");
let inputAuthor = document.querySelector(".author");
let inputIsdn = document.querySelector(".isbn");

let library =  JSON.parse(localStorage.getItem("list")) || [];

function handleForm(event) {
    event.preventDefault();

    let title = inputTitle.value;
    let author = inputAuthor.value;
    let isdn = inputIsdn.value;
    console.log(title);
    console.log(author);
    console.log(isdn);
    let book = new Book(title, author, isdn);
    console.log(book);
    createArray(book, library);
    createUI(library,root)
    localStorage.setItem("list",JSON.stringify(library));

}

//creating book object 
class Book {
    constructor(title, author, isdn) {
        this.title = title;
        this.author = author;
        this.isdn = isdn;
        this.isRead = false;
    }
    read() {
        this.isRead =!this.isRead;
        return this.isRead;
    }

}
// pusing books into arrays
function createArray(book, array) {
    array.push(book);
}
// handle isRead
function handleIsRead(event, book) {
    let id = event.target.id;
    console.dir(book)
    book.read()
    createUI(library,root);
    localStorage.setItem("list",JSON.stringify(library));
}

function handleDelete(event) {
    let id = event.target.dataset.index;
    library.splice(id,1);
    createUI(library,root);
    localStorage.setItem("list",JSON.stringify(library));

}
// create UI
function createUI(data,rootElem) {
    rootElem.innerHTML = "";
    data.forEach((book, index) => {
        let tr = document.createElement("tr");
        let tdIsRead = document.createElement("input");
        tdIsRead.setAttribute("type", "checkbox");
        tdIsRead.checked = book.isRead;
        tdIsRead.setAttribute("id", index)
        tdIsRead.addEventListener("change", (e) => {handleIsRead(e, book)});
        let tdTitle = document.createElement("td");
        tdTitle.setAttribute("data-book", "title");
        tdTitle.innerText = book.title;
        let tdAuthor = document.createElement("td");
        tdAuthor.setAttribute("data-book", "author");
        tdAuthor.innerText = book.author;
        let tdIsdn = document.createElement("td");
        tdIsdn.innerText = book.isdn
        tdIsdn.setAttribute("data-isdn", "isdn")
        let tdDelete = document.createElement("td");
        tdDelete.setAttribute("data-index", index);
        tdDelete.innerText = "X";
        tdDelete.addEventListener("click", handleDelete);
        tr.append(tdIsRead, tdTitle, tdAuthor, tdIsdn, tdDelete);
        rootElem.append(tr);

    })

}

createUI(library,root);

submitButton.addEventListener('click', handleForm);