import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removePhoto, editDescription } from "../../../store";

// Components
import SearchBar from '../../searchbar/searchbar';
import ImageList from '../../imageList/imageListFav';
import { Dropdown } from "../../dropdown";
import PhotoEdit from "../../imageShow/imageEdit";

function FavoritePage () {
  const { favoriteGallery } = useSelector((state) => state.favorite.favoriteGallery);
  const dispatch = useDispatch();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [term, setTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("Date");
  const [filteredPhoto, setFilteredPhoto] = useState(favoriteGallery);


  useEffect(() => {
    let filteredPhoto;
    if (term.length) {
        filteredPhoto = favoriteGallery.filter(
        (img) =>
          img.description &&
          img.description.toLowerCase().includes(term.toLowerCase())
      );
    } else {
        filteredPhoto = favoriteGallery;
    }})
    setFilteredPhoto(filteredPhoto);

    const orderedImages = [{...favoriteGallery}];
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

  const deleteFavorite = (id) => {
    dispatch(removePhoto(id));
  };

  const openEdit = (id) => {
    setIsEditOpen(true);
  };

  const closeEdit = () => {
    setIsEditOpen(false);
  };

  const saveEdit = (id, editedDescription) => {
    dispatch(editDescription({ id: id, description: editedDescription }));
  };
/*
  const downloadFav = (url, id) => {
    saveAs(url, `${id}.jpeg`);
  };
*/
  return (
    <div
      className=""
      onKeyUp={(e) => {
        if (e.key === "Escape") {
          closeEdit();
        }
      }}
    >
      {isEditOpen ? (
        <PhotoEdit
          saveEdit={saveEdit}
          //downloadFav={downloadFav}
          closeEdit={closeEdit}
        />
      ) : (
        <>
          <div className="">
            <SearchBar term={term} />
            <Dropdown
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </div>
          <ImageList
            openEdit={openEdit}
            deleteFavorite={deleteFavorite}
          />
        </>
      )}
    </div>
  );
};

export default FavoritePage;
