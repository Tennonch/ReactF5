// src/booksData.js
let books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen" }
];

export const getBooks = () => Promise.resolve(books);

export const addBook = (newBook) => {
    newBook.id = books.length + 1;
    books.push(newBook);
    return Promise.resolve(newBook);
};

export const deleteBook = (id) => {
    books = books.filter(book => book.id !== id);
    return Promise.resolve();
};
