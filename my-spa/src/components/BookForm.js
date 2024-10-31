// src/components/BookForm.js
import React, { useState } from 'react';
import { addBook } from '../booksData';

function BookForm({ onAdd }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { title, author };
        addBook(newBook).then((book) => {
            onAdd(book);
            setTitle('');
            setAuthor('');
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New Book</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
                required
            />
            <button type="submit">Add Book</button>
        </form>
    );
}

export default BookForm;
