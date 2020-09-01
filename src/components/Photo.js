import React from "react";

import "./css/App.css";

function Photo({ photo }) {
  // console.log(index);
  return (
    <div className="photo-wrapper">
      <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} className="photo-wrapper__photo" />
    </div>
  );
}

export default Photo;