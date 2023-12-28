import { useEffect } from 'react';
import useBooksContext from './hooks/use-hooks-context';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const { fetchBooks } = useBooksContext();

  // fetch books initially on Application load.
  useEffect(() => fetchBooks(), []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;