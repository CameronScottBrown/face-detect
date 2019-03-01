import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div>
      <p className="form__intro">
        {"This brain can detect faces in your images. Give it a try!"}
      </p>
      <div className="form__wrapper center">
        <input
          className="form__input center"
          type="text"
          onChange={onInputChange}
        />
        <button className="form__submit-btn btn" onClick={onPictureSubmit}>
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
