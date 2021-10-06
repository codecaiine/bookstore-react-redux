import React from 'react';
import Proptypes from 'prop-types';

const BookDetails = ({ category, title }) => (
  <section className="book-info">
    <p className="category">{category}</p>
    <h3 className="title">{title}</h3>
    <p className="author">Anonymous</p>
  </section>
);

BookDetails.propTypes = {
  category: Proptypes.string,
  title: Proptypes.string,
};

BookDetails.defaultProps = {
  category: '',
  title: '',
};

export default BookDetails;