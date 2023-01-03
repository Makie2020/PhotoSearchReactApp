import React, { useState } from "react";

export const Modal = ({ modalImg, saveEdit, downloadFav,closeModal}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState("");

  return (
    <div
      className="relative modal fade"
      id="Modal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog relative ">
        <div className="modal-content">
          <div className="modal-header flex flex-shrink-0">
            <h5 id="exampleModalLabel">Image information</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                closeModal();
              }}
            >
            </svg>
          </div>
          <div> 
            <div>
              <h2>Description:</h2>
              {isEditing ? (
                <input
                  type="text"
                  placeholder="Enter a new description..."
                  onChange={(e) => {
                    setEditedDescription(e.target.value);
                  }}
                />
              ) : modalImg.description === null ? (
                <p >
                  No description was added for this Image...
                </p>
              ) : (
                <p >{modalImg.description}</p>
              )}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setIsEditing(!isEditing);
                }}>
               </svg>
            </div>
            <div >
              <h2>Width:</h2>
              <p>{modalImg.width}</p>
            </div>
            <div>
              <h2>Height:</h2>
              <p>{modalImg.height}</p>
            </div>
               <div >
              <h2>Likes:</h2>
              <p> {modalImg.likes}</p>
            </div>
            <div >
              <h2>Marked as Fav on:</h2>
              <p>{modalImg.date}</p>
            </div>
          </div>
          <div >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                downloadFav(modalImg.urlFull, modalImg.id);
              }}
            />
   
            <button
              type="button"
              onClick={() => {
                saveEdit(modalImg.id, editedDescription);
                closeModal();
              }}
                 >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
