let myLibrary = [];
let latestBook;

function Book(name,author,imageURL,description) {
    this.name = name
    this.author = author
    this.imageURL = imageURL
    this.description = description
}

function addBookToLibrary(name, author, imageURL, description) {
    const book = new Book(name, author, imageURL, description);
    myLibrary.push(book);
}

function submitBook(newBook) {
    const newBookTitle = document.getElementById("input-title").value;
    const newBookAuthor = document.getElementById("input-author").value;
    const newBookImageURL = document.getElementById("input-imageURL").value;
    const newBookDescription = document.getElementById("input-description").value;

    const book = new Book(newBookTitle,newBookAuthor,newBookImageURL,newBookDescription);
    //console.log(book);
    myLibrary.push(latestBook)
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    latestBook = myLibrary.pop();

    const latestBookTitle = document.getElementById("latest-book-title");
    latestBookTitle.innerHTML = "";
    latestBookTitle.innerText = latestBook.name;
    const latestBookAuthor = document.getElementById("latest-book-author");
    latestBookAuthor.innerText = latestBook.author;
    const latestBookDescription = document.getElementById("latest-book-description");
    latestBookDescription.innerText = latestBook.description;

    const latestBookImageContainer = document.getElementById("latest-book-image");
    latestBookImageContainer.innerHTML = "";
    let latestBookImage = document.createElement("IMG");
    latestBookImage.id = "latest-book-img"
    latestBookImage.src = latestBook.imageURL;
    latestBookImage.height = 300;
    latestBookImageContainer.appendChild(latestBookImage);  

    const bookContainer = document.getElementById("book-container");
    bookContainer.innerHTML = "";
    let i = 0;
    myLibrary.forEach(aBook => {
        let bookItem = document.createElement("DIV");
        bookItem.id = `book-${i}`;
        bookItem.className = "book";
        bookItem.innerHTML = `<img class="book-image" src="${aBook.imageURL}" height="200" /><div class="book-title">${aBook.name}</div><div class="book-author">${aBook.author}</div>`; 
        bookContainer.appendChild(bookItem);  
        i++;
    });
}

addBookToLibrary('Winners Take All: The Elite Charade of Changing the World', 'Anand Giridharadas', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1528750369l/37506348.jpg','');
addBookToLibrary('Wintering: The Power of Rest and Retreat in Difficult Times', 'Katherine May', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629894278l/52623750._SY475_.jpg','');
addBookToLibrary('The Way of Kings', 'Brandon Sanderson', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388184640l/7235533.jpg','');
addBookToLibrary('Between Two Kingdoms: A Memoir of a Life Interrupted', 'Suleika Jaouad', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579614170l/50743767.jpg','A searing, deeply moving memoir of illness and recovery that traces one young woman’s journey from diagnosis to remission and, ultimately, a road trip of healing and self-discovery.');

displayBooks();

