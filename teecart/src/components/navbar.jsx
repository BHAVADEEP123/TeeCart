import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../stylings/navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <>
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="logo">Tee-Cart</div>
      </div>
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </div>
      <div className="navbar-links">
      <div className={`navbar-items ${isMenuOpen ? 'open' : ''}`}>
        <a href="/" className="navbar-link">Home</a>
        <a href="#about" className="navbar-link">About</a>
        <a href="#contact" className="navbar-link">Contact</a> 
      </div>
      
      <div className={`navbar-items ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-icons">
          <FontAwesomeIcon icon={faSearch} className='navbar-icon'/>
          <FontAwesomeIcon icon={faShoppingCart} className="navbar-icon" />
          <FontAwesomeIcon icon={faUser} className="navbar-icon" onClick={(e)=>{e.preventDefault();navigate('/profile')}} />
        </div>
      </div>
      </div>
      
    </nav>
    <hr />
    </>
    
  )
}

export default Navbar