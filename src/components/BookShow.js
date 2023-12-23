import { useState } from 'react';

function BookShow({ book, onDelete }) {

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => onDelete(book.id);

  const handleEditClick = () => setShowEdit(!showEdit);

  return (
    <div className="book-show">
      {!showEdit ? book.title : 'show edit fields'}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className="delete" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default BookShow;