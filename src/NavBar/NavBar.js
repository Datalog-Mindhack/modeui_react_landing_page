import React, {useState} from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className='navbar'>
    <div className="navbar-container">
      <div className='navbar-row'>
          <div className="navbar-logo">
            <div className="navbar-logo2">
            <img src="/images/Vector.png" alt="Logo"/>
          </div>
          </div>
          <div className="navbar-menu" onClick={handleClick}>
            <FaBars className="dropdown-icon" />
            {click && <FaTimes className="dropdown-icon" />}
          <ul>
            <div className='navbar-menu-link'>
            <div className="navbar-dropdown">
              <Link className="dropdown-text"><text>Card Access</text></Link>
              <Link className="dropdown-logo">
              <img src="/images/dropdown.png" alt="Dropdown Logo" />
              </Link>
            </div>
            </div>
          </ul>
          <ul>
            <div className='menu-link1'>
            <Link className="banking"><text>Banking</text></Link>
            </div>
          </ul>
          <ul>
            <div className='menu-link2'>
            <Link className="processing"><text>Processing</text></Link>
            </div>
          </ul>
          <ul>
            <div className='menu-link3'>
            <Link className="about"><text>About</text></Link>
            </div>
          </ul>
          <ul>
            <div className='menu-link4'>
            <Link className="carrier"><text>Carrier</text></Link>
            </div>
          </ul>
          <ul>
            <div className='menu-link5'>
            <Link className="contact"><text>Contact</text></Link>
            </div>
          </ul>
          </div>

          <div className='action'>
            <button className='navbar-base-button'>
              <Link className='navbar-login-text'>
              <text>Login</text>
              </Link>
              <Link className='loginlogo'>
              <img src="/images/loginlogo.png" alt="Logo" />
            </Link>
          </button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default NavBar