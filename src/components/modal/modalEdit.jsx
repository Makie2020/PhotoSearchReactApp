import React, { useState} from "react";
import { BsFillPencilFill, BsDownload, BsXLg} from "react-icons/bs";
import './modal.css'
import axios from "axios";
import { saveAs } from 'file-saver'


function Modal ({ modalImg, saveEdit, closeModal})  {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState("");

  const downloadImage = async() => {
    axios.get(`https://api.unsplash.com/photos/${modalImg.id}/download?ixid=MnwxMTc4ODl8MHwxfHNlYXJjaHwxfHxwdXBweXxlbnwwfHx8fDE2MTc3NTA2MTM`, {
      headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
      },
    }).then((response) => {
         if (response) {
          saveAs(response.data.url, `${modalImg.description}.png`)
        }
    })
  }

  return (
    <div >
      <div className="fixed inset-0 bg-gray-300 opacity-80"> 
      </div>
      <div className="modal fixed inset-80 p-10 bg-white" id="modal">
        <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Image information </p>
              <BsXLg className="delete" aria-label="close" onClick={() => {closeModal()}}/>
            </header>
            <section className="modal-card-body has-background-grey-lighter">
              <img src={modalImg.urlFull} alt= {modalImg.alt}/>
              <div className="is-flex">
                <h2 className="has-text-weight-semibold mr-2">Description:</h2>
                  {isEditing ? (
                    <input
                      type="text"
                      placeholder="Enter a new description"
                      onChange={(e) => {setEditedDescription(e.target.value)}}/>
                    ) : modalImg.description === null ? (<p className="is-italic">Untiteled</p>
                    ) : 
                    ( <p className="mr-4">{modalImg.description}</p>)
                    }
                  <BsFillPencilFill className='ml-6 is-danger' onClick={()=>{setIsEditing(!isEditing)}}/>
              </div>
                  <p><span className="is-underlined">Likes:</span> {modalImg.likes}</p>
                  <p><span className="is-underlined">Width:</span> {modalImg.width}</p>    
                  <p><span className="is-underlined">Height:</span> {modalImg.height}</p> 
                  <p><span className="is-underlined">Date added:</span> {modalImg.date}</p>   
                  <p><span className="is-underlined mr-4">Download image:</span><BsDownload className="iconis-medium" id='icon'  onClick={downloadImage}/></p>   
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success" onClick={() => {saveEdit(modalImg.id, editedDescription);closeModal()}}>Save changes</button>
              <button className="button" onClick={() => {closeModal()}}>Cancel</button>
            </footer>
          </div>
      </div>
    </div>
  );
};
export default Modal