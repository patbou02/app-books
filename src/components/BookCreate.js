import { useState } from 'react';

function BookCreate({ onCreate }) {

  const [title, setTitle] = useState('');

  const handleChange = e => {
    setTitle(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    onCreate(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>BookCreate</h2>
      <label>Title</label>
      <input onChange={handleChange} value={title} />
      <button>Create Book</button>
    </form>
  );
}

export default BookCreate;