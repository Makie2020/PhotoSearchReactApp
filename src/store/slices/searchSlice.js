import { createSlice} from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchImages = createAsyncThunk(
  "photos/fetchImages",
  async({term}) => {
  console.log(term)
  if(term && term !== '') {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
          Authorization: 'Client-ID RqpP5oOAufjHctJL0qhCH_y48HusCCNjg6Tb1-2V75E',
      },
      params: {
          query: term,
          per_page: 12,
      },
  });
  return response.data.results;
  } else {
      const response = await axios.get('https://api.unsplash.com/photos/random/', {
          headers: {
              Authorization: 'Client-ID RqpP5oOAufjHctJL0qhCH_y48HusCCNjg6Tb1-2V75E',
          },
          params: {
              query: term,
              count: 12,
          },
      });
      return response.data;
  }
})

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    }, 
  },
  extraReducers(builder) {
    builder.addCase(fetchImages.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchImages.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  }
});

export const { changeSearchTerm} = searchSlice.actions;
export const selectImages = (state) => state.search.data;
export const searchReducer = searchSlice.reducer;
