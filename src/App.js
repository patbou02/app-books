import { useState } from 'react';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {

  const [books, setBooks] = useState([]);

  const generateId = () => Math.round(Math.random() * 9999);

  const deleteBookById = id => {
    console.log('Need to DELETE the book with ID:', id);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const createBook = title => {
    console.log('Need to ADD book with title:', title);
    const updatedBooks = [ ...books, { id: generateId(), title } ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;