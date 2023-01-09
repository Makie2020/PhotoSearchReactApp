import './imageList.css'
import ImageShow from "../imageShow/imageShowSearch"

function ImageList({listImages, markedAsFav}) {
    if (listImages.length === 0)  {
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
        const renderImages = listImages.map((image) => {
        return (           
            <ImageShow key={image.id} image={image} markedAsFav= {markedAsFav}/>
        )})

    return (
        <div className='image-list container pb-6 mb-6 background'>{renderImages}</div>
    )
    }
 }
 export default ImageList