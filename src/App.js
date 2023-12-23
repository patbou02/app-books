import { useState } from 'react';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {

  const [books, setBooks] = useState([]);

  const generateId = () => Math.round(Math.random() * 9999);

  const createBook = title => {
    console.log('Need to add book with title:', title);
    const updatedBooks = [ ...books, { id: generateId(), title } ];
    setBooks(updatedBooks);
  };

  return (
    <div>
      {books.length}
      <BookCreate onCreate={createBook} />
      <BookList />
    </div>
  );
}

export default App;