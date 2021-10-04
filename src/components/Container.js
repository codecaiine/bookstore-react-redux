import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Navbar from './Navbar';
import Categories from './Categories';
import BookList from './BookList';
import BookAdd from './BookAdd';

const Container = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <BookList />
      </Route>
      <Route path="/books">
        <BookList />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Switch>
    <BookAdd />
  </>
);

export default Container;
