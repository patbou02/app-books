import useBooksContext from '../hooks/use-hooks-context';
import BookShow from './BookShow';

function BookList() {

  const { books } = useBooksContext();

  const generatedList = books.map(book => <BookShow key={book.id} book={book}/>);

  return (
    <div className="book-list">
      {generatedList}
    </div>
  );
}

export default BookList;