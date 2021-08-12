import React from "react";
import { Link } from "react-router-dom";
import '../header/header.css';

const header = () => {
  const useStyles = {
    textDecoration: 'none',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: '1.2rem'
  }
  return (

    <nav className="nav__header">
      <ul className='nav--item'>
        <li><h1 className="inName">VIETMAP</h1></li>
        <li><Link to="/demomapsapi" className="hoverclass" style={useStyles}>Demo Maps API</Link></li>
        <li><Link to="/hotline" className="hoverclass" style={useStyles}>Hotline</Link></li>
      </ul>
    </nav>
  )
}

export default header;
