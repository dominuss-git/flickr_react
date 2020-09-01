import React from "react";

import "./css/App.css";

function Modal() {
  return (
    <div>
      <div className="my-gallery-update"></div>
      <div className="modal">
        <div className="modal__body">
          <div className="modal__close">
            <img src="./src/image/close.png" />
          </div>
          <div className="modal__prev">
            <img src="./src/image/prev.png" />
          </div>
          <div className="modal__next">
            <img src="./src/image/next.png" />
          </div>
          <div className="modal__img"></div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
