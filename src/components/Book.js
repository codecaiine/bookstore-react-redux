import React from 'react';
import PropTypes from 'prop-types';
import Details from './Details';
import Actions from './Actions';
import Progress from './Progress';
import Chapter from './Chapter';

const Book = ({
  id,
  category,
  title,
}) => (
  <section className="all-books">
    <div className="description">
      <Details category={category} title={title} />
      <Actions id={id} />
    </div>
    <div className="progress-chapter">
      <div>
        <Progress />
      </div>
      <span className="vertical-line" />
      <div>
        <Chapter />
      </div>
    </div>
  </section>
);


Book.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
};

Book.defaultProps = {
  id: '',
  category: '',
  title: '',
};

export default Book;
