import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchImages,selectImages } from '../../../store/slices/searchSlice';
import { addPhoto } from '../../../store/slices/favoritePhotosSlice';
import SearchBar from '../../searchbar/searchbar';
import ImageList from '../../imageList/imageListSearch';
import Loader from '../../loader';
import Paginate from '../../Pagination/pagination';
import { nanoid } from 'nanoid';
   
function SearchPage (){  
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [term, setTerm] = useState("");
    const listImages = useSelector(selectImages);

  //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = listImages.slice(indexOfFirstPost, indexOfLastPost);
    console.log(currentPosts)

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchImages({ term: term }));
        event.target.reset();
    };
    const markedAsFav = (id, image) => {
         dispatch(
          addPhoto({
            id: image.id,
            description: image.description,
            alt: image.alt_description,
            width: image.width,
            height: image.height,
            urlFull: image.urls.full,
            urlThumb: image.urls.thumb,
            download: image.links.download_location,
            likes: image.likes,
            date: new Date().toLocaleString(),
            dateToSort: Date.now(),
            tags: image.tags ? image.tags : [],
          })
        );
      };

   
    
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

    return (
        <div>
            <SearchBar handleSubmit={handleSubmit} setTerm={setTerm}/>
            {
              isLoading
                ? (<Loader />)
                : (
                    <>
                  <ImageList key={nanoid()} listImages={currentPosts} markedAsFav={markedAsFav}/>   
                  <Paginate
                  postsPerPage={postsPerPage}
                  totalPosts={listImages.length}
                  paginate={paginate}
                  previousPage={previousPage}
                  nextPage={nextPage}
               />
              </>)
            }
        </div>
    )  
}  

export default SearchPage;  