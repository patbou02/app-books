import { useState } from 'react';
import useBooksContext from '../hooks/use-hooks-context';
import BookEdit from './BookEdit';

function BookShow({ book }) {

  const { deleteBookById } = useBooksContext();

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => deleteBookById(book.id);

  const handleEditClick = () => setShowEdit(!showEdit);

  const handleSubmit = () => setShowEdit(false);

  const content = (!showEdit) ? <h3>#{book.id} - {book.title}</h3> : <BookEdit book={book} onSubmit={handleSubmit} />;

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className="delete" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default BookShow;