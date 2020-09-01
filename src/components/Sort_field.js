import React from 'react';

import "./css/App.css"

function SortField({sort_by_name, sort_by_input}) {
  return (
    <div className="sort-field">
      Sort by
      <div className="sort-field__val" onClick={() => sort_by_name()}>name</div>
      <input className="sort-field__val" onChange={(e) => sort_by_input(e.target.value)} type="text" placeholder="value" />
    </div>
  )
}

export default SortField