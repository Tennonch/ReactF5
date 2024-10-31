// src/App.js
import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
    const [books, setBooks] = useState([]);

    const handleAddBook = (newBook) => {
        setBooks([...books, newBook]);
    };

    return (
        <div className="App">
            <h1>Book Library</h1>
            <BookForm onAdd={handleAddBook} />
            <BookList books={books} onAddBook={handleAddBook} />
        </div>
    );
}

export default App;
