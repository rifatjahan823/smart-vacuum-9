import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
          <nav className='d-flex justify-content-center'>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/review">Review</CustomLink>
            <CustomLink to="/dashbord">Dashbord</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
           </nav>
        </div>
    );
};

export default Header;