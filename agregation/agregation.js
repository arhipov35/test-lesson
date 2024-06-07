class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    display() {
        console.log(`${this.title} by ${this.author}`);
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    displayBooks() {
        this.books.forEach(book => book.display());
    }
}

const library = new Library('City Library');
const book1 = new Book('1984', 'George Orwell');
const book2 = new Book('Brave New World', 'Aldous Huxley');

library.addBook(book1);
library.addBook(book2);

library.displayBooks(); // Відображає всі книги в бібліотеці
