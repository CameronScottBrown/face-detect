import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl }) => {

  if (imageUrl){
    return (
      <div className='face-box'>
        <img alt='face detection result' src={imageUrl}/>
      </div>
    );
  } else {
    return (
      <div></div>
    )
  }
  
};

export default FaceRecognition;
