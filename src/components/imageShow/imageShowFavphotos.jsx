import { BsFillTrashFill, BsPencil } from "react-icons/bs";
import './imageShow.css'

function ImageShowfav({image, openModal, deleteFavorite}) {
   return (
     <div>
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={image.urlThumb} alt= {image.alt}/>
                    <div className="is-flex is-justify-content-space-between">
                        <BsPencil onClick={() => {openModal(image)}} className= "icon is-small ml-2 mb-3"/>
                        <BsFillTrashFill onClick={() => {deleteFavorite(image.id)}} className= "icon is-small mr-2 mb-3"/>
                    </div>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">       
                        <p className="title is-8">  {image.description ? `${image.description} `: <span className="is-italic">Untitled</span>} </p>       
                        <p><span className="is-underlined">Likes:</span> {image.likes}</p>
                        <p><span className= "is-underlined">Date added: </span> {image.date}</p>
                    </div>
                </div>           
            </div>
         </div>
     </div>
    )
 }
 export default ImageShowfav