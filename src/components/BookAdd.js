import React from 'react';

const BookAdd = () => (
  <section>
    <h2>Add New Book</h2>

    <form className="form">
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Book Author" />
      <button type="submit">Add Book</button>
    </form>
  </section>
);

export default BookAdd;
