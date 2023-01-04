import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePhoto, editDescription} from "../../../store";
import Dropdown from "../../dropdown";
import  Modal from "../../modal/modalEdit";
import ImageListFav from "../../imageList/imageListFav";
import SearchFavPhotos from "../../searchFavPhotos";
import { saveAs } from "file-saver";

function FavoritePage () {
  const { favoriteGallery } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [term, setTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("Date");
  const [filteredImages, setFilteredPhoto] = useState(favoriteGallery);

 useEffect(() => {
    let filteredImages;
    if (term.length) {
      filteredImages = favoriteGallery.filter(
        (image) =>
          image.description &&
          image.description.toLowerCase().includes(term.toLowerCase())
      );
    } else {
      filteredImages = favoriteGallery;
    }
    setFilteredPhoto(filteredImages)
    

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
  }, [term, activeFilter, favoriteGallery]);

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

  const downloadFav = (url, id) => {
    saveAs(url, `${id}.jpeg`);
  };
  return (
    <div
      className=""
      onKeyUp={(e) => {
        if (e.key === "Escape") {
          closeModal();
        }
      }}
    > 
    {isModalOpen ? (
      <Modal
        modalImg={modalImg}
        saveEdit={saveEdit}
        downloadFav={downloadFav}
        closeModal={closeModal}
      /> ) : ( <>
          <div className="">
            <SearchFavPhotos setTerm={setTerm} />
            <Dropdown
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </div>
          <ImageListFav
            openModal={openModal}
            deleteFavorite={deleteFavorite}
            filteredImages={filteredImages}
          />
        </>
      )}
    </div>
  );
};

export default FavoritePage;
