import './imageList.css'
import ImageShowfav from "../imageShow/imageShowSearch"

function ImageList({images}) {
    const  renderImages = images.map((image) => {
        return (           
            <ImageShowfav key={image.id} image={image}/>
        )})

    return (
        <div className='image-list container'>{renderImages}</div>

    )
 }
 export default ImageList