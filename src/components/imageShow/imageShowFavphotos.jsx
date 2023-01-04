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
                  
                        <p className="title is-4">{image.user}</p>
                        <p className="subtitle is-8">  {image.description ? `${image.description} `: 'Untitled'}</p>
                        <p>Date added: {image.date}</p>
                    </div>
                </div>
                <div className="content">
                    {image.alt}
                </div>  
             
            </div>
         </div>
     </div>
    )
 }
 export default ImageShowfav