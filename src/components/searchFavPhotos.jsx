import React from "react";
import { BsSearch } from "react-icons/bs";

function SearchFavPhotos ({ setTerm}) {
  return (
    <div className="field">
      <p className="control has-icons-left">
        <input 
          className="input bulma-placeholder-mixin" 
          type="text" 
          style= {{color: 'hsl(0deg, 0%, 86%)', width: '350px', border: '2px solid'}} 
          placeholder="Search by description"
          onChange={(event) => {event.preventDefault(); setTerm(event.target.value);}}
          >
          </input>
          <span className="icon is-small is-left">
            <BsSearch/>
          </span>
      </p>
    </div>

  )
};

export default SearchFavPhotos