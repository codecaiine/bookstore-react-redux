import React from 'react';
import Proptypes from 'prop-types';

const Details = ({ category, title }) => (
  <section className="book-info">
    <p className="category">{category}</p>
    <h3 className="title">{title}</h3>
    <p className="author">Anonymous</p>
  </section>
);

Details.propTypes = {
  category: Proptypes.string,
  title: Proptypes.string,
};

Details.defaultProps = {
  category: '',
  title: '',
};

export default Details;
