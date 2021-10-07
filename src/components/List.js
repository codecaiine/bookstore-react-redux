import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';

const List = ({ books }) => (
  <section className="book-section">
    <ul className="book-list">
      {books.map((book) => {
        const {
          id,
          category,
          title,
        } = book;
        return (
          <li key={uuidv4()} className="list">
            <div>
              <Book
                id={id}
                category={category}
                title={title}
              />
            </div>
          </li>
        );
      })}
    </ul>
  </section>
);

List.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default List;