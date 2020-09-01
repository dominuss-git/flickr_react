import React from "react";

import "./css/App.css";

function Modal({ current_photo, current_item, CloseSwiper, Swipe, photos_array }) {
console.log(current_item);

  return (
    <div>
      <div className="my-gallery-update"></div>
      {current_item !== 0 ? (
        <div className="modal-active">
          <div className="modal-active__body">
            <div onClick={() => CloseSwiper()} className="modal__close">
              <img src="./image/close.png" />
            </div>
            <div onClick={() => Swipe(photos_array[current_item-1].photo.length, current_photo, -1)} className="modal__prev">
              <img src="./image/prev.png" />
            </div>
            <div onClick={() => Swipe(photos_array[current_item-1].photo.length, current_photo, +1)} className="modal__next">
              <img src="./image/next.png" />
            </div>
            <div className="modal__img">
              <img src={`https://farm${photos_array[current_item-1].photo[current_photo].farm}.staticflickr.com/${photos_array[current_item-1].photo[current_photo].server}/${photos_array[current_item-1].photo[current_photo].id}_${photos_array[current_item-1].photo[current_photo].secret}.jpg`} className="modal__image" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Modal;
