import BookShow from './BookShow';

function BookList({ books, onDelete }) {

  const generatedList = books.map(book => <BookShow onDelete={onDelete} key={book.id} book={book}/>);

  return (
    <div className="book-list">
      {generatedList}
    </div>
  );
}

export default BookList;