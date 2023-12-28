import { useState } from 'react';
import useBooksContext from '../hooks/use-hooks-context';

function BookCreate() {

  const { createBook } = useBooksContext();

  const [title, setTitle] = useState('');

  const handleChange = e => setTitle(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    createBook(title);
    setTitle('');
  };

  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <h2>BookCreate</h2>
        <label>Title</label>
        <input onChange={handleChange} value={title} />
        <button>Create Book</button>
      </form>
    </div>

  );
}

export default BookCreate;