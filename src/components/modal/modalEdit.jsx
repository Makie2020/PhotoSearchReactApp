import React, { useState } from "react";
import { BsFillPencilFill, BsDownload, BsXLg } from "react-icons/bs";
import './modal.css'

function Modal ({ modalImg, saveEdit, downloadFav,closeModal})  {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState("");

  return (
    <div className="modal" id="modal">
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Image information </p>
          <BsXLg className="delete" aria-label="close" onClick={() => {closeModal()}}/>
        </header>
        <section className="modal-card-body has-background-grey-lighter">
          <img src={modalImg.urlThumb} alt= {modalImg.alt}/>
          <div className="is-flex">
            <h2 className="has-text-weight-semibold mr-2">Description:</h2>
               {isEditing ? (
                <input
                  type="text"
                  placeholder="Enter a new description"
                  onChange={(e) => {setEditedDescription(e.target.value)}}/>
                ) : modalImg.description === null ? (<p className="is-italic">Untiteled</p>
                ) : ( <p className="mr-2">{modalImg.description}</p>)}
              <BsFillPencilFill classname='ml-2 is-danger'onClick={() => {setIsEditing(!isEditing)}}/> 
          </div>
              <p><span className="is-underlined">Likes:</span> {modalImg.likes}</p>
              <p><span className="is-underlined">Width:</span> {modalImg.width}</p>    
              <p><span className="is-underlined">Height:</span> {modalImg.height}</p> 
              <p><span className="is-underlined">Date added:</span> {modalImg.date}</p>   
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={() => {saveEdit(modalImg.id, editedDescription);closeModal()}}>Save changes</button>
          <button className="button" onClick={() => {closeModal()}}>Cancel</button>
        </footer>
      </div>
    </div>
  );
};
export default Modal