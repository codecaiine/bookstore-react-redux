import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/Books';
import BookList from './BookList';
import BookAdd from './BookAdd';

const AllBooks = () => {
  const myBooks = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (myBooks.length) {
    return (
      <div>
        <BookList books={myBooks} />
        <hr />
        <BookAdd />
      </div>
    );
  }
  return (
    <div className="no-books">
      <div>
        <h3> Not Book Available </h3>
      </div>
      <BookAdd />
    </div>
  );
};

export default AllBooks;
