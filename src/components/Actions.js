import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/Books';

const Actions = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <div className="action">
      <button type="button">Comments</button>
      <button type="button" onClick={() => dispatch(deleteBook(id))}>Remove</button>
      <button type="button">Edit</button>
    </div>
  );
};

Actions.propTypes = {
  id: PropTypes.string,
};

Actions.defaultProps = {
  id: '',
};

export default Actions;
