// src/components/BookList.js
import React, { useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../booksData';

function BookList({ onAddBook }) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then(data => setBooks(data));
    }, []);

    const handleDelete = (id) => {
        deleteBook(id).then(() => {
            setBooks(books.filter(book => book.id !== id));
        });
    };

    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        {book.title} by {book.author}
                        <button onClick={() => handleDelete(book.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
