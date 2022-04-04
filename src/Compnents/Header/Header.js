import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
         <div className='container'>
           <div className='d-flex align-items-center justify-content-between'>
         <div className='logo pt-3'>
            <h1 className='text-uppercase text-white'>smart Vacuum</h1>
          </div>
          <nav className='d-flex justify-content-center'>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/review">Review</CustomLink>
            <CustomLink to="/dashbord">Dashbord</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
           </nav>
         </div>
        </div>
        </div>
    );
};

export default Header;