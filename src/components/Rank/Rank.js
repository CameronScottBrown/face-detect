import React from 'react';
import './Rank.css';

const Rank = () => {
  return (
    <div className='rank'>
      <div className='rank__text'>
        {'Cam, your current rank is ...'}
      </div>
      <div className='rank__number'>
        {'# 4'}
      </div>
    </div>
  );
}

export default Rank;