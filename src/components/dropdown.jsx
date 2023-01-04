
import React, { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";


function Dropdown  ({ activeFilter, setActiveFilter }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <div>
          <div className="dropdown relative">
            <button
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
              onClick={() => setToggle(!toggle)}
            >
              {`Sorting by ${activeFilter}`}
              <BsCaretDownFill/>
            </button>
            <ul className={`${!toggle ? "hidden" : ""}  dropdown-menu absolute border-none`}>
              <li>
                <button
                   className="dropdown-item text-sm"
                  onClick={() => {
                    setToggle(!toggle);
                    setActiveFilter("Date");
                  }}
                >
                  Date
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item text-sm"
                  onClick={() => {
                    setToggle(!toggle);
                    setActiveFilter("Width");
                  }}
                >
                  Width
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item text-sm"
                  onClick={() => {
                    setToggle(!toggle);
                    setActiveFilter("Height");
                  }}
                >
                  Height
                </button>
                <button
                  className="dropdown-item text-sm"
                  onClick={() => {
                    setToggle(!toggle);
                    setActiveFilter("Likes");
                  }}
                >
                  Likes
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dropdown