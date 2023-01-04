import React from "react";
import { BsSearch } from "react-icons/bs";

function SearchFavPhotos ({ setTerm }) {
  return (
    <form
      id="searchFav">
      <div className="relative">
        <div className="flex absolute inset-y-0 items-center">
            <label><BsSearch className='mr-2'/>Search by description</label>
            <input onChange={(event) => {event.preventDefault(); setTerm(event.target.value);}}></input>
        </div>
      </div>
    </form>
  );
};
export default SearchFavPhotos