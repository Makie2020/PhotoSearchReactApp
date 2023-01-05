import React, { useState } from "react";

function Dropdown ({ activeFilter, setActiveFilter }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="dropdown is-hoverable">
        <div className="dropdown-trigger" >
          <button className="button" onClick={() => setToggle(!toggle)} aria-controls="dropdown-menu">
            {`Sorting by ${activeFilter}`} 
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a href="#" onClick={() => {setToggle(!toggle); setActiveFilter("Date");}} className="dropdown-item">Date</a>
            <a href="#" onClick={() => {setToggle(!toggle); setActiveFilter("Height");}} className="dropdown-item">Height</a>
            <a href="#" onClick={() => {setToggle(!toggle); setActiveFilter("Width");}} className="dropdown-item">Width</a>
            <a href="#" onClick={() => {setToggle(!toggle); setActiveFilter("Likes");}} className="dropdown-item">Likes</a>
          </div>
        </div>
      </div>
    </div>

  );
};
export default Dropdown