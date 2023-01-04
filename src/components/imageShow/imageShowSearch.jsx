import { IoMdHeart } from "react-icons/io";

function ImageShow({image, markedAsFav}) {
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
                        <div className="is-flex is-flex-direction-row is-justify-content-space-between">
                            <p className="title is-4">{image.user.name}</p>
                            <IoMdHeart                 
                                id={image.id}
                                onClick={() => {markedAsFav(image.id, image)}}
                                className='is-larger has-text-link is-size-3'
                            />    
                        </div>
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
 export default ImageShow