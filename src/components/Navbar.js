import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 2,
      path: '/books',
      text: 'Books',
    },
    {
      id: 3,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} exact>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
