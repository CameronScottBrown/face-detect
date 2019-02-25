import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl }) => {
  if (imageUrl) {
    return (
      <div className="face-box">
        <img alt={"face detection results"} src={imageUrl} />
      </div>
    );
  } else {
    return <div />; // return nothing until something is searched
  }
};

export default FaceRecognition;
