import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export default function Navbar(): React.ReactElement {
  return (
    <div className="Navbar">
      <Link to="/" className="Navbar-leftNavItem --left">
        - Ming Lin -
      </Link>

      <div>
        <Link to="resume" className="Navbar-navItem">
          Resume
        </Link>
        <Link to="about" className="Navbar-navItem">
          My Story
        </Link>
      </div>
    </div>
  );
}
