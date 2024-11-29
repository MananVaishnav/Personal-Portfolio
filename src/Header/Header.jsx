import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-class'>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><h3>Home</h3></Link>
        <a href="mailto:vaishnav.manan22@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3>Contact</h3>
        </a>
        {/* <h3>Services</h3> */}
        <h3><Link to={"/blog"} style={{ textDecoration: 'none', color: 'inherit' }}>Blog</Link></h3>
    </div>
  )
}

export default Header