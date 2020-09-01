import React from "react";

import "./css/App.css";

function Photo({ photo, ShowSwiper, index, photo_number }) {
  // console.log(index);
  return (
    <div onClick={() => ShowSwiper(index, photo_number)} className="photo-wrapper">
      <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} className="photo-wrapper__photo" />
    </div>
  );
}

export default Photo;