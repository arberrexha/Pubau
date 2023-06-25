import React from 'react';
import './Header.css';

const Header = ({ step }) => {
  return (
    <header className="header">
      <h3 className="header-title">Choose Service</h3>
      <h1 className="header-step">Step {step}/2</h1>
    </header>
  );
};

export default Header;
