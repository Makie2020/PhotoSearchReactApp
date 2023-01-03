import './searchbar.css'
import { BsSearch } from "react-icons/bs";

function SearchBar({ handleSubmit, setTerm}) {
/*
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
*/
  return (
      <div className='search-bar'>
        <form onSubmit={handleSubmit}>
          <label><BsSearch className='mr-2'/>Find the perfect photo</label>
          <input onChange={(event) => setTerm(event.target.value)}/>
        </form>
      </div>
  );
}

export default SearchBar;