import React from "react";
import "./header.styles.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <h3 className="logo">Logo</h3>
        <ul className="navlinks">
          <Link to="/" className="link">
            <li>Home</li>
          </Link>
          <Link to="/about" className="link">
            <li>About</li>
          </Link>
          <Link to="/flashcards" className="link">
            <li>Flash Cards</li>
          </Link>
          <Link to="/contact" className="link">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
