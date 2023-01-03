// React
import React, { useState } from "react";

// Dropdown menu who sends the active filter to MyFavs.js
export const Dropdown = ({ activeFilter, setActiveFilter }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="flex justify-center my-3 md:my-12 mx-auto">
        <div>
          <div className="dropdown relative">
            <button
              className="
          dropdown-toggle
          px-6
          py-5
          bg-mainColor
          text-gray-100
          font-medium
          text-xs
          leading-tight
          rounded-lg
          shadow-md
          hover:bg-lightViolet hover:shadow-lg
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={() => setToggle(!toggle)}
            >
              {`Sorting by ${activeFilter}`}
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                className="w-2 ml-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </button>
            <ul
              className={`${!toggle ? "hidden" : ""}  dropdown-menu
          min-w-max
          absolute
          bg-gray-700
          w-full
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
          border-none`}
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <button
                  className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-100
              hover:bg-gray-500
            "
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
                  className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-100
              hover:bg-gray-500
            "
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
                  className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-100
              hover:bg-gray-500
            "
                  onClick={() => {
                    setToggle(!toggle);
                    setActiveFilter("Height");
                  }}
                >
                  Height
                </button>
                <button
                  className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-100
              hover:bg-gray-500
            "
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
