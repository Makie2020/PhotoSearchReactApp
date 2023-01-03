import './imageList.css'
import ImageShow from "../imageShow/imageShowSearch"

function ImageList({listImages}) {
    console.log(listImages)
    const  renderImages = listImages.map((image) => {
        return (           
            <ImageShow key={image.id} image={image}/>
        )})

    return (
        <div className='image-list container pb-6'>{renderImages}</div>
    )
 }
 export default ImageList