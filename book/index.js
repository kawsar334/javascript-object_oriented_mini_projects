


class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

}


class BookList {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book)
    }
    removeBook(id) {
        this.books.splice(id, 1);
        this.display();

    }

    display() {
        const bookList = document.getElementById('book-list');
        bookList.innerHTML = "";
        this.books.forEach((book, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                 <span>Title: ${book.title}</span><br>
                <span>Author: ${book.author}</span><br>
                <span>ISBN: ${book.isbn}</span>
                <button onclick="bookList.removeBook('${index}')">Remove</button>

            `
            bookList.appendChild(li)

        })
    }
}

const bookList = new BookList();
const bookForm = document.getElementById("book-form");
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const newBook = new Book(title, author, isbn);
    bookList.addBook(newBook);
    bookList.display()
    // clear inputs 
    document.getElementById('title').value ="";
    document.getElementById('author').value ="";
    document.getElementById('isbn').value ="";
    
})
