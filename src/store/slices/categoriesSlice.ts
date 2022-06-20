import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../store';

const initialState = ['sport', 'news', 'movies'];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {}
});

export const selectAllCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;

