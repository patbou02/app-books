import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete }) {

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => onDelete(book.id);

  const handleEditClick = () => setShowEdit(!showEdit);

  const content = (!showEdit) ? <h3>{book.title}</h3> : <BookEdit book={book} />;

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className="delete" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default BookShow;