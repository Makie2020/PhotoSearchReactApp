import { configureStore } from '@reduxjs/toolkit';
import { searchReducer, changeSearchTerm,} from './slices/searchSlice';
import { favoritePhotosReducer,  addPhoto, removePhoto, editDescription } from './slices/favoritePhotosSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    favorite: favoritePhotosReducer,
  },
});
window.store= store
export { store, changeSearchTerm, addPhoto, removePhoto, editDescription};
