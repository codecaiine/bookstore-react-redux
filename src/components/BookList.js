import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/Books';
import Book from './Book';
import BookAdd from './BookAdd';

const BookList = () => {
  const myBooks = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (myBooks.length) {
    return (
      <div>
        <Book books={myBooks} />
        <BookAdd />
      </div>
    );
  }
  return (
    <div>
      <h3>Not Book Added Yet !</h3>
      <h3>Add your books and author ...</h3>
      <BookAdd />
    </div>
  );
};

export default BookList;
