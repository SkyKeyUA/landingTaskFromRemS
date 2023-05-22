/** @format */

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchFeaturedHouse } from './asyncActions';
import { FeaturedHouse, FeaturedHouseState, Status } from './type';

const initialState: FeaturedHouseState = {
  items: [],
  status: Status.LOADING,
};

export const featuredHouseSlice = createSlice({
  name: 'featuredHouse',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<FeaturedHouse[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFeaturedHouse.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
      console.log('Data is being sent');
    });
    builder.addCase(fetchFeaturedHouse.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
      console.log(state, 'All Good');
    });
    builder.addCase(fetchFeaturedHouse.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
      console.log('Was Error');
    });
  },
});

export const { setItems } = featuredHouseSlice.actions;

export default featuredHouseSlice.reducer;
