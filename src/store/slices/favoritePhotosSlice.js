// Redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteGallery: JSON.parse(localStorage.getItem("favoritePhotos")) || [],
};

const setLocalStorage = (images) => {
  localStorage.setItem("favoritePhotos", JSON.stringify(images));
};

export const favoritePhotoSlice = createSlice({
  name: "favoritePhotos",
  initialState: initialState,
  reducers: {
    addPhoto: (state, action) => {
      if ([...state.favoriteGallery].every((obj) => obj.id !== action.payload.id)) {
        state.favoriteGallery = [...state.favoriteGallery, action.payload];
        setLocalStorage(state.favoriteGallery);
      }
    },
    removePhoto: (state, action) => {
      state.favoriteGallery = state.favoriteGallery.filter(
        (obj) => obj.id !== action.payload
      );
      setLocalStorage(state.favoriteGallery);
    },

    editDescription: (state, action) => {
      state.favoriteGallery = state.favoriteGallery.map((obj) => {
        if (obj.id === action.payload.id) {
          obj.description = action.payload.description;
        }
        return obj;
      });
      setLocalStorage(state.favoriteGallery);
    },
  },
});


export const {addPhoto,removePhoto, editDescription} = favoritePhotoSlice.actions;
export const favoritePhotosReducer = favoritePhotoSlice.reducer;
