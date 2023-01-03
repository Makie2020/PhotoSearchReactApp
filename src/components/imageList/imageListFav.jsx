import React, { useEffect, useState } from "react";
import './imageList.css'
import Loader from "../loader";
import ImageShowfav from "../imageShow/imageShowSearch"
/*
function ImageListFav({images}) {
    const  renderImages = images.map((image) => {
        return (           
            <ImageShowfav key={image.id} image={image}/>
        )})

    return (
        <div className='image-list container'>{renderImages}</div>

    )
 }
 export default ImageListFav
*/

export const ImageListFav = ({ openModal, deleteFavorite, filteredImages }) => {
  const [icons, setIcons] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIcons(true);
    }, 1500);
  }, []);
  return (
    <div>
      {filteredImages ? (
        filteredImages.map((image) => {
          return (
            <ImageShowfav key={image.id} image={image}>
              {icons ? (<><svg
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      openModal(image);
                    }}></svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      deleteFavorite(image.id);
                    }}></svg>
                </>
              ) : null}
            </ImageShowfav> 
            ) 
        })
      ): (<Loader /> )}
    </div>
  );
};
