import BookShow from './BookShow';

function BookList({ books }) {

  const generatedList = (
    <ul>
      {books.map(book => <BookShow key={book.id} book={book}/>)}
    </ul>
  );

  return (
    <div className="book-list">
      {generatedList}
    </div>
  );
}

export default BookList;