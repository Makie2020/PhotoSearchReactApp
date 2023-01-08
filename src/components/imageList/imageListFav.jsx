import React from "react";
import './imageList.css'
import ImageShowfav from "../imageShow/imageShowFavphotos";

function ImageListFav ({ openModal, deleteFavorite, filteredImages }) {
    console.log('ImageListFav', filteredImages)
    const  renderImages = filteredImages.map((image) => {
        return (           
            <ImageShowfav key={image.id} image={image} openModal={openModal} deleteFavorite={deleteFavorite}/>
        )
    })

    return (
        <div className='image-list container pb-6'>{renderImages}</div>
    )
};
export default ImageListFav