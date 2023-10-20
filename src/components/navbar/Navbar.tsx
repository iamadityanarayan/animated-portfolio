import React from 'react';
import './navbar.scss';
import { motion } from 'framer-motion';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          Aditya
        </motion.span>
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
