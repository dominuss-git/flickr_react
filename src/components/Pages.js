import React from "react";

import "./css/App.css";

function Pages({ count, onToggle, last_page }) {
  let pages = count / 10;

  const getPagesFromCount = (pages) => {
    let content = [];
    for (let i = 0; i < pages; i += 1) {
      content.push(       
        <div
          key={i}
          onClick={() => onToggle(i + 1)}
          className={last_page === i+1 ? "pages-wrapper__page_active pages-wrapper__page" : "pages-wrapper__page"}
        >
          {i + 1}
        </div>
      );
    }
    return content;
  };

  return <div className="pages-wrapper">{getPagesFromCount(pages)}</div>;
}

export default Pages;
