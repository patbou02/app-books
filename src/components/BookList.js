import BookShow from './BookShow';

function BookList({ books, onDelete, onEdit }) {

  const generatedList = books.map(book => <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book}/>);

  return (
    <div className="book-list">
      {generatedList}
    </div>
  );
}

export default BookList;