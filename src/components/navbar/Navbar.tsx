import React from 'react';
import './navbar.scss';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <div className='wrapper'>
        <span>Aditya</span>
        <div className='social'>
          <a href='' title='x'>
            <img src='/facebook.png' alt='' />
          </a>
          <a href='' title='x'>
            <img src='/instagram.png' alt='' />
          </a>
          <a href='' title='x'>
            <img src='/youtube.png' alt='' />
          </a>
          <a href='' title='x'>
            <img src='dribbble.png' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
