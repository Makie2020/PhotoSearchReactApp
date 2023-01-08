import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePhoto, editDescription} from "../../../store";
import Dropdown from "../../dropdown";
import  Modal from "../../modal/modalEdit";
import ImageListFav from "../../imageList/imageListFav";
import { BsSearch } from "react-icons/bs";

function FavoritePage () {
  const { favoriteGallery } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Date");
  let [filteredImages, setFilteredPhoto] = useState(favoriteGallery);

  useEffect(() => {
    const orderedImages = [...favoriteGallery];
    switch (activeFilter) {
      case "Date":
        orderedImages.sort((a, b) => b.dateToSort - a.dateToSort);
        break;
      case "Width":
        orderedImages.sort((a, b) => b.width - a.width);
        break;
      case "Height":
        orderedImages.sort((a, b) => b.height - a.height);
        break;
      case "Likes":
        orderedImages.sort((a, b) => b.likes - a.likes);
        break;
      default:
        break;
    }
    setFilteredPhoto(orderedImages);
  }, [activeFilter, favoriteGallery]);

  const deleteFavorite = (id) => {
    dispatch(removePhoto(id));
  };

  const openModal = (image) => {
    setIsModalOpen(true);
    setModalImg(image);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveEdit = (id, editedDescription) => {
    dispatch(editDescription({ id: id, description: editedDescription }));
  };
  
  const searchItems = (term) => {
    if (term !== '') {
      filteredImages = favoriteGallery.filter(favoriteImage => favoriteImage.description?.toLowerCase().includes(term.toLowerCase()));
      setFilteredPhoto(filteredImages)
    } else {
      setFilteredPhoto(favoriteGallery)
    }
  }

  return (
    <div
      onKeyUp={(e) => {
        if (e.key === "Escape") {
          closeModal();
        }
      }}
    > 
    {isModalOpen
    ? (
        <div onClick={() => {closeModal()}}>
        <section className="hero is-white is-fullheight ">
          <div className="hero-body" >
          </div>
        </section>
        <Modal
          modalImg={modalImg}
          saveEdit={saveEdit}
          closeModal={closeModal}
          /> 
        </div>
        )
      : ( <>
          <section className="hero ml-6 pl-6" >
            <div className="hero-body">
              <p className="title">
              Your favorite photos gallery
              </p>
              <p className="subtitle">
                On this page you have the option to search by description, filter by date added, height, width and likes. 
                In addition, you can edit the title description and also download the photo. 
              </p>
            </div>
          </section>
          <div className=" is-flex is-justify-content-space-evenly mt-4 mb-4">
            <div>
              <div className="field">
                <p className="control has-icons-left">
                  <input 
                    className="input bulma-placeholder-mixin" 
                    type="text" 
                    style= {{color: 'hsl(0deg, 0%, 86%)', width: '350px', border: '2px solid'}} 
                    placeholder="Search by description"
                    onChange={(e) => searchItems(e.target.value)}
                    >
                    </input>
                    <span className="icon is-small is-left">
                      <BsSearch/>
                    </span>
                </p>
              </div>
            </div>
            <Dropdown
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </div>
          <div>
              <ImageListFav
                openModal={openModal}
                deleteFavorite={deleteFavorite}
                filteredImages={filteredImages}
                className= 'mx-6'
              /> 
          </div>  
        </>
      )}
    </div>
  );
};

export default FavoritePage;
