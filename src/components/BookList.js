import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, removeBook } from '../redux/books/Books';
import Book from './Book';
import BookAdd from './BookAdd';

const BookList = () => {
  const myBooks = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  const addNew = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
  };

  const deleteOneBook = (id) => dispatch(removeBook(id));

  if (myBooks.length) {
    return (
      <div>
        <Book books={myBooks} propsToRemoveBooks={deleteOneBook} />
        <BookAdd propsToAddBooks={addNew} />
      </div>
    );
  }
  return (
    <div>
      <h3>Not Book Added Yet !</h3>
      <h3>Add your books and author ...</h3>
      <BookAdd propsToAddBooks={addNew} />
    </div>
  );
};

export default BookList;
