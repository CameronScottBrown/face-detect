import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div className='form'>
      <p className='form__intro'>
        {'This brain can detect faces in your images. Give it a try!'}
      </p>
      <div className='form__wrapper'>
        <input className='form__input' type='text' />
        <button className='form__submit-btn'>Detect</button>
      </div>
    </div>
  );
}

export default ImageLinkForm;