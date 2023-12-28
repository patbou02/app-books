import { useState } from 'react';
import useBooksContext from '../hooks/use-hooks-context';

function BookEdit({ book, onSubmit }) {

  const { editBookById } = useBooksContext();

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