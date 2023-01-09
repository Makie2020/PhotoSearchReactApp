import './imageList.css'
import { useState } from 'react';
import ImageShow from "../imageShow/imageShowSearch"
import Paginate from '../Pagination/pagination';

function ImageList({listImages, markedAsFav}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = listImages.slice(indexOfFirstPost, indexOfLastPost);
      const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
     };
   
     const previousPage = () => {
       if (currentPage !== 1) {
          setCurrentPage(currentPage - 1);
       }
    };
  
    const nextPage = () => {
       if (currentPage !== Math.ceil(listImages.length / postsPerPage)) {
          setCurrentPage(currentPage + 1);
       }
    };
    if (currentPosts.length === 0)  {
        return (
            <div>
                <div className='is-flex is-justify-content-center is-align-content-center'>
                <div className="card card-search">
                    <div className="card-image searchPage">
                    </div>
                </div>
                </div>
            </div>
        )
    } else {
        const renderImages = currentPosts.map((image) => {
        return (           
            <ImageShow key={image.id} image={image} markedAsFav= {markedAsFav}/>
        )})

    return (
        <div>
            <div className='image-list container pb-6 mb-6'>{renderImages}</div>
            <Paginate
            postsPerPage={postsPerPage}
            totalPosts={listImages.length}
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
            />
        </div>
     
    )
    }
 }
 export default ImageList