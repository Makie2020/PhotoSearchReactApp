import { useState,  } from 'react';
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
    console.log(listImages)

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchImages({ term: term }));
    };

    const markAsFav = (id, img) => {
        dispatch(
          addPhoto({
            id: img.id,
            description: img.description,
            width: img.width,
            height: img.height,
            urlFull: img.urls.full,
            urlThumb: img.urls.thumb,
            likes: img.likes,
            date: new Date().toLocaleString(),
            dateToSort: Date.now(),
            tags: img.tags ? img.tags : [],
          })
        );
      };

    return (
        <div>
            <SearchBar handleSubmit={handleSubmit} setTerm={setTerm}/>
            {isLoading ? (<Loader />) : (
            <><ImageList listImages={listImages} markAsFav= {markAsFav} /></>)}
        </div>
    )  
}  
   
export default SearchPage;  