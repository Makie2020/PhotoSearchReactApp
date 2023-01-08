const Paginate = ({ postsPerPage, totalPosts, paginate, previousPage, nextPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
     pageNumbers.push(i);
  }
  
  return (
     <div className="pagination is-centered mb-6" role="navigation" aria-label="pagination">
       <a className = "pagination-previous ml-6" onClick={previousPage}>Previous</a>
       <a className = "pagination-next mr-6" onClick={nextPage}>Next page</a>
        <ul className='pagination-list'>
           {pageNumbers.map((number) => (
              <li
                 key={number}
                 onClick={() => paginate(number)}
                 className="pagination-link"
              >
                 {number}
              </li>
           ))}
        </ul>
       
     </div>
  );
};

export default Paginate;