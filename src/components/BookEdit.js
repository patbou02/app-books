import { useState } from 'react';

function BookEdit({ book, onEdit }) {

  const [title, setTitle] = useState(book.title);

  const handleSubmit = e => {
    e.preventDefault();
    onEdit(book.id, title);
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