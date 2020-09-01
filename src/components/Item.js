import React from "react";

import "./css/App.css";

import Photo from "./Photo.js";

function Item({i, data, onToggle, onClick }) {
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
          ? data.photo.map((photo, index) => {
              return <Photo onToggle={onClick} photo={photo} index={i} key={index + 1} />;
            })
          : ""}
      </div>
    </div>
  );
}

export default Item;
