import React from 'react';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='logo'>
      <img src={brain} alt='logo'></img>
    </div>
  );
}

export default Logo;