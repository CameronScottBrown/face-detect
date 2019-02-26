import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  if (imageUrl) {
    return (
      <div className="center ma">
        <div className="face-box">
          <img
            id={"input-image"}
            alt={"face detection results"}
            src={imageUrl}
            width="400px"
            height="auto"
          />
          <div
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              left: box.leftCol,
              bottom: box.bottomRow
            }}
          />
        </div>
      </div>
    );
  } else {
    return <div />; // return nothing until something is searched
  }
};

export default FaceRecognition;
