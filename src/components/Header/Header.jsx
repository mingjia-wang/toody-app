import React from 'react';
import toody from '../../images/toody.svg';
// import { Link } from 'react-router-dom';
// ^^ this is the Toody logo; uncomment he above line to use it
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src={toody} className="todoy"></img>
      <div className="todoy-text">Todoy</div>
      <a href="/profile" className="my-profile">My Profile</a>
    </div>
  );
};

export default Header;
