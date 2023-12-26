import { useState, useEffect } from 'react';
import axios from 'axios';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  };

  // fetch books initially on Application load.
  useEffect(() => fetchBooks(), []);

  const deleteBookById = id => {
    console.log('Need to DELETE the book with ID:', id);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const editBookById = (id, newTitle) => {
    console.log(`Need to EDIT the book with id ${id} with a new title ${newTitle}`);
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return { ...book, title: newTitle }
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const createBook = async title => {
    console.log('Need to ADD book with title:', title);

    const response = await axios.post('http://localhost:3001/books', { title });

    const updatedBooks = [ ...books, response.data ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;