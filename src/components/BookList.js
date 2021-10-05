/* eslint-disable react/jsx-key */
import React from 'react';
import Book from './Book';

const BookList = () => {
  const books = [
    {
      id: 1, name: 'Price of Persia', category: 'sc-fi', author: 'author 1',
    },
    {
      id: 2, name: 'Spider Man', category: 'Comics', author: 'Stan Lee',
    },
  ];

  return (
    <ul>
      {books.map((book) => <Book book={book} />)}
    </ul>
  );
};

export default BookList;
