import React from "react";

import "./css/App.css";

import Photo from "./Photo.js";

function Item({index, data, onToggle, ShowSwiper}) {
  return (
    <div className="content-wrapper" >
      <div onClick={() => onToggle(data.index)} className="content-wrapper__title">{data.title}</div>
      <div
        className={
          data.description !== "" ? "content-wrapper__description" : ""
        }
      >
        {data.description}
      </div>
      <div className="content-wrapper__photoset">
        {data.click
          ? data.photo.map((photo, i) => {
              return <Photo ShowSwiper={ShowSwiper} photo={photo} photo_number={i} index={index} key={i + 1} />;
            })
          : ""}
      </div>
    </div>
  );
}

export default Item;
