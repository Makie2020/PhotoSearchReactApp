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
      if ([...state.favoriteGallery].every((photo) => photo.id !== action.payload.id)) {
        state.favoriteGallery = [...state.favoriteGallery, action.payload];
        setLocalStorage(state.favoriteGallery);
      }
    },
    removePhoto: (state, action) => {
      state.favoriteGallery = state.favoriteGallery.filter(
        (photo) => photo.id !== action.payload
      );
      setLocalStorage(state.favoriteGallery);
    },
    editDescription: (state, action) => {
      state.favoriteGallery = state.favoriteGallery.map((photo) => {
        if (photo.id === action.payload.id) {
          photo.description = action.payload.description;
        }
        return photo;
      });
      setLocalStorage(state.favoriteGallery);
    },
  },
});


export const {addPhoto,removePhoto, editDescription} = favoritePhotoSlice.actions;
export const favoritePhotosReducer = favoritePhotoSlice.reducer;
