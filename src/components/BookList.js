import { useContext } from 'react';
import BookShow from './BookShow';
import BooksContext from '../context/books';

function BookList() {

  const { books } = useContext(BooksContext);

  const generatedList = books.map(book => <BookShow key={book.id} book={book}/>);

  return (
    <div className="book-list">
      {generatedList}
    </div>
  );
}

export default BookList;