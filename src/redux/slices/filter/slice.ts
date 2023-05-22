/** @format */

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterSliceState } from './type';

export const initialState: FilterSliceState = {
  categoryId: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const { setCategoryId, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
