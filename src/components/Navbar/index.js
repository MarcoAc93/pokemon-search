
import React from 'react';
import { Nav } from 'rsuite';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Nav style={{ display: 'flex', justifyContent: 'center' }}>
    <Nav.Item>
      <Link to="/">
        Search Pokemon
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="/favorites">
        Favorites
      </Link>
    </Nav.Item>
  </Nav>
);

export default NavBar;
