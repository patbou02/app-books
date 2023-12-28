import { useState, useContext } from 'react';
import BooksContext from '../context/books';

function BookEdit({ book, onSubmit }) {

  const { editBookById } = useContext(BooksContext);

  const [title, setTitle] = useState(book.title);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };

  const handleChange = e => setTitle(e.target.value);

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input onChange={handleChange} className="input" value={title} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;