import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchImages,selectImages } from '../../../store/slices/searchSlice';
import { addPhoto } from '../../../store/slices/favoritePhotosSlice';
import SearchBar from '../../searchbar/searchbar';
import ImageList from '../../imageList/imageListSearch';
import Loader from '../../loader';
   
function SearchPage (){  
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [term, setTerm] = useState("");
    const listImages = useSelector(selectImages);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchImages({ term: term }));
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
            likes: image.likes,
            date: new Date().toLocaleString(),
            dateToSort: Date.now(),
            tags: image.tags ? image.tags : [],
          })
        );
      };

    return (
        <div>
            <SearchBar handleSubmit={handleSubmit} setTerm={setTerm}/>
            {isLoading ? (<Loader />) : (
            <><ImageList listImages={listImages} markedAsFav= {markedAsFav}/></>)}
        </div>
    )  
}  
   
export default SearchPage;  