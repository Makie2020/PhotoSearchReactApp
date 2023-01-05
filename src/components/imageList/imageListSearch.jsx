import './imageList.css'
import ImageShow from "../imageShow/imageShowSearch"

function ImageList({listImages, markedAsFav}) {
    console.log(listImages)
    if(listImages.length === 0)  {
        return (
            <section class="hero is-white is-fullheight">
            <div class="hero-body"></div>
        </section>
        )
    } else {
    const  renderImages = listImages.map((image) => {
        return (           
            <ImageShow key={image.id} image={image} markedAsFav= {markedAsFav}/>
        )})

    return (
        <div className='image-list container pb-6'>{renderImages}</div>
    )
    }
 }
 export default ImageList