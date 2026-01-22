// import { useState } from 'react'
import '../styles/Header.scss';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header-container">
      <img src={logo} alt="Kasa logo" className="header-logo" />
      <nav className="nav-button">
        <Link to="/" className="nav-text">
          Accueil
        </Link>
        <Link to="/about" className="nav-text">
          À Propos
        </Link>
      </nav>
    </div>
  );
}
