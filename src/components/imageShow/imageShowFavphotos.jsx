import { IoMdHeart } from "react-icons/io";
import PhotoEdit from "./imageEdit";

function ImageShowfav({image}) {
    return (
     <div>
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                <img src={image.urls.small} alt= {image.alt_description}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4 is-flex is-justify-content-space-between">{image.user.name} <IoMdHeart className='is-larger has-text-link'/></p>
                        <p className="subtitle is-6">Likes: {image.likes}</p>
                    </div>
                </div>
                <div className="content">
                    {image.alt_description}
                </div>  
             
            </div>
         </div>
     </div>
    )
 }
 export default ImageShowfav